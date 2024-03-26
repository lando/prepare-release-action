'use strict';

module.exports = (manifest = {}) => {
  // if the manifest has a lando key then true
  if (manifest.hasOwnProperty('lando')) return true;
  // has the "lando-plugin" keyword
  if (manifest.keywords && manifest.keywords.includes('lando-plugin')) return true;
  // otherwise nope
  return false;
};
