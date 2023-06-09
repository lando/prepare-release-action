'use strict'
const core = require('@actions/core');

try {
  const pjson = require(`${process.env.PJSON_LOCATION}/package.json`);
} catch (err) {
  core.error('Unable to load package.json.');
}