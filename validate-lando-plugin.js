'use strict'

const pjson = require('package.json');
const hasLandoKeyword = Array.isArray(pjson.keywords) && (pjson.keywords.includes('lando') || pjson.keywords.includes('lando-plugin'));
if (hasLandoKeyword) {
  console.log('Valid Lando plugin.');
  process.exit(0);
} else {
  console.log('Invalid Lando plugin; required keywords not detected in package.json.');
  process.exit(1);
}