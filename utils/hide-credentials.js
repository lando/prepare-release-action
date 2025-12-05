'use strict';

const core = require('@actions/core');
const fs = require('fs');

module.exports = async (files = []) => {
  const runnerTemp = process.env['RUNNER_TEMP'];

  // bail if not on GHA
  if (!runnerTemp) return files;

  // attempt to rename all cred files
  try {
    const files = await fs.promises.readdir(runnerTemp);
    console.log('hi', files);
    for (const file of files) {
      if (file.startsWith('git-credentials-') && file.endsWith('.config')) {
        const src = path.join(runnerTemp, file);
        const backup = `${sourcePath}.bak`;
        await fs.promises.rename(src, backup);
        files.push(backup);
        core.info(`Temporarily hiding checkout credential file: ${file} (will be restored after)`);
      }
    }
  } catch (e) {
    core.debug(`Could not backup credential files: ${e.message}`);
  }
};
