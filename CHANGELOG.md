## {{ UNRELEASED_VERSION }} - [{{ UNRELEASED_DATE }}]({{ UNRELEASED_LINK }})## v9005187103.28.1-build.6ecae00b9b8006b2e0a49db1b567af397be51f78 - [May 4, 3000](git://github.com/lando/prepare-release-action.git)## v9005063216.27.2-build.5f2502cb93f805dcb6ec78becae81819ba0dd680 - [May 4, 3000](git://github.com/lando/prepare-release-action.git)## v3.1.0 - [December 6, 2023](https://github.com/lando/prepare-release-action/releases/tag/v3.1.0)

* Added a `meta` input so users can enter a list of `path=value` strings to merge into the `package.json`
* Improved `lando-plugin` so that it adds the needed `dist` value to the `package.json`

## v3.0.0 - [December 4, 2023](https://github.com/lando/prepare-release-action/releases/tag/v3.0.0)

### New Features

* Added `bundle-dependencies` input which will include your `node_modules` in the prepared release

### **BREAKING CHANGES**

* Changed `lando-plugin` so that it sets `bundle-dependencies` which now DOES NOT sync back changes `bundleDependencies`

## v2.1.1 - [June 21, 2023](https://github.com/lando/prepare-release-action/releases/tag/v2.1.1)

* Fixed bug causing action to fail when using a `windows` runner

## v2.1.0 - [June 20, 2023](https://github.com/lando/prepare-release-action/releases/tag/v2.1.0)

* Added support for `dev` releases
* Added a `version-match` input to help determine the `dev` release

## v2.0.3 - [June 17, 2023](https://github.com/lando/prepare-release-action/releases/tag/v2.0.3)

* Changed default `sync-message` to include `v` prefix

## v2.0.2 - [June 17, 2023](https://github.com/lando/prepare-release-action/releases/tag/v2.0.2)

* Changed default `sync-message` to include `v` prefix

## v2.0.1 - [June 16, 2023](https://github.com/lando/prepare-release-action/releases/tag/v2.0.1)

* Fixed bug causing `bump` and `bundle-dependencies` to not be found

## v2.0.0 - [June 16, 2023](https://github.com/lando/prepare-release-action/releases/tag/v2.0.0)

* First `v2` release

## v2.0.0-beta.2 - [June 16, 2023](https://github.com/lando/prepare-release-action/releases/tag/v2.0.0-beta.2)

* Executed evasive manuveur pattern Riker beta.2

## v2.0.0-beta.1 - [June 15, 2023](https://github.com/lando/prepare-release-action/releases/tag/v2.0.0-beta.1)

* Executed evasive manuveur pattern Riker beta.1
