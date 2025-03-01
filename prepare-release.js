'use strict';

const core = require('@actions/core');
const exec = require('@actions/exec');
const fs = require('fs');
const getInputs = require('./utils/get-inputs');
const getStdOut = require('./utils/get-stdout');
const github = require('@actions/github');
const hasDependencies = require('./utils/has-dependencies');
const isLandoPlugin = require('./utils/is-lando-plugin');
const jsonfile = require('jsonfile');
const os = require('os');
const path = require('path');
const parseReleaseDate = require('./utils/parse-release-date');
const parseTokens = require('./utils/parse-tokens');
const semverClean = require('semver/functions/clean');
const semverValid = require('semver/functions/valid');
const set = require('lodash.set');

const main = async () => {
  // start by getting the inputs
  const inputs = getInputs();

  // switch cwd to inputs.root
  process.chdir(inputs.root);

  // add more
  inputs.pjson = path.join(inputs.root, 'package.json');
  inputs.release = github?.context?.payload?.release;

  try {
    // get status of shallowness
    const isShallow = getStdOut('git rev-parse --is-shallow-repository');

    // if a shallow repo then unshallow and fetch all
    if (isShallow === 'true') {
      core.startGroup('Configuring repo');
      core.info(`working-dir: ${process.cwd()}`);
      await exec.exec('git', ['fetch', '--unshallow']);
      await exec.exec('git', ['fetch', '--all']);
      core.endGroup();
    }

    // validate that we have a version
    if (!inputs.version) throw new Error('Version is a required input!');
    // if version is dev then attempt to describe tag/version
    if (inputs.version === 'dev') inputs.version = getStdOut(`git describe --tags --always --abbrev=1 --match="${inputs.versionMatch}"`);
    // and that it is semantically valid
    if (semverValid(semverClean(inputs.version)) === null) throw new Error(`Version ${inputs.version} must be semver valid!`);
    // and that we have a package.json
    if (!fs.existsSync(inputs.pjson)) throw new Error(`Could not detect a package.json in ${inputs.root}`);

    // if bundle-deps is false but lando-plugin is true then really bundle-deps is also true
    if (!inputs.bundleDependencies && inputs.landoPlugin) inputs.bundleDependencies = true;
    // if update-files is empty but lando-plugin is true then set changelog.md
    if (inputs.updateFiles.length === 0 && inputs.landoPlugin) inputs.updateFiles = ['CHANGELOG', 'CHANGELOG.md'];
    // if lando-plugin is true and this is a release then add update meta to the end
    // @NOTE: adding to the end means any same-named user-provided metadata will win
    if (inputs.landoPlugin && inputs.release) {
      inputs.tokens.push(...[
        `UNRELEASED_DATE=${parseReleaseDate(inputs.release.published_at)}`,
        `UNRELEASED_LINK=${inputs.release.html_url}`,
        `UNRELEASED_VERSION=${inputs.release.tag_name}`,
      ]);
    }
    // if lando plugin and updateHeader is not set then set it here
    if (inputs.landoPlugin && inputs.updateHeader.length === 0) {
      inputs.updateHeader = ['## {{ UNRELEASED_VERSION }} - [{{ UNRELEASED_DATE }}]({{ UNRELEASED_LINK }})'];
    }

    // normalize updatefile paths
    for (const [index, filename] of inputs.updateFiles.entries()) {
      inputs.updateFiles[index] = path.isAbsolute(filename) ? file : path.resolve(inputs.root, filename);
    }

    // add global utils, we do this regardless so we can invoke directly and control the version
    core.startGroup('Ensuring utils');
    if (inputs.bundleDependencies) await exec.exec('npm', ['install', '--global', 'bundle-dependencies@1.0.2']);
    await exec.exec('npm', ['install', '--global', 'version-bump-prompt@6.1.0']);
    // @NOTE: windows uses prefix and posix uses prefix/bin, not sure why that is
    const prefix = getStdOut('npm config get prefix');
    const binDir = process.platform === 'win32' ? prefix : path.join(prefix, 'bin');
    core.info(`bin-dir: ${binDir}`);
    await exec.exec('ls', ['-lsa', binDir]);
    core.endGroup();

    // configure git
    core.startGroup('Configuring git');
    // set user/email
    await exec.exec('git', ['config', 'user.name', inputs.syncUsername]);
    await exec.exec('git', ['config', 'user.email', inputs.syncEmail]);

    // check out correct branch if we plan to sync back later
    if (inputs.sync) await exec.exec('git', ['checkout', inputs.syncBranch]);
    core.endGroup();

    // run user specified commands
    for (const command of inputs.commands) await exec.exec(command);

    // if "lando-plugin" is on then lets add some required meta if we need to
    // note that we put this stuff at the start of meta so that a users meta will take priority
    // in the case that they set the same stuff
    if (inputs.landoPlugin && !isLandoPlugin(jsonfile.readFileSync(inputs.pjson))) {
      const pjson = jsonfile.readFileSync('package.json');
      const keywords = pjson.keywords ?? [];
      inputs.meta.unshift(`keywords[${keywords.length}]=lando-plugin`);
    }

    // apply any metadata to the package.json
    if (inputs.meta.length > 0) {
      const pjson = jsonfile.readFileSync(inputs.pjson);

      // go through meta and update package.json
      inputs.meta.forEach(line => {
        if (Array.isArray(line)) set(pjson, line[0], line[1]);
        else if (typeof line === 'string') {
          const key = line.split('=')[0];
          const value = line.split('=')[1];
          set(pjson, key, value);
        }
      });

      // write and debug
      jsonfile.writeFileSync(inputs.pjson, pjson, {spaces: 2});
      core.debug(`updated pjson`);
      core.debug(jsonfile.readFileSync(inputs.pjson));
    }

    // loop through and update-files with tokens and headers
    for (const file of inputs.updateFiles.filter(file => fs.existsSync(file))) {
      // get content
      let content = fs.readFileSync(file, {encoding: 'utf-8'});

      // update its tokens
      core.startGroup(`Updating ${file} with update-files-meta tokens`);
      for (const [token, value] of parseTokens(inputs.tokens)) {
        core.info(`{{ ${token} }}: ${value}`);
        content = content.replace(new RegExp(`\\{\\{\\s*${token}\\s*\\}\\}`, 'g'), value);
      }
      core.endGroup();

      // update its header
      if (inputs.updateHeader.length > 0) {
        core.startGroup(`Updating ${file} with update-files-header content`);
        core.info(`update-header: ${inputs.updateHeader.join(os.EOL)}`);
        core.endGroup();
        content = `${inputs.updateHeader.join(os.EOL)}${os.EOL}${os.EOL}${content}`;
      }

      // debug and update the file with new contents
      fs.writeFileSync(file, content);
      core.debug(`updated ${file}:`);
      core.debug(`---`);
      core.debug(`${fs.readFileSync(file, {encoding: 'utf-8'})}`);
      core.debug(`---`);
    }

    // if using landoPlugin ez-mode then validate lando plugin
    // it should be impossible to get here at this point but lets keep this just in case
    if (inputs.landoPlugin && !isLandoPlugin(jsonfile.readFileSync(inputs.pjson))) {
      throw new Error('Does not appear to be a valid Lando plugin! package.json must contain a lando key or the lando-plugin keyword');
    }

    // bump version AND commit everything changed
    await exec.exec(`${binDir}/bump`, inputs.sync ? [inputs.version, '--commit', inputs.syncMessage, '--all'] : [inputs.version]);

    // get helpful stuff, for some reasons windows interprets the format wrapping quptes literally?
    const currentCommit = getStdOut('git --no-pager log --pretty=format:%h -n 1');
    const tags = inputs.syncTags.concat([inputs.version]);

    // tag commits
    for (const tag of tags) await exec.exec('git', ['tag', '--force', tag, currentCommit]);

    // sync back to repo if applicable
    if (inputs.sync) {
      // log where we are at before we sync
      core.startGroup('Sync changes information');
      await exec.exec('git', ['--no-pager', 'log', '-1']);
      await exec.exec('git', ['--no-pager', 'tag', '--points-at', 'HEAD']);
      await exec.exec('git', ['diff', 'HEAD~1']);
      core.endGroup();

      // construct auth string
      const basicCredential = Buffer.from(`x-access-token:${inputs.syncToken}`, 'utf8').toString('base64');
      const authString = `AUTHORIZATION: basic ${basicCredential}`;
      core.setSecret(basicCredential);

      // push updates
      await exec.exec('git', ['config', '--local', 'http.https://github.com/.extraheader', authString]);
      await exec.exec('git', ['push', 'origin', inputs.syncBranch]);
      for (const tag of tags) await exec.exec('git', ['push', '--force', 'origin', tag]);
    }

    // bundle deps if we need to
    //
    // this happens AFTER sync because we ASSUME you do not have your node_modules checks into your repo
    // and if you do then this should be in your package.json already
    if (inputs.bundleDependencies && hasDependencies(inputs.pjson)) {
      await exec.exec(`${binDir}/bundle-dependencies`, ['update']);
      await exec.exec(`${binDir}/bundle-dependencies`, ['list-bundled-dependencies']);
    }

    // lets also add the "dist" information, this key is required if you want the plugin to be updateable
    // via lando update
    //
    // this also happens after sync and  SHOULD NOT EVER be added manually to your package.json
    if (inputs.landoPlugin) {
      const pjson = jsonfile.readFileSync(inputs.pjson);

      // onyl add information if dist isnt already in there
      if (!pjson.dist) {
        try {
          const dist = JSON.parse(getStdOut(`npm pack --json --dry-run`));
          const {integrity, shasum, fileCount, unpackedSize, filename} = dist[0];
          pjson.dist = {integrity, shasum, filename, fileCount, unpackedSize};
        } catch (error) {
          core.warning(`error getting dist information, not fatal, setting dist to ${inputs.version} instead`);
          core.debug(error);
          pjson.dist = inputs.version;
        }

        // write and debug
        jsonfile.writeFileSync(inputs.pjson, pjson, {spaces: 2});
        core.debug(`added dist info to pjson`);
        core.debug(jsonfile.readFileSync(inputs.pjson));
      }
    }

    // show all changes
    core.startGroup('Change information');
    await exec.exec('git', ['--no-pager', 'log', '-1']);
    await exec.exec('git', ['--no-pager', 'tag', '--points-at', 'HEAD']);
    await exec.exec('git', ['diff', 'HEAD~1']);
    core.endGroup();

  // catch
  } catch (error) {
    core.setFailed(error.message);
    process.exit(1);
  }
};

// main logix
main();
