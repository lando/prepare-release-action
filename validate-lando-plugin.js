'use strict'
const pjson = require(`${process.env.PJSON_LOCATION}/package.json`);

const hasLandoKeyword = Array.isArray(pjson.keywords) && (pjson.keywords.includes('lando') || pjson.keywords.includes('lando-plugin'));
if (hasLandoKeyword) {
  // Add in GitHub output https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions
  core.info('Confirmed this is a Lando plugin.')
  process.exit(0);
} else {
  core.setFailed('Invalid Lando plugin; required keywords not detected in package.json.');
}