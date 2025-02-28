## {{ UNRELEASED_VERSION }} - [{{ UNRELEASED_DATE }}]({{ UNRELEASED_LINK }})

## v3.3.3 - [February 28, 2025](https://github.com/lando/prepare-release-action/releases/tag/v3.3.3)

* Fixed issue where `bundle-dependencies` would fail when no dependencies are found in `package.json`

## v3.3.2 - [May 25, 2024](https://github.com/lando/prepare-release-action/releases/tag/v3.3.2)

* Fixed issue where `version: dev` would fail when it produces no `git` changes

## v3.3.1 - [May 8, 2024](https://github.com/lando/prepare-release-action/releases/tag/v3.3.1)

* Fixed issue with `update-files-header` newline spacing
* Fixed issue with this repos GHA release dates

## v3.3.0 - [May 8, 2024](https://github.com/lando/prepare-release-action/releases/tag/v3.3.0)

* Added `update-files`, `update-files-meta` and `update-files-header` inputs to help things like automatic `CHANGELOG.md` automation [#15](https://github.com/lando/prepare-release-action/issues/15)

## v3.2.2 - [March 26, 2024](https://github.com/lando/prepare-release-action/releases/tag/v3.2.2)

* This release has no content and is to test DevOps things

## v3.2.1 - [March 26, 2024](https://github.com/lando/prepare-release-action/releases/tag/v3.2.1)

* This release has no content and is to test DevOps things

## v3.2.0 - [March 26, 2024](https://github.com/lando/prepare-release-action/releases/tag/v3.2.0)

* Added a `sync-token` input to better control `git` sync operations

## v3.1.0 - [December 6, 2023](https://github.com/lando/prepare-release-action/releases/tag/v3.1.0)

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
