## {{ UNRELEASED_VERSION }} - [{{ UNRELEASED_DATE }}]({{ UNRELEASED_LINK }})

## v19977682501.4.1-build.0f814a2de579a0ac5fcd387aeb4383bf2b05bd1c - [December 5, 2025](git://github.com/lando/prepare-release-action.git)

## v19977569732.3.1-build.3987c9840c155600f50d924aac48f6aa3d99b360 - [December 5, 2025](git://github.com/lando/prepare-release-action.git)

## v19977476441.2.1-build.7f5adaba66a2268a17da69972021a208907f3a3c - [December 5, 2025](git://github.com/lando/prepare-release-action.git)

## v19975734478.1.1-build.6dbe6b40569cfb780dfe8656e1203e899f1fde29 - [December 5, 2025](git://github.com/lando/prepare-release-action.git)

## v15050513024.51.1-build.9d0f1a16a19065702834c1be791e12341992abf6 - [May 15, 2025](git://github.com/lando/prepare-release-action.git)

## v13591150005.50.1-build.663fcc99fb29ddc6113c89c92b761e9f5c3179ac - [February 28, 2025](git://github.com/lando/prepare-release-action.git)

## v13590713606.49.1-build.1c63a2e6c8352e559a786cbda698e9cf95a0c054 - [February 28, 2025](git://github.com/lando/prepare-release-action.git)

## v13590507219.48.1-build.88fcd4b6b11a45eb041169a08bc2525f166bca1a - [February 28, 2025](git://github.com/lando/prepare-release-action.git)

## v13590505031.46.1-build.14a19c560fe4464d815db260b7a836790431e290 - [February 28, 2025](git://github.com/lando/prepare-release-action.git)

## v13590504018.45.1-build.c20401854cf648aa6f63436cec8c6539473c7c97 - [February 28, 2025](git://github.com/lando/prepare-release-action.git)

## v13580153360.44.1-build.186d9336a91fe7f195c670d4ac2a4d88495a4b59 - [February 28, 2025](git://github.com/lando/prepare-release-action.git)

## v13577062535.43.1-build.fc6b45cdc29478b5e28e65a317a83b2184fbd473 - [February 27, 2025](git://github.com/lando/prepare-release-action.git)

## v13576482926.42.1-build.36c4c88625ef88d904e5cb42c1117f67b587605c - [February 27, 2025](git://github.com/lando/prepare-release-action.git)

## v13576365693.41.1-build.3367c041580695345057261ea7ff73a1442d38a3 - [February 27, 2025](git://github.com/lando/prepare-release-action.git)

## v13575478580.40.1-build.2d6f5a21446c4cd991b35ec224ab86433195fe79 - [February 27, 2025](git://github.com/lando/prepare-release-action.git)

## v13339862660.39.1-build.fbdff34098f03f41b7a0356cc844a0d537935873 - [February 15, 2025](git://github.com/lando/prepare-release-action.git)

## v9235558254.38.1-build.2332b15137aa82364d0562c19ec92b6098bf85d0 - [May 25, 2024](git://github.com/lando/prepare-release-action.git)

## v9235544234.37.1-build.5210e9868be865a725127f09079455a32a043d00 - [May 25, 2024](git://github.com/lando/prepare-release-action.git)

## v9235512721.36.1-build.b7813b3648fa71842ba711aae29429575114da72 - [May 25, 2024](git://github.com/lando/prepare-release-action.git)

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
