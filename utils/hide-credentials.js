'use strict';

const core = require('@actions/core');
const fs = require('fs');
const path = require('path');

module.exports = async (collector = []) => {
  const runnerTemp = process.env['RUNNER_TEMP'];

  // bail if not on GHA
  if (!runnerTemp) return collector;

  // attempt to rename all cred files
  try {
    const files = await fs.promises.readdir(runnerTemp);
    for (const file of files) {
      if (file.startsWith('git-credentials-') && file.endsWith('.config')) {
        const src = path.join(runnerTemp, file);
        const backup = `${src}.bak`;
        await fs.promises.rename(src, backup);
        collector.push(backup);
        core.info(`Temporarily hiding actions/checkout credential file ${file} in favor of our auth`);
      }
    }
  } catch (e) {
    core.debug(`Could not backup credential files: ${e.message}`);
  }

  return collector;
};
