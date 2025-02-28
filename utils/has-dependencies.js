'use strict';

const core = require('@actions/core');
const jsonfile = require('jsonfile');

module.exports = pjson => {
  const {dependencies} = jsonfile.readFileSync(pjson);

  if (!dependencies || (dependencies && Object.keys(dependencies).length === 0)) {
    core.info('No dependencies found in package.json, skipping bundle-dependencies step');
  }

  return typeof dependencies === 'object'
     && dependencies !== null
     && Object.keys(dependencies).length > 0;
};
