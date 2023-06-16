'use strict';

const core = require('@actions/core');
const exec = require('@actions/exec');
const fs = require('fs');
const getInputs = require('./lib/get-inputs');
const path = require('path');
const semverClean = require('semver/functions/clean');
const semverValid = require('semver/functions/valid');

const {execSync} = require('child_process');

const main = async () => {
  // start by getting the inputs
  const inputs = getInputs();

  // You can use the below for dev purposes
  // inputs.version = 'v1.0.0-riker.beta.1';
  // inputs.syncEmail = 'mike@lando.dev';
  // inputs.syncUsername = 'Mike Pirog';
  // inputs.syncBranch = 'pattern-riker-beta';

  try {
    // validate that we have a version
    if (!inputs.version) throw new Error('Version is a required input!');
    // and that it is semantically valid
    if (semverValid(semverClean(inputs.version)) === null) throw new Error('Version must be semver valid!');
    // and that we have a package.json
    if (!fs.existsSync(`${inputs.root}/package.json`)) throw new Error(`Could not detect a package.json in ${inputs.root}`);

    // add local node bin to path so we can make use of stuff weve installed
    // @NOTE: this location differs based on how we are calling it eg dist/index.js or directly
    if (fs.existsSync(path.resolve(__dirname, '..', 'node_modules', '.bin'))) {
      core.addPath(path.resolve(__dirname, '..', 'node_modules', '.bin'));
    } else {
      core.addPath(path.resolve(__dirname, 'node_modules', '.bin'));
    }

    // configure git
    core.startGroup('Configuring git');
    // get status of shallowness
    const isShallow = execSync('git rev-parse --is-shallow-repository', {maxBuffer: 1024 * 1024 * 10, encoding: 'utf-8'});
    // set user/email
    await exec.exec('git', ['config', 'user.name', inputs.syncUsername]);
    await exec.exec('git', ['config', 'user.email', inputs.syncEmail]);
    // if a shallow repo then unshallow and fetch all
    if (isShallow.trim() === 'true') {
      await exec.exec('git', ['fetch', '--unshallow']);
      await exec.exec('git', ['fetch', '--all']);
    }
    // check out correct branch
    await exec.exec('git', ['checkout', inputs.syncBranch]);
    core.endGroup();

    // - name: Bundle dependencies
    //   shell: bash
    //   if: ${{ inputs.bundle-deps == "true" }}
    //   run: |
    //     bundle-dependencies update
    //     echo "Bundled dependencies:"
    //     bundle-dependencies list-bundled-dependencies
    // - name: Lando Plugin stuff
    //   if: ${{ inputs.validate-plugin == "true" }}
    //   uses: actions/github-script@v6
    //   env:
    //     PJSON_LOCATION: ${{ github.workspace }}/package.json
    //   with:
    //     script: |
    //       const pjsonLocation = process.env.PJSON_LOCATION;
    //       const pjson = require(pjsonLocation);
    //       const hasLandoKeyword = Array.isArray(pjson.keywords) && (pjson.keywords.includes("lando") || pjson.keywords.includes("lando-plugin"));
    //       if (hasLandoKeyword) {
    //         // Add in GitHub output https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions
    //         core.info("Confirmed this is a Lando plugin.")
    //         process.exit(0);
    //       } else {
    //         core.setFailed("Invalid Lando plugin; required keywords not detected in package.json.");
    //       }

    // running user specified commands
    core.startGroup('Running commands');
    for (const command of inputs.commands) await exec.exec(command);
    core.endGroup();

    // bumping version
    await exec.exec('bump', [inputs.version, '--commit', inputs.syncMessage, '--all']);

    // tagging commits
    const currentCommit = execSync('git', ['log', '--pretty', 'format:"%h"', '-n', '1'], {maxBuffer: 1024 * 1024 * 10, encoding: 'utf-8'});
    for (const tag of inputs.syncTags.concat([inputs.version])) await exec.exec('git', ['tag', '--force', tag, currentCommit]);

    // log where we are at before we sync
    core.startGroup('Change information');
    await exec.exec('git', ['--no-pager', 'log', '-1']);
    await exec.exec('git', ['--no-pager', 'tag', '--points-at', 'HEAD']);
    await exec.exec('git', ['diff', 'HEAD~1']);
    core.endGroup();

    // sync back to repo
    // # git push origin ${{ github.event.release.target_commitish }}
    // # git push --force origin ${tag}

  // catch
  } catch (error) {
    core.setFailed(error.message);
    process.exit(1);
  }
};

// main logix
main();
