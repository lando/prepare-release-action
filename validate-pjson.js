'use strict'

try {
  const pjson = require(`${process.env.PJSON_LOCATION}/package.json`);
} catch (err) {
  core.setFailed(`Invalid Lando plugin; required keywords not detected in package.json. ${err}`);
}