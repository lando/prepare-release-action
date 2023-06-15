const semver = require('semver');

const version = 'v1.2.2-riker.4';

console.log(semver.clean(version));
console.log(semver.coerce(version, {includePrerelease: true}));
