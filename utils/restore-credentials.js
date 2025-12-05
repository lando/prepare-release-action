'use strict';

const core = require('@actions/core');
const fs = require('fs');
const path = require('path');

module.exports = async (files = []) => {
  for (const backup of files) {
    try {
      const src = backup.replace(/\.bak$/, '');
      await fs.promises.rename(backup, src);
      const file = path.basename(src);
      core.info(`Restored checkout credential file: ${file}`);
    } catch (e) {
      core.warning(`Failed to restore credential file ${backup}: ${e.message}`);
    }
  }

  return [];
};
