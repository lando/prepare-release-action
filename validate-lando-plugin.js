'use strict'
const core = require('@actions/core');
const pjson = require(`${process.env.PJSON_LOCATION}/package.json`);

const hasLandoKeyword = Array.isArray(pjson.keywords) && (pjson.keywords.includes('lando') || pjson.keywords.includes('lando-plugin'));
if (hasLandoKeyword) {
  // Add in GitHub output https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions
  core.info('Confirmed this is a Lando plugin.')
  process.exit(0);
} else {
  core.error('Invalid Lando plugin; required keywords not detected in package.json.');
  process.exit(1);
}