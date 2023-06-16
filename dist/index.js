require('./sourcemap-register.js');module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 6981:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@actions/core\",\"version\":\"1.10.0\",\"description\":\"Actions core lib\",\"keywords\":[\"github\",\"actions\",\"core\"],\"homepage\":\"https://github.com/actions/toolkit/tree/main/packages/core\",\"license\":\"MIT\",\"main\":\"lib/core.js\",\"types\":\"lib/core.d.ts\",\"directories\":{\"lib\":\"lib\",\"test\":\"__tests__\"},\"files\":[\"lib\",\"!.DS_Store\"],\"publishConfig\":{\"access\":\"public\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/actions/toolkit.git\",\"directory\":\"packages/core\"},\"scripts\":{\"audit-moderate\":\"npm install && npm audit --json --audit-level=moderate > audit.json\",\"test\":\"echo \\\"Error: run tests from root\\\" && exit 1\",\"tsc\":\"tsc\"},\"bugs\":{\"url\":\"https://github.com/actions/toolkit/issues\"},\"dependencies\":{\"@actions/http-client\":\"^2.0.1\",\"uuid\":\"^8.3.2\"},\"devDependencies\":{\"@types/node\":\"^12.0.2\",\"@types/uuid\":\"^8.3.4\"}}");

/***/ }),

/***/ 4325:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@actions/exec\",\"version\":\"1.1.1\",\"description\":\"Actions exec lib\",\"keywords\":[\"github\",\"actions\",\"exec\"],\"homepage\":\"https://github.com/actions/toolkit/tree/main/packages/exec\",\"license\":\"MIT\",\"main\":\"lib/exec.js\",\"types\":\"lib/exec.d.ts\",\"directories\":{\"lib\":\"lib\",\"test\":\"__tests__\"},\"files\":[\"lib\",\"!.DS_Store\"],\"publishConfig\":{\"access\":\"public\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/actions/toolkit.git\",\"directory\":\"packages/exec\"},\"scripts\":{\"audit-moderate\":\"npm install && npm audit --json --audit-level=moderate > audit.json\",\"test\":\"echo \\\"Error: run tests from root\\\" && exit 1\",\"tsc\":\"tsc\"},\"bugs\":{\"url\":\"https://github.com/actions/toolkit/issues\"},\"dependencies\":{\"@actions/io\":\"^1.0.1\"}}");

/***/ }),

/***/ 1768:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@actions/http-client\",\"version\":\"2.1.0\",\"description\":\"Actions Http Client\",\"keywords\":[\"github\",\"actions\",\"http\"],\"homepage\":\"https://github.com/actions/toolkit/tree/main/packages/http-client\",\"license\":\"MIT\",\"main\":\"lib/index.js\",\"types\":\"lib/index.d.ts\",\"directories\":{\"lib\":\"lib\",\"test\":\"__tests__\"},\"files\":[\"lib\",\"!.DS_Store\"],\"publishConfig\":{\"access\":\"public\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/actions/toolkit.git\",\"directory\":\"packages/http-client\"},\"scripts\":{\"audit-moderate\":\"npm install && npm audit --json --audit-level=moderate > audit.json\",\"test\":\"echo \\\"Error: run tests from root\\\" && exit 1\",\"build\":\"tsc\",\"format\":\"prettier --write **/*.ts\",\"format-check\":\"prettier --check **/*.ts\",\"tsc\":\"tsc\"},\"bugs\":{\"url\":\"https://github.com/actions/toolkit/issues\"},\"devDependencies\":{\"@types/tunnel\":\"0.0.3\",\"proxy\":\"^1.0.1\"},\"dependencies\":{\"tunnel\":\"^0.0.6\"}}");

/***/ }),

/***/ 3368:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@actions/io\",\"version\":\"1.1.3\",\"description\":\"Actions io lib\",\"keywords\":[\"github\",\"actions\",\"io\"],\"homepage\":\"https://github.com/actions/toolkit/tree/main/packages/io\",\"license\":\"MIT\",\"main\":\"lib/io.js\",\"types\":\"lib/io.d.ts\",\"directories\":{\"lib\":\"lib\",\"test\":\"__tests__\"},\"files\":[\"lib\"],\"publishConfig\":{\"access\":\"public\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/actions/toolkit.git\",\"directory\":\"packages/io\"},\"scripts\":{\"audit-moderate\":\"npm install && npm audit --json --audit-level=moderate > audit.json\",\"test\":\"echo \\\"Error: run tests from root\\\" && exit 1\",\"tsc\":\"tsc\"},\"bugs\":{\"url\":\"https://github.com/actions/toolkit/issues\"}}");

/***/ }),

/***/ 111:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@ampproject/remapping\",\"version\":\"2.2.1\",\"description\":\"Remap sequential sourcemaps through transformations to point at the original source code\",\"keywords\":[\"source\",\"map\",\"remap\"],\"main\":\"dist/remapping.umd.js\",\"module\":\"dist/remapping.mjs\",\"types\":\"dist/types/remapping.d.ts\",\"exports\":{\".\":[{\"types\":\"./dist/types/remapping.d.ts\",\"browser\":\"./dist/remapping.umd.js\",\"require\":\"./dist/remapping.umd.js\",\"import\":\"./dist/remapping.mjs\"},\"./dist/remapping.umd.js\"],\"./package.json\":\"./package.json\"},\"files\":[\"dist\"],\"author\":\"Justin Ridgewell <jridgewell@google.com>\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/ampproject/remapping.git\"},\"license\":\"Apache-2.0\",\"engines\":{\"node\":\">=6.0.0\"},\"scripts\":{\"build\":\"run-s -n build:*\",\"build:rollup\":\"rollup -c rollup.config.js\",\"build:ts\":\"tsc --project tsconfig.build.json\",\"lint\":\"run-s -n lint:*\",\"lint:prettier\":\"npm run test:lint:prettier -- --write\",\"lint:ts\":\"npm run test:lint:ts -- --fix\",\"prebuild\":\"rm -rf dist\",\"prepublishOnly\":\"npm run preversion\",\"preversion\":\"run-s test build\",\"test\":\"run-s -n test:lint test:only\",\"test:debug\":\"node --inspect-brk node_modules/.bin/jest --runInBand\",\"test:lint\":\"run-s -n test:lint:*\",\"test:lint:prettier\":\"prettier --check '{src,test}/**/*.ts'\",\"test:lint:ts\":\"eslint '{src,test}/**/*.ts'\",\"test:only\":\"jest --coverage\",\"test:watch\":\"jest --coverage --watch\"},\"devDependencies\":{\"@rollup/plugin-typescript\":\"8.3.2\",\"@types/jest\":\"27.4.1\",\"@typescript-eslint/eslint-plugin\":\"5.20.0\",\"@typescript-eslint/parser\":\"5.20.0\",\"eslint\":\"8.14.0\",\"eslint-config-prettier\":\"8.5.0\",\"jest\":\"27.5.1\",\"jest-config\":\"27.5.1\",\"npm-run-all\":\"4.1.5\",\"prettier\":\"2.6.2\",\"rollup\":\"2.70.2\",\"ts-jest\":\"27.1.4\",\"tslib\":\"2.4.0\",\"typescript\":\"4.6.3\"},\"dependencies\":{\"@jridgewell/gen-mapping\":\"^0.3.0\",\"@jridgewell/trace-mapping\":\"^0.3.9\"}}");

/***/ }),

/***/ 3474:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@babel/code-frame\",\"version\":\"7.22.5\",\"description\":\"Generate errors that contain a code frame that point to source locations.\",\"author\":\"The Babel Team (https://babel.dev/team)\",\"homepage\":\"https://babel.dev/docs/en/next/babel-code-frame\",\"bugs\":\"https://github.com/babel/babel/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen\",\"license\":\"MIT\",\"publishConfig\":{\"access\":\"public\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/babel/babel.git\",\"directory\":\"packages/babel-code-frame\"},\"main\":\"./lib/index.js\",\"dependencies\":{\"@babel/highlight\":\"^7.22.5\"},\"devDependencies\":{\"strip-ansi\":\"^4.0.0\"},\"engines\":{\"node\":\">=6.9.0\"},\"type\":\"commonjs\"}");

/***/ }),

/***/ 3818:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@babel/compat-data\",\"version\":\"7.22.5\",\"author\":\"The Babel Team (https://babel.dev/team)\",\"license\":\"MIT\",\"description\":\"\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/babel/babel.git\",\"directory\":\"packages/babel-compat-data\"},\"publishConfig\":{\"access\":\"public\"},\"exports\":{\"./plugins\":\"./plugins.js\",\"./native-modules\":\"./native-modules.js\",\"./corejs2-built-ins\":\"./corejs2-built-ins.js\",\"./corejs3-shipped-proposals\":\"./corejs3-shipped-proposals.js\",\"./overlapping-plugins\":\"./overlapping-plugins.js\",\"./plugin-bugfixes\":\"./plugin-bugfixes.js\"},\"scripts\":{\"build-data\":\"./scripts/download-compat-table.sh && node ./scripts/build-data.js && node ./scripts/build-modules-support.js && node ./scripts/build-bugfixes-targets.js\"},\"keywords\":[\"babel\",\"compat-table\",\"compat-data\"],\"devDependencies\":{\"@mdn/browser-compat-data\":\"^4.0.10\",\"core-js-compat\":\"^3.30.2\",\"electron-to-chromium\":\"^1.4.248\"},\"engines\":{\"node\":\">=6.9.0\"},\"type\":\"commonjs\"}");

/***/ }),

/***/ 2347:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"semver\",\"version\":\"6.3.0\",\"description\":\"The semantic version parser used by npm.\",\"main\":\"semver.js\",\"scripts\":{\"test\":\"tap\",\"preversion\":\"npm test\",\"postversion\":\"npm publish\",\"postpublish\":\"git push origin --follow-tags\"},\"devDependencies\":{\"tap\":\"^14.3.1\"},\"license\":\"ISC\",\"repository\":\"https://github.com/npm/node-semver\",\"bin\":{\"semver\":\"./bin/semver.js\"},\"files\":[\"bin\",\"range.bnf\",\"semver.js\"],\"tap\":{\"check-coverage\":true}}");

/***/ }),

/***/ 4118:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@babel/core\",\"version\":\"7.22.5\",\"description\":\"Babel compiler core.\",\"main\":\"./lib/index.js\",\"author\":\"The Babel Team (https://babel.dev/team)\",\"license\":\"MIT\",\"publishConfig\":{\"access\":\"public\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/babel/babel.git\",\"directory\":\"packages/babel-core\"},\"homepage\":\"https://babel.dev/docs/en/next/babel-core\",\"bugs\":\"https://github.com/babel/babel/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3A%22pkg%3A%20core%22+is%3Aopen\",\"keywords\":[\"6to5\",\"babel\",\"classes\",\"const\",\"es6\",\"harmony\",\"let\",\"modules\",\"transpile\",\"transpiler\",\"var\",\"babel-core\",\"compiler\"],\"engines\":{\"node\":\">=6.9.0\"},\"funding\":{\"type\":\"opencollective\",\"url\":\"https://opencollective.com/babel\"},\"browser\":{\"./lib/config/files/index.js\":\"./lib/config/files/index-browser.js\",\"./lib/config/resolve-targets.js\":\"./lib/config/resolve-targets-browser.js\",\"./lib/transform-file.js\":\"./lib/transform-file-browser.js\",\"./src/config/files/index.ts\":\"./src/config/files/index-browser.ts\",\"./src/config/resolve-targets.ts\":\"./src/config/resolve-targets-browser.ts\",\"./src/transform-file.ts\":\"./src/transform-file-browser.ts\"},\"dependencies\":{\"@ampproject/remapping\":\"^2.2.0\",\"@babel/code-frame\":\"^7.22.5\",\"@babel/generator\":\"^7.22.5\",\"@babel/helper-compilation-targets\":\"^7.22.5\",\"@babel/helper-module-transforms\":\"^7.22.5\",\"@babel/helpers\":\"^7.22.5\",\"@babel/parser\":\"^7.22.5\",\"@babel/template\":\"^7.22.5\",\"@babel/traverse\":\"^7.22.5\",\"@babel/types\":\"^7.22.5\",\"convert-source-map\":\"^1.7.0\",\"debug\":\"^4.1.0\",\"gensync\":\"^1.0.0-beta.2\",\"json5\":\"^2.2.2\",\"semver\":\"^6.3.0\"},\"devDependencies\":{\"@babel/helper-transform-fixture-test-runner\":\"^7.22.5\",\"@babel/plugin-syntax-flow\":\"^7.22.5\",\"@babel/plugin-transform-flow-strip-types\":\"^7.22.5\",\"@babel/plugin-transform-modules-commonjs\":\"^7.22.5\",\"@babel/preset-env\":\"^7.22.5\",\"@babel/preset-typescript\":\"^7.22.5\",\"@jridgewell/trace-mapping\":\"^0.3.17\",\"@types/convert-source-map\":\"^1.5.1\",\"@types/debug\":\"^4.1.0\",\"@types/gensync\":\"^1.0.0\",\"@types/resolve\":\"^1.3.2\",\"@types/semver\":\"^5.4.0\",\"rimraf\":\"^3.0.0\",\"ts-node\":\"^10.9.1\"},\"type\":\"commonjs\"}");

/***/ }),

/***/ 2405:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"semver\",\"version\":\"6.3.0\",\"description\":\"The semantic version parser used by npm.\",\"main\":\"semver.js\",\"scripts\":{\"test\":\"tap\",\"preversion\":\"npm test\",\"postversion\":\"npm publish\",\"postpublish\":\"git push origin --follow-tags\"},\"devDependencies\":{\"tap\":\"^14.3.1\"},\"license\":\"ISC\",\"repository\":\"https://github.com/npm/node-semver\",\"bin\":{\"semver\":\"./bin/semver.js\"},\"files\":[\"bin\",\"range.bnf\",\"semver.js\"],\"tap\":{\"check-coverage\":true}}");

/***/ }),

/***/ 7322:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@babel/eslint-parser\",\"version\":\"7.22.5\",\"description\":\"ESLint parser that allows for linting of experimental syntax transformed by Babel\",\"author\":\"The Babel Team (https://babel.dev/team)\",\"license\":\"MIT\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/babel/babel.git\",\"directory\":\"eslint/babel-eslint-parser\"},\"publishConfig\":{\"access\":\"public\"},\"bugs\":{\"url\":\"https://github.com/babel/babel/issues\"},\"homepage\":\"https://babel.dev/\",\"engines\":{\"node\":\"^10.13.0 || ^12.13.0 || >=14.0.0\"},\"main\":\"./lib/index.cjs\",\"type\":\"commonjs\",\"exports\":{\".\":\"./lib/index.cjs\",\"./experimental-worker\":\"./lib/experimental-worker.cjs\",\"./package.json\":\"./package.json\"},\"peerDependencies\":{\"@babel/core\":\">=7.11.0\",\"eslint\":\"^7.5.0 || ^8.0.0\"},\"dependencies\":{\"@nicolo-ribaudo/eslint-scope-5-internals\":\"5.1.1-v1\",\"eslint-visitor-keys\":\"^2.1.0\",\"semver\":\"^6.3.0\"},\"devDependencies\":{\"@babel/core\":\"^7.22.5\",\"dedent\":\"^0.7.0\",\"eslint\":\"^8.22.0\"}}");

/***/ }),

/***/ 9166:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@babel/generator\",\"version\":\"7.22.5\",\"description\":\"Turns an AST into code.\",\"author\":\"The Babel Team (https://babel.dev/team)\",\"license\":\"MIT\",\"publishConfig\":{\"access\":\"public\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/babel/babel.git\",\"directory\":\"packages/babel-generator\"},\"homepage\":\"https://babel.dev/docs/en/next/babel-generator\",\"bugs\":\"https://github.com/babel/babel/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3A%22pkg%3A%20generator%22+is%3Aopen\",\"main\":\"./lib/index.js\",\"files\":[\"lib\"],\"dependencies\":{\"@babel/types\":\"^7.22.5\",\"@jridgewell/gen-mapping\":\"^0.3.2\",\"@jridgewell/trace-mapping\":\"^0.3.17\",\"jsesc\":\"^2.5.1\"},\"devDependencies\":{\"@babel/helper-fixtures\":\"^7.22.5\",\"@babel/parser\":\"^7.22.5\",\"@types/jsesc\":\"^2.5.0\",\"charcodes\":\"^0.2.0\"},\"engines\":{\"node\":\">=6.9.0\"},\"type\":\"commonjs\"}");

/***/ }),

/***/ 6556:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"semver\",\"version\":\"6.3.0\",\"description\":\"The semantic version parser used by npm.\",\"main\":\"semver.js\",\"scripts\":{\"test\":\"tap\",\"preversion\":\"npm test\",\"postversion\":\"npm publish\",\"postpublish\":\"git push origin --follow-tags\"},\"devDependencies\":{\"tap\":\"^14.3.1\"},\"license\":\"ISC\",\"repository\":\"https://github.com/npm/node-semver\",\"bin\":{\"semver\":\"./bin/semver.js\"},\"files\":[\"bin\",\"range.bnf\",\"semver.js\"],\"tap\":{\"check-coverage\":true}}");

/***/ }),

/***/ 839:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@babel/helper-compilation-targets\",\"version\":\"7.22.5\",\"author\":\"The Babel Team (https://babel.dev/team)\",\"license\":\"MIT\",\"description\":\"Helper functions on Babel compilation targets\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/babel/babel.git\",\"directory\":\"packages/babel-helper-compilation-targets\"},\"main\":\"./lib/index.js\",\"exports\":{\".\":\"./lib/index.js\",\"./package.json\":\"./package.json\"},\"publishConfig\":{\"access\":\"public\"},\"keywords\":[\"babel\",\"babel-plugin\"],\"dependencies\":{\"@babel/compat-data\":\"^7.22.5\",\"@babel/helper-validator-option\":\"^7.22.5\",\"browserslist\":\"^4.21.3\",\"lru-cache\":\"^5.1.1\",\"semver\":\"^6.3.0\"},\"peerDependencies\":{\"@babel/core\":\"^7.0.0\"},\"devDependencies\":{\"@babel/core\":\"^7.22.5\",\"@babel/helper-plugin-test-runner\":\"^7.22.5\",\"@types/lru-cache\":\"^5.1.1\",\"@types/semver\":\"^5.5.0\"},\"engines\":{\"node\":\">=6.9.0\"},\"type\":\"commonjs\"}");

/***/ }),

/***/ 9734:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@babel/helper-environment-visitor\",\"version\":\"7.22.5\",\"description\":\"Helper visitor to only visit nodes in the current 'this' context\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/babel/babel.git\",\"directory\":\"packages/babel-helper-environment-visitor\"},\"homepage\":\"https://babel.dev/docs/en/next/babel-helper-environment-visitor\",\"license\":\"MIT\",\"publishConfig\":{\"access\":\"public\"},\"main\":\"./lib/index.js\",\"exports\":{\".\":\"./lib/index.js\",\"./package.json\":\"./package.json\"},\"devDependencies\":{\"@babel/traverse\":\"^7.22.5\",\"@babel/types\":\"^7.22.5\"},\"engines\":{\"node\":\">=6.9.0\"},\"author\":\"The Babel Team (https://babel.dev/team)\",\"type\":\"commonjs\"}");

/***/ }),

/***/ 7315:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@babel/helper-function-name\",\"version\":\"7.22.5\",\"description\":\"Helper function to change the property 'name' of every function\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/babel/babel.git\",\"directory\":\"packages/babel-helper-function-name\"},\"homepage\":\"https://babel.dev/docs/en/next/babel-helper-function-name\",\"license\":\"MIT\",\"publishConfig\":{\"access\":\"public\"},\"main\":\"./lib/index.js\",\"dependencies\":{\"@babel/template\":\"^7.22.5\",\"@babel/types\":\"^7.22.5\"},\"engines\":{\"node\":\">=6.9.0\"},\"author\":\"The Babel Team (https://babel.dev/team)\",\"type\":\"commonjs\"}");

/***/ }),

/***/ 1585:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@babel/helper-hoist-variables\",\"version\":\"7.22.5\",\"description\":\"Helper function to hoist variables\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/babel/babel.git\",\"directory\":\"packages/babel-helper-hoist-variables\"},\"homepage\":\"https://babel.dev/docs/en/next/babel-helper-hoist-variables\",\"license\":\"MIT\",\"publishConfig\":{\"access\":\"public\"},\"main\":\"./lib/index.js\",\"dependencies\":{\"@babel/types\":\"^7.22.5\"},\"TODO\":\"The @babel/traverse dependency is only needed for the NodePath TS type. We can consider exporting it from @babel/core.\",\"devDependencies\":{\"@babel/traverse\":\"^7.22.5\"},\"engines\":{\"node\":\">=6.9.0\"},\"author\":\"The Babel Team (https://babel.dev/team)\",\"type\":\"commonjs\"}");

/***/ }),

/***/ 5151:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@babel/helper-module-imports\",\"version\":\"7.22.5\",\"description\":\"Babel helper functions for inserting module loads\",\"author\":\"The Babel Team (https://babel.dev/team)\",\"homepage\":\"https://babel.dev/docs/en/next/babel-helper-module-imports\",\"license\":\"MIT\",\"publishConfig\":{\"access\":\"public\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/babel/babel.git\",\"directory\":\"packages/babel-helper-module-imports\"},\"main\":\"./lib/index.js\",\"dependencies\":{\"@babel/types\":\"^7.22.5\"},\"devDependencies\":{\"@babel/core\":\"^7.22.5\",\"@babel/traverse\":\"^7.22.5\"},\"engines\":{\"node\":\">=6.9.0\"},\"type\":\"commonjs\"}");

/***/ }),

/***/ 9524:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@babel/helper-module-transforms\",\"version\":\"7.22.5\",\"description\":\"Babel helper functions for implementing ES6 module transformations\",\"author\":\"The Babel Team (https://babel.dev/team)\",\"homepage\":\"https://babel.dev/docs/en/next/babel-helper-module-transforms\",\"license\":\"MIT\",\"publishConfig\":{\"access\":\"public\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/babel/babel.git\",\"directory\":\"packages/babel-helper-module-transforms\"},\"main\":\"./lib/index.js\",\"dependencies\":{\"@babel/helper-environment-visitor\":\"^7.22.5\",\"@babel/helper-module-imports\":\"^7.22.5\",\"@babel/helper-simple-access\":\"^7.22.5\",\"@babel/helper-split-export-declaration\":\"^7.22.5\",\"@babel/helper-validator-identifier\":\"^7.22.5\",\"@babel/template\":\"^7.22.5\",\"@babel/traverse\":\"^7.22.5\",\"@babel/types\":\"^7.22.5\"},\"engines\":{\"node\":\">=6.9.0\"},\"type\":\"commonjs\"}");

/***/ }),

/***/ 3880:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@babel/helper-simple-access\",\"version\":\"7.22.5\",\"description\":\"Babel helper for ensuring that access to a given value is performed through simple accesses\",\"author\":\"The Babel Team (https://babel.dev/team)\",\"homepage\":\"https://babel.dev/docs/en/next/babel-helper-simple-access\",\"license\":\"MIT\",\"publishConfig\":{\"access\":\"public\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/babel/babel.git\",\"directory\":\"packages/babel-helper-simple-access\"},\"main\":\"./lib/index.js\",\"dependencies\":{\"@babel/types\":\"^7.22.5\"},\"devDependencies\":{\"@babel/core\":\"^7.22.5\",\"@babel/traverse\":\"^7.22.5\"},\"engines\":{\"node\":\">=6.9.0\"},\"type\":\"commonjs\"}");

/***/ }),

/***/ 6419:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@babel/helper-split-export-declaration\",\"version\":\"7.22.5\",\"description\":\"\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/babel/babel.git\",\"directory\":\"packages/babel-helper-split-export-declaration\"},\"homepage\":\"https://babel.dev/docs/en/next/babel-helper-split-export-declaration\",\"license\":\"MIT\",\"publishConfig\":{\"access\":\"public\"},\"main\":\"./lib/index.js\",\"dependencies\":{\"@babel/types\":\"^7.22.5\"},\"engines\":{\"node\":\">=6.9.0\"},\"author\":\"The Babel Team (https://babel.dev/team)\",\"type\":\"commonjs\"}");

/***/ }),

/***/ 4615:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@babel/helper-string-parser\",\"version\":\"7.22.5\",\"description\":\"A utility package to parse strings\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/babel/babel.git\",\"directory\":\"packages/babel-helper-string-parser\"},\"homepage\":\"https://babel.dev/docs/en/next/babel-helper-string-parser\",\"license\":\"MIT\",\"publishConfig\":{\"access\":\"public\"},\"main\":\"./lib/index.js\",\"devDependencies\":{\"charcodes\":\"^0.2.0\"},\"engines\":{\"node\":\">=6.9.0\"},\"author\":\"The Babel Team (https://babel.dev/team)\",\"exports\":{\".\":\"./lib/index.js\",\"./package.json\":\"./package.json\"},\"type\":\"commonjs\"}");

/***/ }),

/***/ 3534:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@babel/helper-validator-identifier\",\"version\":\"7.22.5\",\"description\":\"Validate identifier/keywords name\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/babel/babel.git\",\"directory\":\"packages/babel-helper-validator-identifier\"},\"license\":\"MIT\",\"publishConfig\":{\"access\":\"public\"},\"main\":\"./lib/index.js\",\"exports\":{\".\":\"./lib/index.js\",\"./package.json\":\"./package.json\"},\"devDependencies\":{\"@unicode/unicode-15.0.0\":\"^1.3.1\",\"charcodes\":\"^0.2.0\"},\"engines\":{\"node\":\">=6.9.0\"},\"author\":\"The Babel Team (https://babel.dev/team)\",\"type\":\"commonjs\"}");

/***/ }),

/***/ 5958:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@babel/helper-validator-option\",\"version\":\"7.22.5\",\"description\":\"Validate plugin/preset options\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/babel/babel.git\",\"directory\":\"packages/babel-helper-validator-option\"},\"license\":\"MIT\",\"publishConfig\":{\"access\":\"public\"},\"main\":\"./lib/index.js\",\"exports\":{\".\":\"./lib/index.js\",\"./package.json\":\"./package.json\"},\"engines\":{\"node\":\">=6.9.0\"},\"author\":\"The Babel Team (https://babel.dev/team)\",\"type\":\"commonjs\"}");

/***/ }),

/***/ 5249:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@babel/helpers\",\"version\":\"7.22.5\",\"description\":\"Collection of helper functions used by Babel transforms.\",\"author\":\"The Babel Team (https://babel.dev/team)\",\"homepage\":\"https://babel.dev/docs/en/next/babel-helpers\",\"license\":\"MIT\",\"publishConfig\":{\"access\":\"public\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/babel/babel.git\",\"directory\":\"packages/babel-helpers\"},\"main\":\"./lib/index.js\",\"dependencies\":{\"@babel/template\":\"^7.22.5\",\"@babel/traverse\":\"^7.22.5\",\"@babel/types\":\"^7.22.5\"},\"devDependencies\":{\"@babel/generator\":\"^7.22.5\",\"@babel/helper-plugin-test-runner\":\"^7.22.5\",\"@babel/parser\":\"^7.22.5\",\"regenerator-runtime\":\"^0.13.11\",\"terser\":\"^5.9.0\"},\"engines\":{\"node\":\">=6.9.0\"},\"type\":\"commonjs\"}");

/***/ }),

/***/ 7871:
/***/ ((module) => {

"use strict";
module.exports = {"type":"module"};

/***/ }),

/***/ 8918:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@babel/highlight\",\"version\":\"7.22.5\",\"description\":\"Syntax highlight JavaScript strings for output in terminals.\",\"author\":\"The Babel Team (https://babel.dev/team)\",\"homepage\":\"https://babel.dev/docs/en/next/babel-highlight\",\"license\":\"MIT\",\"publishConfig\":{\"access\":\"public\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/babel/babel.git\",\"directory\":\"packages/babel-highlight\"},\"main\":\"./lib/index.js\",\"dependencies\":{\"@babel/helper-validator-identifier\":\"^7.22.5\",\"chalk\":\"^2.0.0\",\"js-tokens\":\"^4.0.0\"},\"devDependencies\":{\"@types/chalk\":\"^2.0.0\",\"strip-ansi\":\"^4.0.0\"},\"engines\":{\"node\":\">=6.9.0\"},\"type\":\"commonjs\"}");

/***/ }),

/***/ 3560:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@babel/parser\",\"version\":\"7.22.5\",\"description\":\"A JavaScript parser\",\"author\":\"The Babel Team (https://babel.dev/team)\",\"homepage\":\"https://babel.dev/docs/en/next/babel-parser\",\"bugs\":\"https://github.com/babel/babel/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3A%22pkg%3A+parser+%28babylon%29%22+is%3Aopen\",\"license\":\"MIT\",\"publishConfig\":{\"access\":\"public\"},\"keywords\":[\"babel\",\"javascript\",\"parser\",\"tc39\",\"ecmascript\",\"@babel/parser\"],\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/babel/babel.git\",\"directory\":\"packages/babel-parser\"},\"main\":\"./lib/index.js\",\"types\":\"./typings/babel-parser.d.ts\",\"files\":[\"bin\",\"lib\",\"typings/babel-parser.d.ts\",\"index.cjs\"],\"engines\":{\"node\":\">=6.0.0\"},\"devDependencies\":{\"@babel/code-frame\":\"^7.22.5\",\"@babel/helper-check-duplicate-nodes\":\"^7.22.5\",\"@babel/helper-fixtures\":\"^7.22.5\",\"@babel/helper-string-parser\":\"^7.22.5\",\"@babel/helper-validator-identifier\":\"^7.22.5\",\"charcodes\":\"^0.2.0\"},\"bin\":\"./bin/babel-parser.js\",\"type\":\"commonjs\"}");

/***/ }),

/***/ 144:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@babel/template\",\"version\":\"7.22.5\",\"description\":\"Generate an AST from a string template.\",\"author\":\"The Babel Team (https://babel.dev/team)\",\"homepage\":\"https://babel.dev/docs/en/next/babel-template\",\"bugs\":\"https://github.com/babel/babel/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3A%22pkg%3A%20template%22+is%3Aopen\",\"license\":\"MIT\",\"publishConfig\":{\"access\":\"public\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/babel/babel.git\",\"directory\":\"packages/babel-template\"},\"main\":\"./lib/index.js\",\"dependencies\":{\"@babel/code-frame\":\"^7.22.5\",\"@babel/parser\":\"^7.22.5\",\"@babel/types\":\"^7.22.5\"},\"engines\":{\"node\":\">=6.9.0\"},\"type\":\"commonjs\"}");

/***/ }),

/***/ 5081:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@babel/traverse\",\"version\":\"7.22.5\",\"description\":\"The Babel Traverse module maintains the overall tree state, and is responsible for replacing, removing, and adding nodes\",\"author\":\"The Babel Team (https://babel.dev/team)\",\"homepage\":\"https://babel.dev/docs/en/next/babel-traverse\",\"bugs\":\"https://github.com/babel/babel/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3A%22pkg%3A%20traverse%22+is%3Aopen\",\"license\":\"MIT\",\"publishConfig\":{\"access\":\"public\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/babel/babel.git\",\"directory\":\"packages/babel-traverse\"},\"main\":\"./lib/index.js\",\"dependencies\":{\"@babel/code-frame\":\"^7.22.5\",\"@babel/generator\":\"^7.22.5\",\"@babel/helper-environment-visitor\":\"^7.22.5\",\"@babel/helper-function-name\":\"^7.22.5\",\"@babel/helper-hoist-variables\":\"^7.22.5\",\"@babel/helper-split-export-declaration\":\"^7.22.5\",\"@babel/parser\":\"^7.22.5\",\"@babel/types\":\"^7.22.5\",\"debug\":\"^4.1.0\",\"globals\":\"^11.1.0\"},\"devDependencies\":{\"@babel/helper-plugin-test-runner\":\"^7.22.5\"},\"engines\":{\"node\":\">=6.9.0\"},\"type\":\"commonjs\"}");

/***/ }),

/***/ 3596:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@babel/types\",\"version\":\"7.22.5\",\"description\":\"Babel Types is a Lodash-esque utility library for AST nodes\",\"author\":\"The Babel Team (https://babel.dev/team)\",\"homepage\":\"https://babel.dev/docs/en/next/babel-types\",\"bugs\":\"https://github.com/babel/babel/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3A%22pkg%3A%20types%22+is%3Aopen\",\"license\":\"MIT\",\"publishConfig\":{\"access\":\"public\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/babel/babel.git\",\"directory\":\"packages/babel-types\"},\"main\":\"./lib/index.js\",\"types\":\"./lib/index-legacy.d.ts\",\"typesVersions\":{\">=3.7\":{\"lib/index-legacy.d.ts\":[\"lib/index.d.ts\"]}},\"dependencies\":{\"@babel/helper-string-parser\":\"^7.22.5\",\"@babel/helper-validator-identifier\":\"^7.22.5\",\"to-fast-properties\":\"^2.0.0\"},\"devDependencies\":{\"@babel/generator\":\"^7.22.5\",\"@babel/parser\":\"^7.22.5\",\"chalk\":\"^4.1.0\",\"glob\":\"^7.2.0\"},\"engines\":{\"node\":\">=6.9.0\"},\"type\":\"commonjs\"}");

/***/ }),

/***/ 4412:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"globals\",\"version\":\"13.20.0\",\"description\":\"Global identifiers from different JavaScript environments\",\"license\":\"MIT\",\"repository\":\"sindresorhus/globals\",\"funding\":\"https://github.com/sponsors/sindresorhus\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"https://sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava\"},\"files\":[\"index.js\",\"index.d.ts\",\"globals.json\"],\"keywords\":[\"globals\",\"global\",\"identifiers\",\"variables\",\"vars\",\"jshint\",\"eslint\",\"environments\"],\"dependencies\":{\"type-fest\":\"^0.20.2\"},\"devDependencies\":{\"ava\":\"^2.4.0\",\"tsd\":\"^0.14.0\",\"xo\":\"^0.36.1\"},\"xo\":{\"ignores\":[\"get-browser-globals.js\"],\"rules\":{\"node/no-unsupported-features/es-syntax\":\"off\"}},\"tsd\":{\"compilerOptions\":{\"resolveJsonModule\":true}}}");

/***/ }),

/***/ 2012:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@eslint/eslintrc\",\"version\":\"0.4.3\",\"description\":\"The legacy ESLintRC config file format for ESLint\",\"main\":\"lib/index.js\",\"files\":[\"lib\",\"conf\",\"LICENSE\"],\"publishConfig\":{\"access\":\"public\"},\"scripts\":{\"lint\":\"eslint . --report-unused-disable-directives\",\"fix\":\"npm run lint -- --fix\",\"test\":\"mocha -R progress -c 'tests/lib/**/*.js'\",\"generate-release\":\"eslint-generate-release\",\"generate-alpharelease\":\"eslint-generate-prerelease alpha\",\"generate-betarelease\":\"eslint-generate-prerelease beta\",\"generate-rcrelease\":\"eslint-generate-prerelease rc\",\"publish-release\":\"eslint-publish-release\"},\"repository\":\"eslint/eslintrc\",\"keywords\":[\"ESLint\",\"ESLintRC\",\"Configuration\"],\"author\":\"Nicholas C. Zakas\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/eslint/eslintrc/issues\"},\"homepage\":\"https://github.com/eslint/eslintrc#readme\",\"devDependencies\":{\"chai\":\"^4.2.0\",\"eslint\":\"^7.21.0\",\"eslint-config-eslint\":\"^7.0.0\",\"eslint-plugin-jsdoc\":\"^32.2.0\",\"eslint-plugin-node\":\"^11.1.0\",\"eslint-release\":\"^3.1.2\",\"fs-teardown\":\"0.1.1\",\"mocha\":\"^8.1.1\",\"shelljs\":\"^0.8.4\",\"sinon\":\"^9.2.0\",\"temp-dir\":\"^2.0.0\"},\"dependencies\":{\"ajv\":\"^6.12.4\",\"debug\":\"^4.1.1\",\"espree\":\"^7.3.0\",\"globals\":\"^13.9.0\",\"ignore\":\"^4.0.6\",\"import-fresh\":\"^3.2.1\",\"js-yaml\":\"^3.13.1\",\"minimatch\":\"^3.0.4\",\"strip-json-comments\":\"^3.1.1\"},\"engines\":{\"node\":\"^10.12.0 || >=12.0.0\"}}");

/***/ }),

/***/ 2170:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@humanwhocodes/config-array\",\"version\":\"0.5.0\",\"description\":\"Glob-based configuration matching.\",\"author\":\"Nicholas C. Zakas\",\"main\":\"api.js\",\"files\":[\"api.js\"],\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/humanwhocodes/config-array.git\"},\"bugs\":{\"url\":\"https://github.com/humanwhocodes/config-array/issues\"},\"homepage\":\"https://github.com/humanwhocodes/config-array#readme\",\"scripts\":{\"build\":\"rollup -c\",\"format\":\"nitpik\",\"lint\":\"eslint *.config.js src/*.js tests/*.js\",\"prepublish\":\"npm run build\",\"test:coverage\":\"nyc --include src/*.js npm run test\",\"test\":\"mocha -r esm tests/ --recursive\"},\"gitHooks\":{\"pre-commit\":\"lint-staged\"},\"lint-staged\":{\"*.js\":[\"nitpik\",\"eslint --fix --ignore-pattern '!.eslintrc.js'\"]},\"keywords\":[\"configuration\",\"configarray\",\"config file\"],\"license\":\"Apache-2.0\",\"engines\":{\"node\":\">=10.10.0\"},\"dependencies\":{\"@humanwhocodes/object-schema\":\"^1.2.0\",\"debug\":\"^4.1.1\",\"minimatch\":\"^3.0.4\"},\"devDependencies\":{\"@nitpik/javascript\":\"^0.3.3\",\"@nitpik/node\":\"0.0.5\",\"chai\":\"^4.2.0\",\"eslint\":\"^6.7.1\",\"esm\":\"^3.2.25\",\"lint-staged\":\"^10.2.8\",\"mocha\":\"^6.1.4\",\"nyc\":\"^14.1.1\",\"rollup\":\"^1.12.3\",\"yorkie\":\"^2.0.0\"}}");

/***/ }),

/***/ 3233:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@humanwhocodes/object-schema\",\"version\":\"1.2.1\",\"description\":\"An object schema merger/validator\",\"main\":\"src/index.js\",\"directories\":{\"test\":\"tests\"},\"scripts\":{\"test\":\"mocha tests/\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/humanwhocodes/object-schema.git\"},\"keywords\":[\"object\",\"validation\",\"schema\",\"merge\"],\"author\":\"Nicholas C. Zakas\",\"license\":\"BSD-3-Clause\",\"bugs\":{\"url\":\"https://github.com/humanwhocodes/object-schema/issues\"},\"homepage\":\"https://github.com/humanwhocodes/object-schema#readme\",\"devDependencies\":{\"chai\":\"^4.2.0\",\"eslint\":\"^5.13.0\",\"mocha\":\"^5.2.0\"}}");

/***/ }),

/***/ 4713:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@jridgewell/gen-mapping\",\"version\":\"0.3.3\",\"description\":\"Generate source maps\",\"keywords\":[\"source\",\"map\"],\"author\":\"Justin Ridgewell <justin@ridgewell.name>\",\"license\":\"MIT\",\"repository\":\"https://github.com/jridgewell/gen-mapping\",\"main\":\"dist/gen-mapping.umd.js\",\"module\":\"dist/gen-mapping.mjs\",\"types\":\"dist/types/gen-mapping.d.ts\",\"exports\":{\".\":[{\"types\":\"./dist/types/gen-mapping.d.ts\",\"browser\":\"./dist/gen-mapping.umd.js\",\"require\":\"./dist/gen-mapping.umd.js\",\"import\":\"./dist/gen-mapping.mjs\"},\"./dist/gen-mapping.umd.js\"],\"./package.json\":\"./package.json\"},\"files\":[\"dist\"],\"engines\":{\"node\":\">=6.0.0\"},\"scripts\":{\"benchmark\":\"run-s build:rollup benchmark:*\",\"benchmark:install\":\"cd benchmark && npm install\",\"benchmark:only\":\"node benchmark/index.mjs\",\"prebuild\":\"rm -rf dist\",\"build\":\"run-s -n build:*\",\"build:rollup\":\"rollup -c rollup.config.js\",\"build:ts\":\"tsc --project tsconfig.build.json\",\"lint\":\"run-s -n lint:*\",\"lint:prettier\":\"npm run test:lint:prettier -- --write\",\"lint:ts\":\"npm run test:lint:ts -- --fix\",\"pretest\":\"run-s build:rollup\",\"test\":\"run-s -n test:lint test:coverage\",\"test:debug\":\"mocha --inspect-brk\",\"test:lint\":\"run-s -n test:lint:*\",\"test:lint:prettier\":\"prettier --check '{src,test}/**/*.ts'\",\"test:lint:ts\":\"eslint '{src,test}/**/*.ts'\",\"test:only\":\"mocha\",\"test:coverage\":\"c8 mocha\",\"test:watch\":\"run-p 'build:rollup -- --watch' 'test:only -- --watch'\",\"prepublishOnly\":\"npm run preversion\",\"preversion\":\"run-s test build\"},\"devDependencies\":{\"@rollup/plugin-typescript\":\"8.3.2\",\"@types/mocha\":\"9.1.1\",\"@types/node\":\"17.0.29\",\"@typescript-eslint/eslint-plugin\":\"5.21.0\",\"@typescript-eslint/parser\":\"5.21.0\",\"benchmark\":\"2.1.4\",\"c8\":\"7.11.2\",\"eslint\":\"8.14.0\",\"eslint-config-prettier\":\"8.5.0\",\"mocha\":\"9.2.2\",\"npm-run-all\":\"4.1.5\",\"prettier\":\"2.6.2\",\"rollup\":\"2.70.2\",\"typescript\":\"4.6.3\"},\"dependencies\":{\"@jridgewell/set-array\":\"^1.0.1\",\"@jridgewell/sourcemap-codec\":\"^1.4.10\",\"@jridgewell/trace-mapping\":\"^0.3.9\"}}");

/***/ }),

/***/ 7953:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@jridgewell/resolve-uri\",\"version\":\"3.1.0\",\"description\":\"Resolve a URI relative to an optional base URI\",\"keywords\":[\"resolve\",\"uri\",\"url\",\"path\"],\"author\":\"Justin Ridgewell <justin@ridgewell.name>\",\"license\":\"MIT\",\"repository\":\"https://github.com/jridgewell/resolve-uri\",\"main\":\"dist/resolve-uri.umd.js\",\"module\":\"dist/resolve-uri.mjs\",\"typings\":\"dist/types/resolve-uri.d.ts\",\"exports\":{\".\":[{\"types\":\"./dist/types/resolve-uri.d.ts\",\"browser\":\"./dist/resolve-uri.umd.js\",\"require\":\"./dist/resolve-uri.umd.js\",\"import\":\"./dist/resolve-uri.mjs\"},\"./dist/resolve-uri.umd.js\"],\"./package.json\":\"./package.json\"},\"files\":[\"dist\"],\"engines\":{\"node\":\">=6.0.0\"},\"scripts\":{\"prebuild\":\"rm -rf dist\",\"build\":\"run-s -n build:*\",\"build:rollup\":\"rollup -c rollup.config.js\",\"build:ts\":\"tsc --project tsconfig.build.json\",\"lint\":\"run-s -n lint:*\",\"lint:prettier\":\"npm run test:lint:prettier -- --write\",\"lint:ts\":\"npm run test:lint:ts -- --fix\",\"pretest\":\"run-s build:rollup\",\"test\":\"run-s -n test:lint test:only\",\"test:debug\":\"mocha --inspect-brk\",\"test:lint\":\"run-s -n test:lint:*\",\"test:lint:prettier\":\"prettier --check '{src,test}/**/*.ts'\",\"test:lint:ts\":\"eslint '{src,test}/**/*.ts'\",\"test:only\":\"mocha\",\"test:coverage\":\"c8 mocha\",\"test:watch\":\"mocha --watch\",\"prepublishOnly\":\"npm run preversion\",\"preversion\":\"run-s test build\"},\"devDependencies\":{\"@jridgewell/resolve-uri-latest\":\"npm:@jridgewell/resolve-uri@*\",\"@rollup/plugin-typescript\":\"8.3.0\",\"@typescript-eslint/eslint-plugin\":\"5.10.0\",\"@typescript-eslint/parser\":\"5.10.0\",\"c8\":\"7.11.0\",\"eslint\":\"8.7.0\",\"eslint-config-prettier\":\"8.3.0\",\"mocha\":\"9.2.0\",\"npm-run-all\":\"4.1.5\",\"prettier\":\"2.5.1\",\"rollup\":\"2.66.0\",\"typescript\":\"4.5.5\"}}");

/***/ }),

/***/ 4016:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@jridgewell/set-array\",\"version\":\"1.1.2\",\"description\":\"Like a Set, but provides the index of the `key` in the backing array\",\"keywords\":[],\"author\":\"Justin Ridgewell <justin@ridgewell.name>\",\"license\":\"MIT\",\"repository\":\"https://github.com/jridgewell/set-array\",\"main\":\"dist/set-array.umd.js\",\"module\":\"dist/set-array.mjs\",\"typings\":\"dist/types/set-array.d.ts\",\"exports\":{\".\":[{\"types\":\"./dist/types/set-array.d.ts\",\"browser\":\"./dist/set-array.umd.js\",\"require\":\"./dist/set-array.umd.js\",\"import\":\"./dist/set-array.mjs\"},\"./dist/set-array.umd.js\"],\"./package.json\":\"./package.json\"},\"files\":[\"dist\",\"src\"],\"engines\":{\"node\":\">=6.0.0\"},\"scripts\":{\"prebuild\":\"rm -rf dist\",\"build\":\"run-s -n build:*\",\"build:rollup\":\"rollup -c rollup.config.js\",\"build:ts\":\"tsc --project tsconfig.build.json\",\"lint\":\"run-s -n lint:*\",\"lint:prettier\":\"npm run test:lint:prettier -- --write\",\"lint:ts\":\"npm run test:lint:ts -- --fix\",\"pretest\":\"run-s build:rollup\",\"test\":\"run-s -n test:lint test:only\",\"test:debug\":\"mocha --inspect-brk\",\"test:lint\":\"run-s -n test:lint:*\",\"test:lint:prettier\":\"prettier --check '{src,test}/**/*.ts'\",\"test:lint:ts\":\"eslint '{src,test}/**/*.ts'\",\"test:only\":\"mocha\",\"test:coverage\":\"c8 mocha\",\"test:watch\":\"mocha --watch\",\"prepublishOnly\":\"npm run preversion\",\"preversion\":\"run-s test build\"},\"devDependencies\":{\"@rollup/plugin-typescript\":\"8.3.0\",\"@types/mocha\":\"9.1.1\",\"@types/node\":\"17.0.29\",\"@typescript-eslint/eslint-plugin\":\"5.10.0\",\"@typescript-eslint/parser\":\"5.10.0\",\"c8\":\"7.11.0\",\"eslint\":\"8.7.0\",\"eslint-config-prettier\":\"8.3.0\",\"mocha\":\"9.2.0\",\"npm-run-all\":\"4.1.5\",\"prettier\":\"2.5.1\",\"rollup\":\"2.66.0\",\"typescript\":\"4.5.5\"}}");

/***/ }),

/***/ 1708:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@jridgewell/sourcemap-codec\",\"version\":\"1.4.15\",\"description\":\"Encode/decode sourcemap mappings\",\"keywords\":[\"sourcemap\",\"vlq\"],\"main\":\"dist/sourcemap-codec.umd.js\",\"module\":\"dist/sourcemap-codec.mjs\",\"types\":\"dist/types/sourcemap-codec.d.ts\",\"files\":[\"dist\"],\"exports\":{\".\":[{\"types\":\"./dist/types/sourcemap-codec.d.ts\",\"browser\":\"./dist/sourcemap-codec.umd.js\",\"require\":\"./dist/sourcemap-codec.umd.js\",\"import\":\"./dist/sourcemap-codec.mjs\"},\"./dist/sourcemap-codec.umd.js\"],\"./package.json\":\"./package.json\"},\"scripts\":{\"benchmark\":\"run-s build:rollup benchmark:*\",\"benchmark:install\":\"cd benchmark && npm install\",\"benchmark:only\":\"node --expose-gc benchmark/index.js\",\"build\":\"run-s -n build:*\",\"build:rollup\":\"rollup -c rollup.config.js\",\"build:ts\":\"tsc --project tsconfig.build.json\",\"lint\":\"run-s -n lint:*\",\"lint:prettier\":\"npm run test:lint:prettier -- --write\",\"lint:ts\":\"npm run test:lint:ts -- --fix\",\"prebuild\":\"rm -rf dist\",\"prepublishOnly\":\"npm run preversion\",\"preversion\":\"run-s test build\",\"pretest\":\"run-s build:rollup\",\"test\":\"run-s -n test:lint test:only\",\"test:debug\":\"mocha --inspect-brk\",\"test:lint\":\"run-s -n test:lint:*\",\"test:lint:prettier\":\"prettier --check '{src,test}/**/*.ts'\",\"test:lint:ts\":\"eslint '{src,test}/**/*.ts'\",\"test:only\":\"mocha\",\"test:coverage\":\"c8 mocha\",\"test:watch\":\"mocha --watch\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/jridgewell/sourcemap-codec.git\"},\"author\":\"Rich Harris\",\"license\":\"MIT\",\"devDependencies\":{\"@rollup/plugin-typescript\":\"8.3.0\",\"@types/node\":\"17.0.15\",\"@typescript-eslint/eslint-plugin\":\"5.10.0\",\"@typescript-eslint/parser\":\"5.10.0\",\"benchmark\":\"2.1.4\",\"c8\":\"7.11.2\",\"eslint\":\"8.7.0\",\"eslint-config-prettier\":\"8.3.0\",\"mocha\":\"9.2.0\",\"npm-run-all\":\"4.1.5\",\"prettier\":\"2.5.1\",\"rollup\":\"2.64.0\",\"source-map\":\"0.6.1\",\"source-map-js\":\"1.0.2\",\"sourcemap-codec\":\"1.4.8\",\"typescript\":\"4.5.4\"}}");

/***/ }),

/***/ 7308:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@jridgewell/sourcemap-codec\",\"version\":\"1.4.14\",\"description\":\"Encode/decode sourcemap mappings\",\"keywords\":[\"sourcemap\",\"vlq\"],\"main\":\"dist/sourcemap-codec.umd.js\",\"module\":\"dist/sourcemap-codec.mjs\",\"typings\":\"dist/types/sourcemap-codec.d.ts\",\"files\":[\"dist\",\"src\"],\"exports\":{\".\":[{\"types\":\"./dist/types/sourcemap-codec.d.ts\",\"browser\":\"./dist/sourcemap-codec.umd.js\",\"import\":\"./dist/sourcemap-codec.mjs\",\"require\":\"./dist/sourcemap-codec.umd.js\"},\"./dist/sourcemap-codec.umd.js\"],\"./package.json\":\"./package.json\"},\"scripts\":{\"benchmark\":\"run-s build:rollup benchmark:*\",\"benchmark:install\":\"cd benchmark && npm install\",\"benchmark:only\":\"node --expose-gc benchmark/index.js\",\"build\":\"run-s -n build:*\",\"build:rollup\":\"rollup -c rollup.config.js\",\"build:ts\":\"tsc --project tsconfig.build.json\",\"lint\":\"run-s -n lint:*\",\"lint:prettier\":\"npm run test:lint:prettier -- --write\",\"lint:ts\":\"npm run test:lint:ts -- --fix\",\"prebuild\":\"rm -rf dist\",\"prepublishOnly\":\"npm run preversion\",\"preversion\":\"run-s test build\",\"pretest\":\"run-s build:rollup\",\"test\":\"run-s -n test:lint test:only\",\"test:debug\":\"mocha --inspect-brk\",\"test:lint\":\"run-s -n test:lint:*\",\"test:lint:prettier\":\"prettier --check '{src,test}/**/*.ts'\",\"test:lint:ts\":\"eslint '{src,test}/**/*.ts'\",\"test:only\":\"mocha\",\"test:coverage\":\"c8 mocha\",\"test:watch\":\"mocha --watch\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/jridgewell/sourcemap-codec.git\"},\"author\":\"Rich Harris\",\"license\":\"MIT\",\"devDependencies\":{\"@rollup/plugin-typescript\":\"8.3.0\",\"@types/node\":\"17.0.15\",\"@typescript-eslint/eslint-plugin\":\"5.10.0\",\"@typescript-eslint/parser\":\"5.10.0\",\"benchmark\":\"2.1.4\",\"c8\":\"7.11.2\",\"eslint\":\"8.7.0\",\"eslint-config-prettier\":\"8.3.0\",\"mocha\":\"9.2.0\",\"npm-run-all\":\"4.1.5\",\"prettier\":\"2.5.1\",\"rollup\":\"2.64.0\",\"source-map\":\"0.6.1\",\"source-map-js\":\"1.0.2\",\"sourcemap-codec\":\"1.4.8\",\"typescript\":\"4.5.4\"}}");

/***/ }),

/***/ 3262:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@jridgewell/trace-mapping\",\"version\":\"0.3.18\",\"description\":\"Trace the original position through a source map\",\"keywords\":[\"source\",\"map\"],\"main\":\"dist/trace-mapping.umd.js\",\"module\":\"dist/trace-mapping.mjs\",\"types\":\"dist/types/trace-mapping.d.ts\",\"files\":[\"dist\"],\"exports\":{\".\":[{\"types\":\"./dist/types/trace-mapping.d.ts\",\"browser\":\"./dist/trace-mapping.umd.js\",\"require\":\"./dist/trace-mapping.umd.js\",\"import\":\"./dist/trace-mapping.mjs\"},\"./dist/trace-mapping.umd.js\"],\"./package.json\":\"./package.json\"},\"author\":\"Justin Ridgewell <justin@ridgewell.name>\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/jridgewell/trace-mapping.git\"},\"license\":\"MIT\",\"scripts\":{\"benchmark\":\"run-s build:rollup benchmark:*\",\"benchmark:install\":\"cd benchmark && npm install\",\"benchmark:only\":\"node --expose-gc benchmark/index.mjs\",\"build\":\"run-s -n build:*\",\"build:rollup\":\"rollup -c rollup.config.js\",\"build:ts\":\"tsc --project tsconfig.build.json\",\"lint\":\"run-s -n lint:*\",\"lint:prettier\":\"npm run test:lint:prettier -- --write\",\"lint:ts\":\"npm run test:lint:ts -- --fix\",\"prebuild\":\"rm -rf dist\",\"prepublishOnly\":\"npm run preversion\",\"preversion\":\"run-s test build\",\"test\":\"run-s -n test:lint test:only\",\"test:debug\":\"ava debug\",\"test:lint\":\"run-s -n test:lint:*\",\"test:lint:prettier\":\"prettier --check '{src,test}/**/*.ts' '**/*.md'\",\"test:lint:ts\":\"eslint '{src,test}/**/*.ts'\",\"test:only\":\"c8 ava\",\"test:watch\":\"ava --watch\"},\"devDependencies\":{\"@rollup/plugin-typescript\":\"8.5.0\",\"@typescript-eslint/eslint-plugin\":\"5.39.0\",\"@typescript-eslint/parser\":\"5.39.0\",\"ava\":\"4.3.3\",\"benchmark\":\"2.1.4\",\"c8\":\"7.12.0\",\"esbuild\":\"0.15.10\",\"eslint\":\"8.25.0\",\"eslint-config-prettier\":\"8.5.0\",\"eslint-plugin-no-only-tests\":\"3.0.0\",\"npm-run-all\":\"4.1.5\",\"prettier\":\"2.7.1\",\"rollup\":\"2.79.1\",\"tsx\":\"3.10.1\",\"typescript\":\"4.8.4\"},\"dependencies\":{\"@jridgewell/resolve-uri\":\"3.1.0\",\"@jridgewell/sourcemap-codec\":\"1.4.14\"}}");

/***/ }),

/***/ 8931:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@jsdevtools/ez-spawn\",\"version\":\"3.0.4\",\"description\":\"Simple, consistent sync or async process spawning\",\"keywords\":[\"cli\",\"process\",\"spawn\",\"exec\",\"sync\",\"async\"],\"author\":{\"name\":\"James Messinger\",\"url\":\"https://jamesmessinger.com\"},\"contributors\":[\"Randall Krauskopf (http://github.com/rkrauskopf)\",\"James Messinger (https://jamesmessinger.com)\"],\"license\":\"MIT\",\"homepage\":\"https://jstools.dev/ez-spawn\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/JS-DevTools/ez-spawn.git\"},\"main\":\"lib/index.js\",\"typings\":\"lib/index.d.ts\",\"files\":[\"lib\"],\"scripts\":{\"clean\":\"shx rm -rf .nyc_output coverage\",\"lint\":\"eslint lib test\",\"test\":\"npm run test:node && npm run test:typescript && npm run lint\",\"test:node\":\"mocha\",\"test:typescript\":\"tsc --noEmit test/specs/typescript-definition.spec.ts\",\"coverage\":\"nyc node_modules/mocha/bin/mocha\",\"upgrade\":\"npm-check -u && npm audit fix\",\"bump\":\"bump --tag --push --all\",\"release\":\"npm run upgrade && npm run clean && npm test && npm run bump\"},\"devDependencies\":{\"@jsdevtools/eslint-config\":\"^1.0.3\",\"@jsdevtools/version-bump-prompt\":\"^6.0.5\",\"@types/node\":\"^14.0.23\",\"chai\":\"^4.2.0\",\"eslint\":\"^7.4.0\",\"mocha\":\"^8.0.1\",\"npm-check\":\"^5.9.2\",\"nyc\":\"^15.1.0\",\"shx\":\"^0.3.2\",\"typescript\":\"^3.9.6\"},\"dependencies\":{\"call-me-maybe\":\"^1.0.1\",\"cross-spawn\":\"^7.0.3\",\"string-argv\":\"^0.3.1\",\"type-detect\":\"^4.0.8\"},\"engines\":{\"node\":\">=10\"}}");

/***/ }),

/***/ 5494:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@jsdevtools/version-bump-prompt\",\"version\":\"6.1.0\",\"description\":\"Automatically (or with prompts) bump your version number, commit changes, tag, and push to Git\",\"keywords\":[\"version\",\"bump\",\"npm\",\"node\",\"bower\",\"package\",\"git\",\"tag\",\"push\",\"prompt\"],\"author\":{\"name\":\"James Messinger\",\"url\":\"https://jamesmessinger.com\"},\"license\":\"MIT\",\"homepage\":\"https://jstools.dev/version-bump-prompt\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/JS-DevTools/version-bump-prompt.git\"},\"main\":\"lib/index.js\",\"types\":\"lib/index.d.ts\",\"bin\":{\"bump\":\"bin/bump.js\"},\"files\":[\"bin\",\"lib\"],\"scripts\":{\"clean\":\"shx rm -rf .nyc_output coverage lib\",\"lint\":\"eslint src test\",\"build\":\"tsc\",\"watch\":\"tsc --watch\",\"test\":\"mocha && npm run lint\",\"coverage\":\"nyc node_modules/mocha/bin/mocha\",\"upgrade\":\"npm-check -u && npm audit fix\",\"bump\":\"node bin/bump.js --tag --push --all\",\"release\":\"npm run upgrade && npm run clean && npm run build && npm test && npm run bump\"},\"devDependencies\":{\"@jsdevtools/chai-exec\":\"^2.1.1\",\"@jsdevtools/eslint-config\":\"^1.1.4\",\"@types/chai\":\"^4.2.12\",\"@types/command-line-args\":\"^5.0.0\",\"@types/globby\":\"^9.1.0\",\"@types/inquirer\":\"^7.3.1\",\"@types/mocha\":\"^8.0.3\",\"@types/node\":\"^14.6.2\",\"@types/semver\":\"^7.3.3\",\"chai\":\"^4.2.0\",\"del\":\"^5.1.0\",\"eslint\":\"^7.7.0\",\"mocha\":\"^8.1.3\",\"npm-check\":\"^5.9.0\",\"nyc\":\"^15.1.0\",\"shx\":\"^0.3.2\",\"strip-ansi\":\"^6.0.0\",\"typescript\":\"^4.0.2\"},\"dependencies\":{\"@jsdevtools/ez-spawn\":\"^3.0.4\",\"command-line-args\":\"^5.1.1\",\"detect-indent\":\"^6.0.0\",\"detect-newline\":\"^3.1.0\",\"globby\":\"^11.0.1\",\"inquirer\":\"^7.3.3\",\"log-symbols\":\"^4.0.0\",\"semver\":\"^7.3.2\"},\"engines\":{\"node\":\">=10\"},\"engineStrict\":true}");

/***/ }),

/***/ 9826:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@nicolo-ribaudo/eslint-scope-5-internals\",\"version\":\"5.1.1-v1\",\"description\":\"Proxy package exposing internals of eslint-scope@5 for @babel/eslint-parser\",\"main\":\"index.js\",\"dependencies\":{\"eslint-scope\":\"5.1.1\"},\"license\":\"MIT\",\"type\":\"commonjs\",\"publishConfig\":{\"access\":\"public\"}}");

/***/ }),

/***/ 2697:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@nodelib/fs.scandir\",\"version\":\"2.1.5\",\"description\":\"List files and directories inside the specified directory\",\"license\":\"MIT\",\"repository\":\"https://github.com/nodelib/nodelib/tree/master/packages/fs/fs.scandir\",\"keywords\":[\"NodeLib\",\"fs\",\"FileSystem\",\"file system\",\"scandir\",\"readdir\",\"dirent\"],\"engines\":{\"node\":\">= 8\"},\"files\":[\"out/**\",\"!out/**/*.map\",\"!out/**/*.spec.*\"],\"main\":\"out/index.js\",\"typings\":\"out/index.d.ts\",\"scripts\":{\"clean\":\"rimraf {tsconfig.tsbuildinfo,out}\",\"lint\":\"eslint \\\"src/**/*.ts\\\" --cache\",\"compile\":\"tsc -b .\",\"compile:watch\":\"tsc -p . --watch --sourceMap\",\"test\":\"mocha \\\"out/**/*.spec.js\\\" -s 0\",\"build\":\"npm run clean && npm run compile && npm run lint && npm test\",\"watch\":\"npm run clean && npm run compile:watch\"},\"dependencies\":{\"@nodelib/fs.stat\":\"2.0.5\",\"run-parallel\":\"^1.1.9\"},\"devDependencies\":{\"@nodelib/fs.macchiato\":\"1.0.4\",\"@types/run-parallel\":\"^1.1.0\"},\"gitHead\":\"d6a7960d5281d3dd5f8e2efba49bb552d090f562\"}");

/***/ }),

/***/ 6888:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@nodelib/fs.stat\",\"version\":\"2.0.5\",\"description\":\"Get the status of a file with some features\",\"license\":\"MIT\",\"repository\":\"https://github.com/nodelib/nodelib/tree/master/packages/fs/fs.stat\",\"keywords\":[\"NodeLib\",\"fs\",\"FileSystem\",\"file system\",\"stat\"],\"engines\":{\"node\":\">= 8\"},\"files\":[\"out/**\",\"!out/**/*.map\",\"!out/**/*.spec.*\"],\"main\":\"out/index.js\",\"typings\":\"out/index.d.ts\",\"scripts\":{\"clean\":\"rimraf {tsconfig.tsbuildinfo,out}\",\"lint\":\"eslint \\\"src/**/*.ts\\\" --cache\",\"compile\":\"tsc -b .\",\"compile:watch\":\"tsc -p . --watch --sourceMap\",\"test\":\"mocha \\\"out/**/*.spec.js\\\" -s 0\",\"build\":\"npm run clean && npm run compile && npm run lint && npm test\",\"watch\":\"npm run clean && npm run compile:watch\"},\"devDependencies\":{\"@nodelib/fs.macchiato\":\"1.0.4\"},\"gitHead\":\"d6a7960d5281d3dd5f8e2efba49bb552d090f562\"}");

/***/ }),

/***/ 8900:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@nodelib/fs.walk\",\"version\":\"1.2.8\",\"description\":\"A library for efficiently walking a directory recursively\",\"license\":\"MIT\",\"repository\":\"https://github.com/nodelib/nodelib/tree/master/packages/fs/fs.walk\",\"keywords\":[\"NodeLib\",\"fs\",\"FileSystem\",\"file system\",\"walk\",\"scanner\",\"crawler\"],\"engines\":{\"node\":\">= 8\"},\"files\":[\"out/**\",\"!out/**/*.map\",\"!out/**/*.spec.*\",\"!out/**/tests/**\"],\"main\":\"out/index.js\",\"typings\":\"out/index.d.ts\",\"scripts\":{\"clean\":\"rimraf {tsconfig.tsbuildinfo,out}\",\"lint\":\"eslint \\\"src/**/*.ts\\\" --cache\",\"compile\":\"tsc -b .\",\"compile:watch\":\"tsc -p . --watch --sourceMap\",\"test\":\"mocha \\\"out/**/*.spec.js\\\" -s 0\",\"build\":\"npm run clean && npm run compile && npm run lint && npm test\",\"watch\":\"npm run clean && npm run compile:watch\"},\"dependencies\":{\"@nodelib/fs.scandir\":\"2.1.5\",\"fastq\":\"^1.6.0\"},\"devDependencies\":{\"@nodelib/fs.macchiato\":\"1.0.4\"},\"gitHead\":\"1e5bad48565da2b06b8600e744324ea240bf49d8\"}");

/***/ }),

/***/ 7428:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const core = __webpack_require__(6432);

module.exports = () => ({
  // required inputs
  version: String(core.getInput('version')),

  // optional inputs
  commands: core.getMultilineInput('commands'),
  landoPlugin: process.env.GITHUB_ACTIONS ? core.getBooleanInput('lando-plugin') : false,
  root: core.getInput('root') || process.cwd(),
  sync: process.env.GITHUB_ACTIONS ? core.getBooleanInput('sync') : false,
  syncBranch: core.getInput('sync-branch') || 'main',
  syncEmail: core.getInput('sync-email') || 'github-actions@github.com',
  syncMessage: core.getInput('sync-message') || 'release %s generated by @lando/prepare-release-action',
  syncTags: core.getMultilineInput('sync-tags'),
  syncUsername: core.getInput('sync-username') || 'github-actions',
});


/***/ }),

/***/ 7539:
/***/ ((module) => {

"use strict";


module.exports = (manifest = {}) => {
  // if the manifest has a lando key then true
  if (manifest.hasOwnProperty('lando')) return true;
  // has the "lando-plugin" keyword
  if (manifest.keywords && manifest.keywords.includes('lando-plugin')) return true;
  // otherwise nope
  return false;
};


/***/ }),

/***/ 7351:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issue = exports.issueCommand = void 0;
const os = __importStar(__webpack_require__(2087));
const utils_1 = __webpack_require__(5278);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 6432:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
const command_1 = __webpack_require__(7351);
const file_command_1 = __webpack_require__(717);
const utils_1 = __webpack_require__(5278);
const os = __importStar(__webpack_require__(2087));
const path = __importStar(__webpack_require__(5622));
const oidc_utils_1 = __webpack_require__(8041);
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        return file_command_1.issueFileCommand('ENV', file_command_1.prepareKeyValueMessage(name, val));
    }
    command_1.issueCommand('set-env', { name }, convertedVal);
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueFileCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    if (options && options.trimWhitespace === false) {
        return val;
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */
function getMultilineInput(name, options) {
    const inputs = getInput(name, options)
        .split('\n')
        .filter(x => x !== '');
    if (options && options.trimWhitespace === false) {
        return inputs;
    }
    return inputs.map(input => input.trim());
}
exports.getMultilineInput = getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */
function getBooleanInput(name, options) {
    const trueValue = ['true', 'True', 'TRUE'];
    const falseValue = ['false', 'False', 'FALSE'];
    const val = getInput(name, options);
    if (trueValue.includes(val))
        return true;
    if (falseValue.includes(val))
        return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
        `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    const filePath = process.env['GITHUB_OUTPUT'] || '';
    if (filePath) {
        return file_command_1.issueFileCommand('OUTPUT', file_command_1.prepareKeyValueMessage(name, value));
    }
    process.stdout.write(os.EOL);
    command_1.issueCommand('set-output', { name }, utils_1.toCommandValue(value));
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function error(message, properties = {}) {
    command_1.issueCommand('error', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function warning(message, properties = {}) {
    command_1.issueCommand('warning', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function notice(message, properties = {}) {
    command_1.issueCommand('notice', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.notice = notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    const filePath = process.env['GITHUB_STATE'] || '';
    if (filePath) {
        return file_command_1.issueFileCommand('STATE', file_command_1.prepareKeyValueMessage(name, value));
    }
    command_1.issueCommand('save-state', { name }, utils_1.toCommandValue(value));
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
function getIDToken(aud) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield oidc_utils_1.OidcClient.getIDToken(aud);
    });
}
exports.getIDToken = getIDToken;
/**
 * Summary exports
 */
var summary_1 = __webpack_require__(1327);
Object.defineProperty(exports, "summary", ({ enumerable: true, get: function () { return summary_1.summary; } }));
/**
 * @deprecated use core.summary
 */
var summary_2 = __webpack_require__(1327);
Object.defineProperty(exports, "markdownSummary", ({ enumerable: true, get: function () { return summary_2.markdownSummary; } }));
/**
 * Path exports
 */
var path_utils_1 = __webpack_require__(2981);
Object.defineProperty(exports, "toPosixPath", ({ enumerable: true, get: function () { return path_utils_1.toPosixPath; } }));
Object.defineProperty(exports, "toWin32Path", ({ enumerable: true, get: function () { return path_utils_1.toWin32Path; } }));
Object.defineProperty(exports, "toPlatformPath", ({ enumerable: true, get: function () { return path_utils_1.toPlatformPath; } }));
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 717:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// For internal use, subject to change.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prepareKeyValueMessage = exports.issueFileCommand = void 0;
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__webpack_require__(5747));
const os = __importStar(__webpack_require__(2087));
const uuid_1 = __webpack_require__(4552);
const utils_1 = __webpack_require__(5278);
function issueFileCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueFileCommand = issueFileCommand;
function prepareKeyValueMessage(key, value) {
    const delimiter = `ghadelimiter_${uuid_1.v4()}`;
    const convertedValue = utils_1.toCommandValue(value);
    // These should realistically never happen, but just in case someone finds a
    // way to exploit uuid generation let's not allow keys or values that contain
    // the delimiter.
    if (key.includes(delimiter)) {
        throw new Error(`Unexpected input: name should not contain the delimiter "${delimiter}"`);
    }
    if (convertedValue.includes(delimiter)) {
        throw new Error(`Unexpected input: value should not contain the delimiter "${delimiter}"`);
    }
    return `${key}<<${delimiter}${os.EOL}${convertedValue}${os.EOL}${delimiter}`;
}
exports.prepareKeyValueMessage = prepareKeyValueMessage;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 8041:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OidcClient = void 0;
const http_client_1 = __webpack_require__(7318);
const auth_1 = __webpack_require__(5526);
const core_1 = __webpack_require__(6432);
class OidcClient {
    static createHttpClient(allowRetry = true, maxRetry = 10) {
        const requestOptions = {
            allowRetries: allowRetry,
            maxRetries: maxRetry
        };
        return new http_client_1.HttpClient('actions/oidc-client', [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
    }
    static getRequestToken() {
        const token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];
        if (!token) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable');
        }
        return token;
    }
    static getIDTokenUrl() {
        const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];
        if (!runtimeUrl) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable');
        }
        return runtimeUrl;
    }
    static getCall(id_token_url) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const httpclient = OidcClient.createHttpClient();
            const res = yield httpclient
                .getJson(id_token_url)
                .catch(error => {
                throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.result.message}`);
            });
            const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
            if (!id_token) {
                throw new Error('Response json body do not have ID Token field');
            }
            return id_token;
        });
    }
    static getIDToken(audience) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // New ID Token is requested from action service
                let id_token_url = OidcClient.getIDTokenUrl();
                if (audience) {
                    const encodedAudience = encodeURIComponent(audience);
                    id_token_url = `${id_token_url}&audience=${encodedAudience}`;
                }
                core_1.debug(`ID token url is ${id_token_url}`);
                const id_token = yield OidcClient.getCall(id_token_url);
                core_1.setSecret(id_token);
                return id_token;
            }
            catch (error) {
                throw new Error(`Error message: ${error.message}`);
            }
        });
    }
}
exports.OidcClient = OidcClient;
//# sourceMappingURL=oidc-utils.js.map

/***/ }),

/***/ 2981:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = void 0;
const path = __importStar(__webpack_require__(5622));
/**
 * toPosixPath converts the given path to the posix form. On Windows, \\ will be
 * replaced with /.
 *
 * @param pth. Path to transform.
 * @return string Posix path.
 */
function toPosixPath(pth) {
    return pth.replace(/[\\]/g, '/');
}
exports.toPosixPath = toPosixPath;
/**
 * toWin32Path converts the given path to the win32 form. On Linux, / will be
 * replaced with \\.
 *
 * @param pth. Path to transform.
 * @return string Win32 path.
 */
function toWin32Path(pth) {
    return pth.replace(/[/]/g, '\\');
}
exports.toWin32Path = toWin32Path;
/**
 * toPlatformPath converts the given path to a platform-specific path. It does
 * this by replacing instances of / and \ with the platform-specific path
 * separator.
 *
 * @param pth The path to platformize.
 * @return string The platform-specific path.
 */
function toPlatformPath(pth) {
    return pth.replace(/[/\\]/g, path.sep);
}
exports.toPlatformPath = toPlatformPath;
//# sourceMappingURL=path-utils.js.map

/***/ }),

/***/ 1327:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.summary = exports.markdownSummary = exports.SUMMARY_DOCS_URL = exports.SUMMARY_ENV_VAR = void 0;
const os_1 = __webpack_require__(2087);
const fs_1 = __webpack_require__(5747);
const { access, appendFile, writeFile } = fs_1.promises;
exports.SUMMARY_ENV_VAR = 'GITHUB_STEP_SUMMARY';
exports.SUMMARY_DOCS_URL = 'https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary';
class Summary {
    constructor() {
        this._buffer = '';
    }
    /**
     * Finds the summary file path from the environment, rejects if env var is not found or file does not exist
     * Also checks r/w permissions.
     *
     * @returns step summary file path
     */
    filePath() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._filePath) {
                return this._filePath;
            }
            const pathFromEnv = process.env[exports.SUMMARY_ENV_VAR];
            if (!pathFromEnv) {
                throw new Error(`Unable to find environment variable for $${exports.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);
            }
            try {
                yield access(pathFromEnv, fs_1.constants.R_OK | fs_1.constants.W_OK);
            }
            catch (_a) {
                throw new Error(`Unable to access summary file: '${pathFromEnv}'. Check if the file has correct read/write permissions.`);
            }
            this._filePath = pathFromEnv;
            return this._filePath;
        });
    }
    /**
     * Wraps content in an HTML tag, adding any HTML attributes
     *
     * @param {string} tag HTML tag to wrap
     * @param {string | null} content content within the tag
     * @param {[attribute: string]: string} attrs key-value list of HTML attributes to add
     *
     * @returns {string} content wrapped in HTML element
     */
    wrap(tag, content, attrs = {}) {
        const htmlAttrs = Object.entries(attrs)
            .map(([key, value]) => ` ${key}="${value}"`)
            .join('');
        if (!content) {
            return `<${tag}${htmlAttrs}>`;
        }
        return `<${tag}${htmlAttrs}>${content}</${tag}>`;
    }
    /**
     * Writes text in the buffer to the summary buffer file and empties buffer. Will append by default.
     *
     * @param {SummaryWriteOptions} [options] (optional) options for write operation
     *
     * @returns {Promise<Summary>} summary instance
     */
    write(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const overwrite = !!(options === null || options === void 0 ? void 0 : options.overwrite);
            const filePath = yield this.filePath();
            const writeFunc = overwrite ? writeFile : appendFile;
            yield writeFunc(filePath, this._buffer, { encoding: 'utf8' });
            return this.emptyBuffer();
        });
    }
    /**
     * Clears the summary buffer and wipes the summary file
     *
     * @returns {Summary} summary instance
     */
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.emptyBuffer().write({ overwrite: true });
        });
    }
    /**
     * Returns the current summary buffer as a string
     *
     * @returns {string} string of summary buffer
     */
    stringify() {
        return this._buffer;
    }
    /**
     * If the summary buffer is empty
     *
     * @returns {boolen} true if the buffer is empty
     */
    isEmptyBuffer() {
        return this._buffer.length === 0;
    }
    /**
     * Resets the summary buffer without writing to summary file
     *
     * @returns {Summary} summary instance
     */
    emptyBuffer() {
        this._buffer = '';
        return this;
    }
    /**
     * Adds raw text to the summary buffer
     *
     * @param {string} text content to add
     * @param {boolean} [addEOL=false] (optional) append an EOL to the raw text (default: false)
     *
     * @returns {Summary} summary instance
     */
    addRaw(text, addEOL = false) {
        this._buffer += text;
        return addEOL ? this.addEOL() : this;
    }
    /**
     * Adds the operating system-specific end-of-line marker to the buffer
     *
     * @returns {Summary} summary instance
     */
    addEOL() {
        return this.addRaw(os_1.EOL);
    }
    /**
     * Adds an HTML codeblock to the summary buffer
     *
     * @param {string} code content to render within fenced code block
     * @param {string} lang (optional) language to syntax highlight code
     *
     * @returns {Summary} summary instance
     */
    addCodeBlock(code, lang) {
        const attrs = Object.assign({}, (lang && { lang }));
        const element = this.wrap('pre', this.wrap('code', code), attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML list to the summary buffer
     *
     * @param {string[]} items list of items to render
     * @param {boolean} [ordered=false] (optional) if the rendered list should be ordered or not (default: false)
     *
     * @returns {Summary} summary instance
     */
    addList(items, ordered = false) {
        const tag = ordered ? 'ol' : 'ul';
        const listItems = items.map(item => this.wrap('li', item)).join('');
        const element = this.wrap(tag, listItems);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML table to the summary buffer
     *
     * @param {SummaryTableCell[]} rows table rows
     *
     * @returns {Summary} summary instance
     */
    addTable(rows) {
        const tableBody = rows
            .map(row => {
            const cells = row
                .map(cell => {
                if (typeof cell === 'string') {
                    return this.wrap('td', cell);
                }
                const { header, data, colspan, rowspan } = cell;
                const tag = header ? 'th' : 'td';
                const attrs = Object.assign(Object.assign({}, (colspan && { colspan })), (rowspan && { rowspan }));
                return this.wrap(tag, data, attrs);
            })
                .join('');
            return this.wrap('tr', cells);
        })
            .join('');
        const element = this.wrap('table', tableBody);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds a collapsable HTML details element to the summary buffer
     *
     * @param {string} label text for the closed state
     * @param {string} content collapsable content
     *
     * @returns {Summary} summary instance
     */
    addDetails(label, content) {
        const element = this.wrap('details', this.wrap('summary', label) + content);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML image tag to the summary buffer
     *
     * @param {string} src path to the image you to embed
     * @param {string} alt text description of the image
     * @param {SummaryImageOptions} options (optional) addition image attributes
     *
     * @returns {Summary} summary instance
     */
    addImage(src, alt, options) {
        const { width, height } = options || {};
        const attrs = Object.assign(Object.assign({}, (width && { width })), (height && { height }));
        const element = this.wrap('img', null, Object.assign({ src, alt }, attrs));
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML section heading element
     *
     * @param {string} text heading text
     * @param {number | string} [level=1] (optional) the heading level, default: 1
     *
     * @returns {Summary} summary instance
     */
    addHeading(text, level) {
        const tag = `h${level}`;
        const allowedTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)
            ? tag
            : 'h1';
        const element = this.wrap(allowedTag, text);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML thematic break (<hr>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addSeparator() {
        const element = this.wrap('hr', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML line break (<br>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addBreak() {
        const element = this.wrap('br', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML blockquote to the summary buffer
     *
     * @param {string} text quote text
     * @param {string} cite (optional) citation url
     *
     * @returns {Summary} summary instance
     */
    addQuote(text, cite) {
        const attrs = Object.assign({}, (cite && { cite }));
        const element = this.wrap('blockquote', text, attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML anchor tag to the summary buffer
     *
     * @param {string} text link text/content
     * @param {string} href hyperlink
     *
     * @returns {Summary} summary instance
     */
    addLink(text, href) {
        const element = this.wrap('a', text, { href });
        return this.addRaw(element).addEOL();
    }
}
const _summary = new Summary();
/**
 * @deprecated use `core.summary`
 */
exports.markdownSummary = _summary;
exports.summary = _summary;
//# sourceMappingURL=summary.js.map

/***/ }),

/***/ 5278:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toCommandProperties = exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */
function toCommandProperties(annotationProperties) {
    if (!Object.keys(annotationProperties).length) {
        return {};
    }
    return {
        title: annotationProperties.title,
        file: annotationProperties.file,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
    };
}
exports.toCommandProperties = toCommandProperties;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 1514:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getExecOutput = exports.exec = void 0;
const string_decoder_1 = __webpack_require__(4304);
const tr = __importStar(__webpack_require__(8159));
/**
 * Exec a command.
 * Output will be streamed to the live console.
 * Returns promise with return code
 *
 * @param     commandLine        command to execute (can include additional args). Must be correctly escaped.
 * @param     args               optional arguments for tool. Escaping is handled by the lib.
 * @param     options            optional exec options.  See ExecOptions
 * @returns   Promise<number>    exit code
 */
function exec(commandLine, args, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const commandArgs = tr.argStringToArray(commandLine);
        if (commandArgs.length === 0) {
            throw new Error(`Parameter 'commandLine' cannot be null or empty.`);
        }
        // Path to tool to execute should be first arg
        const toolPath = commandArgs[0];
        args = commandArgs.slice(1).concat(args || []);
        const runner = new tr.ToolRunner(toolPath, args, options);
        return runner.exec();
    });
}
exports.exec = exec;
/**
 * Exec a command and get the output.
 * Output will be streamed to the live console.
 * Returns promise with the exit code and collected stdout and stderr
 *
 * @param     commandLine           command to execute (can include additional args). Must be correctly escaped.
 * @param     args                  optional arguments for tool. Escaping is handled by the lib.
 * @param     options               optional exec options.  See ExecOptions
 * @returns   Promise<ExecOutput>   exit code, stdout, and stderr
 */
function getExecOutput(commandLine, args, options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        let stdout = '';
        let stderr = '';
        //Using string decoder covers the case where a mult-byte character is split
        const stdoutDecoder = new string_decoder_1.StringDecoder('utf8');
        const stderrDecoder = new string_decoder_1.StringDecoder('utf8');
        const originalStdoutListener = (_a = options === null || options === void 0 ? void 0 : options.listeners) === null || _a === void 0 ? void 0 : _a.stdout;
        const originalStdErrListener = (_b = options === null || options === void 0 ? void 0 : options.listeners) === null || _b === void 0 ? void 0 : _b.stderr;
        const stdErrListener = (data) => {
            stderr += stderrDecoder.write(data);
            if (originalStdErrListener) {
                originalStdErrListener(data);
            }
        };
        const stdOutListener = (data) => {
            stdout += stdoutDecoder.write(data);
            if (originalStdoutListener) {
                originalStdoutListener(data);
            }
        };
        const listeners = Object.assign(Object.assign({}, options === null || options === void 0 ? void 0 : options.listeners), { stdout: stdOutListener, stderr: stdErrListener });
        const exitCode = yield exec(commandLine, args, Object.assign(Object.assign({}, options), { listeners }));
        //flush any remaining characters
        stdout += stdoutDecoder.end();
        stderr += stderrDecoder.end();
        return {
            exitCode,
            stdout,
            stderr
        };
    });
}
exports.getExecOutput = getExecOutput;
//# sourceMappingURL=exec.js.map

/***/ }),

/***/ 8159:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.argStringToArray = exports.ToolRunner = void 0;
const os = __importStar(__webpack_require__(2087));
const events = __importStar(__webpack_require__(8614));
const child = __importStar(__webpack_require__(3129));
const path = __importStar(__webpack_require__(5622));
const io = __importStar(__webpack_require__(7436));
const ioUtil = __importStar(__webpack_require__(1962));
const timers_1 = __webpack_require__(9343);
/* eslint-disable @typescript-eslint/unbound-method */
const IS_WINDOWS = process.platform === 'win32';
/*
 * Class for running command line tools. Handles quoting and arg parsing in a platform agnostic way.
 */
class ToolRunner extends events.EventEmitter {
    constructor(toolPath, args, options) {
        super();
        if (!toolPath) {
            throw new Error("Parameter 'toolPath' cannot be null or empty.");
        }
        this.toolPath = toolPath;
        this.args = args || [];
        this.options = options || {};
    }
    _debug(message) {
        if (this.options.listeners && this.options.listeners.debug) {
            this.options.listeners.debug(message);
        }
    }
    _getCommandString(options, noPrefix) {
        const toolPath = this._getSpawnFileName();
        const args = this._getSpawnArgs(options);
        let cmd = noPrefix ? '' : '[command]'; // omit prefix when piped to a second tool
        if (IS_WINDOWS) {
            // Windows + cmd file
            if (this._isCmdFile()) {
                cmd += toolPath;
                for (const a of args) {
                    cmd += ` ${a}`;
                }
            }
            // Windows + verbatim
            else if (options.windowsVerbatimArguments) {
                cmd += `"${toolPath}"`;
                for (const a of args) {
                    cmd += ` ${a}`;
                }
            }
            // Windows (regular)
            else {
                cmd += this._windowsQuoteCmdArg(toolPath);
                for (const a of args) {
                    cmd += ` ${this._windowsQuoteCmdArg(a)}`;
                }
            }
        }
        else {
            // OSX/Linux - this can likely be improved with some form of quoting.
            // creating processes on Unix is fundamentally different than Windows.
            // on Unix, execvp() takes an arg array.
            cmd += toolPath;
            for (const a of args) {
                cmd += ` ${a}`;
            }
        }
        return cmd;
    }
    _processLineBuffer(data, strBuffer, onLine) {
        try {
            let s = strBuffer + data.toString();
            let n = s.indexOf(os.EOL);
            while (n > -1) {
                const line = s.substring(0, n);
                onLine(line);
                // the rest of the string ...
                s = s.substring(n + os.EOL.length);
                n = s.indexOf(os.EOL);
            }
            return s;
        }
        catch (err) {
            // streaming lines to console is best effort.  Don't fail a build.
            this._debug(`error processing line. Failed with error ${err}`);
            return '';
        }
    }
    _getSpawnFileName() {
        if (IS_WINDOWS) {
            if (this._isCmdFile()) {
                return process.env['COMSPEC'] || 'cmd.exe';
            }
        }
        return this.toolPath;
    }
    _getSpawnArgs(options) {
        if (IS_WINDOWS) {
            if (this._isCmdFile()) {
                let argline = `/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;
                for (const a of this.args) {
                    argline += ' ';
                    argline += options.windowsVerbatimArguments
                        ? a
                        : this._windowsQuoteCmdArg(a);
                }
                argline += '"';
                return [argline];
            }
        }
        return this.args;
    }
    _endsWith(str, end) {
        return str.endsWith(end);
    }
    _isCmdFile() {
        const upperToolPath = this.toolPath.toUpperCase();
        return (this._endsWith(upperToolPath, '.CMD') ||
            this._endsWith(upperToolPath, '.BAT'));
    }
    _windowsQuoteCmdArg(arg) {
        // for .exe, apply the normal quoting rules that libuv applies
        if (!this._isCmdFile()) {
            return this._uvQuoteCmdArg(arg);
        }
        // otherwise apply quoting rules specific to the cmd.exe command line parser.
        // the libuv rules are generic and are not designed specifically for cmd.exe
        // command line parser.
        //
        // for a detailed description of the cmd.exe command line parser, refer to
        // http://stackoverflow.com/questions/4094699/how-does-the-windows-command-interpreter-cmd-exe-parse-scripts/7970912#7970912
        // need quotes for empty arg
        if (!arg) {
            return '""';
        }
        // determine whether the arg needs to be quoted
        const cmdSpecialChars = [
            ' ',
            '\t',
            '&',
            '(',
            ')',
            '[',
            ']',
            '{',
            '}',
            '^',
            '=',
            ';',
            '!',
            "'",
            '+',
            ',',
            '`',
            '~',
            '|',
            '<',
            '>',
            '"'
        ];
        let needsQuotes = false;
        for (const char of arg) {
            if (cmdSpecialChars.some(x => x === char)) {
                needsQuotes = true;
                break;
            }
        }
        // short-circuit if quotes not needed
        if (!needsQuotes) {
            return arg;
        }
        // the following quoting rules are very similar to the rules that by libuv applies.
        //
        // 1) wrap the string in quotes
        //
        // 2) double-up quotes - i.e. " => ""
        //
        //    this is different from the libuv quoting rules. libuv replaces " with \", which unfortunately
        //    doesn't work well with a cmd.exe command line.
        //
        //    note, replacing " with "" also works well if the arg is passed to a downstream .NET console app.
        //    for example, the command line:
        //          foo.exe "myarg:""my val"""
        //    is parsed by a .NET console app into an arg array:
        //          [ "myarg:\"my val\"" ]
        //    which is the same end result when applying libuv quoting rules. although the actual
        //    command line from libuv quoting rules would look like:
        //          foo.exe "myarg:\"my val\""
        //
        // 3) double-up slashes that precede a quote,
        //    e.g.  hello \world    => "hello \world"
        //          hello\"world    => "hello\\""world"
        //          hello\\"world   => "hello\\\\""world"
        //          hello world\    => "hello world\\"
        //
        //    technically this is not required for a cmd.exe command line, or the batch argument parser.
        //    the reasons for including this as a .cmd quoting rule are:
        //
        //    a) this is optimized for the scenario where the argument is passed from the .cmd file to an
        //       external program. many programs (e.g. .NET console apps) rely on the slash-doubling rule.
        //
        //    b) it's what we've been doing previously (by deferring to node default behavior) and we
        //       haven't heard any complaints about that aspect.
        //
        // note, a weakness of the quoting rules chosen here, is that % is not escaped. in fact, % cannot be
        // escaped when used on the command line directly - even though within a .cmd file % can be escaped
        // by using %%.
        //
        // the saving grace is, on the command line, %var% is left as-is if var is not defined. this contrasts
        // the line parsing rules within a .cmd file, where if var is not defined it is replaced with nothing.
        //
        // one option that was explored was replacing % with ^% - i.e. %var% => ^%var^%. this hack would
        // often work, since it is unlikely that var^ would exist, and the ^ character is removed when the
        // variable is used. the problem, however, is that ^ is not removed when %* is used to pass the args
        // to an external program.
        //
        // an unexplored potential solution for the % escaping problem, is to create a wrapper .cmd file.
        // % can be escaped within a .cmd file.
        let reverse = '"';
        let quoteHit = true;
        for (let i = arg.length; i > 0; i--) {
            // walk the string in reverse
            reverse += arg[i - 1];
            if (quoteHit && arg[i - 1] === '\\') {
                reverse += '\\'; // double the slash
            }
            else if (arg[i - 1] === '"') {
                quoteHit = true;
                reverse += '"'; // double the quote
            }
            else {
                quoteHit = false;
            }
        }
        reverse += '"';
        return reverse
            .split('')
            .reverse()
            .join('');
    }
    _uvQuoteCmdArg(arg) {
        // Tool runner wraps child_process.spawn() and needs to apply the same quoting as
        // Node in certain cases where the undocumented spawn option windowsVerbatimArguments
        // is used.
        //
        // Since this function is a port of quote_cmd_arg from Node 4.x (technically, lib UV,
        // see https://github.com/nodejs/node/blob/v4.x/deps/uv/src/win/process.c for details),
        // pasting copyright notice from Node within this function:
        //
        //      Copyright Joyent, Inc. and other Node contributors. All rights reserved.
        //
        //      Permission is hereby granted, free of charge, to any person obtaining a copy
        //      of this software and associated documentation files (the "Software"), to
        //      deal in the Software without restriction, including without limitation the
        //      rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
        //      sell copies of the Software, and to permit persons to whom the Software is
        //      furnished to do so, subject to the following conditions:
        //
        //      The above copyright notice and this permission notice shall be included in
        //      all copies or substantial portions of the Software.
        //
        //      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        //      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        //      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        //      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        //      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
        //      FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
        //      IN THE SOFTWARE.
        if (!arg) {
            // Need double quotation for empty argument
            return '""';
        }
        if (!arg.includes(' ') && !arg.includes('\t') && !arg.includes('"')) {
            // No quotation needed
            return arg;
        }
        if (!arg.includes('"') && !arg.includes('\\')) {
            // No embedded double quotes or backslashes, so I can just wrap
            // quote marks around the whole thing.
            return `"${arg}"`;
        }
        // Expected input/output:
        //   input : hello"world
        //   output: "hello\"world"
        //   input : hello""world
        //   output: "hello\"\"world"
        //   input : hello\world
        //   output: hello\world
        //   input : hello\\world
        //   output: hello\\world
        //   input : hello\"world
        //   output: "hello\\\"world"
        //   input : hello\\"world
        //   output: "hello\\\\\"world"
        //   input : hello world\
        //   output: "hello world\\" - note the comment in libuv actually reads "hello world\"
        //                             but it appears the comment is wrong, it should be "hello world\\"
        let reverse = '"';
        let quoteHit = true;
        for (let i = arg.length; i > 0; i--) {
            // walk the string in reverse
            reverse += arg[i - 1];
            if (quoteHit && arg[i - 1] === '\\') {
                reverse += '\\';
            }
            else if (arg[i - 1] === '"') {
                quoteHit = true;
                reverse += '\\';
            }
            else {
                quoteHit = false;
            }
        }
        reverse += '"';
        return reverse
            .split('')
            .reverse()
            .join('');
    }
    _cloneExecOptions(options) {
        options = options || {};
        const result = {
            cwd: options.cwd || process.cwd(),
            env: options.env || process.env,
            silent: options.silent || false,
            windowsVerbatimArguments: options.windowsVerbatimArguments || false,
            failOnStdErr: options.failOnStdErr || false,
            ignoreReturnCode: options.ignoreReturnCode || false,
            delay: options.delay || 10000
        };
        result.outStream = options.outStream || process.stdout;
        result.errStream = options.errStream || process.stderr;
        return result;
    }
    _getSpawnOptions(options, toolPath) {
        options = options || {};
        const result = {};
        result.cwd = options.cwd;
        result.env = options.env;
        result['windowsVerbatimArguments'] =
            options.windowsVerbatimArguments || this._isCmdFile();
        if (options.windowsVerbatimArguments) {
            result.argv0 = `"${toolPath}"`;
        }
        return result;
    }
    /**
     * Exec a tool.
     * Output will be streamed to the live console.
     * Returns promise with return code
     *
     * @param     tool     path to tool to exec
     * @param     options  optional exec options.  See ExecOptions
     * @returns   number
     */
    exec() {
        return __awaiter(this, void 0, void 0, function* () {
            // root the tool path if it is unrooted and contains relative pathing
            if (!ioUtil.isRooted(this.toolPath) &&
                (this.toolPath.includes('/') ||
                    (IS_WINDOWS && this.toolPath.includes('\\')))) {
                // prefer options.cwd if it is specified, however options.cwd may also need to be rooted
                this.toolPath = path.resolve(process.cwd(), this.options.cwd || process.cwd(), this.toolPath);
            }
            // if the tool is only a file name, then resolve it from the PATH
            // otherwise verify it exists (add extension on Windows if necessary)
            this.toolPath = yield io.which(this.toolPath, true);
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                this._debug(`exec tool: ${this.toolPath}`);
                this._debug('arguments:');
                for (const arg of this.args) {
                    this._debug(`   ${arg}`);
                }
                const optionsNonNull = this._cloneExecOptions(this.options);
                if (!optionsNonNull.silent && optionsNonNull.outStream) {
                    optionsNonNull.outStream.write(this._getCommandString(optionsNonNull) + os.EOL);
                }
                const state = new ExecState(optionsNonNull, this.toolPath);
                state.on('debug', (message) => {
                    this._debug(message);
                });
                if (this.options.cwd && !(yield ioUtil.exists(this.options.cwd))) {
                    return reject(new Error(`The cwd: ${this.options.cwd} does not exist!`));
                }
                const fileName = this._getSpawnFileName();
                const cp = child.spawn(fileName, this._getSpawnArgs(optionsNonNull), this._getSpawnOptions(this.options, fileName));
                let stdbuffer = '';
                if (cp.stdout) {
                    cp.stdout.on('data', (data) => {
                        if (this.options.listeners && this.options.listeners.stdout) {
                            this.options.listeners.stdout(data);
                        }
                        if (!optionsNonNull.silent && optionsNonNull.outStream) {
                            optionsNonNull.outStream.write(data);
                        }
                        stdbuffer = this._processLineBuffer(data, stdbuffer, (line) => {
                            if (this.options.listeners && this.options.listeners.stdline) {
                                this.options.listeners.stdline(line);
                            }
                        });
                    });
                }
                let errbuffer = '';
                if (cp.stderr) {
                    cp.stderr.on('data', (data) => {
                        state.processStderr = true;
                        if (this.options.listeners && this.options.listeners.stderr) {
                            this.options.listeners.stderr(data);
                        }
                        if (!optionsNonNull.silent &&
                            optionsNonNull.errStream &&
                            optionsNonNull.outStream) {
                            const s = optionsNonNull.failOnStdErr
                                ? optionsNonNull.errStream
                                : optionsNonNull.outStream;
                            s.write(data);
                        }
                        errbuffer = this._processLineBuffer(data, errbuffer, (line) => {
                            if (this.options.listeners && this.options.listeners.errline) {
                                this.options.listeners.errline(line);
                            }
                        });
                    });
                }
                cp.on('error', (err) => {
                    state.processError = err.message;
                    state.processExited = true;
                    state.processClosed = true;
                    state.CheckComplete();
                });
                cp.on('exit', (code) => {
                    state.processExitCode = code;
                    state.processExited = true;
                    this._debug(`Exit code ${code} received from tool '${this.toolPath}'`);
                    state.CheckComplete();
                });
                cp.on('close', (code) => {
                    state.processExitCode = code;
                    state.processExited = true;
                    state.processClosed = true;
                    this._debug(`STDIO streams have closed for tool '${this.toolPath}'`);
                    state.CheckComplete();
                });
                state.on('done', (error, exitCode) => {
                    if (stdbuffer.length > 0) {
                        this.emit('stdline', stdbuffer);
                    }
                    if (errbuffer.length > 0) {
                        this.emit('errline', errbuffer);
                    }
                    cp.removeAllListeners();
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(exitCode);
                    }
                });
                if (this.options.input) {
                    if (!cp.stdin) {
                        throw new Error('child process missing stdin');
                    }
                    cp.stdin.end(this.options.input);
                }
            }));
        });
    }
}
exports.ToolRunner = ToolRunner;
/**
 * Convert an arg string to an array of args. Handles escaping
 *
 * @param    argString   string of arguments
 * @returns  string[]    array of arguments
 */
function argStringToArray(argString) {
    const args = [];
    let inQuotes = false;
    let escaped = false;
    let arg = '';
    function append(c) {
        // we only escape double quotes.
        if (escaped && c !== '"') {
            arg += '\\';
        }
        arg += c;
        escaped = false;
    }
    for (let i = 0; i < argString.length; i++) {
        const c = argString.charAt(i);
        if (c === '"') {
            if (!escaped) {
                inQuotes = !inQuotes;
            }
            else {
                append(c);
            }
            continue;
        }
        if (c === '\\' && escaped) {
            append(c);
            continue;
        }
        if (c === '\\' && inQuotes) {
            escaped = true;
            continue;
        }
        if (c === ' ' && !inQuotes) {
            if (arg.length > 0) {
                args.push(arg);
                arg = '';
            }
            continue;
        }
        append(c);
    }
    if (arg.length > 0) {
        args.push(arg.trim());
    }
    return args;
}
exports.argStringToArray = argStringToArray;
class ExecState extends events.EventEmitter {
    constructor(options, toolPath) {
        super();
        this.processClosed = false; // tracks whether the process has exited and stdio is closed
        this.processError = '';
        this.processExitCode = 0;
        this.processExited = false; // tracks whether the process has exited
        this.processStderr = false; // tracks whether stderr was written to
        this.delay = 10000; // 10 seconds
        this.done = false;
        this.timeout = null;
        if (!toolPath) {
            throw new Error('toolPath must not be empty');
        }
        this.options = options;
        this.toolPath = toolPath;
        if (options.delay) {
            this.delay = options.delay;
        }
    }
    CheckComplete() {
        if (this.done) {
            return;
        }
        if (this.processClosed) {
            this._setResult();
        }
        else if (this.processExited) {
            this.timeout = timers_1.setTimeout(ExecState.HandleTimeout, this.delay, this);
        }
    }
    _debug(message) {
        this.emit('debug', message);
    }
    _setResult() {
        // determine whether there is an error
        let error;
        if (this.processExited) {
            if (this.processError) {
                error = new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`);
            }
            else if (this.processExitCode !== 0 && !this.options.ignoreReturnCode) {
                error = new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`);
            }
            else if (this.processStderr && this.options.failOnStdErr) {
                error = new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`);
            }
        }
        // clear the timeout
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        this.done = true;
        this.emit('done', error, this.processExitCode);
    }
    static HandleTimeout(state) {
        if (state.done) {
            return;
        }
        if (!state.processClosed && state.processExited) {
            const message = `The STDIO streams did not close within ${state.delay /
                1000} seconds of the exit event from process '${state.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;
            state._debug(message);
        }
        state._setResult();
    }
}
//# sourceMappingURL=toolrunner.js.map

/***/ }),

/***/ 5526:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonalAccessTokenCredentialHandler = exports.BearerCredentialHandler = exports.BasicCredentialHandler = void 0;
class BasicCredentialHandler {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`${this.username}:${this.password}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BasicCredentialHandler = BasicCredentialHandler;
class BearerCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Bearer ${this.token}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BearerCredentialHandler = BearerCredentialHandler;
class PersonalAccessTokenCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`PAT:${this.token}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 7318:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpClient = exports.isHttps = exports.HttpClientResponse = exports.HttpClientError = exports.getProxyUrl = exports.MediaTypes = exports.Headers = exports.HttpCodes = void 0;
const http = __importStar(__webpack_require__(8605));
const https = __importStar(__webpack_require__(7211));
const pm = __importStar(__webpack_require__(1846));
const tunnel = __importStar(__webpack_require__(4294));
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
var Headers;
(function (Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
function getProxyUrl(serverUrl) {
    const proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
exports.getProxyUrl = getProxyUrl;
const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
];
const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'HttpClientError';
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpClientError.prototype);
    }
}
exports.HttpClientError = HttpClientError;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let output = Buffer.alloc(0);
                this.message.on('data', (chunk) => {
                    output = Buffer.concat([output, chunk]);
                });
                this.message.on('end', () => {
                    resolve(output.toString());
                });
            }));
        });
    }
}
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    const parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
        });
    }
    get(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('GET', requestUrl, null, additionalHeaders || {});
        });
    }
    del(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('DELETE', requestUrl, null, additionalHeaders || {});
        });
    }
    post(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('POST', requestUrl, data, additionalHeaders || {});
        });
    }
    patch(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PATCH', requestUrl, data, additionalHeaders || {});
        });
    }
    put(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PUT', requestUrl, data, additionalHeaders || {});
        });
    }
    head(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('HEAD', requestUrl, null, additionalHeaders || {});
        });
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(verb, requestUrl, stream, additionalHeaders);
        });
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    getJson(requestUrl, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            const res = yield this.get(requestUrl, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    postJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.post(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    putJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.put(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    patchJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.patch(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    request(verb, requestUrl, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._disposed) {
                throw new Error('Client has already been disposed.');
            }
            const parsedUrl = new URL(requestUrl);
            let info = this._prepareRequest(verb, parsedUrl, headers);
            // Only perform retries on reads since writes may not be idempotent.
            const maxTries = this._allowRetries && RetryableHttpVerbs.includes(verb)
                ? this._maxRetries + 1
                : 1;
            let numTries = 0;
            let response;
            do {
                response = yield this.requestRaw(info, data);
                // Check if it's an authentication challenge
                if (response &&
                    response.message &&
                    response.message.statusCode === HttpCodes.Unauthorized) {
                    let authenticationHandler;
                    for (const handler of this.handlers) {
                        if (handler.canHandleAuthentication(response)) {
                            authenticationHandler = handler;
                            break;
                        }
                    }
                    if (authenticationHandler) {
                        return authenticationHandler.handleAuthentication(this, info, data);
                    }
                    else {
                        // We have received an unauthorized response but have no handlers to handle it.
                        // Let the response return to the caller.
                        return response;
                    }
                }
                let redirectsRemaining = this._maxRedirects;
                while (response.message.statusCode &&
                    HttpRedirectCodes.includes(response.message.statusCode) &&
                    this._allowRedirects &&
                    redirectsRemaining > 0) {
                    const redirectUrl = response.message.headers['location'];
                    if (!redirectUrl) {
                        // if there's no location to redirect to, we won't
                        break;
                    }
                    const parsedRedirectUrl = new URL(redirectUrl);
                    if (parsedUrl.protocol === 'https:' &&
                        parsedUrl.protocol !== parsedRedirectUrl.protocol &&
                        !this._allowRedirectDowngrade) {
                        throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                    }
                    // we need to finish reading the response before reassigning response
                    // which will leak the open socket.
                    yield response.readBody();
                    // strip authorization header if redirected to a different hostname
                    if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                        for (const header in headers) {
                            // header names are case insensitive
                            if (header.toLowerCase() === 'authorization') {
                                delete headers[header];
                            }
                        }
                    }
                    // let's make the request with the new redirectUrl
                    info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                    response = yield this.requestRaw(info, data);
                    redirectsRemaining--;
                }
                if (!response.message.statusCode ||
                    !HttpResponseRetryCodes.includes(response.message.statusCode)) {
                    // If not a retry code, return immediately instead of retrying
                    return response;
                }
                numTries += 1;
                if (numTries < maxTries) {
                    yield response.readBody();
                    yield this._performExponentialBackoff(numTries);
                }
            } while (numTries < maxTries);
            return response;
        });
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                function callbackForResult(err, res) {
                    if (err) {
                        reject(err);
                    }
                    else if (!res) {
                        // If `err` is not passed, then `res` must be passed.
                        reject(new Error('Unknown error'));
                    }
                    else {
                        resolve(res);
                    }
                }
                this.requestRawWithCallback(info, data, callbackForResult);
            });
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        if (typeof data === 'string') {
            if (!info.options.headers) {
                info.options.headers = {};
            }
            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        function handleResult(err, res) {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        }
        const req = info.httpModule.request(info.options, (msg) => {
            const res = new HttpClientResponse(msg);
            handleResult(undefined, res);
        });
        let socket;
        req.on('socket', sock => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.end();
            }
            handleResult(new Error(`Request timeout: ${info.options.path}`));
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err);
        });
        if (data && typeof data === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof data !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl) {
        const parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort;
        info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) {
            for (const handler of this.handlers) {
                handler.prepareRequest(info.options);
            }
        }
        return info;
    }
    _mergeHeaders(headers) {
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers || {}));
        }
        return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        const proxyUrl = pm.getProxyUrl(parsedUrl);
        const useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        // This is `useProxy` again, but we need to check `proxyURl` directly for TypeScripts's flow analysis.
        if (proxyUrl && proxyUrl.hostname) {
            const agentOptions = {
                maxSockets,
                keepAlive: this._keepAlive,
                proxy: Object.assign(Object.assign({}, ((proxyUrl.username || proxyUrl.password) && {
                    proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                })), { host: proxyUrl.hostname, port: proxyUrl.port })
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
                rejectUnauthorized: false
            });
        }
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
            const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
            return new Promise(resolve => setTimeout(() => resolve(), ms));
        });
    }
    _processResponse(res, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const statusCode = res.message.statusCode || 0;
                const response = {
                    statusCode,
                    result: null,
                    headers: {}
                };
                // not found leads to null obj returned
                if (statusCode === HttpCodes.NotFound) {
                    resolve(response);
                }
                // get the result from the body
                function dateTimeDeserializer(key, value) {
                    if (typeof value === 'string') {
                        const a = new Date(value);
                        if (!isNaN(a.valueOf())) {
                            return a;
                        }
                    }
                    return value;
                }
                let obj;
                let contents;
                try {
                    contents = yield res.readBody();
                    if (contents && contents.length > 0) {
                        if (options && options.deserializeDates) {
                            obj = JSON.parse(contents, dateTimeDeserializer);
                        }
                        else {
                            obj = JSON.parse(contents);
                        }
                        response.result = obj;
                    }
                    response.headers = res.message.headers;
                }
                catch (err) {
                    // Invalid resource (contents not json);  leaving result obj null
                }
                // note that 3xx redirects are handled by the http layer.
                if (statusCode > 299) {
                    let msg;
                    // if exception/error in body, attempt to get better error
                    if (obj && obj.message) {
                        msg = obj.message;
                    }
                    else if (contents && contents.length > 0) {
                        // it may be the case that the exception is in the body message as string
                        msg = contents;
                    }
                    else {
                        msg = `Failed request: (${statusCode})`;
                    }
                    const err = new HttpClientError(msg, statusCode);
                    err.result = response.result;
                    reject(err);
                }
                else {
                    resolve(response);
                }
            }));
        });
    }
}
exports.HttpClient = HttpClient;
const lowercaseKeys = (obj) => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1846:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkBypass = exports.getProxyUrl = void 0;
function getProxyUrl(reqUrl) {
    const usingSsl = reqUrl.protocol === 'https:';
    if (checkBypass(reqUrl)) {
        return undefined;
    }
    const proxyVar = (() => {
        if (usingSsl) {
            return process.env['https_proxy'] || process.env['HTTPS_PROXY'];
        }
        else {
            return process.env['http_proxy'] || process.env['HTTP_PROXY'];
        }
    })();
    if (proxyVar) {
        return new URL(proxyVar);
    }
    else {
        return undefined;
    }
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    const reqHost = reqUrl.hostname;
    if (isLoopbackAddress(reqHost)) {
        return true;
    }
    const noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    const upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    // Compare request host against noproxy
    for (const upperNoProxyItem of noProxy
        .split(',')
        .map(x => x.trim().toUpperCase())
        .filter(x => x)) {
        if (upperNoProxyItem === '*' ||
            upperReqHosts.some(x => x === upperNoProxyItem ||
                x.endsWith(`.${upperNoProxyItem}`) ||
                (upperNoProxyItem.startsWith('.') &&
                    x.endsWith(`${upperNoProxyItem}`)))) {
            return true;
        }
    }
    return false;
}
exports.checkBypass = checkBypass;
function isLoopbackAddress(host) {
    const hostLower = host.toLowerCase();
    return (hostLower === 'localhost' ||
        hostLower.startsWith('127.') ||
        hostLower.startsWith('[::1]') ||
        hostLower.startsWith('[0:0:0:0:0:0:0:1]'));
}
//# sourceMappingURL=proxy.js.map

/***/ }),

/***/ 1962:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCmdPath = exports.tryGetExecutablePath = exports.isRooted = exports.isDirectory = exports.exists = exports.READONLY = exports.UV_FS_O_EXLOCK = exports.IS_WINDOWS = exports.unlink = exports.symlink = exports.stat = exports.rmdir = exports.rm = exports.rename = exports.readlink = exports.readdir = exports.open = exports.mkdir = exports.lstat = exports.copyFile = exports.chmod = void 0;
const fs = __importStar(__webpack_require__(5747));
const path = __importStar(__webpack_require__(5622));
_a = fs.promises
// export const {open} = 'fs'
, exports.chmod = _a.chmod, exports.copyFile = _a.copyFile, exports.lstat = _a.lstat, exports.mkdir = _a.mkdir, exports.open = _a.open, exports.readdir = _a.readdir, exports.readlink = _a.readlink, exports.rename = _a.rename, exports.rm = _a.rm, exports.rmdir = _a.rmdir, exports.stat = _a.stat, exports.symlink = _a.symlink, exports.unlink = _a.unlink;
// export const {open} = 'fs'
exports.IS_WINDOWS = process.platform === 'win32';
// See https://github.com/nodejs/node/blob/d0153aee367422d0858105abec186da4dff0a0c5/deps/uv/include/uv/win.h#L691
exports.UV_FS_O_EXLOCK = 0x10000000;
exports.READONLY = fs.constants.O_RDONLY;
function exists(fsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.stat(fsPath);
        }
        catch (err) {
            if (err.code === 'ENOENT') {
                return false;
            }
            throw err;
        }
        return true;
    });
}
exports.exists = exists;
function isDirectory(fsPath, useStat = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const stats = useStat ? yield exports.stat(fsPath) : yield exports.lstat(fsPath);
        return stats.isDirectory();
    });
}
exports.isDirectory = isDirectory;
/**
 * On OSX/Linux, true if path starts with '/'. On Windows, true for paths like:
 * \, \hello, \\hello\share, C:, and C:\hello (and corresponding alternate separator cases).
 */
function isRooted(p) {
    p = normalizeSeparators(p);
    if (!p) {
        throw new Error('isRooted() parameter "p" cannot be empty');
    }
    if (exports.IS_WINDOWS) {
        return (p.startsWith('\\') || /^[A-Z]:/i.test(p) // e.g. \ or \hello or \\hello
        ); // e.g. C: or C:\hello
    }
    return p.startsWith('/');
}
exports.isRooted = isRooted;
/**
 * Best effort attempt to determine whether a file exists and is executable.
 * @param filePath    file path to check
 * @param extensions  additional file extensions to try
 * @return if file exists and is executable, returns the file path. otherwise empty string.
 */
function tryGetExecutablePath(filePath, extensions) {
    return __awaiter(this, void 0, void 0, function* () {
        let stats = undefined;
        try {
            // test file exists
            stats = yield exports.stat(filePath);
        }
        catch (err) {
            if (err.code !== 'ENOENT') {
                // eslint-disable-next-line no-console
                console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
            }
        }
        if (stats && stats.isFile()) {
            if (exports.IS_WINDOWS) {
                // on Windows, test for valid extension
                const upperExt = path.extname(filePath).toUpperCase();
                if (extensions.some(validExt => validExt.toUpperCase() === upperExt)) {
                    return filePath;
                }
            }
            else {
                if (isUnixExecutable(stats)) {
                    return filePath;
                }
            }
        }
        // try each extension
        const originalFilePath = filePath;
        for (const extension of extensions) {
            filePath = originalFilePath + extension;
            stats = undefined;
            try {
                stats = yield exports.stat(filePath);
            }
            catch (err) {
                if (err.code !== 'ENOENT') {
                    // eslint-disable-next-line no-console
                    console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
                }
            }
            if (stats && stats.isFile()) {
                if (exports.IS_WINDOWS) {
                    // preserve the case of the actual file (since an extension was appended)
                    try {
                        const directory = path.dirname(filePath);
                        const upperName = path.basename(filePath).toUpperCase();
                        for (const actualName of yield exports.readdir(directory)) {
                            if (upperName === actualName.toUpperCase()) {
                                filePath = path.join(directory, actualName);
                                break;
                            }
                        }
                    }
                    catch (err) {
                        // eslint-disable-next-line no-console
                        console.log(`Unexpected error attempting to determine the actual case of the file '${filePath}': ${err}`);
                    }
                    return filePath;
                }
                else {
                    if (isUnixExecutable(stats)) {
                        return filePath;
                    }
                }
            }
        }
        return '';
    });
}
exports.tryGetExecutablePath = tryGetExecutablePath;
function normalizeSeparators(p) {
    p = p || '';
    if (exports.IS_WINDOWS) {
        // convert slashes on Windows
        p = p.replace(/\//g, '\\');
        // remove redundant slashes
        return p.replace(/\\\\+/g, '\\');
    }
    // remove redundant slashes
    return p.replace(/\/\/+/g, '/');
}
// on Mac/Linux, test the execute bit
//     R   W  X  R  W X R W X
//   256 128 64 32 16 8 4 2 1
function isUnixExecutable(stats) {
    return ((stats.mode & 1) > 0 ||
        ((stats.mode & 8) > 0 && stats.gid === process.getgid()) ||
        ((stats.mode & 64) > 0 && stats.uid === process.getuid()));
}
// Get the path of cmd.exe in windows
function getCmdPath() {
    var _a;
    return (_a = process.env['COMSPEC']) !== null && _a !== void 0 ? _a : `cmd.exe`;
}
exports.getCmdPath = getCmdPath;
//# sourceMappingURL=io-util.js.map

/***/ }),

/***/ 7436:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.findInPath = exports.which = exports.mkdirP = exports.rmRF = exports.mv = exports.cp = void 0;
const assert_1 = __webpack_require__(2357);
const path = __importStar(__webpack_require__(5622));
const ioUtil = __importStar(__webpack_require__(1962));
/**
 * Copies a file or folder.
 * Based off of shelljs - https://github.com/shelljs/shelljs/blob/9237f66c52e5daa40458f94f9565e18e8132f5a6/src/cp.js
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See CopyOptions.
 */
function cp(source, dest, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const { force, recursive, copySourceDirectory } = readCopyOptions(options);
        const destStat = (yield ioUtil.exists(dest)) ? yield ioUtil.stat(dest) : null;
        // Dest is an existing file, but not forcing
        if (destStat && destStat.isFile() && !force) {
            return;
        }
        // If dest is an existing directory, should copy inside.
        const newDest = destStat && destStat.isDirectory() && copySourceDirectory
            ? path.join(dest, path.basename(source))
            : dest;
        if (!(yield ioUtil.exists(source))) {
            throw new Error(`no such file or directory: ${source}`);
        }
        const sourceStat = yield ioUtil.stat(source);
        if (sourceStat.isDirectory()) {
            if (!recursive) {
                throw new Error(`Failed to copy. ${source} is a directory, but tried to copy without recursive flag.`);
            }
            else {
                yield cpDirRecursive(source, newDest, 0, force);
            }
        }
        else {
            if (path.relative(source, newDest) === '') {
                // a file cannot be copied to itself
                throw new Error(`'${newDest}' and '${source}' are the same file`);
            }
            yield copyFile(source, newDest, force);
        }
    });
}
exports.cp = cp;
/**
 * Moves a path.
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See MoveOptions.
 */
function mv(source, dest, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        if (yield ioUtil.exists(dest)) {
            let destExists = true;
            if (yield ioUtil.isDirectory(dest)) {
                // If dest is directory copy src into dest
                dest = path.join(dest, path.basename(source));
                destExists = yield ioUtil.exists(dest);
            }
            if (destExists) {
                if (options.force == null || options.force) {
                    yield rmRF(dest);
                }
                else {
                    throw new Error('Destination already exists');
                }
            }
        }
        yield mkdirP(path.dirname(dest));
        yield ioUtil.rename(source, dest);
    });
}
exports.mv = mv;
/**
 * Remove a path recursively with force
 *
 * @param inputPath path to remove
 */
function rmRF(inputPath) {
    return __awaiter(this, void 0, void 0, function* () {
        if (ioUtil.IS_WINDOWS) {
            // Check for invalid characters
            // https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file
            if (/[*"<>|]/.test(inputPath)) {
                throw new Error('File path must not contain `*`, `"`, `<`, `>` or `|` on Windows');
            }
        }
        try {
            // note if path does not exist, error is silent
            yield ioUtil.rm(inputPath, {
                force: true,
                maxRetries: 3,
                recursive: true,
                retryDelay: 300
            });
        }
        catch (err) {
            throw new Error(`File was unable to be removed ${err}`);
        }
    });
}
exports.rmRF = rmRF;
/**
 * Make a directory.  Creates the full path with folders in between
 * Will throw if it fails
 *
 * @param   fsPath        path to create
 * @returns Promise<void>
 */
function mkdirP(fsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        assert_1.ok(fsPath, 'a path argument must be provided');
        yield ioUtil.mkdir(fsPath, { recursive: true });
    });
}
exports.mkdirP = mkdirP;
/**
 * Returns path of a tool had the tool actually been invoked.  Resolves via paths.
 * If you check and the tool does not exist, it will throw.
 *
 * @param     tool              name of the tool
 * @param     check             whether to check if tool exists
 * @returns   Promise<string>   path to tool
 */
function which(tool, check) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tool) {
            throw new Error("parameter 'tool' is required");
        }
        // recursive when check=true
        if (check) {
            const result = yield which(tool, false);
            if (!result) {
                if (ioUtil.IS_WINDOWS) {
                    throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`);
                }
                else {
                    throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`);
                }
            }
            return result;
        }
        const matches = yield findInPath(tool);
        if (matches && matches.length > 0) {
            return matches[0];
        }
        return '';
    });
}
exports.which = which;
/**
 * Returns a list of all occurrences of the given tool on the system path.
 *
 * @returns   Promise<string[]>  the paths of the tool
 */
function findInPath(tool) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tool) {
            throw new Error("parameter 'tool' is required");
        }
        // build the list of extensions to try
        const extensions = [];
        if (ioUtil.IS_WINDOWS && process.env['PATHEXT']) {
            for (const extension of process.env['PATHEXT'].split(path.delimiter)) {
                if (extension) {
                    extensions.push(extension);
                }
            }
        }
        // if it's rooted, return it if exists. otherwise return empty.
        if (ioUtil.isRooted(tool)) {
            const filePath = yield ioUtil.tryGetExecutablePath(tool, extensions);
            if (filePath) {
                return [filePath];
            }
            return [];
        }
        // if any path separators, return empty
        if (tool.includes(path.sep)) {
            return [];
        }
        // build the list of directories
        //
        // Note, technically "where" checks the current directory on Windows. From a toolkit perspective,
        // it feels like we should not do this. Checking the current directory seems like more of a use
        // case of a shell, and the which() function exposed by the toolkit should strive for consistency
        // across platforms.
        const directories = [];
        if (process.env.PATH) {
            for (const p of process.env.PATH.split(path.delimiter)) {
                if (p) {
                    directories.push(p);
                }
            }
        }
        // find all matches
        const matches = [];
        for (const directory of directories) {
            const filePath = yield ioUtil.tryGetExecutablePath(path.join(directory, tool), extensions);
            if (filePath) {
                matches.push(filePath);
            }
        }
        return matches;
    });
}
exports.findInPath = findInPath;
function readCopyOptions(options) {
    const force = options.force == null ? true : options.force;
    const recursive = Boolean(options.recursive);
    const copySourceDirectory = options.copySourceDirectory == null
        ? true
        : Boolean(options.copySourceDirectory);
    return { force, recursive, copySourceDirectory };
}
function cpDirRecursive(sourceDir, destDir, currentDepth, force) {
    return __awaiter(this, void 0, void 0, function* () {
        // Ensure there is not a run away recursive copy
        if (currentDepth >= 255)
            return;
        currentDepth++;
        yield mkdirP(destDir);
        const files = yield ioUtil.readdir(sourceDir);
        for (const fileName of files) {
            const srcFile = `${sourceDir}/${fileName}`;
            const destFile = `${destDir}/${fileName}`;
            const srcFileStat = yield ioUtil.lstat(srcFile);
            if (srcFileStat.isDirectory()) {
                // Recurse
                yield cpDirRecursive(srcFile, destFile, currentDepth, force);
            }
            else {
                yield copyFile(srcFile, destFile, force);
            }
        }
        // Change the mode for the newly created directory
        yield ioUtil.chmod(destDir, (yield ioUtil.stat(sourceDir)).mode);
    });
}
// Buffered file copy
function copyFile(srcFile, destFile, force) {
    return __awaiter(this, void 0, void 0, function* () {
        if ((yield ioUtil.lstat(srcFile)).isSymbolicLink()) {
            // unlink/re-link it
            try {
                yield ioUtil.lstat(destFile);
                yield ioUtil.unlink(destFile);
            }
            catch (e) {
                // Try to override file permission
                if (e.code === 'EPERM') {
                    yield ioUtil.chmod(destFile, '0666');
                    yield ioUtil.unlink(destFile);
                }
                // other errors = it doesn't exist, no work to do
            }
            // Copy over symlink
            const symlinkFull = yield ioUtil.readlink(srcFile);
            yield ioUtil.symlink(symlinkFull, destFile, ioUtil.IS_WINDOWS ? 'junction' : null);
        }
        else if (!(yield ioUtil.exists(destFile)) || force) {
            yield ioUtil.copyFile(srcFile, destFile);
        }
    });
}
//# sourceMappingURL=io.js.map

/***/ }),

/***/ 8088:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const debug = __webpack_require__(427)
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __webpack_require__(2293)
const { safeRe: re, t } = __webpack_require__(9523)

const parseOptions = __webpack_require__(785)
const { compareIdentifiers } = __webpack_require__(2463)
class SemVer {
  constructor (version, options) {
    options = parseOptions(options)

    if (version instanceof SemVer) {
      if (version.loose === !!options.loose &&
          version.includePrerelease === !!options.includePrerelease) {
        return version
      } else {
        version = version.version
      }
    } else if (typeof version !== 'string') {
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`)
    }

    if (version.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      )
    }

    debug('SemVer', version, options)
    this.options = options
    this.loose = !!options.loose
    // this isn't actually relevant for versions, but keep it so that we
    // don't run into trouble passing this.options around.
    this.includePrerelease = !!options.includePrerelease

    const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL])

    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    this.raw = version

    // these are actually numbers
    this.major = +m[1]
    this.minor = +m[2]
    this.patch = +m[3]

    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version')
    }

    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version')
    }

    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version')
    }

    // numberify any prerelease numeric ids
    if (!m[4]) {
      this.prerelease = []
    } else {
      this.prerelease = m[4].split('.').map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num
          }
        }
        return id
      })
    }

    this.build = m[5] ? m[5].split('.') : []
    this.format()
  }

  format () {
    this.version = `${this.major}.${this.minor}.${this.patch}`
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join('.')}`
    }
    return this.version
  }

  toString () {
    return this.version
  }

  compare (other) {
    debug('SemVer.compare', this.version, this.options, other)
    if (!(other instanceof SemVer)) {
      if (typeof other === 'string' && other === this.version) {
        return 0
      }
      other = new SemVer(other, this.options)
    }

    if (other.version === this.version) {
      return 0
    }

    return this.compareMain(other) || this.comparePre(other)
  }

  compareMain (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    return (
      compareIdentifiers(this.major, other.major) ||
      compareIdentifiers(this.minor, other.minor) ||
      compareIdentifiers(this.patch, other.patch)
    )
  }

  comparePre (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    // NOT having a prerelease is > having one
    if (this.prerelease.length && !other.prerelease.length) {
      return -1
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0
    }

    let i = 0
    do {
      const a = this.prerelease[i]
      const b = other.prerelease[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  compareBuild (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    let i = 0
    do {
      const a = this.build[i]
      const b = other.build[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc (release, identifier, identifierBase) {
    switch (release) {
      case 'premajor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor = 0
        this.major++
        this.inc('pre', identifier, identifierBase)
        break
      case 'preminor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor++
        this.inc('pre', identifier, identifierBase)
        break
      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        this.prerelease.length = 0
        this.inc('patch', identifier, identifierBase)
        this.inc('pre', identifier, identifierBase)
        break
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.
      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier, identifierBase)
        }
        this.inc('pre', identifier, identifierBase)
        break

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if (
          this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0
        ) {
          this.major++
        }
        this.minor = 0
        this.patch = 0
        this.prerelease = []
        break
      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++
        }
        this.patch = 0
        this.prerelease = []
        break
      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if (this.prerelease.length === 0) {
          this.patch++
        }
        this.prerelease = []
        break
      // This probably shouldn't be used publicly.
      // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
      case 'pre': {
        const base = Number(identifierBase) ? 1 : 0

        if (!identifier && identifierBase === false) {
          throw new Error('invalid increment argument: identifier is empty')
        }

        if (this.prerelease.length === 0) {
          this.prerelease = [base]
        } else {
          let i = this.prerelease.length
          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++
              i = -2
            }
          }
          if (i === -1) {
            // didn't increment anything
            if (identifier === this.prerelease.join('.') && identifierBase === false) {
              throw new Error('invalid increment argument: identifier already exists')
            }
            this.prerelease.push(base)
          }
        }
        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          let prerelease = [identifier, base]
          if (identifierBase === false) {
            prerelease = [identifier]
          }
          if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = prerelease
            }
          } else {
            this.prerelease = prerelease
          }
        }
        break
      }
      default:
        throw new Error(`invalid increment argument: ${release}`)
    }
    this.raw = this.format()
    if (this.build.length) {
      this.raw += `+${this.build.join('.')}`
    }
    return this
  }
}

module.exports = SemVer


/***/ }),

/***/ 8848:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const parse = __webpack_require__(5925)
const clean = (version, options) => {
  const s = parse(version.trim().replace(/^[=v]+/, ''), options)
  return s ? s.version : null
}
module.exports = clean


/***/ }),

/***/ 5925:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(8088)
const parse = (version, options, throwErrors = false) => {
  if (version instanceof SemVer) {
    return version
  }
  try {
    return new SemVer(version, options)
  } catch (er) {
    if (!throwErrors) {
      return null
    }
    throw er
  }
}

module.exports = parse


/***/ }),

/***/ 9601:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const parse = __webpack_require__(5925)
const valid = (version, options) => {
  const v = parse(version, options)
  return v ? v.version : null
}
module.exports = valid


/***/ }),

/***/ 2293:
/***/ ((module) => {

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0'

const MAX_LENGTH = 256
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
/* istanbul ignore next */ 9007199254740991

// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16

const RELEASE_TYPES = [
  'major',
  'premajor',
  'minor',
  'preminor',
  'patch',
  'prepatch',
  'prerelease',
]

module.exports = {
  MAX_LENGTH,
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_INTEGER,
  RELEASE_TYPES,
  SEMVER_SPEC_VERSION,
  FLAG_INCLUDE_PRERELEASE: 0b001,
  FLAG_LOOSE: 0b010,
}


/***/ }),

/***/ 427:
/***/ ((module) => {

const debug = (
  typeof process === 'object' &&
  process.env &&
  process.env.NODE_DEBUG &&
  /\bsemver\b/i.test(process.env.NODE_DEBUG)
) ? (...args) => console.error('SEMVER', ...args)
  : () => {}

module.exports = debug


/***/ }),

/***/ 2463:
/***/ ((module) => {

const numeric = /^[0-9]+$/
const compareIdentifiers = (a, b) => {
  const anum = numeric.test(a)
  const bnum = numeric.test(b)

  if (anum && bnum) {
    a = +a
    b = +b
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a)

module.exports = {
  compareIdentifiers,
  rcompareIdentifiers,
}


/***/ }),

/***/ 785:
/***/ ((module) => {

// parse out just the options we care about
const looseOption = Object.freeze({ loose: true })
const emptyOpts = Object.freeze({ })
const parseOptions = options => {
  if (!options) {
    return emptyOpts
  }

  if (typeof options !== 'object') {
    return looseOption
  }

  return options
}
module.exports = parseOptions


/***/ }),

/***/ 9523:
/***/ ((module, exports, __webpack_require__) => {

const { MAX_SAFE_COMPONENT_LENGTH } = __webpack_require__(2293)
const debug = __webpack_require__(427)
exports = module.exports = {}

// The actual regexps go on exports.re
const re = exports.re = []
const safeRe = exports.safeRe = []
const src = exports.src = []
const t = exports.t = {}
let R = 0

const createToken = (name, value, isGlobal) => {
  // Replace all greedy whitespace to prevent regex dos issues. These regex are
  // used internally via the safeRe object since all inputs in this library get
  // normalized first to trim and collapse all extra whitespace. The original
  // regexes are exported for userland consumption and lower level usage. A
  // future breaking change could export the safer regex only with a note that
  // all input should have extra whitespace removed.
  const safe = value
    .split('\\s*').join('\\s{0,1}')
    .split('\\s+').join('\\s')
  const index = R++
  debug(name, index, value)
  t[name] = index
  src[index] = value
  re[index] = new RegExp(value, isGlobal ? 'g' : undefined)
  safeRe[index] = new RegExp(safe, isGlobal ? 'g' : undefined)
}

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*')
createToken('NUMERICIDENTIFIERLOOSE', '[0-9]+')

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

createToken('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*')

// ## Main Version
// Three dot-separated numeric identifiers.

createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})`)

createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})`)

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]
}|${src[t.NONNUMERICIDENTIFIER]})`)

createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]
}|${src[t.NONNUMERICIDENTIFIER]})`)

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]
}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`)

createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]
}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`)

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

createToken('BUILDIDENTIFIER', '[0-9A-Za-z-]+')

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]
}(?:\\.${src[t.BUILDIDENTIFIER]})*))`)

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

createToken('FULLPLAIN', `v?${src[t.MAINVERSION]
}${src[t.PRERELEASE]}?${
  src[t.BUILD]}?`)

createToken('FULL', `^${src[t.FULLPLAIN]}$`)

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]
}${src[t.PRERELEASELOOSE]}?${
  src[t.BUILD]}?`)

createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`)

createToken('GTLT', '((?:<|>)?=?)')

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`)
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`)

createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:${src[t.PRERELEASE]})?${
                     src[t.BUILD]}?` +
                   `)?)?`)

createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:${src[t.PRERELEASELOOSE]})?${
                          src[t.BUILD]}?` +
                        `)?)?`)

createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`)
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`)

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCE', `${'(^|[^\\d])' +
              '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:$|[^\\d])`)
createToken('COERCERTL', src[t.COERCE], true)

// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)')

createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true)
exports.tildeTrimReplace = '$1~'

createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`)
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`)

// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)')

createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true)
exports.caretTrimReplace = '$1^'

createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`)
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`)

// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`)
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`)

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]
}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true)
exports.comparatorTrimReplace = '$1$2$3'

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` +
                   `\\s+-\\s+` +
                   `(${src[t.XRANGEPLAIN]})` +
                   `\\s*$`)

createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s+-\\s+` +
                        `(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s*$`)

// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*')
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$')
createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$')


/***/ }),

/***/ 4294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(4219);


/***/ }),

/***/ 4219:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var net = __webpack_require__(1631);
var tls = __webpack_require__(8818);
var http = __webpack_require__(8605);
var https = __webpack_require__(7211);
var events = __webpack_require__(8614);
var assert = __webpack_require__(2357);
var util = __webpack_require__(1669);


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),

/***/ 4552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v1": () => /* reexport */ esm_node_v1,
  "v3": () => /* reexport */ esm_node_v3,
  "v4": () => /* reexport */ esm_node_v4,
  "v5": () => /* reexport */ esm_node_v5,
  "NIL": () => /* reexport */ nil,
  "version": () => /* reexport */ esm_node_version,
  "validate": () => /* reexport */ esm_node_validate,
  "stringify": () => /* reexport */ esm_node_stringify,
  "parse": () => /* reexport */ esm_node_parse
});

// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(6417);
var external_crypto_default = /*#__PURE__*/__webpack_require__.n(external_crypto_);

// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/rng.js

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    external_crypto_default().randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/regex.js
/* harmony default export */ const regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/validate.js


function validate(uuid) {
  return typeof uuid === 'string' && regex.test(uuid);
}

/* harmony default export */ const esm_node_validate = (validate);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!esm_node_validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const esm_node_stringify = (stringify);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/v1.js

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || rng)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || esm_node_stringify(b);
}

/* harmony default export */ const esm_node_v1 = (v1);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/parse.js


function parse(uuid) {
  if (!esm_node_validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ const esm_node_parse = (parse);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/v35.js



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = esm_node_parse(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return esm_node_stringify(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/md5.js


function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return external_crypto_default().createHash('md5').update(bytes).digest();
}

/* harmony default export */ const esm_node_md5 = (md5);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/v3.js


const v3 = v35('v3', 0x30, esm_node_md5);
/* harmony default export */ const esm_node_v3 = (v3);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/v4.js



function v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return esm_node_stringify(rnds);
}

/* harmony default export */ const esm_node_v4 = (v4);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/sha1.js


function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return external_crypto_default().createHash('sha1').update(bytes).digest();
}

/* harmony default export */ const esm_node_sha1 = (sha1);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/v5.js


const v5 = v35('v5', 0x50, esm_node_sha1);
/* harmony default export */ const esm_node_v5 = (v5);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/nil.js
/* harmony default export */ const nil = ('00000000-0000-0000-0000-000000000000');
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/version.js


function version(uuid) {
  if (!esm_node_validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ const esm_node_version = (version);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/index.js










/***/ }),

/***/ 691:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function __ncc_wildcard$0 (arg) {
  if (arg === "node_modules/@actions/core") return __webpack_require__(6981);
  else if (arg === "node_modules/@actions/exec") return __webpack_require__(4325);
  else if (arg === "node_modules/@actions/http-client") return __webpack_require__(1768);
  else if (arg === "node_modules/@actions/io") return __webpack_require__(3368);
  else if (arg === "node_modules/@ampproject/remapping") return __webpack_require__(111);
  else if (arg === "node_modules/@babel/code-frame") return __webpack_require__(3474);
  else if (arg === "node_modules/@babel/compat-data") return __webpack_require__(3818);
  else if (arg === "node_modules/@babel/core/node_modules/semver") return __webpack_require__(2347);
  else if (arg === "node_modules/@babel/core") return __webpack_require__(4118);
  else if (arg === "node_modules/@babel/eslint-parser/node_modules/semver") return __webpack_require__(2405);
  else if (arg === "node_modules/@babel/eslint-parser") return __webpack_require__(7322);
  else if (arg === "node_modules/@babel/generator") return __webpack_require__(9166);
  else if (arg === "node_modules/@babel/helper-compilation-targets/node_modules/semver") return __webpack_require__(6556);
  else if (arg === "node_modules/@babel/helper-compilation-targets") return __webpack_require__(839);
  else if (arg === "node_modules/@babel/helper-environment-visitor") return __webpack_require__(9734);
  else if (arg === "node_modules/@babel/helper-function-name") return __webpack_require__(7315);
  else if (arg === "node_modules/@babel/helper-hoist-variables") return __webpack_require__(1585);
  else if (arg === "node_modules/@babel/helper-module-imports") return __webpack_require__(5151);
  else if (arg === "node_modules/@babel/helper-module-transforms") return __webpack_require__(9524);
  else if (arg === "node_modules/@babel/helper-simple-access") return __webpack_require__(3880);
  else if (arg === "node_modules/@babel/helper-split-export-declaration") return __webpack_require__(6419);
  else if (arg === "node_modules/@babel/helper-string-parser") return __webpack_require__(4615);
  else if (arg === "node_modules/@babel/helper-validator-identifier") return __webpack_require__(3534);
  else if (arg === "node_modules/@babel/helper-validator-option") return __webpack_require__(5958);
  else if (arg === "node_modules/@babel/helpers") return __webpack_require__(5249);
  else if (arg === "node_modules/@babel/helpers/scripts") return __webpack_require__(7871);
  else if (arg === "node_modules/@babel/highlight") return __webpack_require__(8918);
  else if (arg === "node_modules/@babel/parser") return __webpack_require__(3560);
  else if (arg === "node_modules/@babel/template") return __webpack_require__(144);
  else if (arg === "node_modules/@babel/traverse") return __webpack_require__(5081);
  else if (arg === "node_modules/@babel/types") return __webpack_require__(3596);
  else if (arg === "node_modules/@eslint/eslintrc/node_modules/globals") return __webpack_require__(4412);
  else if (arg === "node_modules/@eslint/eslintrc") return __webpack_require__(2012);
  else if (arg === "node_modules/@humanwhocodes/config-array") return __webpack_require__(2170);
  else if (arg === "node_modules/@humanwhocodes/object-schema") return __webpack_require__(3233);
  else if (arg === "node_modules/@jridgewell/gen-mapping") return __webpack_require__(4713);
  else if (arg === "node_modules/@jridgewell/resolve-uri") return __webpack_require__(7953);
  else if (arg === "node_modules/@jridgewell/set-array") return __webpack_require__(4016);
  else if (arg === "node_modules/@jridgewell/sourcemap-codec") return __webpack_require__(1708);
  else if (arg === "node_modules/@jridgewell/trace-mapping/node_modules/@jridgewell/sourcemap-codec") return __webpack_require__(7308);
  else if (arg === "node_modules/@jridgewell/trace-mapping") return __webpack_require__(3262);
  else if (arg === "node_modules/@jsdevtools/ez-spawn") return __webpack_require__(8931);
  else if (arg === "node_modules/@jsdevtools/version-bump-prompt") return __webpack_require__(5494);
  else if (arg === "node_modules/@nicolo-ribaudo/eslint-scope-5-internals") return __webpack_require__(9826);
  else if (arg === "node_modules/@nodelib/fs.scandir") return __webpack_require__(2697);
  else if (arg === "node_modules/@nodelib/fs.stat") return __webpack_require__(6888);
  else if (arg === "node_modules/@nodelib/fs.walk") return __webpack_require__(8900);
  else if (arg === "node_modules/@vercel/ncc") return __webpack_require__(741);
  else if (arg === "node_modules/acorn-jsx") return __webpack_require__(1452);
  else if (arg === "node_modules/acorn") return __webpack_require__(2201);
  else if (arg === "node_modules/ajv") return __webpack_require__(5802);
  else if (arg === "node_modules/ansi-colors") return __webpack_require__(7266);
  else if (arg === "node_modules/ansi-escapes/node_modules/type-fest") return __webpack_require__(1042);
  else if (arg === "node_modules/ansi-escapes") return __webpack_require__(7986);
  else if (arg === "node_modules/ansi-regex") return __webpack_require__(5090);
  else if (arg === "node_modules/ansi-styles") return __webpack_require__(3604);
  else if (arg === "node_modules/argparse") return __webpack_require__(1427);
  else if (arg === "node_modules/array-back") return __webpack_require__(5232);
  else if (arg === "node_modules/array-union") return __webpack_require__(7980);
  else if (arg === "node_modules/astral-regex") return __webpack_require__(7573);
  else if (arg === "node_modules/balanced-match") return __webpack_require__(5519);
  else if (arg === "node_modules/brace-expansion") return __webpack_require__(2289);
  else if (arg === "node_modules/braces") return __webpack_require__(8385);
  else if (arg === "node_modules/browserslist") return __webpack_require__(8580);
  else if (arg === "node_modules/bundle-dependencies/node_modules/ansi-regex") return __webpack_require__(1627);
  else if (arg === "node_modules/bundle-dependencies/node_modules/builtin-modules") return __webpack_require__(3043);
  else if (arg === "node_modules/bundle-dependencies/node_modules/camelcase") return __webpack_require__(4520);
  else if (arg === "node_modules/bundle-dependencies/node_modules/cliui") return __webpack_require__(1790);
  else if (arg === "node_modules/bundle-dependencies/node_modules/code-point-at") return __webpack_require__(6656);
  else if (arg === "node_modules/bundle-dependencies/node_modules/decamelize") return __webpack_require__(6217);
  else if (arg === "node_modules/bundle-dependencies/node_modules/error-ex") return __webpack_require__(200);
  else if (arg === "node_modules/bundle-dependencies/node_modules/escape-string-regexp") return __webpack_require__(2045);
  else if (arg === "node_modules/bundle-dependencies/node_modules/find-up") return __webpack_require__(1237);
  else if (arg === "node_modules/bundle-dependencies/node_modules/graceful-fs") return __webpack_require__(7174);
  else if (arg === "node_modules/bundle-dependencies/node_modules/hosted-git-info") return __webpack_require__(5766);
  else if (arg === "node_modules/bundle-dependencies/node_modules/invert-kv") return __webpack_require__(3727);
  else if (arg === "node_modules/bundle-dependencies/node_modules/is-arrayish") return __webpack_require__(9328);
  else if (arg === "node_modules/bundle-dependencies/node_modules/is-builtin-module") return __webpack_require__(1220);
  else if (arg === "node_modules/bundle-dependencies/node_modules/is-fullwidth-code-point") return __webpack_require__(1600);
  else if (arg === "node_modules/bundle-dependencies/node_modules/is-utf8") return __webpack_require__(5266);
  else if (arg === "node_modules/bundle-dependencies/node_modules/lcid") return __webpack_require__(2064);
  else if (arg === "node_modules/bundle-dependencies/node_modules/load-json-file") return __webpack_require__(8809);
  else if (arg === "node_modules/bundle-dependencies/node_modules/lodash.assign") return __webpack_require__(6238);
  else if (arg === "node_modules/bundle-dependencies/node_modules/lodash.keys") return __webpack_require__(5183);
  else if (arg === "node_modules/bundle-dependencies/node_modules/lodash.rest") return __webpack_require__(2933);
  else if (arg === "node_modules/bundle-dependencies/node_modules/normalize-package-data") return __webpack_require__(45);
  else if (arg === "node_modules/bundle-dependencies/node_modules/number-is-nan") return __webpack_require__(6861);
  else if (arg === "node_modules/bundle-dependencies/node_modules/object-assign") return __webpack_require__(2214);
  else if (arg === "node_modules/bundle-dependencies/node_modules/os-locale") return __webpack_require__(3894);
  else if (arg === "node_modules/bundle-dependencies/node_modules/parse-json") return __webpack_require__(6634);
  else if (arg === "node_modules/bundle-dependencies/node_modules/path-exists") return __webpack_require__(834);
  else if (arg === "node_modules/bundle-dependencies/node_modules/path-type") return __webpack_require__(1603);
  else if (arg === "node_modules/bundle-dependencies/node_modules/pify") return __webpack_require__(3304);
  else if (arg === "node_modules/bundle-dependencies/node_modules/pinkie-promise") return __webpack_require__(5879);
  else if (arg === "node_modules/bundle-dependencies/node_modules/pinkie") return __webpack_require__(3825);
  else if (arg === "node_modules/bundle-dependencies/node_modules/pkg-conf") return __webpack_require__(5654);
  else if (arg === "node_modules/bundle-dependencies/node_modules/read-pkg-up") return __webpack_require__(6745);
  else if (arg === "node_modules/bundle-dependencies/node_modules/read-pkg") return __webpack_require__(8478);
  else if (arg === "node_modules/bundle-dependencies/node_modules/require-main-filename") return __webpack_require__(3071);
  else if (arg === "node_modules/bundle-dependencies/node_modules/semver") return __webpack_require__(9835);
  else if (arg === "node_modules/bundle-dependencies/node_modules/spdx-correct") return __webpack_require__(3177);
  else if (arg === "node_modules/bundle-dependencies/node_modules/spdx-exceptions") return __webpack_require__(2640);
  else if (arg === "node_modules/bundle-dependencies/node_modules/spdx-expression-parse") return __webpack_require__(7148);
  else if (arg === "node_modules/bundle-dependencies/node_modules/spdx-license-ids") return __webpack_require__(2889);
  else if (arg === "node_modules/bundle-dependencies/node_modules/string-width") return __webpack_require__(283);
  else if (arg === "node_modules/bundle-dependencies/node_modules/strip-ansi") return __webpack_require__(1714);
  else if (arg === "node_modules/bundle-dependencies/node_modules/strip-bom") return __webpack_require__(8514);
  else if (arg === "node_modules/bundle-dependencies/node_modules/symbol") return __webpack_require__(4380);
  else if (arg === "node_modules/bundle-dependencies/node_modules/validate-npm-package-license") return __webpack_require__(3714);
  else if (arg === "node_modules/bundle-dependencies/node_modules/window-size") return __webpack_require__(7554);
  else if (arg === "node_modules/bundle-dependencies/node_modules/wrap-ansi") return __webpack_require__(72);
  else if (arg === "node_modules/bundle-dependencies/node_modules/y18n") return __webpack_require__(6457);
  else if (arg === "node_modules/bundle-dependencies/node_modules/yargs-parser") return __webpack_require__(8032);
  else if (arg === "node_modules/bundle-dependencies/node_modules/yargs") return __webpack_require__(3660);
  else if (arg === "node_modules/bundle-dependencies") return __webpack_require__(9147);
  else if (arg === "node_modules/call-me-maybe") return __webpack_require__(5621);
  else if (arg === "node_modules/callsites") return __webpack_require__(8871);
  else if (arg === "node_modules/caniuse-lite") return __webpack_require__(4941);
  else if (arg === "node_modules/chalk") return __webpack_require__(9680);
  else if (arg === "node_modules/chardet") return __webpack_require__(5276);
  else if (arg === "node_modules/cli-cursor") return __webpack_require__(2980);
  else if (arg === "node_modules/cli-width") return __webpack_require__(9134);
  else if (arg === "node_modules/color-convert") return __webpack_require__(5116);
  else if (arg === "node_modules/color-name") return __webpack_require__(9780);
  else if (arg === "node_modules/command-line-args") return __webpack_require__(8372);
  else if (arg === "node_modules/concat-map") return __webpack_require__(7656);
  else if (arg === "node_modules/convert-source-map") return __webpack_require__(3482);
  else if (arg === "node_modules/cross-spawn") return __webpack_require__(698);
  else if (arg === "node_modules/debug") return __webpack_require__(442);
  else if (arg === "node_modules/deep-is") return __webpack_require__(859);
  else if (arg === "node_modules/detect-indent") return __webpack_require__(8651);
  else if (arg === "node_modules/detect-newline") return __webpack_require__(7548);
  else if (arg === "node_modules/dir-glob") return __webpack_require__(4923);
  else if (arg === "node_modules/doctrine") return __webpack_require__(9516);
  else if (arg === "node_modules/electron-to-chromium") return __webpack_require__(6211);
  else if (arg === "node_modules/emoji-regex") return __webpack_require__(9874);
  else if (arg === "node_modules/enquirer") return __webpack_require__(7225);
  else if (arg === "node_modules/escalade") return __webpack_require__(6935);
  else if (arg === "node_modules/escape-string-regexp") return __webpack_require__(6838);
  else if (arg === "node_modules/eslint-config-google") return __webpack_require__(4717);
  else if (arg === "node_modules/eslint-scope") return __webpack_require__(2245);
  else if (arg === "node_modules/eslint-utils/node_modules/eslint-visitor-keys") return __webpack_require__(2583);
  else if (arg === "node_modules/eslint-utils") return __webpack_require__(5002);
  else if (arg === "node_modules/eslint-visitor-keys") return __webpack_require__(7491);
  else if (arg === "node_modules/eslint/node_modules/@babel/code-frame") return __webpack_require__(950);
  else if (arg === "node_modules/eslint/node_modules/ansi-styles") return __webpack_require__(5937);
  else if (arg === "node_modules/eslint/node_modules/chalk") return __webpack_require__(8399);
  else if (arg === "node_modules/eslint/node_modules/color-convert") return __webpack_require__(4033);
  else if (arg === "node_modules/eslint/node_modules/color-name") return __webpack_require__(3413);
  else if (arg === "node_modules/eslint/node_modules/escape-string-regexp") return __webpack_require__(4693);
  else if (arg === "node_modules/eslint/node_modules/globals") return __webpack_require__(2763);
  else if (arg === "node_modules/eslint/node_modules/has-flag") return __webpack_require__(6291);
  else if (arg === "node_modules/eslint/node_modules/supports-color") return __webpack_require__(8338);
  else if (arg === "node_modules/eslint") return __webpack_require__(3269);
  else if (arg === "node_modules/espree/node_modules/eslint-visitor-keys") return __webpack_require__(5633);
  else if (arg === "node_modules/espree") return __webpack_require__(2598);
  else if (arg === "node_modules/esprima") return __webpack_require__(126);
  else if (arg === "node_modules/esquery/node_modules/estraverse") return __webpack_require__(6734);
  else if (arg === "node_modules/esquery") return __webpack_require__(1396);
  else if (arg === "node_modules/esrecurse/node_modules/estraverse") return __webpack_require__(8376);
  else if (arg === "node_modules/esrecurse") return __webpack_require__(8492);
  else if (arg === "node_modules/estraverse") return __webpack_require__(2788);
  else if (arg === "node_modules/esutils") return __webpack_require__(3744);
  else if (arg === "node_modules/external-editor") return __webpack_require__(7803);
  else if (arg === "node_modules/fast-deep-equal") return __webpack_require__(1470);
  else if (arg === "node_modules/fast-glob") return __webpack_require__(6071);
  else if (arg === "node_modules/fast-json-stable-stringify") return __webpack_require__(7373);
  else if (arg === "node_modules/fast-levenshtein") return __webpack_require__(7749);
  else if (arg === "node_modules/fastq") return __webpack_require__(4528);
  else if (arg === "node_modules/figures") return __webpack_require__(1014);
  else if (arg === "node_modules/file-entry-cache") return __webpack_require__(6438);
  else if (arg === "node_modules/fill-range") return __webpack_require__(226);
  else if (arg === "node_modules/find-replace") return __webpack_require__(1533);
  else if (arg === "node_modules/flat-cache") return __webpack_require__(824);
  else if (arg === "node_modules/flatted/cjs") return __webpack_require__(1508);
  else if (arg === "node_modules/flatted") return __webpack_require__(2737);
  else if (arg === "node_modules/fs.realpath") return __webpack_require__(3342);
  else if (arg === "node_modules/functional-red-black-tree") return __webpack_require__(6638);
  else if (arg === "node_modules/gensync") return __webpack_require__(4344);
  else if (arg === "node_modules/glob-parent") return __webpack_require__(7770);
  else if (arg === "node_modules/glob") return __webpack_require__(388);
  else if (arg === "node_modules/globals") return __webpack_require__(4709);
  else if (arg === "node_modules/globby/node_modules/ignore") return __webpack_require__(1000);
  else if (arg === "node_modules/globby") return __webpack_require__(7180);
  else if (arg === "node_modules/has-flag") return __webpack_require__(9317);
  else if (arg === "node_modules/iconv-lite") return __webpack_require__(1773);
  else if (arg === "node_modules/ignore") return __webpack_require__(3548);
  else if (arg === "node_modules/import-fresh") return __webpack_require__(886);
  else if (arg === "node_modules/imurmurhash") return __webpack_require__(8528);
  else if (arg === "node_modules/inflight") return __webpack_require__(8755);
  else if (arg === "node_modules/inherits") return __webpack_require__(9394);
  else if (arg === "node_modules/inquirer/node_modules/ansi-styles") return __webpack_require__(7566);
  else if (arg === "node_modules/inquirer/node_modules/chalk") return __webpack_require__(69);
  else if (arg === "node_modules/inquirer/node_modules/color-convert") return __webpack_require__(5273);
  else if (arg === "node_modules/inquirer/node_modules/color-name") return __webpack_require__(6513);
  else if (arg === "node_modules/inquirer/node_modules/has-flag") return __webpack_require__(1429);
  else if (arg === "node_modules/inquirer/node_modules/supports-color") return __webpack_require__(7834);
  else if (arg === "node_modules/inquirer") return __webpack_require__(994);
  else if (arg === "node_modules/is-extglob") return __webpack_require__(8434);
  else if (arg === "node_modules/is-fullwidth-code-point") return __webpack_require__(9458);
  else if (arg === "node_modules/is-glob") return __webpack_require__(5646);
  else if (arg === "node_modules/is-number") return __webpack_require__(4278);
  else if (arg === "node_modules/is-unicode-supported") return __webpack_require__(6565);
  else if (arg === "node_modules/isexe") return __webpack_require__(7938);
  else if (arg === "node_modules/js-tokens") return __webpack_require__(6399);
  else if (arg === "node_modules/js-yaml") return __webpack_require__(1080);
  else if (arg === "node_modules/jsesc") return __webpack_require__(9723);
  else if (arg === "node_modules/json-schema-traverse") return __webpack_require__(2371);
  else if (arg === "node_modules/json-stable-stringify-without-jsonify") return __webpack_require__(2709);
  else if (arg === "node_modules/json5") return __webpack_require__(988);
  else if (arg === "node_modules/levn") return __webpack_require__(7265);
  else if (arg === "node_modules/lodash.camelcase") return __webpack_require__(3496);
  else if (arg === "node_modules/lodash.merge") return __webpack_require__(6421);
  else if (arg === "node_modules/lodash.truncate") return __webpack_require__(8889);
  else if (arg === "node_modules/lodash") return __webpack_require__(3235);
  else if (arg === "node_modules/log-symbols/node_modules/ansi-styles") return __webpack_require__(4910);
  else if (arg === "node_modules/log-symbols/node_modules/chalk") return __webpack_require__(6525);
  else if (arg === "node_modules/log-symbols/node_modules/color-convert") return __webpack_require__(3302);
  else if (arg === "node_modules/log-symbols/node_modules/color-name") return __webpack_require__(9838);
  else if (arg === "node_modules/log-symbols/node_modules/has-flag") return __webpack_require__(2206);
  else if (arg === "node_modules/log-symbols/node_modules/supports-color") return __webpack_require__(2230);
  else if (arg === "node_modules/log-symbols") return __webpack_require__(5741);
  else if (arg === "node_modules/lru-cache") return __webpack_require__(1410);
  else if (arg === "node_modules/merge2") return __webpack_require__(3121);
  else if (arg === "node_modules/micromatch") return __webpack_require__(4266);
  else if (arg === "node_modules/mimic-fn") return __webpack_require__(92);
  else if (arg === "node_modules/minimatch") return __webpack_require__(8442);
  else if (arg === "node_modules/ms") return __webpack_require__(317);
  else if (arg === "node_modules/mute-stream") return __webpack_require__(5274);
  else if (arg === "node_modules/natural-compare") return __webpack_require__(7503);
  else if (arg === "node_modules/node-releases") return __webpack_require__(4144);
  else if (arg === "node_modules/once") return __webpack_require__(7376);
  else if (arg === "node_modules/onetime") return __webpack_require__(4776);
  else if (arg === "node_modules/optionator") return __webpack_require__(9026);
  else if (arg === "node_modules/os-tmpdir") return __webpack_require__(4370);
  else if (arg === "node_modules/parent-module") return __webpack_require__(2802);
  else if (arg === "node_modules/path-is-absolute") return __webpack_require__(5418);
  else if (arg === "node_modules/path-key") return __webpack_require__(8664);
  else if (arg === "node_modules/path-type") return __webpack_require__(8042);
  else if (arg === "node_modules/picocolors") return __webpack_require__(7999);
  else if (arg === "node_modules/picomatch") return __webpack_require__(5202);
  else if (arg === "node_modules/prelude-ls") return __webpack_require__(2546);
  else if (arg === "node_modules/progress") return __webpack_require__(4493);
  else if (arg === "node_modules/punycode") return __webpack_require__(9548);
  else if (arg === "node_modules/queue-microtask") return __webpack_require__(6966);
  else if (arg === "node_modules/regexpp") return __webpack_require__(9263);
  else if (arg === "node_modules/require-from-string") return __webpack_require__(9643);
  else if (arg === "node_modules/resolve-from") return __webpack_require__(8659);
  else if (arg === "node_modules/restore-cursor") return __webpack_require__(5667);
  else if (arg === "node_modules/reusify") return __webpack_require__(7263);
  else if (arg === "node_modules/rimraf") return __webpack_require__(5817);
  else if (arg === "node_modules/run-async") return __webpack_require__(8213);
  else if (arg === "node_modules/run-parallel") return __webpack_require__(2186);
  else if (arg === "node_modules/rxjs/ajax") return __webpack_require__(9284);
  else if (arg === "node_modules/rxjs/fetch") return __webpack_require__(3410);
  else if (arg === "node_modules/rxjs/internal-compatibility") return __webpack_require__(6473);
  else if (arg === "node_modules/rxjs/operators") return __webpack_require__(9109);
  else if (arg === "node_modules/rxjs") return __webpack_require__(248);
  else if (arg === "node_modules/rxjs/src/ajax") return __webpack_require__(1582);
  else if (arg === "node_modules/rxjs/src/fetch") return __webpack_require__(2332);
  else if (arg === "node_modules/rxjs/src/internal-compatibility") return __webpack_require__(1554);
  else if (arg === "node_modules/rxjs/src/operators") return __webpack_require__(2643);
  else if (arg === "node_modules/rxjs/src/testing") return __webpack_require__(2950);
  else if (arg === "node_modules/rxjs/src/webSocket") return __webpack_require__(9772);
  else if (arg === "node_modules/rxjs/testing") return __webpack_require__(3626);
  else if (arg === "node_modules/rxjs/webSocket") return __webpack_require__(4419);
  else if (arg === "node_modules/safer-buffer") return __webpack_require__(8780);
  else if (arg === "node_modules/semver/node_modules/lru-cache") return __webpack_require__(6259);
  else if (arg === "node_modules/semver/node_modules/yallist") return __webpack_require__(7905);
  else if (arg === "node_modules/semver") return __webpack_require__(5543);
  else if (arg === "node_modules/shebang-command") return __webpack_require__(331);
  else if (arg === "node_modules/shebang-regex") return __webpack_require__(4217);
  else if (arg === "node_modules/signal-exit") return __webpack_require__(9636);
  else if (arg === "node_modules/slash") return __webpack_require__(12);
  else if (arg === "node_modules/slice-ansi/node_modules/ansi-styles") return __webpack_require__(4760);
  else if (arg === "node_modules/slice-ansi/node_modules/color-convert") return __webpack_require__(8891);
  else if (arg === "node_modules/slice-ansi/node_modules/color-name") return __webpack_require__(8229);
  else if (arg === "node_modules/slice-ansi") return __webpack_require__(3781);
  else if (arg === "node_modules/sprintf-js") return __webpack_require__(8204);
  else if (arg === "node_modules/string-argv/commonjs") return __webpack_require__(671);
  else if (arg === "node_modules/string-argv") return __webpack_require__(2990);
  else if (arg === "node_modules/string-width") return __webpack_require__(7846);
  else if (arg === "node_modules/strip-ansi") return __webpack_require__(9725);
  else if (arg === "node_modules/strip-json-comments") return __webpack_require__(6821);
  else if (arg === "node_modules/supports-color") return __webpack_require__(5760);
  else if (arg === "node_modules/table/node_modules/ajv") return __webpack_require__(6057);
  else if (arg === "node_modules/table/node_modules/json-schema-traverse") return __webpack_require__(3966);
  else if (arg === "node_modules/table") return __webpack_require__(3354);
  else if (arg === "node_modules/text-table") return __webpack_require__(5471);
  else if (arg === "node_modules/through") return __webpack_require__(9904);
  else if (arg === "node_modules/tmp") return __webpack_require__(8591);
  else if (arg === "node_modules/to-fast-properties") return __webpack_require__(1663);
  else if (arg === "node_modules/to-regex-range") return __webpack_require__(64);
  else if (arg === "node_modules/tslib/modules") return __webpack_require__(7104);
  else if (arg === "node_modules/tslib") return __webpack_require__(4346);
  else if (arg === "node_modules/tslib/test/validateModuleExportsMatchCommonJS") return __webpack_require__(6676);
  else if (arg === "node_modules/tunnel") return __webpack_require__(957);
  else if (arg === "node_modules/type-check") return __webpack_require__(2935);
  else if (arg === "node_modules/type-detect") return __webpack_require__(999);
  else if (arg === "node_modules/type-fest") return __webpack_require__(7725);
  else if (arg === "node_modules/typical") return __webpack_require__(29);
  else if (arg === "node_modules/update-browserslist-db") return __webpack_require__(5752);
  else if (arg === "node_modules/uri-js") return __webpack_require__(1569);
  else if (arg === "node_modules/uuid") return __webpack_require__(4820);
  else if (arg === "node_modules/v8-compile-cache") return __webpack_require__(3733);
  else if (arg === "node_modules/version-bump-prompt") return __webpack_require__(9965);
  else if (arg === "node_modules/which") return __webpack_require__(5048);
  else if (arg === "node_modules/word-wrap") return __webpack_require__(6255);
  else if (arg === "node_modules/wrappy") return __webpack_require__(7603);
  else if (arg === "node_modules/yallist") return __webpack_require__(9712);
  else if (arg === "/") return __webpack_require__(306);
}
'use strict';

const core = __webpack_require__(6432);
const exec = __webpack_require__(1514);
const fs = __webpack_require__(5747);
const getInputs = __webpack_require__(7428);
const isLandoPlugin = __webpack_require__(7539);
const path = __webpack_require__(5622);
const semverClean = __webpack_require__(8848);
const semverValid = __webpack_require__(9601);

const {execSync} = __webpack_require__(3129);

const main = async () => {
  // start by getting the inputs
  const inputs = getInputs();

  try {
    // validate that we have a version
    if (!inputs.version) throw new Error('Version is a required input!');
    // and that it is semantically valid
    if (semverValid(semverClean(inputs.version)) === null) throw new Error('Version must be semver valid!');
    // and that we have a package.json
    if (!fs.existsSync(`${inputs.root}/package.json`)) throw new Error(`Could not detect a package.json in ${inputs.root}`);

    // add local node bin to path so we can make use of stuff weve installed
    // @NOTE: this location differs based on how we are calling it eg dist/index.js or directly
    if (fs.existsSync(path.resolve(__dirname, '..', 'node_modules', '.bin'))) {
      core.addPath(path.resolve(__dirname, '..', 'node_modules', '.bin'));
    } else {
      core.addPath(path.resolve(__dirname, 'node_modules', '.bin'));
    }

    // configure git
    core.startGroup('Configuring git');
    // get status of shallowness
    const isShallow = execSync('git rev-parse --is-shallow-repository', {maxBuffer: 1024 * 1024 * 10, encoding: 'utf-8'});
    // set user/email
    await exec.exec('git', ['config', 'user.name', inputs.syncUsername]);
    await exec.exec('git', ['config', 'user.email', inputs.syncEmail]);
    // if a shallow repo then unshallow and fetch all
    if (isShallow.trim() === 'true') {
      await exec.exec('git', ['fetch', '--unshallow']);
      await exec.exec('git', ['fetch', '--all']);
    }
    // check out correct branch
    await exec.exec('git', ['checkout', inputs.syncBranch]);
    core.endGroup();

    // if using landoPlugin ez-mode then also bundle deps
    if (inputs.landoPlugin) {
      await exec.exec('bundle-dependencies', ['update']);
      await exec.exec('bundle-dependencies', ['list-bundled-dependencies']);
    }

    // run user specified commands
    for (const command of inputs.commands) await exec.exec(command);

    // bump version
    await exec.exec('bump', [inputs.version, '--commit', inputs.syncMessage, '--all']);

    // get helpful stuff
    const currentCommit = execSync('git log --pretty=format:\'%h\' -n 1', {maxBuffer: 1024 * 1024 * 10, encoding: 'utf-8'});
    const tags = inputs.syncTags.concat([inputs.version]);

    // tag commits
    for (const tag of tags) await exec.exec('git', ['tag', '--force', tag, currentCommit.trim()]);

    // if using landoPlugin ez-mode then validate lando plugin
    if (inputs.landoPlugin && !isLandoPlugin(__ncc_wildcard$0(inputs.root))) {
      throw new Error('Does not appear to be a valid Lando plugin! package.json must contain a lando key or the lando-plugin keyword');
    }

    // log where we are at before we sync
    core.startGroup('Change information');
    await exec.exec('git', ['--no-pager', 'log', '-1']);
    await exec.exec('git', ['--no-pager', 'tag', '--points-at', 'HEAD']);
    await exec.exec('git', ['diff', 'HEAD~1']);
    core.endGroup();

    // sync back to repo
    if (inputs.sync) {
      await exec.exec('git', ['push', 'origin', inputs.syncBranch]);
      for (const tag of tags) await exec.exec('git', ['push', '--force', 'origin', tag]);
    }

  // catch
  } catch (error) {
    core.setFailed(error.message);
    process.exit(1);
  }
};

// main logix
main();


/***/ }),

/***/ 741:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@vercel/ncc\",\"description\":\"Simple CLI for compiling a Node.js module into a single file, together with all its dependencies, gcc-style.\",\"version\":\"0.24.1\",\"repository\":\"vercel/ncc\",\"license\":\"MIT\",\"main\":\"./dist/ncc/index.js\",\"bin\":{\"ncc\":\"./dist/ncc/cli.js\"},\"scripts\":{\"build\":\"node scripts/build\",\"build-test-binary\":\"cd test/binary && node-gyp rebuild && cp build/Release/hello.node ../integration/hello.node\",\"codecov\":\"codecov\",\"test\":\"node --expose-gc --max_old_space_size=3072 node_modules/.bin/jest\",\"test-coverage\":\"node --expose-gc --max_old_space_size=3072 node_modules/.bin/jest --coverage --globals \\\"{\\\\\\\"coverage\\\\\\\":true}\\\" && codecov\",\"prepublish\":\"yarn build\"},\"devDependencies\":{\"@azure/cosmos\":\"^2.0.5\",\"@bugsnag/js\":\"^5.0.1\",\"@ffmpeg-installer/ffmpeg\":\"^1.0.17\",\"@google-cloud/bigquery\":\"^2.0.1\",\"@google-cloud/firestore\":\"^2.2.0\",\"@sentry/node\":\"^4.3.0\",\"@tensorflow/tfjs-node\":\"^0.3.0\",\"@zeit/webpack-asset-relocator-loader\":\"0.8.0\",\"analytics-node\":\"^3.3.0\",\"apollo-server-express\":\"^2.2.2\",\"arg\":\"^4.1.0\",\"auth0\":\"^2.14.0\",\"aws-sdk\":\"^2.356.0\",\"axios\":\"^0.18.1\",\"azure-storage\":\"^2.10.2\",\"browserify-middleware\":\"^8.1.1\",\"bytes\":\"^3.0.0\",\"canvas\":\"^2.2.0\",\"chromeless\":\"^1.5.2\",\"codecov\":\"^3.6.5\",\"consolidate\":\"^0.15.1\",\"copy\":\"^0.3.2\",\"core-js\":\"^2.5.7\",\"cowsay\":\"^1.3.1\",\"esm\":\"^3.2.22\",\"express\":\"^4.16.4\",\"fetch-h2\":\"^1.0.2\",\"firebase\":\"^6.1.1\",\"firebase-admin\":\"^6.3.0\",\"fluent-ffmpeg\":\"^2.1.2\",\"fontkit\":\"^1.7.7\",\"get-folder-size\":\"^2.0.0\",\"glob\":\"^7.1.3\",\"got\":\"^9.3.2\",\"graceful-fs\":\"^4.1.15\",\"graphql\":\"^14.0.2\",\"highlights\":\"^3.1.1\",\"hot-shots\":\"^5.9.2\",\"in-publish\":\"^2.0.0\",\"ioredis\":\"^4.2.0\",\"isomorphic-unfetch\":\"^3.0.0\",\"jest\":\"^26.3.0\",\"jimp\":\"^0.5.6\",\"jugglingdb\":\"2.0.1\",\"koa\":\"^2.6.2\",\"leveldown\":\"^5.6.0\",\"license-webpack-plugin\":\"^2.3.0\",\"lighthouse\":\"^5.0.0\",\"loopback\":\"^3.24.0\",\"mailgun\":\"^0.5.0\",\"mariadb\":\"^2.0.1-beta\",\"memcached\":\"^2.2.2\",\"mkdirp\":\"^0.5.1\",\"mongoose\":\"^5.3.12\",\"mysql\":\"^2.16.0\",\"node-gyp\":\"^3.8.0\",\"npm\":\"^6.13.4\",\"oracledb\":\"^4.2.0\",\"passport\":\"^0.4.0\",\"passport-google-oauth\":\"^1.0.0\",\"path-platform\":\"^0.11.15\",\"pdf2json\":\"^1.1.8\",\"pdfkit\":\"^0.8.3\",\"pg\":\"^7.6.1\",\"pug\":\"^2.0.3\",\"react\":\"^16.6.3\",\"react-dom\":\"^16.6.3\",\"redis\":\"^2.8.0\",\"request\":\"^2.88.0\",\"rxjs\":\"^6.3.3\",\"saslprep\":\"^1.0.2\",\"sequelize\":\"^5.8.6\",\"sharp\":\"^0.25.2\",\"shebang-loader\":\"^0.0.1\",\"socket.io\":\"^2.2.0\",\"source-map-support\":\"^0.5.9\",\"stripe\":\"^6.15.0\",\"swig\":\"^1.4.2\",\"terser\":\"^3.11.0\",\"the-answer\":\"^1.0.0\",\"tiny-json-http\":\"^7.0.2\",\"ts-loader\":\"^5.3.1\",\"tsconfig-paths\":\"^3.7.0\",\"tsconfig-paths-webpack-plugin\":\"^3.2.0\",\"twilio\":\"^3.23.2\",\"typescript\":\"^3.2.2\",\"vm2\":\"^3.6.6\",\"vue\":\"^2.5.17\",\"vue-server-renderer\":\"^2.5.17\",\"webpack\":\"5.0.0-beta.28\",\"when\":\"^3.7.8\"}}");

/***/ }),

/***/ 1452:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"acorn-jsx\",\"description\":\"Modern, fast React.js JSX parser\",\"homepage\":\"https://github.com/acornjs/acorn-jsx\",\"version\":\"5.3.2\",\"maintainers\":[{\"name\":\"Ingvar Stepanyan\",\"email\":\"me@rreverser.com\",\"web\":\"http://rreverser.com/\"}],\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/acornjs/acorn-jsx\"},\"license\":\"MIT\",\"scripts\":{\"test\":\"node test/run.js\"},\"peerDependencies\":{\"acorn\":\"^6.0.0 || ^7.0.0 || ^8.0.0\"},\"devDependencies\":{\"acorn\":\"^8.0.1\"}}");

/***/ }),

/***/ 2201:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"acorn\",\"description\":\"ECMAScript parser\",\"homepage\":\"https://github.com/acornjs/acorn\",\"main\":\"dist/acorn.js\",\"types\":\"dist/acorn.d.ts\",\"module\":\"dist/acorn.mjs\",\"version\":\"7.4.1\",\"engines\":{\"node\":\">=0.4.0\"},\"maintainers\":[{\"name\":\"Marijn Haverbeke\",\"email\":\"marijnh@gmail.com\",\"web\":\"https://marijnhaverbeke.nl\"},{\"name\":\"Ingvar Stepanyan\",\"email\":\"me@rreverser.com\",\"web\":\"https://rreverser.com/\"},{\"name\":\"Adrian Heine\",\"web\":\"http://adrianheine.de\"}],\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/acornjs/acorn.git\"},\"license\":\"MIT\",\"scripts\":{\"prepare\":\"cd ..; npm run build:main && npm run build:bin\"},\"bin\":{\"acorn\":\"./bin/acorn\"}}");

/***/ }),

/***/ 5802:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"ajv\",\"version\":\"6.12.6\",\"description\":\"Another JSON Schema Validator\",\"main\":\"lib/ajv.js\",\"typings\":\"lib/ajv.d.ts\",\"files\":[\"lib/\",\"dist/\",\"scripts/\",\"LICENSE\",\".tonic_example.js\"],\"scripts\":{\"eslint\":\"eslint lib/{compile/,}*.js spec/{**/,}*.js scripts --ignore-pattern spec/JSON-Schema-Test-Suite\",\"jshint\":\"jshint lib/{compile/,}*.js\",\"lint\":\"npm run jshint && npm run eslint\",\"test-spec\":\"mocha spec/{**/,}*.spec.js -R spec\",\"test-fast\":\"AJV_FAST_TEST=true npm run test-spec\",\"test-debug\":\"npm run test-spec -- --inspect-brk\",\"test-cov\":\"nyc npm run test-spec\",\"test-ts\":\"tsc --target ES5 --noImplicitAny --noEmit spec/typescript/index.ts\",\"bundle\":\"del-cli dist && node ./scripts/bundle.js . Ajv pure_getters\",\"bundle-beautify\":\"node ./scripts/bundle.js js-beautify\",\"build\":\"del-cli lib/dotjs/*.js \\\"!lib/dotjs/index.js\\\" && node scripts/compile-dots.js\",\"test-karma\":\"karma start\",\"test-browser\":\"del-cli .browser && npm run bundle && scripts/prepare-tests && npm run test-karma\",\"test-all\":\"npm run test-cov && if-node-version 10 npm run test-browser\",\"test\":\"npm run lint && npm run build && npm run test-all\",\"prepublish\":\"npm run build && npm run bundle\",\"watch\":\"watch \\\"npm run build\\\" ./lib/dot\"},\"nyc\":{\"exclude\":[\"**/spec/**\",\"node_modules\"],\"reporter\":[\"lcov\",\"text-summary\"]},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/ajv-validator/ajv.git\"},\"keywords\":[\"JSON\",\"schema\",\"validator\",\"validation\",\"jsonschema\",\"json-schema\",\"json-schema-validator\",\"json-schema-validation\"],\"author\":\"Evgeny Poberezkin\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/ajv-validator/ajv/issues\"},\"homepage\":\"https://github.com/ajv-validator/ajv\",\"tonicExampleFilename\":\".tonic_example.js\",\"dependencies\":{\"fast-deep-equal\":\"^3.1.1\",\"fast-json-stable-stringify\":\"^2.0.0\",\"json-schema-traverse\":\"^0.4.1\",\"uri-js\":\"^4.2.2\"},\"devDependencies\":{\"ajv-async\":\"^1.0.0\",\"bluebird\":\"^3.5.3\",\"brfs\":\"^2.0.0\",\"browserify\":\"^16.2.0\",\"chai\":\"^4.0.1\",\"coveralls\":\"^3.0.1\",\"del-cli\":\"^3.0.0\",\"dot\":\"^1.0.3\",\"eslint\":\"^7.3.1\",\"gh-pages-generator\":\"^0.2.3\",\"glob\":\"^7.0.0\",\"if-node-version\":\"^1.0.0\",\"js-beautify\":\"^1.7.3\",\"jshint\":\"^2.10.2\",\"json-schema-test\":\"^2.0.0\",\"karma\":\"^5.0.0\",\"karma-chrome-launcher\":\"^3.0.0\",\"karma-mocha\":\"^2.0.0\",\"karma-sauce-launcher\":\"^4.1.3\",\"mocha\":\"^8.0.1\",\"nyc\":\"^15.0.0\",\"pre-commit\":\"^1.1.1\",\"require-globify\":\"^1.3.0\",\"typescript\":\"^3.9.5\",\"uglify-js\":\"^3.6.9\",\"watch\":\"^1.0.0\"},\"collective\":{\"type\":\"opencollective\",\"url\":\"https://opencollective.com/ajv\"},\"funding\":{\"type\":\"github\",\"url\":\"https://github.com/sponsors/epoberezkin\"}}");

/***/ }),

/***/ 7266:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"ansi-colors\",\"description\":\"Easily add ANSI colors to your text and symbols in the terminal. A faster drop-in replacement for chalk, kleur and turbocolor (without the dependencies and rendering bugs).\",\"version\":\"4.1.3\",\"homepage\":\"https://github.com/doowb/ansi-colors\",\"author\":\"Brian Woodward (https://github.com/doowb)\",\"contributors\":[\"Brian Woodward (https://twitter.com/doowb)\",\"Jason Schilling (https://sourecode.de)\",\"Jon Schlinkert (http://twitter.com/jonschlinkert)\",\"Jordan (https://github.com/Silic0nS0ldier)\"],\"repository\":\"doowb/ansi-colors\",\"bugs\":{\"url\":\"https://github.com/doowb/ansi-colors/issues\"},\"license\":\"MIT\",\"files\":[\"index.js\",\"symbols.js\",\"types/index.d.ts\"],\"main\":\"index.js\",\"types\":\"./types/index.d.ts\",\"engines\":{\"node\":\">=6\"},\"scripts\":{\"test\":\"mocha\"},\"devDependencies\":{\"decache\":\"^4.5.1\",\"gulp-format-md\":\"^2.0.0\",\"justified\":\"^1.0.1\",\"mocha\":\"^6.1.4\",\"text-table\":\"^0.2.0\"},\"keywords\":[\"256\",\"ansi\",\"bgblack\",\"bgBlack\",\"bgblue\",\"bgBlue\",\"bgcyan\",\"bgCyan\",\"bggreen\",\"bgGreen\",\"bgmagenta\",\"bgMagenta\",\"bgred\",\"bgRed\",\"bgwhite\",\"bgWhite\",\"bgyellow\",\"bgYellow\",\"black\",\"blue\",\"bold\",\"cli\",\"clorox\",\"color\",\"colors\",\"colour\",\"command line\",\"command-line\",\"console\",\"cyan\",\"dim\",\"formatting\",\"gray\",\"green\",\"grey\",\"hidden\",\"inverse\",\"italic\",\"kleur\",\"log\",\"logging\",\"magenta\",\"red\",\"reset\",\"rgb\",\"shell\",\"str\",\"strikethrough\",\"string\",\"style\",\"styles\",\"terminal\",\"text\",\"tty\",\"underline\",\"white\",\"xterm\",\"yellow\"],\"verb\":{\"toc\":false,\"layout\":\"default\",\"tasks\":[\"readme\"],\"data\":{\"author\":{\"linkedin\":\"woodwardbrian\",\"twitter\":\"doowb\"}},\"plugins\":[\"gulp-format-md\"],\"lint\":{\"reflinks\":true},\"related\":{\"list\":[\"ansi-wrap\",\"strip-color\"]},\"reflinks\":[\"chalk\",\"colorette\",\"colors\",\"kleur\"]}}");

/***/ }),

/***/ 1042:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"type-fest\",\"version\":\"0.21.3\",\"description\":\"A collection of essential TypeScript types\",\"license\":\"(MIT OR CC0-1.0)\",\"repository\":\"sindresorhus/type-fest\",\"funding\":\"https://github.com/sponsors/sindresorhus\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"https://sindresorhus.com\"},\"engines\":{\"node\":\">=10\"},\"scripts\":{\"test\":\"xo && tsd && tsc\"},\"files\":[\"index.d.ts\",\"base.d.ts\",\"source\",\"ts41\"],\"keywords\":[\"typescript\",\"ts\",\"types\",\"utility\",\"util\",\"utilities\",\"omit\",\"merge\",\"json\"],\"devDependencies\":{\"@sindresorhus/tsconfig\":\"~0.7.0\",\"expect-type\":\"^0.11.0\",\"tsd\":\"^0.14.0\",\"typescript\":\"^4.1.3\",\"xo\":\"^0.36.1\"},\"types\":\"./index.d.ts\",\"typesVersions\":{\">=4.1\":{\"*\":[\"ts41/*\"]}},\"xo\":{\"rules\":{\"@typescript-eslint/ban-types\":\"off\",\"@typescript-eslint/indent\":\"off\",\"node/no-unsupported-features/es-builtins\":\"off\"}}}");

/***/ }),

/***/ 7986:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"ansi-escapes\",\"version\":\"4.3.2\",\"description\":\"ANSI escape codes for manipulating the terminal\",\"license\":\"MIT\",\"repository\":\"sindresorhus/ansi-escapes\",\"funding\":\"https://github.com/sponsors/sindresorhus\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"https://sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava && tsd\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"ansi\",\"terminal\",\"console\",\"cli\",\"string\",\"tty\",\"escape\",\"escapes\",\"formatting\",\"shell\",\"xterm\",\"log\",\"logging\",\"command-line\",\"text\",\"vt100\",\"sequence\",\"control\",\"code\",\"codes\",\"cursor\",\"iterm\",\"iterm2\"],\"dependencies\":{\"type-fest\":\"^0.21.3\"},\"devDependencies\":{\"@types/node\":\"^13.7.7\",\"ava\":\"^2.1.0\",\"tsd\":\"^0.14.0\",\"xo\":\"^0.25.3\"}}");

/***/ }),

/***/ 5090:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"ansi-regex\",\"version\":\"5.0.1\",\"description\":\"Regular expression for matching ANSI escape codes\",\"license\":\"MIT\",\"repository\":\"chalk/ansi-regex\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava && tsd\",\"view-supported\":\"node fixtures/view-codes.js\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"ansi\",\"styles\",\"color\",\"colour\",\"colors\",\"terminal\",\"console\",\"cli\",\"string\",\"tty\",\"escape\",\"formatting\",\"rgb\",\"256\",\"shell\",\"xterm\",\"command-line\",\"text\",\"regex\",\"regexp\",\"re\",\"match\",\"test\",\"find\",\"pattern\"],\"devDependencies\":{\"ava\":\"^2.4.0\",\"tsd\":\"^0.9.0\",\"xo\":\"^0.25.3\"}}");

/***/ }),

/***/ 3604:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"ansi-styles\",\"version\":\"3.2.1\",\"description\":\"ANSI escape codes for styling strings in the terminal\",\"license\":\"MIT\",\"repository\":\"chalk/ansi-styles\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=4\"},\"scripts\":{\"test\":\"xo && ava\",\"screenshot\":\"svg-term --command='node screenshot' --out=screenshot.svg --padding=3 --width=55 --height=3 --at=1000 --no-cursor\"},\"files\":[\"index.js\"],\"keywords\":[\"ansi\",\"styles\",\"color\",\"colour\",\"colors\",\"terminal\",\"console\",\"cli\",\"string\",\"tty\",\"escape\",\"formatting\",\"rgb\",\"256\",\"shell\",\"xterm\",\"log\",\"logging\",\"command-line\",\"text\"],\"dependencies\":{\"color-convert\":\"^1.9.0\"},\"devDependencies\":{\"ava\":\"*\",\"babel-polyfill\":\"^6.23.0\",\"svg-term-cli\":\"^2.1.1\",\"xo\":\"*\"},\"ava\":{\"require\":\"babel-polyfill\"}}");

/***/ }),

/***/ 1427:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"argparse\",\"description\":\"Very powerful CLI arguments parser. Native port of argparse - python's options parsing library\",\"version\":\"1.0.10\",\"keywords\":[\"cli\",\"parser\",\"argparse\",\"option\",\"args\"],\"contributors\":[\"Eugene Shkuropat\",\"Paul Jacobson\"],\"files\":[\"index.js\",\"lib/\"],\"license\":\"MIT\",\"repository\":\"nodeca/argparse\",\"scripts\":{\"test\":\"make test\"},\"dependencies\":{\"sprintf-js\":\"~1.0.2\"},\"devDependencies\":{\"eslint\":\"^2.13.1\",\"istanbul\":\"^0.4.5\",\"mocha\":\"^3.1.0\",\"ndoc\":\"^5.0.1\"}}");

/***/ }),

/***/ 5232:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"array-back\",\"author\":\"Lloyd Brookes <75pound@gmail.com>\",\"version\":\"3.1.0\",\"description\":\"Guarantees an array back\",\"repository\":\"https://github.com/75lb/array-back.git\",\"license\":\"MIT\",\"main\":\"dist/index.js\",\"keywords\":[\"to\",\"convert\",\"return\",\"array\",\"arrayify\"],\"engines\":{\"node\":\">=6\"},\"files\":[\"index.mjs\",\"dist/index.js\"],\"scripts\":{\"test\":\"npm run test:esm && npm run test:js\",\"test:esm\":\"node --experimental-modules test.mjs\",\"test:js\":\"npm run dist:test && node dist/test.js\",\"docs\":\"jsdoc2md -t README.hbs index.mjs -c build/jsdoc.conf > README.md; echo\",\"cover\":\"nyc test-runner test.js && nyc report --reporter=text-lcov | coveralls\",\"dist\":\"rollup -c build/index.config.js\",\"dist:test\":\"rollup -c build/test.config.js\",\"lint\":\"standard **/*.mjs\"},\"dependencies\":{},\"devDependencies\":{\"coveralls\":\"^3.0.3\",\"jsdoc-to-markdown\":\"^4.0.1\",\"rollup\":\"^1.9.0\",\"test-runner\":\"^0.5.1\"},\"standard\":{\"ignore\":[\"dist\",\"build\"]}}");

/***/ }),

/***/ 7980:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"array-union\",\"version\":\"2.1.0\",\"description\":\"Create an array of unique values, in order, from the input arrays\",\"license\":\"MIT\",\"repository\":\"sindresorhus/array-union\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava && tsd\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"array\",\"set\",\"uniq\",\"unique\",\"duplicate\",\"remove\",\"union\",\"combine\",\"merge\"],\"devDependencies\":{\"ava\":\"^1.4.1\",\"tsd\":\"^0.7.2\",\"xo\":\"^0.24.0\"}}");

/***/ }),

/***/ 7573:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"astral-regex\",\"version\":\"2.0.0\",\"description\":\"Regular expression for matching astral symbols\",\"license\":\"MIT\",\"repository\":\"kevva/astral-regex\",\"author\":{\"name\":\"Kevin Mårtensson\",\"email\":\"kevinmartensson@gmail.com\",\"url\":\"github.com/kevva\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava && tsd\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"astral\",\"emoji\",\"regex\",\"surrogate\"],\"devDependencies\":{\"ava\":\"^1.4.1\",\"tsd\":\"^0.7.2\",\"xo\":\"^0.24.0\"}}");

/***/ }),

/***/ 5519:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"balanced-match\",\"description\":\"Match balanced character pairs, like \\\"{\\\" and \\\"}\\\"\",\"version\":\"1.0.2\",\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/juliangruber/balanced-match.git\"},\"homepage\":\"https://github.com/juliangruber/balanced-match\",\"main\":\"index.js\",\"scripts\":{\"test\":\"tape test/test.js\",\"bench\":\"matcha test/bench.js\"},\"devDependencies\":{\"matcha\":\"^0.7.0\",\"tape\":\"^4.6.0\"},\"keywords\":[\"match\",\"regexp\",\"test\",\"balanced\",\"parse\"],\"author\":{\"name\":\"Julian Gruber\",\"email\":\"mail@juliangruber.com\",\"url\":\"http://juliangruber.com\"},\"license\":\"MIT\",\"testling\":{\"files\":\"test/*.js\",\"browsers\":[\"ie/8..latest\",\"firefox/20..latest\",\"firefox/nightly\",\"chrome/25..latest\",\"chrome/canary\",\"opera/12..latest\",\"opera/next\",\"safari/5.1..latest\",\"ipad/6.0..latest\",\"iphone/6.0..latest\",\"android-browser/4.2..latest\"]}}");

/***/ }),

/***/ 2289:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"brace-expansion\",\"description\":\"Brace expansion as known from sh/bash\",\"version\":\"1.1.11\",\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/juliangruber/brace-expansion.git\"},\"homepage\":\"https://github.com/juliangruber/brace-expansion\",\"main\":\"index.js\",\"scripts\":{\"test\":\"tape test/*.js\",\"gentest\":\"bash test/generate.sh\",\"bench\":\"matcha test/perf/bench.js\"},\"dependencies\":{\"balanced-match\":\"^1.0.0\",\"concat-map\":\"0.0.1\"},\"devDependencies\":{\"matcha\":\"^0.7.0\",\"tape\":\"^4.6.0\"},\"keywords\":[],\"author\":{\"name\":\"Julian Gruber\",\"email\":\"mail@juliangruber.com\",\"url\":\"http://juliangruber.com\"},\"license\":\"MIT\",\"testling\":{\"files\":\"test/*.js\",\"browsers\":[\"ie/8..latest\",\"firefox/20..latest\",\"firefox/nightly\",\"chrome/25..latest\",\"chrome/canary\",\"opera/12..latest\",\"opera/next\",\"safari/5.1..latest\",\"ipad/6.0..latest\",\"iphone/6.0..latest\",\"android-browser/4.2..latest\"]}}");

/***/ }),

/***/ 8385:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"braces\",\"description\":\"Bash-like brace expansion, implemented in JavaScript. Safer than other brace expansion libs, with complete support for the Bash 4.3 braces specification, without sacrificing speed.\",\"version\":\"3.0.2\",\"homepage\":\"https://github.com/micromatch/braces\",\"author\":\"Jon Schlinkert (https://github.com/jonschlinkert)\",\"contributors\":[\"Brian Woodward (https://twitter.com/doowb)\",\"Elan Shanker (https://github.com/es128)\",\"Eugene Sharygin (https://github.com/eush77)\",\"hemanth.hm (http://h3manth.com)\",\"Jon Schlinkert (http://twitter.com/jonschlinkert)\"],\"repository\":\"micromatch/braces\",\"bugs\":{\"url\":\"https://github.com/micromatch/braces/issues\"},\"license\":\"MIT\",\"files\":[\"index.js\",\"lib\"],\"main\":\"index.js\",\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"mocha\",\"benchmark\":\"node benchmark\"},\"dependencies\":{\"fill-range\":\"^7.0.1\"},\"devDependencies\":{\"ansi-colors\":\"^3.2.4\",\"bash-path\":\"^2.0.1\",\"gulp-format-md\":\"^2.0.0\",\"mocha\":\"^6.1.1\"},\"keywords\":[\"alpha\",\"alphabetical\",\"bash\",\"brace\",\"braces\",\"expand\",\"expansion\",\"filepath\",\"fill\",\"fs\",\"glob\",\"globbing\",\"letter\",\"match\",\"matches\",\"matching\",\"number\",\"numerical\",\"path\",\"range\",\"ranges\",\"sh\"],\"verb\":{\"toc\":false,\"layout\":\"default\",\"tasks\":[\"readme\"],\"lint\":{\"reflinks\":true},\"plugins\":[\"gulp-format-md\"]}}");

/***/ }),

/***/ 8580:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"browserslist\",\"version\":\"4.21.9\",\"description\":\"Share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-env-preset\",\"keywords\":[\"caniuse\",\"browsers\",\"target\"],\"funding\":[{\"type\":\"opencollective\",\"url\":\"https://opencollective.com/browserslist\"},{\"type\":\"tidelift\",\"url\":\"https://tidelift.com/funding/github/npm/browserslist\"},{\"type\":\"github\",\"url\":\"https://github.com/sponsors/ai\"}],\"author\":\"Andrey Sitnik <andrey@sitnik.ru>\",\"license\":\"MIT\",\"repository\":\"browserslist/browserslist\",\"dependencies\":{\"caniuse-lite\":\"^1.0.30001503\",\"electron-to-chromium\":\"^1.4.431\",\"node-releases\":\"^2.0.12\",\"update-browserslist-db\":\"^1.0.11\"},\"engines\":{\"node\":\"^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7\"},\"bin\":{\"browserslist\":\"cli.js\"},\"types\":\"./index.d.ts\",\"browser\":{\"./node.js\":\"./browser.js\",\"path\":false}}");

/***/ }),

/***/ 1627:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"ansi-regex@^2.0.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/strip-ansi\"]],\"_from\":\"ansi-regex@>=2.0.0 <3.0.0\",\"_id\":\"ansi-regex@2.0.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/ansi-regex\",\"_nodeVersion\":\"0.12.5\",\"_npmUser\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},\"_npmVersion\":\"2.11.2\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"ansi-regex\",\"raw\":\"ansi-regex@^2.0.0\",\"rawSpec\":\"^2.0.0\",\"scope\":null,\"spec\":\">=2.0.0 <3.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/strip-ansi\"],\"_resolved\":\"https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.0.0.tgz\",\"_shasum\":\"c5061b6e0ef8a81775e50f5d66151bf6bf371107\",\"_shrinkwrap\":null,\"_spec\":\"ansi-regex@^2.0.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/strip-ansi\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/sindresorhus/ansi-regex/issues\"},\"dependencies\":{},\"description\":\"Regular expression for matching ANSI escape codes\",\"devDependencies\":{\"mocha\":\"*\"},\"directories\":{},\"dist\":{\"shasum\":\"c5061b6e0ef8a81775e50f5d66151bf6bf371107\",\"tarball\":\"http://registry.npmjs.org/ansi-regex/-/ansi-regex-2.0.0.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\"],\"gitHead\":\"57c3f2941a73079fa8b081e02a522e3d29913e2f\",\"homepage\":\"https://github.com/sindresorhus/ansi-regex\",\"keywords\":[\"ansi\",\"styles\",\"color\",\"colour\",\"colors\",\"terminal\",\"console\",\"cli\",\"string\",\"tty\",\"escape\",\"formatting\",\"rgb\",\"256\",\"shell\",\"xterm\",\"command-line\",\"text\",\"regex\",\"regexp\",\"re\",\"match\",\"test\",\"find\",\"pattern\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},{\"email\":\"jappelman@xebia.com\",\"name\":\"jbnicolai\"}],\"name\":\"ansi-regex\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sindresorhus/ansi-regex.git\"},\"scripts\":{\"test\":\"mocha test/test.js\",\"view-supported\":\"node test/viewCodes.js\"},\"version\":\"2.0.0\"}");

/***/ }),

/***/ 3043:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"builtin-modules@^1.0.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/is-builtin-module\"]],\"_from\":\"builtin-modules@>=1.0.0 <2.0.0\",\"_id\":\"builtin-modules@1.1.1\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/builtin-modules\",\"_nodeVersion\":\"5.3.0\",\"_npmUser\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},\"_npmVersion\":\"3.3.12\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"builtin-modules\",\"raw\":\"builtin-modules@^1.0.0\",\"rawSpec\":\"^1.0.0\",\"scope\":null,\"spec\":\">=1.0.0 <2.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/is-builtin-module\"],\"_resolved\":\"https://registry.npmjs.org/builtin-modules/-/builtin-modules-1.1.1.tgz\",\"_shasum\":\"270f076c5a72c02f5b65a47df94c5fe3a278892f\",\"_shrinkwrap\":null,\"_spec\":\"builtin-modules@^1.0.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/is-builtin-module\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/sindresorhus/builtin-modules/issues\"},\"dependencies\":{},\"description\":\"List of the Node.js builtin modules\",\"devDependencies\":{\"ava\":\"*\",\"xo\":\"*\"},\"directories\":{},\"dist\":{\"shasum\":\"270f076c5a72c02f5b65a47df94c5fe3a278892f\",\"tarball\":\"http://registry.npmjs.org/builtin-modules/-/builtin-modules-1.1.1.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\",\"static.js\",\"builtin-modules.json\"],\"gitHead\":\"0ea253452b1d8cb3a70d16464f909dbc0bc370fe\",\"homepage\":\"https://github.com/sindresorhus/builtin-modules#readme\",\"keywords\":[\"builtin\",\"built-in\",\"builtins\",\"node\",\"modules\",\"core\",\"bundled\",\"list\",\"array\",\"names\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"}],\"name\":\"builtin-modules\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sindresorhus/builtin-modules.git\"},\"scripts\":{\"make\":\"node make.js\",\"test\":\"xo && ava\"},\"version\":\"1.1.1\"}");

/***/ }),

/***/ 4520:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"camelcase@^2.0.1\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/yargs\"]],\"_from\":\"camelcase@>=2.0.1 <3.0.0\",\"_id\":\"camelcase@2.1.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/camelcase\",\"_nodeVersion\":\"4.2.4\",\"_npmUser\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},\"_npmVersion\":\"3.6.0\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"camelcase\",\"raw\":\"camelcase@^2.0.1\",\"rawSpec\":\"^2.0.1\",\"scope\":null,\"spec\":\">=2.0.1 <3.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/yargs\",\"/yargs-parser\"],\"_resolved\":\"https://registry.npmjs.org/camelcase/-/camelcase-2.1.0.tgz\",\"_shasum\":\"533ad4cd7f8a1080ded31aba6c79b4bf437ff30c\",\"_shrinkwrap\":null,\"_spec\":\"camelcase@^2.0.1\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/yargs\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"http://sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/sindresorhus/camelcase/issues\"},\"dependencies\":{},\"description\":\"Convert a dash/dot/underscore/space separated string to camelCase: foo-bar → fooBar\",\"devDependencies\":{\"ava\":\"*\",\"xo\":\"*\"},\"directories\":{},\"dist\":{\"shasum\":\"533ad4cd7f8a1080ded31aba6c79b4bf437ff30c\",\"tarball\":\"http://registry.npmjs.org/camelcase/-/camelcase-2.1.0.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\"],\"gitHead\":\"9b73ccb3f48ab86eccb136c155f0eb2e67f40dc3\",\"homepage\":\"https://github.com/sindresorhus/camelcase#readme\",\"keywords\":[\"camelcase\",\"camel-case\",\"camel\",\"case\",\"dash\",\"hyphen\",\"dot\",\"underscore\",\"separator\",\"string\",\"text\",\"convert\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"}],\"name\":\"camelcase\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sindresorhus/camelcase.git\"},\"scripts\":{\"test\":\"xo && ava\"},\"version\":\"2.1.0\"}");

/***/ }),

/***/ 1790:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"cliui@^3.0.3\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/yargs\"]],\"_from\":\"cliui@>=3.0.3 <4.0.0\",\"_id\":\"cliui@3.1.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/cliui\",\"_nodeVersion\":\"0.10.36\",\"_npmUser\":{\"email\":\"ben@npmjs.com\",\"name\":\"bcoe\"},\"_npmVersion\":\"2.7.5\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"cliui\",\"raw\":\"cliui@^3.0.3\",\"rawSpec\":\"^3.0.3\",\"scope\":null,\"spec\":\">=3.0.3 <4.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/yargs\"],\"_resolved\":\"https://registry.npmjs.org/cliui/-/cliui-3.1.0.tgz\",\"_shasum\":\"a3b880308e0a8191721e0081a8c2a8b506d0abf9\",\"_shrinkwrap\":null,\"_spec\":\"cliui@^3.0.3\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/yargs\",\"author\":{\"email\":\"ben@npmjs.com\",\"name\":\"Ben Coe\"},\"bugs\":{\"url\":\"https://github.com/bcoe/cliui/issues\"},\"config\":{\"blanket\":{\"data-cover-never\":[\"node_modules\",\"test\"],\"output-reporter\":\"spec\",\"pattern\":[\"index.js\"]}},\"dependencies\":{\"string-width\":\"^1.0.1\",\"strip-ansi\":\"^3.0.0\",\"wrap-ansi\":\"^1.0.0\"},\"description\":\"easily create complex multi-column command-line-interfaces\",\"devDependencies\":{\"chai\":\"^3.3.0\",\"chalk\":\"^1.1.1\",\"coveralls\":\"^2.11.4\",\"mocha\":\"^2.3.3\",\"nyc\":\"^3.2.2\",\"standard\":\"^5.3.1\"},\"directories\":{},\"dist\":{\"shasum\":\"a3b880308e0a8191721e0081a8c2a8b506d0abf9\",\"tarball\":\"http://registry.npmjs.org/cliui/-/cliui-3.1.0.tgz\"},\"gitHead\":\"c8eb1b4aa6d2efdb5bc4903fb1fa6e9f7f066a72\",\"homepage\":\"https://github.com/bcoe/cliui\",\"keywords\":[\"cli\",\"command-line\",\"layout\",\"design\",\"console\",\"wrap\",\"table\"],\"license\":\"ISC\",\"main\":\"index.js\",\"maintainers\":[{\"email\":\"ben@npmjs.com\",\"name\":\"bcoe\"}],\"name\":\"cliui\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+ssh://git@github.com/bcoe/cliui.git\"},\"scripts\":{\"coverage\":\"nyc --reporter=text-lcov mocha | coveralls\",\"test\":\"standard && nyc mocha\"},\"standard\":{\"globals\":[\"it\"],\"ignore\":[\"**/example/**\"]},\"version\":\"3.1.0\"}");

/***/ }),

/***/ 6656:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"code-point-at@^1.0.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/string-width\"]],\"_from\":\"code-point-at@>=1.0.0 <2.0.0\",\"_id\":\"code-point-at@1.0.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/code-point-at\",\"_nodeVersion\":\"0.12.5\",\"_npmUser\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},\"_npmVersion\":\"2.11.2\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"code-point-at\",\"raw\":\"code-point-at@^1.0.0\",\"rawSpec\":\"^1.0.0\",\"scope\":null,\"spec\":\">=1.0.0 <2.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/string-width\"],\"_resolved\":\"https://registry.npmjs.org/code-point-at/-/code-point-at-1.0.0.tgz\",\"_shasum\":\"f69b192d3f7d91e382e4b71bddb77878619ab0c6\",\"_shrinkwrap\":null,\"_spec\":\"code-point-at@^1.0.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/string-width\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/sindresorhus/code-point-at/issues\"},\"dependencies\":{\"number-is-nan\":\"^1.0.0\"},\"description\":\"ES2015 String#codePointAt() ponyfill\",\"devDependencies\":{\"ava\":\"0.0.4\"},\"directories\":{},\"dist\":{\"shasum\":\"f69b192d3f7d91e382e4b71bddb77878619ab0c6\",\"tarball\":\"http://registry.npmjs.org/code-point-at/-/code-point-at-1.0.0.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\"],\"gitHead\":\"c2ffa4064718b37c84c73a633abeeed5b486a469\",\"homepage\":\"https://github.com/sindresorhus/code-point-at\",\"keywords\":[\"es2015\",\"es6\",\"ponyfill\",\"polyfill\",\"shim\",\"string\",\"str\",\"code\",\"point\",\"at\",\"codepoint\",\"unicode\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"}],\"name\":\"code-point-at\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sindresorhus/code-point-at.git\"},\"scripts\":{\"test\":\"node test.js\"},\"version\":\"1.0.0\"}");

/***/ }),

/***/ 6217:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"decamelize@^1.1.1\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/yargs\"]],\"_from\":\"decamelize@>=1.1.1 <2.0.0\",\"_id\":\"decamelize@1.1.2\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/decamelize\",\"_nodeVersion\":\"4.2.1\",\"_npmUser\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},\"_npmVersion\":\"2.14.7\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"decamelize\",\"raw\":\"decamelize@^1.1.1\",\"rawSpec\":\"^1.1.1\",\"scope\":null,\"spec\":\">=1.1.1 <2.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/yargs\"],\"_resolved\":\"https://registry.npmjs.org/decamelize/-/decamelize-1.1.2.tgz\",\"_shasum\":\"dcc93727be209632e98b02718ef4cb79602322f2\",\"_shrinkwrap\":null,\"_spec\":\"decamelize@^1.1.1\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/yargs\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/sindresorhus/decamelize/issues\"},\"dependencies\":{\"escape-string-regexp\":\"^1.0.4\"},\"description\":\"Convert a camelized string into a lowercased one with a custom separator: unicornRainbow → unicorn_rainbow\",\"devDependencies\":{\"ava\":\"*\",\"xo\":\"*\"},\"directories\":{},\"dist\":{\"shasum\":\"dcc93727be209632e98b02718ef4cb79602322f2\",\"tarball\":\"http://registry.npmjs.org/decamelize/-/decamelize-1.1.2.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\"],\"gitHead\":\"82c87d3382126375ab0c3b7f5438bfd5eccb18c3\",\"homepage\":\"https://github.com/sindresorhus/decamelize\",\"keywords\":[\"decamelize\",\"decamelcase\",\"camelcase\",\"lowercase\",\"case\",\"dash\",\"hyphen\",\"string\",\"str\",\"text\",\"convert\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"}],\"name\":\"decamelize\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sindresorhus/decamelize.git\"},\"scripts\":{\"test\":\"xo && ava\"},\"version\":\"1.1.2\"}");

/***/ }),

/***/ 200:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"error-ex@^1.2.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/parse-json\"]],\"_from\":\"error-ex@>=1.2.0 <2.0.0\",\"_id\":\"error-ex@1.3.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/error-ex\",\"_nodeVersion\":\"4.1.1\",\"_npmUser\":{\"email\":\"i.am.qix@gmail.com\",\"name\":\"qix\"},\"_npmVersion\":\"3.3.6\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"error-ex\",\"raw\":\"error-ex@^1.2.0\",\"rawSpec\":\"^1.2.0\",\"scope\":null,\"spec\":\">=1.2.0 <2.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/parse-json\"],\"_resolved\":\"https://registry.npmjs.org/error-ex/-/error-ex-1.3.0.tgz\",\"_shasum\":\"e67b43f3e82c96ea3a584ffee0b9fc3325d802d9\",\"_shrinkwrap\":null,\"_spec\":\"error-ex@^1.2.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/parse-json\",\"bugs\":{\"url\":\"https://github.com/qix-/node-error-ex/issues\"},\"dependencies\":{\"is-arrayish\":\"^0.2.1\"},\"description\":\"Easy error subclassing and stack customization\",\"devDependencies\":{\"coffee-script\":\"^1.9.3\",\"coveralls\":\"^2.11.2\",\"istanbul\":\"^0.3.17\",\"mocha\":\"^2.2.5\",\"should\":\"^7.0.1\",\"xo\":\"^0.7.1\"},\"directories\":{},\"dist\":{\"shasum\":\"e67b43f3e82c96ea3a584ffee0b9fc3325d802d9\",\"tarball\":\"http://registry.npmjs.org/error-ex/-/error-ex-1.3.0.tgz\"},\"files\":[\"index.js\"],\"gitHead\":\"118bb63206f736f2450480e73f9d7d22692ae328\",\"homepage\":\"https://github.com/qix-/node-error-ex#readme\",\"keywords\":[\"error\",\"errors\",\"extend\",\"extending\",\"extension\",\"subclass\",\"stack\",\"custom\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"i.am.qix@gmail.com\",\"name\":\"qix\"},{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"}],\"name\":\"error-ex\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/qix-/node-error-ex.git\"},\"scripts\":{\"pretest\":\"xo\",\"test\":\"mocha --compilers coffee:coffee-script/register\"},\"version\":\"1.3.0\",\"xo\":{\"rules\":{\"operator-linebreak\":[0]}}}");

/***/ }),

/***/ 2045:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"escape-string-regexp@^1.0.4\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/decamelize\"]],\"_from\":\"escape-string-regexp@>=1.0.4 <2.0.0\",\"_id\":\"escape-string-regexp@1.0.5\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/escape-string-regexp\",\"_nodeVersion\":\"4.2.6\",\"_npmOperationalInternal\":{\"host\":\"packages-9-west.internal.npmjs.com\",\"tmp\":\"tmp/escape-string-regexp-1.0.5.tgz_1456059312074_0.7245344955008477\"},\"_npmUser\":{\"email\":\"jappelman@xebia.com\",\"name\":\"jbnicolai\"},\"_npmVersion\":\"2.14.12\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"escape-string-regexp\",\"raw\":\"escape-string-regexp@^1.0.4\",\"rawSpec\":\"^1.0.4\",\"scope\":null,\"spec\":\">=1.0.4 <2.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/decamelize\"],\"_resolved\":\"https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz\",\"_shasum\":\"1b61c0562190a8dff6ae3bb2cf0200ca130b86d4\",\"_shrinkwrap\":null,\"_spec\":\"escape-string-regexp@^1.0.4\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/decamelize\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/sindresorhus/escape-string-regexp/issues\"},\"dependencies\":{},\"description\":\"Escape RegExp special characters\",\"devDependencies\":{\"ava\":\"*\",\"xo\":\"*\"},\"directories\":{},\"dist\":{\"shasum\":\"1b61c0562190a8dff6ae3bb2cf0200ca130b86d4\",\"tarball\":\"http://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz\"},\"engines\":{\"node\":\">=0.8.0\"},\"files\":[\"index.js\"],\"gitHead\":\"db124a3e1aae9d692c4899e42a5c6c3e329eaa20\",\"homepage\":\"https://github.com/sindresorhus/escape-string-regexp\",\"keywords\":[\"escape\",\"regex\",\"regexp\",\"re\",\"regular\",\"expression\",\"string\",\"str\",\"special\",\"characters\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},{\"email\":\"jappelman@xebia.com\",\"name\":\"jbnicolai\"}],\"name\":\"escape-string-regexp\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sindresorhus/escape-string-regexp.git\"},\"scripts\":{\"test\":\"xo && ava\"},\"version\":\"1.0.5\"}");

/***/ }),

/***/ 1237:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"find-up@^1.0.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/pkg-conf\"]],\"_from\":\"find-up@>=1.0.0 <2.0.0\",\"_id\":\"find-up@1.1.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/find-up\",\"_nodeVersion\":\"4.2.1\",\"_npmUser\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},\"_npmVersion\":\"2.14.7\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"find-up\",\"raw\":\"find-up@^1.0.0\",\"rawSpec\":\"^1.0.0\",\"scope\":null,\"spec\":\">=1.0.0 <2.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/pkg-conf\",\"/read-pkg-up\"],\"_resolved\":\"https://registry.npmjs.org/find-up/-/find-up-1.1.0.tgz\",\"_shasum\":\"a63b0eec4625a2902534898a5f9eec8aaed046e9\",\"_shrinkwrap\":null,\"_spec\":\"find-up@^1.0.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/pkg-conf\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/sindresorhus/find-up/issues\"},\"dependencies\":{\"path-exists\":\"^2.0.0\",\"pinkie-promise\":\"^2.0.0\"},\"description\":\"Find a file by walking up parent directories\",\"devDependencies\":{\"ava\":\"*\",\"xo\":\"*\"},\"directories\":{},\"dist\":{\"shasum\":\"a63b0eec4625a2902534898a5f9eec8aaed046e9\",\"tarball\":\"http://registry.npmjs.org/find-up/-/find-up-1.1.0.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\"],\"gitHead\":\"06e9dae73659ddf2421440ca4695161c38d7d2fb\",\"homepage\":\"https://github.com/sindresorhus/find-up\",\"keywords\":[\"find\",\"up\",\"find-up\",\"findup\",\"look-up\",\"look\",\"file\",\"search\",\"match\",\"package\",\"resolve\",\"parent\",\"parents\",\"folder\",\"directory\",\"dir\",\"walk\",\"walking\",\"path\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"}],\"name\":\"find-up\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sindresorhus/find-up.git\"},\"scripts\":{\"test\":\"xo && ava\"},\"version\":\"1.1.0\"}");

/***/ }),

/***/ 7174:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"graceful-fs@^4.1.2\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/load-json-file\"]],\"_from\":\"graceful-fs@>=4.1.2 <5.0.0\",\"_id\":\"graceful-fs@4.1.3\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/graceful-fs\",\"_nodeVersion\":\"4.0.0\",\"_npmOperationalInternal\":{\"host\":\"packages-6-west.internal.npmjs.com\",\"tmp\":\"tmp/graceful-fs-4.1.3.tgz_1454449326495_0.943017533281818\"},\"_npmUser\":{\"email\":\"i@izs.me\",\"name\":\"isaacs\"},\"_npmVersion\":\"3.7.0\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"graceful-fs\",\"raw\":\"graceful-fs@^4.1.2\",\"rawSpec\":\"^4.1.2\",\"scope\":null,\"spec\":\">=4.1.2 <5.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/load-json-file\",\"/path-type\"],\"_resolved\":\"https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.1.3.tgz\",\"_shasum\":\"92033ce11113c41e2628d61fdfa40bc10dc0155c\",\"_shrinkwrap\":null,\"_spec\":\"graceful-fs@^4.1.2\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/load-json-file\",\"bugs\":{\"url\":\"https://github.com/isaacs/node-graceful-fs/issues\"},\"dependencies\":{},\"description\":\"A drop-in replacement for fs, making various improvements.\",\"devDependencies\":{\"mkdirp\":\"^0.5.0\",\"rimraf\":\"^2.2.8\",\"tap\":\"^5.4.2\"},\"directories\":{\"test\":\"test\"},\"dist\":{\"shasum\":\"92033ce11113c41e2628d61fdfa40bc10dc0155c\",\"tarball\":\"http://registry.npmjs.org/graceful-fs/-/graceful-fs-4.1.3.tgz\"},\"engines\":{\"node\":\">=0.4.0\"},\"files\":[\"fs.js\",\"graceful-fs.js\",\"legacy-streams.js\",\"polyfills.js\"],\"gitHead\":\"694c56f3aed4aee62d6df169be123d3984f61b85\",\"homepage\":\"https://github.com/isaacs/node-graceful-fs#readme\",\"keywords\":[\"fs\",\"module\",\"reading\",\"retry\",\"retries\",\"queue\",\"error\",\"errors\",\"handling\",\"EMFILE\",\"EAGAIN\",\"EINVAL\",\"EPERM\",\"EACCESS\"],\"license\":\"ISC\",\"main\":\"graceful-fs.js\",\"maintainers\":[{\"email\":\"i@izs.me\",\"name\":\"isaacs\"}],\"name\":\"graceful-fs\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/isaacs/node-graceful-fs.git\"},\"scripts\":{\"test\":\"node test.js | tap -\"},\"version\":\"4.1.3\"}");

/***/ }),

/***/ 5766:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"hosted-git-info@^2.1.4\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/normalize-package-data\"]],\"_from\":\"hosted-git-info@>=2.1.4 <3.0.0\",\"_id\":\"hosted-git-info@2.1.4\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/hosted-git-info\",\"_nodeVersion\":\"2.0.2\",\"_npmUser\":{\"email\":\"ogd@aoaioxxysz.net\",\"name\":\"othiym23\"},\"_npmVersion\":\"2.10.1\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"hosted-git-info\",\"raw\":\"hosted-git-info@^2.1.4\",\"rawSpec\":\"^2.1.4\",\"scope\":null,\"spec\":\">=2.1.4 <3.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/normalize-package-data\"],\"_resolved\":\"https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.1.4.tgz\",\"_shasum\":\"d9e953b26988be88096c46e926494d9604c300f8\",\"_shrinkwrap\":null,\"_spec\":\"hosted-git-info@^2.1.4\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/normalize-package-data\",\"author\":{\"email\":\"me@re-becca.org\",\"name\":\"Rebecca Turner\",\"url\":\"http://re-becca.org\"},\"bugs\":{\"url\":\"https://github.com/npm/hosted-git-info/issues\"},\"dependencies\":{},\"description\":\"Provides metadata and conversions from repository urls for Github, Bitbucket and Gitlab\",\"devDependencies\":{\"standard\":\"^3.3.2\",\"tap\":\"^0.4.13\"},\"directories\":{},\"dist\":{\"shasum\":\"d9e953b26988be88096c46e926494d9604c300f8\",\"tarball\":\"http://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.1.4.tgz\"},\"gitHead\":\"9e1a36df8eb050a663713c79e56d89dadba2bd8d\",\"homepage\":\"https://github.com/npm/hosted-git-info\",\"keywords\":[\"git\",\"github\",\"bitbucket\",\"gitlab\"],\"license\":\"ISC\",\"main\":\"index.js\",\"maintainers\":[{\"email\":\"me@re-becca.org\",\"name\":\"iarna\"},{\"email\":\"ogd@aoaioxxysz.net\",\"name\":\"othiym23\"}],\"name\":\"hosted-git-info\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/npm/hosted-git-info.git\"},\"scripts\":{\"test\":\"standard && tap test/*.js\"},\"version\":\"2.1.4\"}");

/***/ }),

/***/ 3727:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"invert-kv@^1.0.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/lcid\"]],\"_from\":\"invert-kv@>=1.0.0 <2.0.0\",\"_id\":\"invert-kv@1.0.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/invert-kv\",\"_npmUser\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},\"_npmVersion\":\"1.4.21\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"invert-kv\",\"raw\":\"invert-kv@^1.0.0\",\"rawSpec\":\"^1.0.0\",\"scope\":null,\"spec\":\">=1.0.0 <2.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/lcid\"],\"_resolved\":\"https://registry.npmjs.org/invert-kv/-/invert-kv-1.0.0.tgz\",\"_shasum\":\"104a8e4aaca6d3d8cd157a8ef8bfab2d7a3ffdb6\",\"_shrinkwrap\":null,\"_spec\":\"invert-kv@^1.0.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/lcid\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"http://sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/sindresorhus/invert-kv/issues\"},\"dependencies\":{},\"description\":\"Invert the key/value of an object. Example: {foo: 'bar'} → {bar: 'foo'}\",\"devDependencies\":{\"mocha\":\"*\"},\"directories\":{},\"dist\":{\"shasum\":\"104a8e4aaca6d3d8cd157a8ef8bfab2d7a3ffdb6\",\"tarball\":\"http://registry.npmjs.org/invert-kv/-/invert-kv-1.0.0.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\"],\"gitHead\":\"c28c3a15abcde3f67bd90f90f8ffe54a5f8cb04e\",\"homepage\":\"https://github.com/sindresorhus/invert-kv\",\"keywords\":[\"object\",\"obj\",\"key\",\"value\",\"val\",\"kv\",\"invert\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"}],\"name\":\"invert-kv\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sindresorhus/invert-kv.git\"},\"scripts\":{\"test\":\"mocha\"},\"version\":\"1.0.0\"}");

/***/ }),

/***/ 9328:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"is-arrayish@^0.2.1\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/error-ex\"]],\"_from\":\"is-arrayish@>=0.2.1 <0.3.0\",\"_id\":\"is-arrayish@0.2.1\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/is-arrayish\",\"_nodeVersion\":\"0.12.7\",\"_npmUser\":{\"email\":\"i.am.qix@gmail.com\",\"name\":\"qix\"},\"_npmVersion\":\"3.2.2\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"is-arrayish\",\"raw\":\"is-arrayish@^0.2.1\",\"rawSpec\":\"^0.2.1\",\"scope\":null,\"spec\":\">=0.2.1 <0.3.0\",\"type\":\"range\"},\"_requiredBy\":[\"/error-ex\"],\"_resolved\":\"https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz\",\"_shasum\":\"77c99840527aa8ecb1a8ba697b80645a7a926a9d\",\"_shrinkwrap\":null,\"_spec\":\"is-arrayish@^0.2.1\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/error-ex\",\"author\":{\"name\":\"Qix\",\"url\":\"http://github.com/qix-\"},\"bugs\":{\"url\":\"https://github.com/qix-/node-is-arrayish/issues\"},\"dependencies\":{},\"description\":\"Determines if an object can be used as an array\",\"devDependencies\":{\"coffee-script\":\"^1.9.3\",\"coveralls\":\"^2.11.2\",\"istanbul\":\"^0.3.17\",\"mocha\":\"^2.2.5\",\"should\":\"^7.0.1\",\"xo\":\"^0.6.1\"},\"directories\":{},\"dist\":{\"shasum\":\"77c99840527aa8ecb1a8ba697b80645a7a926a9d\",\"tarball\":\"http://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz\"},\"gitHead\":\"53f22aa6ce557d7d31a3d1152a590a2df220df9d\",\"homepage\":\"https://github.com/qix-/node-is-arrayish#readme\",\"keywords\":[\"is\",\"array\",\"duck\",\"type\",\"arrayish\",\"similar\",\"proto\",\"prototype\",\"type\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"i.am.qix@gmail.com\",\"name\":\"qix\"}],\"name\":\"is-arrayish\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/qix-/node-is-arrayish.git\"},\"scripts\":{\"pretest\":\"xo\",\"test\":\"mocha --compilers coffee:coffee-script/register\"},\"version\":\"0.2.1\"}");

/***/ }),

/***/ 1220:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"is-builtin-module@^1.0.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/normalize-package-data\"]],\"_from\":\"is-builtin-module@>=1.0.0 <2.0.0\",\"_id\":\"is-builtin-module@1.0.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/is-builtin-module\",\"_nodeVersion\":\"0.12.2\",\"_npmUser\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},\"_npmVersion\":\"2.7.4\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"is-builtin-module\",\"raw\":\"is-builtin-module@^1.0.0\",\"rawSpec\":\"^1.0.0\",\"scope\":null,\"spec\":\">=1.0.0 <2.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/normalize-package-data\"],\"_resolved\":\"https://registry.npmjs.org/is-builtin-module/-/is-builtin-module-1.0.0.tgz\",\"_shasum\":\"540572d34f7ac3119f8f76c30cbc1b1e037affbe\",\"_shrinkwrap\":null,\"_spec\":\"is-builtin-module@^1.0.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/normalize-package-data\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/sindresorhus/is-builtin-module/issues\"},\"dependencies\":{\"builtin-modules\":\"^1.0.0\"},\"description\":\"Check if a string matches the name of a Node.js builtin module\",\"devDependencies\":{\"ava\":\"0.0.4\"},\"directories\":{},\"dist\":{\"shasum\":\"540572d34f7ac3119f8f76c30cbc1b1e037affbe\",\"tarball\":\"http://registry.npmjs.org/is-builtin-module/-/is-builtin-module-1.0.0.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\"],\"gitHead\":\"da55ebf031f3864c5d309e25e49ed816957d70a2\",\"homepage\":\"https://github.com/sindresorhus/is-builtin-module\",\"keywords\":[\"builtin\",\"built-in\",\"builtins\",\"node\",\"modules\",\"core\",\"bundled\",\"list\",\"array\",\"names\",\"is\",\"detect\",\"check\",\"match\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"}],\"name\":\"is-builtin-module\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sindresorhus/is-builtin-module.git\"},\"scripts\":{\"test\":\"node test.js\"},\"version\":\"1.0.0\"}");

/***/ }),

/***/ 1600:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"is-fullwidth-code-point@^1.0.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/string-width\"]],\"_from\":\"is-fullwidth-code-point@>=1.0.0 <2.0.0\",\"_id\":\"is-fullwidth-code-point@1.0.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/is-fullwidth-code-point\",\"_nodeVersion\":\"0.12.5\",\"_npmUser\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},\"_npmVersion\":\"2.11.2\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"is-fullwidth-code-point\",\"raw\":\"is-fullwidth-code-point@^1.0.0\",\"rawSpec\":\"^1.0.0\",\"scope\":null,\"spec\":\">=1.0.0 <2.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/string-width\"],\"_resolved\":\"https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz\",\"_shasum\":\"ef9e31386f031a7f0d643af82fde50c457ef00cb\",\"_shrinkwrap\":null,\"_spec\":\"is-fullwidth-code-point@^1.0.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/string-width\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/sindresorhus/is-fullwidth-code-point/issues\"},\"dependencies\":{\"number-is-nan\":\"^1.0.0\"},\"description\":\"Check if the character represented by a given Unicode code point is fullwidth\",\"devDependencies\":{\"ava\":\"0.0.4\",\"code-point-at\":\"^1.0.0\"},\"directories\":{},\"dist\":{\"shasum\":\"ef9e31386f031a7f0d643af82fde50c457ef00cb\",\"tarball\":\"http://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\"],\"gitHead\":\"f2152d357f41f82785436d428e4f8ede143b7548\",\"homepage\":\"https://github.com/sindresorhus/is-fullwidth-code-point\",\"keywords\":[\"fullwidth\",\"full-width\",\"full\",\"width\",\"unicode\",\"character\",\"char\",\"string\",\"str\",\"codepoint\",\"code\",\"point\",\"is\",\"detect\",\"check\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"}],\"name\":\"is-fullwidth-code-point\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sindresorhus/is-fullwidth-code-point.git\"},\"scripts\":{\"test\":\"node test.js\"},\"version\":\"1.0.0\"}");

/***/ }),

/***/ 5266:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"is-utf8@^0.2.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/strip-bom\"]],\"_from\":\"is-utf8@>=0.2.0 <0.3.0\",\"_id\":\"is-utf8@0.2.1\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/is-utf8\",\"_nodeVersion\":\"2.3.4\",\"_npmUser\":{\"email\":\"whyer1@gmail.com\",\"name\":\"wayfind\"},\"_npmVersion\":\"2.12.1\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"is-utf8\",\"raw\":\"is-utf8@^0.2.0\",\"rawSpec\":\"^0.2.0\",\"scope\":null,\"spec\":\">=0.2.0 <0.3.0\",\"type\":\"range\"},\"_requiredBy\":[\"/strip-bom\"],\"_resolved\":\"https://registry.npmjs.org/is-utf8/-/is-utf8-0.2.1.tgz\",\"_shasum\":\"4b0da1442104d1b336340e80797e865cf39f7d72\",\"_shrinkwrap\":null,\"_spec\":\"is-utf8@^0.2.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/strip-bom\",\"author\":{\"name\":\"wayfind\"},\"bugs\":{\"url\":\"https://github.com/wayfind/is-utf8/issues\"},\"dependencies\":{},\"description\":\"Detect if a buffer is utf8 encoded.\",\"devDependencies\":{},\"directories\":{},\"dist\":{\"shasum\":\"4b0da1442104d1b336340e80797e865cf39f7d72\",\"tarball\":\"http://registry.npmjs.org/is-utf8/-/is-utf8-0.2.1.tgz\"},\"files\":[\"is-utf8.js\"],\"gitHead\":\"709df7202f9c3f93cdc2463b352dd80d8de9ce0b\",\"homepage\":\"https://github.com/wayfind/is-utf8#readme\",\"keywords\":[\"utf8\",\"charset\"],\"license\":\"MIT\",\"main\":\"is-utf8.js\",\"maintainers\":[{\"email\":\"whyer1@gmail.com\",\"name\":\"wayfind\"}],\"name\":\"is-utf8\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/wayfind/is-utf8.git\"},\"scripts\":{\"test\":\"node test.js\"},\"version\":\"0.2.1\"}");

/***/ }),

/***/ 2064:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"lcid@^1.0.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/os-locale\"]],\"_from\":\"lcid@>=1.0.0 <2.0.0\",\"_id\":\"lcid@1.0.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/lcid\",\"_nodeVersion\":\"0.12.0\",\"_npmUser\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},\"_npmVersion\":\"2.5.1\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"lcid\",\"raw\":\"lcid@^1.0.0\",\"rawSpec\":\"^1.0.0\",\"scope\":null,\"spec\":\">=1.0.0 <2.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/os-locale\"],\"_resolved\":\"https://registry.npmjs.org/lcid/-/lcid-1.0.0.tgz\",\"_shasum\":\"308accafa0bc483a3867b4b6f2b9506251d1b835\",\"_shrinkwrap\":null,\"_spec\":\"lcid@^1.0.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/os-locale\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/sindresorhus/lcid/issues\"},\"dependencies\":{\"invert-kv\":\"^1.0.0\"},\"description\":\"Mapping between standard locale identifiers and Windows locale identifiers (LCID)\",\"devDependencies\":{\"ava\":\"0.0.4\"},\"directories\":{},\"dist\":{\"shasum\":\"308accafa0bc483a3867b4b6f2b9506251d1b835\",\"tarball\":\"http://registry.npmjs.org/lcid/-/lcid-1.0.0.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\",\"lcid.json\"],\"gitHead\":\"96bb3e617f77f5f8ceb78653c77de5a85abb3b1e\",\"homepage\":\"https://github.com/sindresorhus/lcid\",\"keywords\":[\"lcid\",\"locale\",\"string\",\"str\",\"id\",\"identifier\",\"windows\",\"language\",\"lang\",\"map\",\"mapping\",\"convert\",\"json\",\"bcp47\",\"ietf\",\"tag\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"}],\"name\":\"lcid\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sindresorhus/lcid.git\"},\"scripts\":{\"test\":\"node test.js\"},\"version\":\"1.0.0\"}");

/***/ }),

/***/ 8809:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"load-json-file@^1.0.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/read-pkg\"]],\"_from\":\"load-json-file@>=1.0.0 <2.0.0\",\"_id\":\"load-json-file@1.1.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/load-json-file\",\"_nodeVersion\":\"4.2.1\",\"_npmUser\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},\"_npmVersion\":\"2.14.7\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"load-json-file\",\"raw\":\"load-json-file@^1.0.0\",\"rawSpec\":\"^1.0.0\",\"scope\":null,\"spec\":\">=1.0.0 <2.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/read-pkg\"],\"_resolved\":\"https://registry.npmjs.org/load-json-file/-/load-json-file-1.1.0.tgz\",\"_shasum\":\"956905708d58b4bab4c2261b04f59f31c99374c0\",\"_shrinkwrap\":null,\"_spec\":\"load-json-file@^1.0.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/read-pkg\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/sindresorhus/load-json-file/issues\"},\"dependencies\":{\"graceful-fs\":\"^4.1.2\",\"parse-json\":\"^2.2.0\",\"pify\":\"^2.0.0\",\"pinkie-promise\":\"^2.0.0\",\"strip-bom\":\"^2.0.0\"},\"description\":\"Read and parse a JSON file\",\"devDependencies\":{\"ava\":\"*\",\"xo\":\"*\"},\"directories\":{},\"dist\":{\"shasum\":\"956905708d58b4bab4c2261b04f59f31c99374c0\",\"tarball\":\"http://registry.npmjs.org/load-json-file/-/load-json-file-1.1.0.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\"],\"gitHead\":\"115157a417380d3160da418d4ff25bb33b0051eb\",\"homepage\":\"https://github.com/sindresorhus/load-json-file\",\"keywords\":[\"json\",\"read\",\"parse\",\"file\",\"fs\",\"graceful\",\"load\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"}],\"name\":\"load-json-file\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sindresorhus/load-json-file.git\"},\"scripts\":{\"test\":\"xo && ava\"},\"version\":\"1.1.0\",\"xo\":{\"ignores\":[\"test.js\"]}}");

/***/ }),

/***/ 6238:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"lodash.assign@^4.0.2\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/yargs-parser\"]],\"_from\":\"lodash.assign@>=4.0.2 <5.0.0\",\"_id\":\"lodash.assign@4.0.3\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/lodash.assign\",\"_nodeVersion\":\"5.5.0\",\"_npmOperationalInternal\":{\"host\":\"packages-9-west.internal.npmjs.com\",\"tmp\":\"tmp/lodash.assign-4.0.3.tgz_1455615071928_0.8044304654467851\"},\"_npmUser\":{\"email\":\"john.david.dalton@gmail.com\",\"name\":\"jdalton\"},\"_npmVersion\":\"2.14.18\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"lodash.assign\",\"raw\":\"lodash.assign@^4.0.2\",\"rawSpec\":\"^4.0.2\",\"scope\":null,\"spec\":\">=4.0.2 <5.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/yargs-parser\"],\"_resolved\":\"https://registry.npmjs.org/lodash.assign/-/lodash.assign-4.0.3.tgz\",\"_shasum\":\"208252719b4375f361981c3ba3a8a09d1cbdb218\",\"_shrinkwrap\":null,\"_spec\":\"lodash.assign@^4.0.2\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/yargs-parser\",\"author\":{\"email\":\"john.david.dalton@gmail.com\",\"name\":\"John-David Dalton\",\"url\":\"http://allyoucanleet.com/\"},\"bugs\":{\"url\":\"https://github.com/lodash/lodash/issues\"},\"contributors\":[{\"email\":\"john.david.dalton@gmail.com\",\"name\":\"John-David Dalton\",\"url\":\"http://allyoucanleet.com/\"},{\"email\":\"blaine@iceddev.com\",\"name\":\"Blaine Bublitz\",\"url\":\"https://github.com/phated\"},{\"email\":\"mathias@qiwi.be\",\"name\":\"Mathias Bynens\",\"url\":\"https://mathiasbynens.be/\"}],\"dependencies\":{\"lodash.keys\":\"^4.0.0\",\"lodash.rest\":\"^4.0.0\"},\"description\":\"The lodash method `_.assign` exported as a module.\",\"devDependencies\":{},\"directories\":{},\"dist\":{\"shasum\":\"208252719b4375f361981c3ba3a8a09d1cbdb218\",\"tarball\":\"http://registry.npmjs.org/lodash.assign/-/lodash.assign-4.0.3.tgz\"},\"homepage\":\"https://lodash.com/\",\"icon\":\"https://lodash.com/icon.svg\",\"keywords\":[\"lodash-modularized\",\"assign\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"john.david.dalton@gmail.com\",\"name\":\"jdalton\"},{\"email\":\"mathias@qiwi.be\",\"name\":\"mathias\"},{\"email\":\"blaine@iceddev.com\",\"name\":\"phated\"}],\"name\":\"lodash.assign\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/lodash/lodash.git\"},\"scripts\":{\"test\":\"echo \\\"See https://travis-ci.org/lodash/lodash-cli for testing details.\\\"\"},\"version\":\"4.0.3\"}");

/***/ }),

/***/ 5183:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"lodash.keys@^4.0.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/lodash.assign\"]],\"_from\":\"lodash.keys@>=4.0.0 <5.0.0\",\"_id\":\"lodash.keys@4.0.3\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/lodash.keys\",\"_nodeVersion\":\"5.5.0\",\"_npmOperationalInternal\":{\"host\":\"packages-6-west.internal.npmjs.com\",\"tmp\":\"tmp/lodash.keys-4.0.3.tgz_1455615421513_0.2519911821000278\"},\"_npmUser\":{\"email\":\"john.david.dalton@gmail.com\",\"name\":\"jdalton\"},\"_npmVersion\":\"2.14.18\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"lodash.keys\",\"raw\":\"lodash.keys@^4.0.0\",\"rawSpec\":\"^4.0.0\",\"scope\":null,\"spec\":\">=4.0.0 <5.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/lodash.assign\"],\"_resolved\":\"https://registry.npmjs.org/lodash.keys/-/lodash.keys-4.0.3.tgz\",\"_shasum\":\"f698bb75edfae6f690db9e11908157732fe7b342\",\"_shrinkwrap\":null,\"_spec\":\"lodash.keys@^4.0.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/lodash.assign\",\"author\":{\"email\":\"john.david.dalton@gmail.com\",\"name\":\"John-David Dalton\",\"url\":\"http://allyoucanleet.com/\"},\"bugs\":{\"url\":\"https://github.com/lodash/lodash/issues\"},\"contributors\":[{\"email\":\"john.david.dalton@gmail.com\",\"name\":\"John-David Dalton\",\"url\":\"http://allyoucanleet.com/\"},{\"email\":\"blaine@iceddev.com\",\"name\":\"Blaine Bublitz\",\"url\":\"https://github.com/phated\"},{\"email\":\"mathias@qiwi.be\",\"name\":\"Mathias Bynens\",\"url\":\"https://mathiasbynens.be/\"}],\"dependencies\":{},\"description\":\"The lodash method `_.keys` exported as a module.\",\"devDependencies\":{},\"directories\":{},\"dist\":{\"shasum\":\"f698bb75edfae6f690db9e11908157732fe7b342\",\"tarball\":\"http://registry.npmjs.org/lodash.keys/-/lodash.keys-4.0.3.tgz\"},\"homepage\":\"https://lodash.com/\",\"icon\":\"https://lodash.com/icon.svg\",\"keywords\":[\"lodash-modularized\",\"keys\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"john.david.dalton@gmail.com\",\"name\":\"jdalton\"},{\"email\":\"mathias@qiwi.be\",\"name\":\"mathias\"},{\"email\":\"blaine@iceddev.com\",\"name\":\"phated\"}],\"name\":\"lodash.keys\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/lodash/lodash.git\"},\"scripts\":{\"test\":\"echo \\\"See https://travis-ci.org/lodash/lodash-cli for testing details.\\\"\"},\"version\":\"4.0.3\"}");

/***/ }),

/***/ 2933:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"lodash.rest@^4.0.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/lodash.assign\"]],\"_from\":\"lodash.rest@>=4.0.0 <5.0.0\",\"_id\":\"lodash.rest@4.0.1\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/lodash.rest\",\"_nodeVersion\":\"5.4.0\",\"_npmOperationalInternal\":{\"host\":\"packages-5-east.internal.npmjs.com\",\"tmp\":\"tmp/lodash.rest-4.0.1.tgz_1454484670768_0.6682933256961405\"},\"_npmUser\":{\"email\":\"john.david.dalton@gmail.com\",\"name\":\"jdalton\"},\"_npmVersion\":\"2.14.15\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"lodash.rest\",\"raw\":\"lodash.rest@^4.0.0\",\"rawSpec\":\"^4.0.0\",\"scope\":null,\"spec\":\">=4.0.0 <5.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/lodash.assign\"],\"_resolved\":\"https://registry.npmjs.org/lodash.rest/-/lodash.rest-4.0.1.tgz\",\"_shasum\":\"cbecbb84e68e499a1b242baf9b27bb63ef4dd980\",\"_shrinkwrap\":null,\"_spec\":\"lodash.rest@^4.0.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/lodash.assign\",\"author\":{\"email\":\"john.david.dalton@gmail.com\",\"name\":\"John-David Dalton\",\"url\":\"http://allyoucanleet.com/\"},\"bugs\":{\"url\":\"https://github.com/lodash/lodash/issues\"},\"contributors\":[{\"email\":\"john.david.dalton@gmail.com\",\"name\":\"John-David Dalton\",\"url\":\"http://allyoucanleet.com/\"},{\"email\":\"blaine@iceddev.com\",\"name\":\"Blaine Bublitz\",\"url\":\"https://github.com/phated\"},{\"email\":\"mathias@qiwi.be\",\"name\":\"Mathias Bynens\",\"url\":\"https://mathiasbynens.be/\"}],\"dependencies\":{},\"description\":\"The lodash method `_.rest` exported as a module.\",\"devDependencies\":{},\"directories\":{},\"dist\":{\"shasum\":\"cbecbb84e68e499a1b242baf9b27bb63ef4dd980\",\"tarball\":\"http://registry.npmjs.org/lodash.rest/-/lodash.rest-4.0.1.tgz\"},\"homepage\":\"https://lodash.com/\",\"icon\":\"https://lodash.com/icon.svg\",\"keywords\":[\"lodash-modularized\",\"rest\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"john.david.dalton@gmail.com\",\"name\":\"jdalton\"},{\"email\":\"mathias@qiwi.be\",\"name\":\"mathias\"},{\"email\":\"blaine@iceddev.com\",\"name\":\"phated\"}],\"name\":\"lodash.rest\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/lodash/lodash.git\"},\"scripts\":{\"test\":\"echo \\\"See https://travis-ci.org/lodash/lodash-cli for testing details.\\\"\"},\"version\":\"4.0.1\"}");

/***/ }),

/***/ 45:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"normalize-package-data@^2.3.2\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/read-pkg\"]],\"_from\":\"normalize-package-data@>=2.3.2 <3.0.0\",\"_id\":\"normalize-package-data@2.3.5\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/normalize-package-data\",\"_nodeVersion\":\"5.0.0\",\"_npmUser\":{\"email\":\"me@re-becca.org\",\"name\":\"iarna\"},\"_npmVersion\":\"3.3.6\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"normalize-package-data\",\"raw\":\"normalize-package-data@^2.3.2\",\"rawSpec\":\"^2.3.2\",\"scope\":null,\"spec\":\">=2.3.2 <3.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/read-pkg\"],\"_resolved\":\"https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.3.5.tgz\",\"_shasum\":\"8d924f142960e1777e7ffe170543631cc7cb02df\",\"_shrinkwrap\":null,\"_spec\":\"normalize-package-data@^2.3.2\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/read-pkg\",\"author\":{\"email\":\"merynstol@gmail.com\",\"name\":\"Meryn Stol\"},\"bugs\":{\"url\":\"https://github.com/npm/normalize-package-data/issues\"},\"contributors\":[{\"email\":\"i@izs.me\",\"name\":\"Isaac Z. Schlueter\"},{\"email\":\"merynstol@gmail.com\",\"name\":\"Meryn Stol\"},{\"email\":\"rok@kowalski.gd\",\"name\":\"Robert Kowalski\"}],\"dependencies\":{\"hosted-git-info\":\"^2.1.4\",\"is-builtin-module\":\"^1.0.0\",\"semver\":\"2 || 3 || 4 || 5\",\"validate-npm-package-license\":\"^3.0.1\"},\"description\":\"Normalizes data that can be found in package.json files.\",\"devDependencies\":{\"async\":\"^1.5.0\",\"tap\":\"^2.2.0\",\"underscore\":\"^1.8.3\"},\"directories\":{},\"dist\":{\"shasum\":\"8d924f142960e1777e7ffe170543631cc7cb02df\",\"tarball\":\"http://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.3.5.tgz\"},\"gitHead\":\"3dc7756af20b3b1b24c6d75302448ca3659e0a65\",\"homepage\":\"https://github.com/npm/normalize-package-data#readme\",\"license\":\"BSD-2-Clause\",\"main\":\"lib/normalize.js\",\"maintainers\":[{\"email\":\"me@re-becca.org\",\"name\":\"iarna\"},{\"email\":\"isaacs@npmjs.com\",\"name\":\"isaacs\"},{\"email\":\"merynstol@gmail.com\",\"name\":\"meryn\"},{\"email\":\"ogd@aoaioxxysz.net\",\"name\":\"othiym23\"},{\"email\":\"kat@sykosomatic.org\",\"name\":\"zkat\"}],\"name\":\"normalize-package-data\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/npm/normalize-package-data.git\"},\"scripts\":{\"test\":\"tap test/*.js\"},\"version\":\"2.3.5\"}");

/***/ }),

/***/ 6861:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"number-is-nan@^1.0.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/code-point-at\"]],\"_from\":\"number-is-nan@>=1.0.0 <2.0.0\",\"_id\":\"number-is-nan@1.0.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/number-is-nan\",\"_nodeVersion\":\"0.12.3\",\"_npmUser\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},\"_npmVersion\":\"2.10.0\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"number-is-nan\",\"raw\":\"number-is-nan@^1.0.0\",\"rawSpec\":\"^1.0.0\",\"scope\":null,\"spec\":\">=1.0.0 <2.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/code-point-at\",\"/is-fullwidth-code-point\"],\"_resolved\":\"https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.0.tgz\",\"_shasum\":\"c020f529c5282adfdd233d91d4b181c3d686dc4b\",\"_shrinkwrap\":null,\"_spec\":\"number-is-nan@^1.0.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/code-point-at\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/sindresorhus/number-is-nan/issues\"},\"dependencies\":{},\"description\":\"ES6 Number.isNaN() ponyfill\",\"devDependencies\":{\"ava\":\"0.0.4\"},\"directories\":{},\"dist\":{\"shasum\":\"c020f529c5282adfdd233d91d4b181c3d686dc4b\",\"tarball\":\"http://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.0.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\"],\"gitHead\":\"0f394b1bc33185c40304363b209e3f0588dbeeb3\",\"homepage\":\"https://github.com/sindresorhus/number-is-nan#readme\",\"keywords\":[\"es6\",\"es2015\",\"ecmascript\",\"harmony\",\"ponyfill\",\"polyfill\",\"shim\",\"number\",\"is\",\"nan\",\"not\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"}],\"name\":\"number-is-nan\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sindresorhus/number-is-nan.git\"},\"scripts\":{\"test\":\"node test.js\"},\"version\":\"1.0.0\"}");

/***/ }),

/***/ 2214:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"object-assign@^4.0.1\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/pkg-conf\"]],\"_from\":\"object-assign@>=4.0.1 <5.0.0\",\"_id\":\"object-assign@4.0.1\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/object-assign\",\"_nodeVersion\":\"3.0.0\",\"_npmUser\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},\"_npmVersion\":\"2.13.3\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"object-assign\",\"raw\":\"object-assign@^4.0.1\",\"rawSpec\":\"^4.0.1\",\"scope\":null,\"spec\":\">=4.0.1 <5.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/pkg-conf\"],\"_resolved\":\"https://registry.npmjs.org/object-assign/-/object-assign-4.0.1.tgz\",\"_shasum\":\"99504456c3598b5cad4fc59c26e8a9bb107fe0bd\",\"_shrinkwrap\":null,\"_spec\":\"object-assign@^4.0.1\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/pkg-conf\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"http://sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/sindresorhus/object-assign/issues\"},\"dependencies\":{},\"description\":\"ES6 Object.assign() ponyfill\",\"devDependencies\":{\"lodash\":\"^3.10.1\",\"matcha\":\"^0.6.0\",\"mocha\":\"*\",\"xo\":\"*\"},\"directories\":{},\"dist\":{\"shasum\":\"99504456c3598b5cad4fc59c26e8a9bb107fe0bd\",\"tarball\":\"http://registry.npmjs.org/object-assign/-/object-assign-4.0.1.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\"],\"gitHead\":\"b0c40d37cbc43e89ad3326a9bad4c6b3133ba6d3\",\"homepage\":\"https://github.com/sindresorhus/object-assign#readme\",\"keywords\":[\"object\",\"assign\",\"extend\",\"properties\",\"es6\",\"ecmascript\",\"harmony\",\"ponyfill\",\"prollyfill\",\"polyfill\",\"shim\",\"browser\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"}],\"name\":\"object-assign\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sindresorhus/object-assign.git\"},\"scripts\":{\"bench\":\"matcha bench.js\",\"test\":\"xo && mocha\"},\"version\":\"4.0.1\",\"xo\":{\"envs\":[\"node\",\"mocha\"]}}");

/***/ }),

/***/ 3894:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"os-locale@^1.4.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/yargs\"]],\"_from\":\"os-locale@>=1.4.0 <2.0.0\",\"_id\":\"os-locale@1.4.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/os-locale\",\"_nodeVersion\":\"3.0.0\",\"_npmUser\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},\"_npmVersion\":\"2.13.3\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"os-locale\",\"raw\":\"os-locale@^1.4.0\",\"rawSpec\":\"^1.4.0\",\"scope\":null,\"spec\":\">=1.4.0 <2.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/yargs\"],\"_resolved\":\"https://registry.npmjs.org/os-locale/-/os-locale-1.4.0.tgz\",\"_shasum\":\"20f9f17ae29ed345e8bde583b13d2009803c14d9\",\"_shrinkwrap\":null,\"_spec\":\"os-locale@^1.4.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/yargs\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/sindresorhus/os-locale/issues\"},\"dependencies\":{\"lcid\":\"^1.0.0\"},\"description\":\"Get the system locale\",\"devDependencies\":{\"ava\":\"*\",\"require-uncached\":\"^1.0.2\",\"xo\":\"*\"},\"directories\":{},\"dist\":{\"shasum\":\"20f9f17ae29ed345e8bde583b13d2009803c14d9\",\"tarball\":\"http://registry.npmjs.org/os-locale/-/os-locale-1.4.0.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\"],\"gitHead\":\"b5c88233910b2e959fe84d841addb7a15e1cc813\",\"homepage\":\"https://github.com/sindresorhus/os-locale\",\"keywords\":[\"locale\",\"lang\",\"language\",\"system\",\"os\",\"string\",\"str\",\"user\",\"country\",\"id\",\"identifier\",\"region\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"andrewbgoode@gmail.com\",\"name\":\"abg\"},{\"email\":\"ben@npmjs.com\",\"name\":\"bcoe\"},{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"}],\"name\":\"os-locale\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sindresorhus/os-locale.git\"},\"scripts\":{\"test\":\"xo && ava\"},\"version\":\"1.4.0\"}");

/***/ }),

/***/ 6634:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"parse-json@^2.2.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/load-json-file\"]],\"_from\":\"parse-json@>=2.2.0 <3.0.0\",\"_id\":\"parse-json@2.2.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/parse-json\",\"_nodeVersion\":\"0.12.7\",\"_npmUser\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},\"_npmVersion\":\"2.11.3\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"parse-json\",\"raw\":\"parse-json@^2.2.0\",\"rawSpec\":\"^2.2.0\",\"scope\":null,\"spec\":\">=2.2.0 <3.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/load-json-file\"],\"_resolved\":\"https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz\",\"_shasum\":\"f480f40434ef80741f8469099f8dea18f55a4dc9\",\"_shrinkwrap\":null,\"_spec\":\"parse-json@^2.2.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/load-json-file\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/sindresorhus/parse-json/issues\"},\"dependencies\":{\"error-ex\":\"^1.2.0\"},\"description\":\"Parse JSON with more helpful errors\",\"devDependencies\":{\"ava\":\"0.0.4\",\"xo\":\"*\"},\"directories\":{},\"dist\":{\"shasum\":\"f480f40434ef80741f8469099f8dea18f55a4dc9\",\"tarball\":\"http://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\",\"vendor\"],\"gitHead\":\"419b0cbb83e67af53f9fd3f7ff98605ea2020eb6\",\"homepage\":\"https://github.com/sindresorhus/parse-json\",\"keywords\":[\"parse\",\"json\",\"graceful\",\"error\",\"message\",\"humanize\",\"friendly\",\"helpful\",\"string\",\"str\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"}],\"name\":\"parse-json\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sindresorhus/parse-json.git\"},\"scripts\":{\"test\":\"xo && node test.js\"},\"version\":\"2.2.0\",\"xo\":{\"ignores\":[\"vendor/**\"]}}");

/***/ }),

/***/ 834:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"path-exists@^2.0.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/find-up\"]],\"_from\":\"path-exists@>=2.0.0 <3.0.0\",\"_id\":\"path-exists@2.1.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/path-exists\",\"_nodeVersion\":\"4.2.1\",\"_npmUser\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},\"_npmVersion\":\"2.14.7\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"path-exists\",\"raw\":\"path-exists@^2.0.0\",\"rawSpec\":\"^2.0.0\",\"scope\":null,\"spec\":\">=2.0.0 <3.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/find-up\"],\"_resolved\":\"https://registry.npmjs.org/path-exists/-/path-exists-2.1.0.tgz\",\"_shasum\":\"0feb6c64f0fc518d9a754dd5efb62c7022761f4b\",\"_shrinkwrap\":null,\"_spec\":\"path-exists@^2.0.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/find-up\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/sindresorhus/path-exists/issues\"},\"dependencies\":{\"pinkie-promise\":\"^2.0.0\"},\"description\":\"Check if a path exists\",\"devDependencies\":{\"ava\":\"*\",\"xo\":\"*\"},\"directories\":{},\"dist\":{\"shasum\":\"0feb6c64f0fc518d9a754dd5efb62c7022761f4b\",\"tarball\":\"http://registry.npmjs.org/path-exists/-/path-exists-2.1.0.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\"],\"gitHead\":\"3af423661e78466764f87c5712263c5d7a1ce5b7\",\"homepage\":\"https://github.com/sindresorhus/path-exists\",\"keywords\":[\"path\",\"exists\",\"exist\",\"file\",\"filepath\",\"fs\",\"filesystem\",\"file-system\",\"access\",\"stat\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"}],\"name\":\"path-exists\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sindresorhus/path-exists.git\"},\"scripts\":{\"test\":\"xo && ava\"},\"version\":\"2.1.0\"}");

/***/ }),

/***/ 1603:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"path-type@^1.0.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/read-pkg\"]],\"_from\":\"path-type@>=1.0.0 <2.0.0\",\"_id\":\"path-type@1.1.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/path-type\",\"_nodeVersion\":\"4.2.1\",\"_npmUser\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},\"_npmVersion\":\"2.14.7\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"path-type\",\"raw\":\"path-type@^1.0.0\",\"rawSpec\":\"^1.0.0\",\"scope\":null,\"spec\":\">=1.0.0 <2.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/read-pkg\"],\"_resolved\":\"https://registry.npmjs.org/path-type/-/path-type-1.1.0.tgz\",\"_shasum\":\"59c44f7ee491da704da415da5a4070ba4f8fe441\",\"_shrinkwrap\":null,\"_spec\":\"path-type@^1.0.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/read-pkg\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/sindresorhus/path-type/issues\"},\"dependencies\":{\"graceful-fs\":\"^4.1.2\",\"pify\":\"^2.0.0\",\"pinkie-promise\":\"^2.0.0\"},\"description\":\"Check if a path is a file, directory, or symlink\",\"devDependencies\":{\"ava\":\"*\",\"xo\":\"*\"},\"directories\":{},\"dist\":{\"shasum\":\"59c44f7ee491da704da415da5a4070ba4f8fe441\",\"tarball\":\"http://registry.npmjs.org/path-type/-/path-type-1.1.0.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\"],\"gitHead\":\"dff5c2a62f89efe7e0cce600bf38e76196d8b4b2\",\"homepage\":\"https://github.com/sindresorhus/path-type\",\"keywords\":[\"path\",\"fs\",\"type\",\"is\",\"check\",\"directory\",\"dir\",\"file\",\"filepath\",\"symlink\",\"symbolic\",\"link\",\"stat\",\"stats\",\"filesystem\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"}],\"name\":\"path-type\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sindresorhus/path-type.git\"},\"scripts\":{\"test\":\"xo && ava\"},\"version\":\"1.1.0\",\"xo\":{\"ignores\":[\"test.js\"]}}");

/***/ }),

/***/ 3304:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"pify@^2.0.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/load-json-file\"]],\"_from\":\"pify@>=2.0.0 <3.0.0\",\"_id\":\"pify@2.3.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/pify\",\"_nodeVersion\":\"4.2.1\",\"_npmUser\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},\"_npmVersion\":\"2.14.7\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"pify\",\"raw\":\"pify@^2.0.0\",\"rawSpec\":\"^2.0.0\",\"scope\":null,\"spec\":\">=2.0.0 <3.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/load-json-file\",\"/path-type\"],\"_resolved\":\"https://registry.npmjs.org/pify/-/pify-2.3.0.tgz\",\"_shasum\":\"ed141a6ac043a849ea588498e7dca8b15330e90c\",\"_shrinkwrap\":null,\"_spec\":\"pify@^2.0.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/load-json-file\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/sindresorhus/pify/issues\"},\"dependencies\":{},\"description\":\"Promisify a callback-style function\",\"devDependencies\":{\"ava\":\"*\",\"pinkie-promise\":\"^1.0.0\",\"v8-natives\":\"0.0.2\",\"xo\":\"*\"},\"directories\":{},\"dist\":{\"shasum\":\"ed141a6ac043a849ea588498e7dca8b15330e90c\",\"tarball\":\"http://registry.npmjs.org/pify/-/pify-2.3.0.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\"],\"gitHead\":\"2dd0d8b880e4ebcc5cc33ae126b02647418e4440\",\"homepage\":\"https://github.com/sindresorhus/pify\",\"keywords\":[\"promise\",\"promises\",\"promisify\",\"denodify\",\"denodeify\",\"callback\",\"cb\",\"node\",\"then\",\"thenify\",\"convert\",\"transform\",\"wrap\",\"wrapper\",\"bind\",\"to\",\"async\",\"es2015\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"}],\"name\":\"pify\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sindresorhus/pify.git\"},\"scripts\":{\"optimization-test\":\"node --allow-natives-syntax optimization-test.js\",\"test\":\"xo && ava && npm run optimization-test\"},\"version\":\"2.3.0\"}");

/***/ }),

/***/ 5879:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"pinkie-promise@^2.0.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/find-up\"]],\"_from\":\"pinkie-promise@>=2.0.0 <3.0.0\",\"_id\":\"pinkie-promise@2.0.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/pinkie-promise\",\"_nodeVersion\":\"4.2.0\",\"_npmUser\":{\"email\":\"floatdrop@gmail.com\",\"name\":\"floatdrop\"},\"_npmVersion\":\"2.14.7\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"pinkie-promise\",\"raw\":\"pinkie-promise@^2.0.0\",\"rawSpec\":\"^2.0.0\",\"scope\":null,\"spec\":\">=2.0.0 <3.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/find-up\",\"/load-json-file\",\"/path-exists\",\"/path-type\"],\"_resolved\":\"https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.0.tgz\",\"_shasum\":\"4c83538de1f6e660c29e0a13446844f7a7e88259\",\"_shrinkwrap\":null,\"_spec\":\"pinkie-promise@^2.0.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/find-up\",\"author\":{\"email\":\"floatdrop@gmail.com\",\"name\":\"Vsevolod Strukchinsky\",\"url\":\"github.com/floatdrop\"},\"bugs\":{\"url\":\"https://github.com/floatdrop/pinkie-promise/issues\"},\"dependencies\":{\"pinkie\":\"^2.0.0\"},\"description\":\"ES2015 Promise ponyfill\",\"devDependencies\":{\"mocha\":\"*\"},\"directories\":{},\"dist\":{\"shasum\":\"4c83538de1f6e660c29e0a13446844f7a7e88259\",\"tarball\":\"http://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.0.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\"],\"gitHead\":\"f90fcae9838bcae7ae1ae4ebc9b29f11e5db4980\",\"homepage\":\"https://github.com/floatdrop/pinkie-promise\",\"keywords\":[\"promise\",\"promises\",\"es2015\",\"es6\",\"polyfill\",\"ponyfill\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"floatdrop@gmail.com\",\"name\":\"floatdrop\"}],\"name\":\"pinkie-promise\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/floatdrop/pinkie-promise.git\"},\"scripts\":{\"test\":\"mocha\"},\"version\":\"2.0.0\"}");

/***/ }),

/***/ 3825:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"pinkie@^2.0.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/pinkie-promise\"]],\"_from\":\"pinkie@>=2.0.0 <3.0.0\",\"_id\":\"pinkie@2.0.4\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/pinkie\",\"_nodeVersion\":\"4.2.4\",\"_npmUser\":{\"email\":\"floatdrop@gmail.com\",\"name\":\"floatdrop\"},\"_npmVersion\":\"2.14.12\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"pinkie\",\"raw\":\"pinkie@^2.0.0\",\"rawSpec\":\"^2.0.0\",\"scope\":null,\"spec\":\">=2.0.0 <3.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/pinkie-promise\"],\"_resolved\":\"https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz\",\"_shasum\":\"72556b80cfa0d48a974e80e77248e80ed4f7f870\",\"_shrinkwrap\":null,\"_spec\":\"pinkie@^2.0.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/pinkie-promise\",\"author\":{\"email\":\"floatdrop@gmail.com\",\"name\":\"Vsevolod Strukchinsky\",\"url\":\"github.com/floatdrop\"},\"bugs\":{\"url\":\"https://github.com/floatdrop/pinkie/issues\"},\"dependencies\":{},\"description\":\"Itty bitty little widdle twinkie pinkie ES2015 Promise implementation\",\"devDependencies\":{\"core-assert\":\"^0.1.1\",\"coveralls\":\"^2.11.4\",\"mocha\":\"*\",\"nyc\":\"^3.2.2\",\"promises-aplus-tests\":\"*\",\"xo\":\"^0.10.1\"},\"directories\":{},\"dist\":{\"shasum\":\"72556b80cfa0d48a974e80e77248e80ed4f7f870\",\"tarball\":\"http://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\"],\"gitHead\":\"8d4a92447a5c62bff9f89756caeb4c9c8770579b\",\"homepage\":\"https://github.com/floatdrop/pinkie\",\"keywords\":[\"promise\",\"promises\",\"es2015\",\"es6\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"floatdrop@gmail.com\",\"name\":\"floatdrop\"}],\"name\":\"pinkie\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/floatdrop/pinkie.git\"},\"scripts\":{\"coverage\":\"nyc report --reporter=text-lcov | coveralls\",\"test\":\"xo && nyc mocha\"},\"version\":\"2.0.4\"}");

/***/ }),

/***/ 5654:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"pkg-conf@^1.1.1\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/yargs\"]],\"_from\":\"pkg-conf@>=1.1.1 <2.0.0\",\"_id\":\"pkg-conf@1.1.1\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/pkg-conf\",\"_nodeVersion\":\"4.2.4\",\"_npmUser\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},\"_npmVersion\":\"3.6.0\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"pkg-conf\",\"raw\":\"pkg-conf@^1.1.1\",\"rawSpec\":\"^1.1.1\",\"scope\":null,\"spec\":\">=1.1.1 <2.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/yargs\"],\"_resolved\":\"https://registry.npmjs.org/pkg-conf/-/pkg-conf-1.1.1.tgz\",\"_shasum\":\"a3caee3fb9c23ab4abad3baaea02f0001c75f200\",\"_shrinkwrap\":null,\"_spec\":\"pkg-conf@^1.1.1\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/yargs\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/sindresorhus/pkg-conf/issues\"},\"dependencies\":{\"find-up\":\"^1.0.0\",\"object-assign\":\"^4.0.1\",\"read-pkg\":\"^1.0.0\",\"symbol\":\"^0.2.1\"},\"description\":\"Get namespaced config from the closest package.json\",\"devDependencies\":{\"ava\":\"*\",\"xo\":\"*\"},\"directories\":{},\"dist\":{\"shasum\":\"a3caee3fb9c23ab4abad3baaea02f0001c75f200\",\"tarball\":\"http://registry.npmjs.org/pkg-conf/-/pkg-conf-1.1.1.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\"],\"fixture\":{\"foo\":true},\"gitHead\":\"9bb0bb78f4e6d8b6e14e8ef28b1cfba7305341f6\",\"homepage\":\"https://github.com/sindresorhus/pkg-conf#readme\",\"keywords\":[\"json\",\"read\",\"parse\",\"file\",\"fs\",\"graceful\",\"load\",\"pkg\",\"package\",\"config\",\"conf\",\"configuration\",\"object\",\"namespace\",\"namespaced\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"}],\"name\":\"pkg-conf\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sindresorhus/pkg-conf.git\"},\"scripts\":{\"test\":\"xo && ava\"},\"version\":\"1.1.1\"}");

/***/ }),

/***/ 6745:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"read-pkg-up@^1.0.1\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/yargs\"]],\"_from\":\"read-pkg-up@>=1.0.1 <2.0.0\",\"_id\":\"read-pkg-up@1.0.1\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/read-pkg-up\",\"_nodeVersion\":\"0.12.7\",\"_npmUser\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},\"_npmVersion\":\"2.11.3\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"read-pkg-up\",\"raw\":\"read-pkg-up@^1.0.1\",\"rawSpec\":\"^1.0.1\",\"scope\":null,\"spec\":\">=1.0.1 <2.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/yargs\"],\"_resolved\":\"https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-1.0.1.tgz\",\"_shasum\":\"9d63c13276c065918d57f002a57f40a1b643fb02\",\"_shrinkwrap\":null,\"_spec\":\"read-pkg-up@^1.0.1\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/yargs\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/sindresorhus/read-pkg-up/issues\"},\"dependencies\":{\"find-up\":\"^1.0.0\",\"read-pkg\":\"^1.0.0\"},\"description\":\"Read the closest package.json file\",\"devDependencies\":{\"ava\":\"*\",\"xo\":\"*\"},\"directories\":{},\"dist\":{\"shasum\":\"9d63c13276c065918d57f002a57f40a1b643fb02\",\"tarball\":\"http://registry.npmjs.org/read-pkg-up/-/read-pkg-up-1.0.1.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\"],\"gitHead\":\"27ec7c844b495a39eea7859c5f4d4721ebf60e8e\",\"homepage\":\"https://github.com/sindresorhus/read-pkg-up\",\"keywords\":[\"json\",\"read\",\"parse\",\"file\",\"fs\",\"graceful\",\"load\",\"pkg\",\"package\",\"find\",\"up\",\"find-up\",\"findup\",\"look-up\",\"look\",\"file\",\"search\",\"match\",\"package\",\"resolve\",\"parent\",\"parents\",\"folder\",\"directory\",\"dir\",\"walk\",\"walking\",\"path\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"}],\"name\":\"read-pkg-up\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sindresorhus/read-pkg-up.git\"},\"scripts\":{\"test\":\"xo && ava\"},\"version\":\"1.0.1\"}");

/***/ }),

/***/ 8478:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"read-pkg@^1.0.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/pkg-conf\"]],\"_from\":\"read-pkg@>=1.0.0 <2.0.0\",\"_id\":\"read-pkg@1.1.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/read-pkg\",\"_nodeVersion\":\"3.0.0\",\"_npmUser\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},\"_npmVersion\":\"2.13.3\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"read-pkg\",\"raw\":\"read-pkg@^1.0.0\",\"rawSpec\":\"^1.0.0\",\"scope\":null,\"spec\":\">=1.0.0 <2.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/pkg-conf\",\"/read-pkg-up\"],\"_resolved\":\"https://registry.npmjs.org/read-pkg/-/read-pkg-1.1.0.tgz\",\"_shasum\":\"f5ffaa5ecd29cb31c0474bca7d756b6bb29e3f28\",\"_shrinkwrap\":null,\"_spec\":\"read-pkg@^1.0.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/pkg-conf\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/sindresorhus/read-pkg/issues\"},\"dependencies\":{\"load-json-file\":\"^1.0.0\",\"normalize-package-data\":\"^2.3.2\",\"path-type\":\"^1.0.0\"},\"description\":\"Read a package.json file\",\"devDependencies\":{\"ava\":\"*\",\"xo\":\"*\"},\"directories\":{},\"dist\":{\"shasum\":\"f5ffaa5ecd29cb31c0474bca7d756b6bb29e3f28\",\"tarball\":\"http://registry.npmjs.org/read-pkg/-/read-pkg-1.1.0.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\"],\"gitHead\":\"9448d32b2ebcd65fc0547def3cfe5b28ef522e68\",\"homepage\":\"https://github.com/sindresorhus/read-pkg\",\"keywords\":[\"json\",\"read\",\"parse\",\"file\",\"fs\",\"graceful\",\"load\",\"pkg\",\"package\",\"normalize\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"}],\"name\":\"read-pkg\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sindresorhus/read-pkg.git\"},\"scripts\":{\"test\":\"xo && ava\"},\"version\":\"1.1.0\"}");

/***/ }),

/***/ 3071:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"require-main-filename@^1.0.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/yargs\"]],\"_from\":\"require-main-filename@>=1.0.0 <2.0.0\",\"_id\":\"require-main-filename@1.0.1\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/require-main-filename\",\"_nodeVersion\":\"3.2.0\",\"_npmOperationalInternal\":{\"host\":\"packages-6-west.internal.npmjs.com\",\"tmp\":\"tmp/require-main-filename-1.0.1.tgz_1455688492890_0.0750324921682477\"},\"_npmUser\":{\"email\":\"ben@npmjs.com\",\"name\":\"bcoe\"},\"_npmVersion\":\"3.3.0\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"require-main-filename\",\"raw\":\"require-main-filename@^1.0.0\",\"rawSpec\":\"^1.0.0\",\"scope\":null,\"spec\":\">=1.0.0 <2.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/yargs\"],\"_resolved\":\"https://registry.npmjs.org/require-main-filename/-/require-main-filename-1.0.1.tgz\",\"_shasum\":\"97f717b69d48784f5f526a6c5aa8ffdda055a4d1\",\"_shrinkwrap\":null,\"_spec\":\"require-main-filename@^1.0.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/yargs\",\"author\":{\"email\":\"ben@npmjs.com\",\"name\":\"Ben Coe\"},\"bugs\":{\"url\":\"https://github.com/yargs/require-main-filename/issues\"},\"dependencies\":{},\"description\":\"shim for require.main.filename() that works in as many environments as possible\",\"devDependencies\":{\"chai\":\"^3.5.0\",\"standard\":\"^6.0.5\",\"tap\":\"^5.2.0\"},\"directories\":{},\"dist\":{\"shasum\":\"97f717b69d48784f5f526a6c5aa8ffdda055a4d1\",\"tarball\":\"http://registry.npmjs.org/require-main-filename/-/require-main-filename-1.0.1.tgz\"},\"gitHead\":\"6dd2291332bed764c56302ccdd14da8a213249a1\",\"homepage\":\"https://github.com/yargs/require-main-filename#readme\",\"keywords\":[\"require\",\"shim\",\"iisnode\"],\"license\":\"ISC\",\"main\":\"index.js\",\"maintainers\":[{\"email\":\"ben@npmjs.com\",\"name\":\"bcoe\"}],\"name\":\"require-main-filename\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+ssh://git@github.com/yargs/require-main-filename.git\"},\"scripts\":{\"pretest\":\"standard\",\"test\":\"tap --coverage test.js\"},\"version\":\"1.0.1\"}");

/***/ }),

/***/ 9835:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"semver@2 || 3 || 4 || 5\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/normalize-package-data\"]],\"_from\":\"semver@>=2.0.0 <3.0.0||>=3.0.0 <4.0.0||>=4.0.0 <5.0.0||>=5.0.0 <6.0.0\",\"_id\":\"semver@5.1.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/semver\",\"_nodeVersion\":\"4.0.0\",\"_npmUser\":{\"email\":\"i@izs.me\",\"name\":\"isaacs\"},\"_npmVersion\":\"3.3.2\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"semver\",\"raw\":\"semver@2 || 3 || 4 || 5\",\"rawSpec\":\"2 || 3 || 4 || 5\",\"scope\":null,\"spec\":\">=2.0.0 <3.0.0||>=3.0.0 <4.0.0||>=4.0.0 <5.0.0||>=5.0.0 <6.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/normalize-package-data\"],\"_resolved\":\"https://registry.npmjs.org/semver/-/semver-5.1.0.tgz\",\"_shasum\":\"85f2cf8550465c4df000cf7d86f6b054106ab9e5\",\"_shrinkwrap\":null,\"_spec\":\"semver@2 || 3 || 4 || 5\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/normalize-package-data\",\"bin\":{\"semver\":\"./bin/semver\"},\"bugs\":{\"url\":\"https://github.com/npm/node-semver/issues\"},\"dependencies\":{},\"description\":\"The semantic version parser used by npm.\",\"devDependencies\":{\"tap\":\"^2.0.0\"},\"directories\":{},\"dist\":{\"shasum\":\"85f2cf8550465c4df000cf7d86f6b054106ab9e5\",\"tarball\":\"http://registry.npmjs.org/semver/-/semver-5.1.0.tgz\"},\"gitHead\":\"8e33a30e62e40e4983d1c5f55e794331b861aadc\",\"homepage\":\"https://github.com/npm/node-semver#readme\",\"license\":\"ISC\",\"main\":\"semver.js\",\"maintainers\":[{\"email\":\"isaacs@npmjs.com\",\"name\":\"isaacs\"},{\"email\":\"ogd@aoaioxxysz.net\",\"name\":\"othiym23\"}],\"name\":\"semver\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/npm/node-semver.git\"},\"scripts\":{\"test\":\"tap test/*.js\"},\"version\":\"5.1.0\"}");

/***/ }),

/***/ 3177:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"spdx-correct@~1.0.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/validate-npm-package-license\"]],\"_from\":\"spdx-correct@>=1.0.0 <1.1.0\",\"_id\":\"spdx-correct@1.0.2\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/spdx-correct\",\"_nodeVersion\":\"4.2.1\",\"_npmUser\":{\"email\":\"kyle@kemitchell.com\",\"name\":\"kemitchell\"},\"_npmVersion\":\"3.3.6\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"spdx-correct\",\"raw\":\"spdx-correct@~1.0.0\",\"rawSpec\":\"~1.0.0\",\"scope\":null,\"spec\":\">=1.0.0 <1.1.0\",\"type\":\"range\"},\"_requiredBy\":[\"/validate-npm-package-license\"],\"_resolved\":\"https://registry.npmjs.org/spdx-correct/-/spdx-correct-1.0.2.tgz\",\"_shasum\":\"4b3073d933ff51f3912f03ac5519498a4150db40\",\"_shrinkwrap\":null,\"_spec\":\"spdx-correct@~1.0.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/validate-npm-package-license\",\"author\":{\"email\":\"kyle@kemitchell.com\",\"name\":\"Kyle E. Mitchell\",\"url\":\"https://kemitchell.com\"},\"bugs\":{\"url\":\"https://github.com/kemitchell/spdx-correct.js/issues\"},\"dependencies\":{\"spdx-license-ids\":\"^1.0.2\"},\"description\":\"correct invalid SPDX identifiers\",\"devDependencies\":{\"defence-cli\":\"^1.0.1\",\"replace-require-self\":\"^1.0.0\",\"spdx-expression-parse\":\"^1.0.0\",\"tape\":\"~4.0.0\"},\"directories\":{},\"dist\":{\"shasum\":\"4b3073d933ff51f3912f03ac5519498a4150db40\",\"tarball\":\"http://registry.npmjs.org/spdx-correct/-/spdx-correct-1.0.2.tgz\"},\"gitHead\":\"8430a3ad521e1455208db33faafcb79c7b074236\",\"homepage\":\"https://github.com/kemitchell/spdx-correct.js#readme\",\"keywords\":[\"SPDX\",\"law\",\"legal\",\"license\",\"metadata\"],\"license\":\"Apache-2.0\",\"maintainers\":[{\"email\":\"kyle@kemitchell.com\",\"name\":\"kemitchell\"},{\"email\":\"ogd@aoaioxxysz.net\",\"name\":\"othiym23\"}],\"name\":\"spdx-correct\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/kemitchell/spdx-correct.js.git\"},\"scripts\":{\"test\":\"defence README.md | replace-require-self | node && tape *.test.js\"},\"version\":\"1.0.2\"}");

/***/ }),

/***/ 2640:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"spdx-exceptions@^1.0.4\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/spdx-expression-parse\"]],\"_from\":\"spdx-exceptions@>=1.0.4 <2.0.0\",\"_id\":\"spdx-exceptions@1.0.4\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/spdx-exceptions\",\"_nodeVersion\":\"5.0.0\",\"_npmUser\":{\"email\":\"kyle@kemitchell.com\",\"name\":\"kemitchell\"},\"_npmVersion\":\"3.3.6\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"spdx-exceptions\",\"raw\":\"spdx-exceptions@^1.0.4\",\"rawSpec\":\"^1.0.4\",\"scope\":null,\"spec\":\">=1.0.4 <2.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/spdx-expression-parse\"],\"_resolved\":\"https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-1.0.4.tgz\",\"_shasum\":\"220b84239119ae9045a892db81a83f4ce16f80fd\",\"_shrinkwrap\":null,\"_spec\":\"spdx-exceptions@^1.0.4\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/spdx-expression-parse\",\"author\":{\"name\":\"The Linux Foundation\"},\"bugs\":{\"url\":\"https://github.com/kemitchell/spdx-exceptions.json/issues\"},\"contributors\":[{\"email\":\"kyle@kemitchell.com\",\"name\":\"Kyle E. Mitchell\",\"url\":\"https://kemitchell.com/\"}],\"dependencies\":{},\"description\":\"list of SPDX standard license exceptions\",\"devDependencies\":{},\"directories\":{},\"dist\":{\"shasum\":\"220b84239119ae9045a892db81a83f4ce16f80fd\",\"tarball\":\"http://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-1.0.4.tgz\"},\"gitHead\":\"770316d6c946417ab6efa8533b82d0b61779092b\",\"homepage\":\"https://github.com/kemitchell/spdx-exceptions.json#readme\",\"license\":\"CC-BY-3.0\",\"maintainers\":[{\"email\":\"kyle@kemitchell.com\",\"name\":\"kemitchell\"}],\"name\":\"spdx-exceptions\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/kemitchell/spdx-exceptions.json.git\"},\"scripts\":{},\"version\":\"1.0.4\"}");

/***/ }),

/***/ 7148:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"spdx-expression-parse@~1.0.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/validate-npm-package-license\"]],\"_from\":\"spdx-expression-parse@>=1.0.0 <1.1.0\",\"_id\":\"spdx-expression-parse@1.0.2\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/spdx-expression-parse\",\"_nodeVersion\":\"5.0.0\",\"_npmUser\":{\"email\":\"kyle@kemitchell.com\",\"name\":\"kemitchell\"},\"_npmVersion\":\"3.3.6\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"spdx-expression-parse\",\"raw\":\"spdx-expression-parse@~1.0.0\",\"rawSpec\":\"~1.0.0\",\"scope\":null,\"spec\":\">=1.0.0 <1.1.0\",\"type\":\"range\"},\"_requiredBy\":[\"/validate-npm-package-license\"],\"_resolved\":\"https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-1.0.2.tgz\",\"_shasum\":\"d52b14b5e9670771440af225bcb563122ac452f6\",\"_shrinkwrap\":null,\"_spec\":\"spdx-expression-parse@~1.0.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/validate-npm-package-license\",\"author\":{\"email\":\"kyle@kemitchell.com\",\"name\":\"Kyle E. Mitchell\",\"url\":\"http://kemitchell.com\"},\"bugs\":{\"url\":\"https://github.com/kemitchell/spdx-expression-parse.js/issues\"},\"dependencies\":{\"spdx-exceptions\":\"^1.0.4\",\"spdx-license-ids\":\"^1.0.0\"},\"description\":\"parse SPDX license expressions\",\"devDependencies\":{\"defence-cli\":\"^1.0.1\",\"jison\":\"^0.4.15\",\"replace-require-self\":\"^1.0.0\",\"uglify-js\":\"^2.4.24\"},\"directories\":{},\"dist\":{\"shasum\":\"d52b14b5e9670771440af225bcb563122ac452f6\",\"tarball\":\"http://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-1.0.2.tgz\"},\"gitHead\":\"ffe2fa7272ebf640b18286fc561f17a844d4f06b\",\"homepage\":\"https://github.com/kemitchell/spdx-expression-parse.js#readme\",\"keywords\":[\"SPDX\",\"law\",\"legal\",\"license\",\"metadata\",\"package\",\"package.json\",\"standards\"],\"license\":\"(MIT AND CC-BY-3.0)\",\"maintainers\":[{\"email\":\"kyle@kemitchell.com\",\"name\":\"kemitchell\"}],\"name\":\"spdx-expression-parse\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/kemitchell/spdx-expression-parse.js.git\"},\"scripts\":{\"prepublish\":\"node generate-parser.js | uglifyjs > parser.generated.js\",\"pretest\":\"npm run prepublish\",\"test\":\"defence -i javascript README.md | replace-require-self | node\"},\"version\":\"1.0.2\"}");

/***/ }),

/***/ 2889:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"spdx-license-ids@^1.0.2\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/spdx-correct\"]],\"_from\":\"spdx-license-ids@>=1.0.2 <2.0.0\",\"_id\":\"spdx-license-ids@1.2.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/spdx-license-ids\",\"_nodeVersion\":\"5.4.0\",\"_npmUser\":{\"email\":\"snnskwtnb@gmail.com\",\"name\":\"shinnn\"},\"_npmVersion\":\"3.5.2\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"spdx-license-ids\",\"raw\":\"spdx-license-ids@^1.0.2\",\"rawSpec\":\"^1.0.2\",\"scope\":null,\"spec\":\">=1.0.2 <2.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/spdx-correct\",\"/spdx-expression-parse\"],\"_resolved\":\"https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-1.2.0.tgz\",\"_shasum\":\"b549dd0f63dcb745a17e2ea3a07402e0e332d1e2\",\"_shrinkwrap\":null,\"_spec\":\"spdx-license-ids@^1.0.2\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/spdx-correct\",\"author\":{\"name\":\"Shinnosuke Watanabe\",\"url\":\"https://github.com/shinnn\"},\"bugs\":{\"url\":\"https://github.com/shinnn/spdx-license-ids/issues\"},\"dependencies\":{},\"description\":\"A list of SPDX license identifiers\",\"devDependencies\":{\"@shinnn/eslintrc\":\"^1.0.0\",\"each-async\":\"^1.1.1\",\"eslint\":\"^0.24.0\",\"got\":\"^3.3.0\",\"istanbul\":\"^0.3.17\",\"require-bower-files\":\"^2.0.0\",\"rimraf\":\"^2.4.1\",\"stringify-object\":\"^2.2.0\",\"tape\":\"^4.0.0\"},\"directories\":{},\"dist\":{\"shasum\":\"b549dd0f63dcb745a17e2ea3a07402e0e332d1e2\",\"tarball\":\"http://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-1.2.0.tgz\"},\"files\":[\"spdx-license-ids.json\"],\"gitHead\":\"f74a7a16ca05540e0e97f1bbb61da07829b5d9ab\",\"homepage\":\"https://github.com/shinnn/spdx-license-ids#readme\",\"keywords\":[\"spdx\",\"license\",\"licenses\",\"id\",\"identifier\",\"identifiers\",\"json\",\"array\",\"oss\",\"browser\",\"client-side\"],\"license\":\"Unlicense\",\"main\":\"spdx-license-ids.json\",\"maintainers\":[{\"email\":\"snnskwtnb@gmail.com\",\"name\":\"shinnn\"}],\"name\":\"spdx-license-ids\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/shinnn/spdx-license-ids.git\"},\"scripts\":{\"build\":\"node --harmony_arrow_functions build.js\",\"coverage\":\"node --harmony_arrow_functions node_modules/.bin/istanbul cover test.js\",\"coveralls\":\"${npm_package_scripts_coverage} && istanbul-coveralls\",\"lint\":\"eslint --config node_modules/@shinnn/eslintrc/rc.json --ignore-path .gitignore .\",\"pretest\":\"${npm_package_scripts_build} && ${npm_package_scripts_lint}\",\"test\":\"node --harmony_arrow_functions test.js\"},\"version\":\"1.2.0\"}");

/***/ }),

/***/ 283:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"string-width@^1.0.1\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/yargs\"]],\"_from\":\"string-width@>=1.0.1 <2.0.0\",\"_id\":\"string-width@1.0.1\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/string-width\",\"_nodeVersion\":\"0.12.5\",\"_npmUser\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},\"_npmVersion\":\"2.11.2\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"string-width\",\"raw\":\"string-width@^1.0.1\",\"rawSpec\":\"^1.0.1\",\"scope\":null,\"spec\":\">=1.0.1 <2.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/cliui\",\"/wrap-ansi\",\"/yargs\"],\"_resolved\":\"https://registry.npmjs.org/string-width/-/string-width-1.0.1.tgz\",\"_shasum\":\"c92129b6f1d7f52acf9af424a26e3864a05ceb0a\",\"_shrinkwrap\":null,\"_spec\":\"string-width@^1.0.1\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/yargs\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/sindresorhus/string-width/issues\"},\"dependencies\":{\"code-point-at\":\"^1.0.0\",\"is-fullwidth-code-point\":\"^1.0.0\",\"strip-ansi\":\"^3.0.0\"},\"description\":\"Get the visual width of a string - the number of columns required to display it\",\"devDependencies\":{\"ava\":\"0.0.4\"},\"directories\":{},\"dist\":{\"shasum\":\"c92129b6f1d7f52acf9af424a26e3864a05ceb0a\",\"tarball\":\"http://registry.npmjs.org/string-width/-/string-width-1.0.1.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\"],\"gitHead\":\"f279cfd14835f0a3c8df69ba18e9a3960156e135\",\"homepage\":\"https://github.com/sindresorhus/string-width\",\"keywords\":[\"string\",\"str\",\"character\",\"char\",\"unicode\",\"width\",\"visual\",\"column\",\"columns\",\"fullwidth\",\"full-width\",\"full\",\"ansi\",\"escape\",\"codes\",\"cli\",\"command-line\",\"terminal\",\"console\",\"cjk\",\"chinese\",\"japanese\",\"korean\",\"fixed-width\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"}],\"name\":\"string-width\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sindresorhus/string-width.git\"},\"scripts\":{\"test\":\"node test.js\"},\"version\":\"1.0.1\"}");

/***/ }),

/***/ 1714:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"strip-ansi@^3.0.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/cliui\"]],\"_from\":\"strip-ansi@>=3.0.0 <4.0.0\",\"_id\":\"strip-ansi@3.0.1\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/strip-ansi\",\"_nodeVersion\":\"0.12.7\",\"_npmOperationalInternal\":{\"host\":\"packages-9-west.internal.npmjs.com\",\"tmp\":\"tmp/strip-ansi-3.0.1.tgz_1456057278183_0.28958667791448534\"},\"_npmUser\":{\"email\":\"jappelman@xebia.com\",\"name\":\"jbnicolai\"},\"_npmVersion\":\"2.11.3\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"strip-ansi\",\"raw\":\"strip-ansi@^3.0.0\",\"rawSpec\":\"^3.0.0\",\"scope\":null,\"spec\":\">=3.0.0 <4.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/cliui\",\"/string-width\"],\"_resolved\":\"https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz\",\"_shasum\":\"6a385fb8853d952d5ff05d0e8aaf94278dc63dcf\",\"_shrinkwrap\":null,\"_spec\":\"strip-ansi@^3.0.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/cliui\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/chalk/strip-ansi/issues\"},\"dependencies\":{\"ansi-regex\":\"^2.0.0\"},\"description\":\"Strip ANSI escape codes\",\"devDependencies\":{\"ava\":\"*\",\"xo\":\"*\"},\"directories\":{},\"dist\":{\"shasum\":\"6a385fb8853d952d5ff05d0e8aaf94278dc63dcf\",\"tarball\":\"http://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\"],\"gitHead\":\"8270705c704956da865623e564eba4875c3ea17f\",\"homepage\":\"https://github.com/chalk/strip-ansi\",\"keywords\":[\"strip\",\"trim\",\"remove\",\"ansi\",\"styles\",\"color\",\"colour\",\"colors\",\"terminal\",\"console\",\"string\",\"tty\",\"escape\",\"formatting\",\"rgb\",\"256\",\"shell\",\"xterm\",\"log\",\"logging\",\"command-line\",\"text\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},{\"email\":\"jappelman@xebia.com\",\"name\":\"jbnicolai\"}],\"name\":\"strip-ansi\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/chalk/strip-ansi.git\"},\"scripts\":{\"test\":\"xo && ava\"},\"version\":\"3.0.1\"}");

/***/ }),

/***/ 8514:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"strip-bom@^2.0.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/load-json-file\"]],\"_from\":\"strip-bom@>=2.0.0 <3.0.0\",\"_id\":\"strip-bom@2.0.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/strip-bom\",\"_nodeVersion\":\"0.12.5\",\"_npmUser\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"},\"_npmVersion\":\"2.11.2\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"strip-bom\",\"raw\":\"strip-bom@^2.0.0\",\"rawSpec\":\"^2.0.0\",\"scope\":null,\"spec\":\">=2.0.0 <3.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/load-json-file\"],\"_resolved\":\"https://registry.npmjs.org/strip-bom/-/strip-bom-2.0.0.tgz\",\"_shasum\":\"6219a85616520491f35788bdbf1447a99c7e6b0e\",\"_shrinkwrap\":null,\"_spec\":\"strip-bom@^2.0.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/load-json-file\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/sindresorhus/strip-bom/issues\"},\"dependencies\":{\"is-utf8\":\"^0.2.0\"},\"description\":\"Strip UTF-8 byte order mark (BOM) from a string/buffer\",\"devDependencies\":{\"mocha\":\"*\"},\"directories\":{},\"dist\":{\"shasum\":\"6219a85616520491f35788bdbf1447a99c7e6b0e\",\"tarball\":\"http://registry.npmjs.org/strip-bom/-/strip-bom-2.0.0.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\"],\"gitHead\":\"851b9c126dba9561cc14ef3dc2634dcc11df4d11\",\"homepage\":\"https://github.com/sindresorhus/strip-bom\",\"keywords\":[\"bom\",\"strip\",\"byte\",\"mark\",\"unicode\",\"utf8\",\"utf-8\",\"remove\",\"delete\",\"trim\",\"text\",\"buffer\",\"string\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"}],\"name\":\"strip-bom\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sindresorhus/strip-bom.git\"},\"scripts\":{\"test\":\"mocha\"},\"version\":\"2.0.0\"}");

/***/ }),

/***/ 4380:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"symbol@^0.2.1\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/pkg-conf\"]],\"_from\":\"symbol@>=0.2.1 <0.3.0\",\"_id\":\"symbol@0.2.1\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/symbol\",\"_npmUser\":{\"email\":\"sean.monstar@gmail.com\",\"name\":\"seanmonstar\"},\"_npmVersion\":\"1.3.11\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"symbol\",\"raw\":\"symbol@^0.2.1\",\"rawSpec\":\"^0.2.1\",\"scope\":null,\"spec\":\">=0.2.1 <0.3.0\",\"type\":\"range\"},\"_requiredBy\":[\"/pkg-conf\"],\"_resolved\":\"https://registry.npmjs.org/symbol/-/symbol-0.2.1.tgz\",\"_shasum\":\"c2124fb7b2e3eea30e4fa824341aa789b3534c95\",\"_shrinkwrap\":null,\"_spec\":\"symbol@^0.2.1\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/pkg-conf\",\"author\":{\"email\":\"sean.monstar@gmail.com\",\"name\":\"Sean McArthur\",\"url\":\"http://seanmonstar.com\"},\"bugs\":{\"url\":\"https://github.com/seanmonstar/symbol/issues\"},\"dependencies\":{},\"description\":\"ES6 Symbols in your ES5.\",\"devDependencies\":{},\"directories\":{},\"dist\":{\"shasum\":\"c2124fb7b2e3eea30e4fa824341aa789b3534c95\",\"tarball\":\"http://registry.npmjs.org/symbol/-/symbol-0.2.1.tgz\"},\"homepage\":\"https://github.com/seanmonstar/symbol#readme\",\"keywords\":[\"symbols\",\"es6\",\"harmony\"],\"license\":\"MPLv2.0\",\"main\":\"index.js\",\"maintainers\":[{\"email\":\"sean.monstar@gmail.com\",\"name\":\"seanmonstar\"}],\"name\":\"symbol\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/seanmonstar/symbol.git\"},\"scripts\":{\"test\":\"node test.js\"},\"version\":\"0.2.1\"}");

/***/ }),

/***/ 3714:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"validate-npm-package-license@^3.0.1\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/normalize-package-data\"]],\"_from\":\"validate-npm-package-license@>=3.0.1 <4.0.0\",\"_id\":\"validate-npm-package-license@3.0.1\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/validate-npm-package-license\",\"_nodeVersion\":\"0.12.7\",\"_npmUser\":{\"email\":\"kyle@kemitchell.com\",\"name\":\"kemitchell\"},\"_npmVersion\":\"2.13.5\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"validate-npm-package-license\",\"raw\":\"validate-npm-package-license@^3.0.1\",\"rawSpec\":\"^3.0.1\",\"scope\":null,\"spec\":\">=3.0.1 <4.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/normalize-package-data\"],\"_resolved\":\"https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.1.tgz\",\"_shasum\":\"2804babe712ad3379459acfbe24746ab2c303fbc\",\"_shrinkwrap\":null,\"_spec\":\"validate-npm-package-license@^3.0.1\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/normalize-package-data\",\"author\":{\"email\":\"kyle@kemitchell.com\",\"name\":\"Kyle E. Mitchell\",\"url\":\"https://kemitchell.com\"},\"bugs\":{\"url\":\"https://github.com/kemitchell/validate-npm-package-license.js/issues\"},\"dependencies\":{\"spdx-correct\":\"~1.0.0\",\"spdx-expression-parse\":\"~1.0.0\"},\"description\":\"Give me a string and I'll tell you if it's a valid npm package license string\",\"devDependencies\":{\"defence-cli\":\"^1.0.1\",\"replace-require-self\":\"^1.0.0\"},\"directories\":{},\"dist\":{\"shasum\":\"2804babe712ad3379459acfbe24746ab2c303fbc\",\"tarball\":\"http://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.1.tgz\"},\"gitHead\":\"00200d28f9960985f221bc1a8a71e4760daf39bf\",\"homepage\":\"https://github.com/kemitchell/validate-npm-package-license.js#readme\",\"keywords\":[\"license\",\"npm\",\"package\",\"validation\"],\"license\":\"Apache-2.0\",\"maintainers\":[{\"email\":\"kyle@kemitchell.com\",\"name\":\"kemitchell\"},{\"email\":\"ogd@aoaioxxysz.net\",\"name\":\"othiym23\"}],\"name\":\"validate-npm-package-license\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/kemitchell/validate-npm-package-license.js.git\"},\"scripts\":{\"test\":\"defence README.md | replace-require-self | node\"},\"version\":\"3.0.1\"}");

/***/ }),

/***/ 7554:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"window-size@^0.2.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/yargs\"]],\"_from\":\"window-size@>=0.2.0 <0.3.0\",\"_id\":\"window-size@0.2.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/window-size\",\"_nodeVersion\":\"5.3.0\",\"_npmUser\":{\"email\":\"github@sellside.com\",\"name\":\"jonschlinkert\"},\"_npmVersion\":\"3.3.12\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"window-size\",\"raw\":\"window-size@^0.2.0\",\"rawSpec\":\"^0.2.0\",\"scope\":null,\"spec\":\">=0.2.0 <0.3.0\",\"type\":\"range\"},\"_requiredBy\":[\"/yargs\"],\"_resolved\":\"https://registry.npmjs.org/window-size/-/window-size-0.2.0.tgz\",\"_shasum\":\"b4315bb4214a3d7058ebeee892e13fa24d98b075\",\"_shrinkwrap\":null,\"_spec\":\"window-size@^0.2.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/yargs\",\"author\":{\"name\":\"Jon Schlinkert\",\"url\":\"https://github.com/jonschlinkert\"},\"bin\":{\"window-size\":\"cli.js\"},\"bugs\":{\"url\":\"https://github.com/jonschlinkert/window-size/issues\"},\"dependencies\":{},\"description\":\"Reliable way to to get the height and width of the terminal/console in a node.js environment.\",\"devDependencies\":{\"semistandard\":\"^7.0.2\",\"tap\":\"^2.2.1\"},\"directories\":{},\"dist\":{\"shasum\":\"b4315bb4214a3d7058ebeee892e13fa24d98b075\",\"tarball\":\"http://registry.npmjs.org/window-size/-/window-size-0.2.0.tgz\"},\"engines\":{\"node\":\">= 0.10.0\"},\"files\":[\"index.js\",\"cli.js\"],\"gitHead\":\"538b4406a6f30c9a2c8f84ba38bb34a39775bd2b\",\"homepage\":\"https://github.com/jonschlinkert/window-size\",\"keywords\":[\"console\",\"height\",\"resize\",\"size\",\"terminal\",\"tty\",\"width\",\"window\"],\"license\":\"MIT\",\"main\":\"index.js\",\"maintainers\":[{\"email\":\"github@sellside.com\",\"name\":\"jonschlinkert\"},{\"email\":\"brian.woodward@gmail.com\",\"name\":\"doowb\"}],\"name\":\"window-size\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/jonschlinkert/window-size.git\"},\"scripts\":{\"pretest\":\"semistandard\",\"test\":\"tap --coverage test.js\"},\"verb\":{\"related\":{\"list\":[\"yargs\",\"lint-deps\",\"base-cli\"]}},\"version\":\"0.2.0\"}");

/***/ }),

/***/ 72:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"wrap-ansi@^1.0.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/cliui\"]],\"_from\":\"wrap-ansi@>=1.0.0 <2.0.0\",\"_id\":\"wrap-ansi@1.0.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/wrap-ansi\",\"_nodeVersion\":\"1.1.0\",\"_npmUser\":{\"email\":\"bencoe@gmail.com\",\"name\":\"bcoe\"},\"_npmVersion\":\"3.3.6\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"wrap-ansi\",\"raw\":\"wrap-ansi@^1.0.0\",\"rawSpec\":\"^1.0.0\",\"scope\":null,\"spec\":\">=1.0.0 <2.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/cliui\"],\"_resolved\":\"https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-1.0.0.tgz\",\"_shasum\":\"f573bb9ee23cf43891f3362f5f359a1dfa38fc34\",\"_shrinkwrap\":null,\"_spec\":\"wrap-ansi@^1.0.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/cliui\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"sindresorhus.com\"},\"bugs\":{\"url\":\"https://github.com/chalk/wrap-ansi/issues\"},\"dependencies\":{\"string-width\":\"^1.0.1\"},\"description\":\"Wordwrap a string with ANSI escape codes\",\"devDependencies\":{\"ava\":\"0.0.4\",\"chalk\":\"^1.1.0\",\"coveralls\":\"^2.11.4\",\"has-ansi\":\"^2.0.0\",\"nyc\":\"^3.2.2\",\"strip-ansi\":\"^3.0.0\",\"xo\":\"*\"},\"directories\":{},\"dist\":{\"shasum\":\"f573bb9ee23cf43891f3362f5f359a1dfa38fc34\",\"tarball\":\"http://registry.npmjs.org/wrap-ansi/-/wrap-ansi-1.0.0.tgz\"},\"engines\":{\"node\":\">=0.10.0\"},\"files\":[\"index.js\"],\"gitHead\":\"c890e95ea671779012fa73fd77b74198e8c5d09b\",\"homepage\":\"https://github.com/chalk/wrap-ansi#readme\",\"keywords\":[\"wrap\",\"break\",\"wordwrap\",\"wordbreak\",\"linewrap\",\"ansi\",\"styles\",\"color\",\"colour\",\"colors\",\"terminal\",\"console\",\"cli\",\"string\",\"tty\",\"escape\",\"formatting\",\"rgb\",\"256\",\"shell\",\"xterm\",\"log\",\"logging\",\"command-line\",\"text\"],\"license\":\"MIT\",\"maintainers\":[{\"email\":\"ben@npmjs.com\",\"name\":\"bcoe\"},{\"email\":\"jappelman@xebia.com\",\"name\":\"jbnicolai\"},{\"email\":\"sindresorhus@gmail.com\",\"name\":\"sindresorhus\"}],\"name\":\"wrap-ansi\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/chalk/wrap-ansi.git\"},\"scripts\":{\"coverage\":\"nyc --reporter=text-lcov node test.js | coveralls\",\"test\":\"xo && nyc node test.js\"},\"version\":\"1.0.0\"}");

/***/ }),

/***/ 6457:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"y18n@^3.2.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/yargs\"]],\"_from\":\"y18n@>=3.2.0 <4.0.0\",\"_id\":\"y18n@3.2.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/y18n\",\"_nodeVersion\":\"0.12.7\",\"_npmUser\":{\"email\":\"andrewbgoode@gmail.com\",\"name\":\"abg\"},\"_npmVersion\":\"2.14.2\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"y18n\",\"raw\":\"y18n@^3.2.0\",\"rawSpec\":\"^3.2.0\",\"scope\":null,\"spec\":\">=3.2.0 <4.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/yargs\"],\"_resolved\":\"https://registry.npmjs.org/y18n/-/y18n-3.2.0.tgz\",\"_shasum\":\"3bec64c93b730d924a6148c765757932433e34c8\",\"_shrinkwrap\":null,\"_spec\":\"y18n@^3.2.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/yargs\",\"author\":{\"email\":\"ben@npmjs.com\",\"name\":\"Ben Coe\"},\"bugs\":{\"url\":\"https://github.com/bcoe/y18n/issues\"},\"dependencies\":{},\"description\":\"the bare-bones internationalization library used by yargs\",\"devDependencies\":{\"chai\":\"^3.3.0\",\"coveralls\":\"^2.11.4\",\"mocha\":\"^2.3.3\",\"nyc\":\"^3.2.2\",\"rimraf\":\"^2.4.3\",\"standard\":\"^5.3.1\"},\"directories\":{},\"dist\":{\"shasum\":\"3bec64c93b730d924a6148c765757932433e34c8\",\"tarball\":\"http://registry.npmjs.org/y18n/-/y18n-3.2.0.tgz\"},\"gitHead\":\"a92184823afa8cccef4c8100a0b79338f85ab089\",\"homepage\":\"https://github.com/bcoe/y18n\",\"keywords\":[\"i18n\",\"internationalization\",\"yargs\"],\"license\":\"ISC\",\"main\":\"index.js\",\"maintainers\":[{\"email\":\"ben@npmjs.com\",\"name\":\"bcoe\"},{\"email\":\"andrewbgoode@gmail.com\",\"name\":\"abg\"}],\"name\":\"y18n\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+ssh://git@github.com/bcoe/y18n.git\"},\"scripts\":{\"coverage\":\"nyc report --reporter=text-lcov | coveralls\",\"pretest\":\"standard\",\"test\":\"nyc mocha\"},\"version\":\"3.2.0\"}");

/***/ }),

/***/ 8032:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"yargs-parser@^2.1.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/yargs\"]],\"_from\":\"yargs-parser@>=2.1.0 <3.0.0\",\"_id\":\"yargs-parser@2.1.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/yargs-parser\",\"_nodeVersion\":\"3.2.0\",\"_npmOperationalInternal\":{\"host\":\"packages-9-west.internal.npmjs.com\",\"tmp\":\"tmp/yargs-parser-2.1.0.tgz_1455440640589_0.058524578576907516\"},\"_npmUser\":{\"email\":\"ben@npmjs.com\",\"name\":\"bcoe\"},\"_npmVersion\":\"3.3.0\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"yargs-parser\",\"raw\":\"yargs-parser@^2.1.0\",\"rawSpec\":\"^2.1.0\",\"scope\":null,\"spec\":\">=2.1.0 <3.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/yargs\"],\"_resolved\":\"https://registry.npmjs.org/yargs-parser/-/yargs-parser-2.1.0.tgz\",\"_shasum\":\"5f214362f948a085389abf34a78d8b5eef0b1350\",\"_shrinkwrap\":null,\"_spec\":\"yargs-parser@^2.1.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies/node_modules/yargs\",\"author\":{\"email\":\"ben@npmjs.com\",\"name\":\"Ben Coe\"},\"bugs\":{\"url\":\"https://github.com/yargs/yargs-parser/issues\"},\"dependencies\":{\"camelcase\":\"^2.1.0\",\"lodash.assign\":\"^4.0.2\"},\"description\":\"the mighty option parser used by yargs\",\"devDependencies\":{\"chai\":\"^3.5.0\",\"coveralls\":\"^2.11.6\",\"mocha\":\"^2.4.5\",\"nyc\":\"^5.6.0\",\"standard\":\"^5.4.1\"},\"directories\":{},\"dist\":{\"shasum\":\"5f214362f948a085389abf34a78d8b5eef0b1350\",\"tarball\":\"http://registry.npmjs.org/yargs-parser/-/yargs-parser-2.1.0.tgz\"},\"gitHead\":\"78f49ffde9a3305facb66b2faeae862b33d0745e\",\"homepage\":\"https://github.com/yargs/yargs-parser#readme\",\"keywords\":[\"argument\",\"parser\",\"yargs\",\"command\",\"cli\",\"parsing\",\"option\",\"args\",\"argument\"],\"license\":\"ISC\",\"main\":\"index.js\",\"maintainers\":[{\"email\":\"ben@npmjs.com\",\"name\":\"bcoe\"}],\"name\":\"yargs-parser\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"url\":\"git+ssh://git@github.com/yargs/yargs-parser.git\"},\"scripts\":{\"coverage\":\"nyc report --reporter=text-lcov | coveralls\",\"pretest\":\"standard\",\"test\":\"nyc mocha test/*.js\"},\"version\":\"2.1.0\"}");

/***/ }),

/***/ 3660:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_args\":[[\"yargs@^4.1.0\",\"/Users/gajus/Documents/dev/gajus/bundle-dependencies\"]],\"_from\":\"yargs@>=4.1.0 <5.0.0\",\"_id\":\"yargs@4.1.0\",\"_inCache\":true,\"_installable\":true,\"_location\":\"/yargs\",\"_nodeVersion\":\"3.2.0\",\"_npmOperationalInternal\":{\"host\":\"packages-5-east.internal.npmjs.com\",\"tmp\":\"tmp/yargs-4.1.0.tgz_1455554454146_0.05233815615065396\"},\"_npmUser\":{\"email\":\"ben@npmjs.com\",\"name\":\"bcoe\"},\"_npmVersion\":\"3.3.0\",\"_phantomChildren\":{},\"_requested\":{\"name\":\"yargs\",\"raw\":\"yargs@^4.1.0\",\"rawSpec\":\"^4.1.0\",\"scope\":null,\"spec\":\">=4.1.0 <5.0.0\",\"type\":\"range\"},\"_requiredBy\":[\"/\"],\"_resolved\":\"https://registry.npmjs.org/yargs/-/yargs-4.1.0.tgz\",\"_shasum\":\"035e5ea466ac7fea584b00353e33eae4082b9894\",\"_shrinkwrap\":null,\"_spec\":\"yargs@^4.1.0\",\"_where\":\"/Users/gajus/Documents/dev/gajus/bundle-dependencies\",\"bugs\":{\"url\":\"https://github.com/bcoe/yargs/issues\"},\"dependencies\":{\"camelcase\":\"^2.0.1\",\"cliui\":\"^3.0.3\",\"decamelize\":\"^1.1.1\",\"os-locale\":\"^1.4.0\",\"pkg-conf\":\"^1.1.1\",\"read-pkg-up\":\"^1.0.1\",\"require-main-filename\":\"^1.0.0\",\"string-width\":\"^1.0.1\",\"window-size\":\"^0.2.0\",\"y18n\":\"^3.2.0\",\"yargs-parser\":\"^2.1.0\"},\"description\":\"Light-weight option parsing with an argv hash. No optstrings attached.\",\"devDependencies\":{\"chai\":\"^3.4.1\",\"chalk\":\"^1.1.1\",\"coveralls\":\"^2.11.4\",\"cpr\":\"^1.0.0\",\"es6-promise\":\"^3.0.2\",\"hashish\":\"0.0.4\",\"mocha\":\"^2.4.5\",\"nyc\":\"^5.2.0\",\"rimraf\":\"^2.5.0\",\"standard\":\"^6.0.5\",\"which\":\"^1.1.2\",\"win-spawn\":\"^2.0.0\"},\"directories\":{},\"dist\":{\"shasum\":\"035e5ea466ac7fea584b00353e33eae4082b9894\",\"tarball\":\"http://registry.npmjs.org/yargs/-/yargs-4.1.0.tgz\"},\"engine\":{\"node\":\">=0.10\"},\"files\":[\"index.js\",\"lib\",\"locales\",\"completion.sh.hbs\",\"LICENSE\"],\"gitHead\":\"3808fabcd36645a1c855385e62c31fd5917ee447\",\"homepage\":\"http://yargs.js.org/\",\"keywords\":[\"argument\",\"args\",\"option\",\"parser\",\"parsing\",\"cli\",\"command\"],\"license\":\"MIT\",\"main\":\"./index.js\",\"maintainers\":[{\"email\":\"ben@npmjs.com\",\"name\":\"bcoe\"},{\"email\":\"alex.ford@codetunnel.com\",\"name\":\"chevex\"},{\"email\":\"andrew@npmjs.com\",\"name\":\"nexdrew\"},{\"email\":\"jnylen@gmail.com\",\"name\":\"nylen\"}],\"name\":\"yargs\",\"optionalDependencies\":{},\"readme\":\"ERROR: No README data found!\",\"repository\":{\"type\":\"git\",\"url\":\"git+ssh://git@github.com/bcoe/yargs.git\"},\"scripts\":{\"coverage\":\"nyc report --reporter=text-lcov | coveralls\",\"pretest\":\"standard\",\"test\":\"nyc --cache mocha --require ./test/before.js --timeout=4000 --check-leaks\"},\"standard\":{\"ignore\":[\"**/example/**\"]},\"version\":\"4.1.0\"}");

/***/ }),

/***/ 9147:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"bundle-dependencies\",\"description\":\"Generates bundledDependencies package.json value using values of the dependencies property.\",\"version\":\"1.0.2\",\"main\":\"./dist/index.js\",\"bin\":\"./dist/bin/index.js\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/gajus/bundle-dependencies\"},\"keywords\":[\"npm\",\"bundle\",\"dependencies\"],\"author\":{\"name\":\"Gajus Kuizinas\",\"email\":\"gajus@gajus.com\",\"url\":\"http://gajus.com\"},\"license\":\"BSD-3-Clause\",\"scripts\":{\"pragmatist\":\"pragmatist --es5\",\"lint\":\"npm run pragmatist lint\",\"test\":\"\",\"build\":\"npm run pragmatist build\",\"watch\":\"npm run pragmatist watch\",\"watch-lint\":\"npm run pragmatist watch-lint\",\"watch-test\":\"\",\"watch-build\":\"npm run pragmatist watch-build\"},\"dependencies\":{\"yargs\":\"^4.1.0\"},\"devDependencies\":{\"pragmatist\":\"^3.0.9\"},\"bundledDependencies\":[\"yargs\"]}");

/***/ }),

/***/ 5621:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"call-me-maybe\",\"version\":\"1.0.2\",\"description\":\"Let your JS API users either give you a callback or receive a promise\",\"main\":\"src/maybe.js\",\"files\":[\"src\"],\"devDependencies\":{\"@commitlint/config-conventional\":\"^17.1.0\",\"browserify\":\"^17.0.0\",\"commitlint\":\"^17.1.2\",\"husky\":\"^7.0.0\",\"is-ci\":\"^3.0.1\",\"karma\":\"^6.4.1\",\"karma-browserify\":\"^8.1.0\",\"karma-browserstack-launcher\":\"^1.6.0\",\"karma-mocha\":\"^2.0.1\",\"mocha\":\"^2.3.2\",\"promise\":\"^7.0.4\",\"semantic-release\":\"^19.0.5\"},\"scripts\":{\"test\":\"mocha\",\"prepare\":\"is-ci || husky install\",\"test-browsers\":\"karma start\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/limulus/call-me-maybe.git\"},\"keywords\":[\"promise\",\"callback\",\"denodeify\",\"promisify\",\"carlyraejepsen\"],\"author\":\"Eric McCarthy <eric@limulus.net> (http://www.limulus.net/)\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/limulus/call-me-maybe/issues\"},\"homepage\":\"https://github.com/limulus/call-me-maybe#readme\"}");

/***/ }),

/***/ 8871:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"callsites\",\"version\":\"3.1.0\",\"description\":\"Get callsites from the V8 stack trace API\",\"license\":\"MIT\",\"repository\":\"sindresorhus/callsites\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=6\"},\"scripts\":{\"test\":\"xo && ava && tsd\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"stacktrace\",\"v8\",\"callsite\",\"callsites\",\"stack\",\"trace\",\"function\",\"file\",\"line\",\"debug\"],\"devDependencies\":{\"ava\":\"^1.4.1\",\"tsd\":\"^0.7.2\",\"xo\":\"^0.24.0\"}}");

/***/ }),

/***/ 4941:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"caniuse-lite\",\"version\":\"1.0.30001503\",\"description\":\"A smaller version of caniuse-db, with only the essentials!\",\"main\":\"dist/unpacker/index.js\",\"files\":[\"data\",\"dist\"],\"keywords\":[\"support\"],\"author\":{\"name\":\"Ben Briggs\",\"email\":\"beneb.info@gmail.com\",\"url\":\"http://beneb.info\"},\"repository\":\"browserslist/caniuse-lite\",\"funding\":[{\"type\":\"opencollective\",\"url\":\"https://opencollective.com/browserslist\"},{\"type\":\"tidelift\",\"url\":\"https://tidelift.com/funding/github/npm/caniuse-lite\"},{\"type\":\"github\",\"url\":\"https://github.com/sponsors/ai\"}],\"license\":\"CC-BY-4.0\"}");

/***/ }),

/***/ 9680:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"chalk\",\"version\":\"2.4.2\",\"description\":\"Terminal string styling done right\",\"license\":\"MIT\",\"repository\":\"chalk/chalk\",\"engines\":{\"node\":\">=4\"},\"scripts\":{\"test\":\"xo && tsc --project types && flow --max-warnings=0 && nyc ava\",\"bench\":\"matcha benchmark.js\",\"coveralls\":\"nyc report --reporter=text-lcov | coveralls\"},\"files\":[\"index.js\",\"templates.js\",\"types/index.d.ts\",\"index.js.flow\"],\"keywords\":[\"color\",\"colour\",\"colors\",\"terminal\",\"console\",\"cli\",\"string\",\"str\",\"ansi\",\"style\",\"styles\",\"tty\",\"formatting\",\"rgb\",\"256\",\"shell\",\"xterm\",\"log\",\"logging\",\"command-line\",\"text\"],\"dependencies\":{\"ansi-styles\":\"^3.2.1\",\"escape-string-regexp\":\"^1.0.5\",\"supports-color\":\"^5.3.0\"},\"devDependencies\":{\"ava\":\"*\",\"coveralls\":\"^3.0.0\",\"execa\":\"^0.9.0\",\"flow-bin\":\"^0.68.0\",\"import-fresh\":\"^2.0.0\",\"matcha\":\"^0.7.0\",\"nyc\":\"^11.0.2\",\"resolve-from\":\"^4.0.0\",\"typescript\":\"^2.5.3\",\"xo\":\"*\"},\"types\":\"types/index.d.ts\",\"xo\":{\"envs\":[\"node\",\"mocha\"],\"ignores\":[\"test/_flow.js\"]}}");

/***/ }),

/***/ 5276:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"chardet\",\"version\":\"0.7.0\",\"homepage\":\"https://github.com/runk/node-chardet\",\"description\":\"Character detector\",\"keywords\":[\"encoding\",\"character\",\"utf8\",\"detector\",\"chardet\",\"icu\"],\"author\":\"Dmitry Shirokov <deadrunk@gmail.com>\",\"contributors\":[\"@spikying\",\"@wtgtybhertgeghgtwtg\",\"@suisho\",\"@seangarner\",\"@zevanty\"],\"devDependencies\":{\"github-publish-release\":\"^5.0.0\",\"mocha\":\"^5.2.0\"},\"repository\":{\"type\":\"git\",\"url\":\"git@github.com:runk/node-chardet.git\"},\"bugs\":{\"mail\":\"deadrunk@gmail.com\",\"url\":\"http://github.com/runk/node-chardet/issues\"},\"scripts\":{\"test\":\"mocha -R spec --recursive --bail\",\"release\":\"scripts/release\"},\"main\":\"index.js\",\"engine\":{\"node\":\">=4\"},\"readmeFilename\":\"README.md\",\"directories\":{\"test\":\"test\"},\"license\":\"MIT\"}");

/***/ }),

/***/ 2980:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"cli-cursor\",\"version\":\"3.1.0\",\"description\":\"Toggle the CLI cursor\",\"license\":\"MIT\",\"repository\":\"sindresorhus/cli-cursor\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava && tsd\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"cli\",\"cursor\",\"ansi\",\"toggle\",\"display\",\"show\",\"hide\",\"term\",\"terminal\",\"console\",\"tty\",\"shell\",\"command-line\"],\"dependencies\":{\"restore-cursor\":\"^3.1.0\"},\"devDependencies\":{\"@types/node\":\"^12.0.7\",\"ava\":\"^2.1.0\",\"tsd\":\"^0.7.2\",\"xo\":\"^0.24.0\"}}");

/***/ }),

/***/ 9134:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"cli-width\",\"version\":\"3.0.0\",\"description\":\"Get stdout window width, with two fallbacks, tty and then a default.\",\"main\":\"index.js\",\"scripts\":{\"test\":\"node test | tspec\",\"coverage\":\"nyc node test | tspec\",\"coveralls\":\"npm run coverage -s && coveralls < coverage/lcov.info\",\"release\":\"standard-version\"},\"repository\":{\"type\":\"git\",\"url\":\"git@github.com:knownasilya/cli-width.git\"},\"author\":\"Ilya Radchenko <knownasilya@gmail.com>\",\"license\":\"ISC\",\"bugs\":{\"url\":\"https://github.com/knownasilya/cli-width/issues\"},\"homepage\":\"https://github.com/knownasilya/cli-width\",\"engines\":{\"node\":\">= 10\"},\"devDependencies\":{\"coveralls\":\"^3.0.11\",\"nyc\":\"^15.0.1\",\"standard-version\":\"^7.1.0\",\"tap-spec\":\"^5.0.0\",\"tape\":\"^4.13.2\"}}");

/***/ }),

/***/ 5116:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"color-convert\",\"description\":\"Plain color conversion functions\",\"version\":\"1.9.3\",\"author\":\"Heather Arthur <fayearthur@gmail.com>\",\"license\":\"MIT\",\"repository\":\"Qix-/color-convert\",\"scripts\":{\"pretest\":\"xo\",\"test\":\"node test/basic.js\"},\"keywords\":[\"color\",\"colour\",\"convert\",\"converter\",\"conversion\",\"rgb\",\"hsl\",\"hsv\",\"hwb\",\"cmyk\",\"ansi\",\"ansi16\"],\"files\":[\"index.js\",\"conversions.js\",\"css-keywords.js\",\"route.js\"],\"xo\":{\"rules\":{\"default-case\":0,\"no-inline-comments\":0,\"operator-linebreak\":0}},\"devDependencies\":{\"chalk\":\"1.1.1\",\"xo\":\"0.11.2\"},\"dependencies\":{\"color-name\":\"1.1.3\"}}");

/***/ }),

/***/ 9780:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"color-name\",\"version\":\"1.1.3\",\"description\":\"A list of color names and its values\",\"main\":\"index.js\",\"scripts\":{\"test\":\"node test.js\"},\"repository\":{\"type\":\"git\",\"url\":\"git@github.com:dfcreative/color-name.git\"},\"keywords\":[\"color-name\",\"color\",\"color-keyword\",\"keyword\"],\"author\":\"DY <dfcreative@gmail.com>\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/dfcreative/color-name/issues\"},\"homepage\":\"https://github.com/dfcreative/color-name\"}");

/***/ }),

/***/ 8372:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"command-line-args\",\"version\":\"5.2.1\",\"description\":\"A mature, feature-complete library to parse command-line options.\",\"repository\":\"https://github.com/75lb/command-line-args\",\"scripts\":{\"test\":\"npm run dist && npm run test:js && npm run test:mjs\",\"test:js\":\"node dist/tests.js\",\"test:mjs\":\"node --experimental-modules test/tests.mjs\",\"test:ci\":\"npm run test:js\",\"docs\":\"jsdoc2md -c jsdoc.conf index.mjs > doc/API.md && jsdoc2md -c jsdoc.conf lib/option-definition.mjs > doc/option-definition.md\",\"cover\":\"nyc --reporter=text-lcov test-runner test/*.js test/internals/*.js | coveralls\",\"dist\":\"rollup index.mjs -f cjs -e 'lodash.camelcase' -o dist/index.js && rollup index.mjs -f esm -e 'lodash.camelcase' -o dist/index.mjs && rollup test/tests.mjs -f cjs -e 'test-runner,assert,lodash.camelcase' -o dist/tests.js\"},\"main\":\"dist/index.js\",\"keywords\":[\"argv\",\"parse\",\"argument\",\"args\",\"option\",\"options\",\"parser\",\"parsing\",\"cli\",\"command\",\"line\"],\"author\":\"Lloyd Brookes <75pound@gmail.com>\",\"license\":\"MIT\",\"engines\":{\"node\":\">=4.0.0\"},\"files\":[\"index.mjs\",\"lib\",\"dist/index.js\",\"dist/index.mjs\"],\"devDependencies\":{\"coveralls\":\"^3.1.1\",\"jsdoc-to-markdown\":\"^7.1.1\",\"rollup\":\"~1.7.4\",\"test-runner\":\"^0.5.1\"},\"dependencies\":{\"array-back\":\"^3.1.0\",\"find-replace\":\"^3.0.0\",\"lodash.camelcase\":\"^4.3.0\",\"typical\":\"^4.0.0\"},\"standard\":{\"ignore\":[\"dist\"],\"envs\":[]}}");

/***/ }),

/***/ 7656:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"concat-map\",\"description\":\"concatenative mapdashery\",\"version\":\"0.0.1\",\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/substack/node-concat-map.git\"},\"main\":\"index.js\",\"keywords\":[\"concat\",\"concatMap\",\"map\",\"functional\",\"higher-order\"],\"directories\":{\"example\":\"example\",\"test\":\"test\"},\"scripts\":{\"test\":\"tape test/*.js\"},\"devDependencies\":{\"tape\":\"~2.4.0\"},\"license\":\"MIT\",\"author\":{\"name\":\"James Halliday\",\"email\":\"mail@substack.net\",\"url\":\"http://substack.net\"},\"testling\":{\"files\":\"test/*.js\",\"browsers\":{\"ie\":[6,7,8,9],\"ff\":[3.5,10,15],\"chrome\":[10,22],\"safari\":[5.1],\"opera\":[12]}}}");

/***/ }),

/***/ 3482:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"convert-source-map\",\"version\":\"1.9.0\",\"description\":\"Converts a source-map from/to  different formats and allows adding/changing properties.\",\"main\":\"index.js\",\"scripts\":{\"test\":\"tap test/*.js --color\"},\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/thlorenz/convert-source-map.git\"},\"homepage\":\"https://github.com/thlorenz/convert-source-map\",\"devDependencies\":{\"inline-source-map\":\"~0.6.2\",\"tap\":\"~9.0.0\"},\"keywords\":[\"convert\",\"sourcemap\",\"source\",\"map\",\"browser\",\"debug\"],\"author\":{\"name\":\"Thorsten Lorenz\",\"email\":\"thlorenz@gmx.de\",\"url\":\"http://thlorenz.com\"},\"license\":\"MIT\",\"engine\":{\"node\":\">=0.6\"},\"files\":[\"index.js\"],\"browser\":{\"fs\":false}}");

/***/ }),

/***/ 698:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"cross-spawn\",\"version\":\"7.0.3\",\"description\":\"Cross platform child_process#spawn and child_process#spawnSync\",\"keywords\":[\"spawn\",\"spawnSync\",\"windows\",\"cross-platform\",\"path-ext\",\"shebang\",\"cmd\",\"execute\"],\"author\":\"André Cruz <andre@moxy.studio>\",\"homepage\":\"https://github.com/moxystudio/node-cross-spawn\",\"repository\":{\"type\":\"git\",\"url\":\"git@github.com:moxystudio/node-cross-spawn.git\"},\"license\":\"MIT\",\"main\":\"index.js\",\"files\":[\"lib\"],\"scripts\":{\"lint\":\"eslint .\",\"test\":\"jest --env node --coverage\",\"prerelease\":\"npm t && npm run lint\",\"release\":\"standard-version\",\"postrelease\":\"git push --follow-tags origin HEAD && npm publish\"},\"husky\":{\"hooks\":{\"commit-msg\":\"commitlint -E HUSKY_GIT_PARAMS\",\"pre-commit\":\"lint-staged\"}},\"lint-staged\":{\"*.js\":[\"eslint --fix\",\"git add\"]},\"commitlint\":{\"extends\":[\"@commitlint/config-conventional\"]},\"dependencies\":{\"path-key\":\"^3.1.0\",\"shebang-command\":\"^2.0.0\",\"which\":\"^2.0.1\"},\"devDependencies\":{\"@commitlint/cli\":\"^8.1.0\",\"@commitlint/config-conventional\":\"^8.1.0\",\"babel-core\":\"^6.26.3\",\"babel-jest\":\"^24.9.0\",\"babel-preset-moxy\":\"^3.1.0\",\"eslint\":\"^5.16.0\",\"eslint-config-moxy\":\"^7.1.0\",\"husky\":\"^3.0.5\",\"jest\":\"^24.9.0\",\"lint-staged\":\"^9.2.5\",\"mkdirp\":\"^0.5.1\",\"rimraf\":\"^3.0.0\",\"standard-version\":\"^7.0.0\"},\"engines\":{\"node\":\">= 8\"}}");

/***/ }),

/***/ 442:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"debug\",\"version\":\"4.3.4\",\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/debug-js/debug.git\"},\"description\":\"Lightweight debugging utility for Node.js and the browser\",\"keywords\":[\"debug\",\"log\",\"debugger\"],\"files\":[\"src\",\"LICENSE\",\"README.md\"],\"author\":\"Josh Junon <josh.junon@protonmail.com>\",\"contributors\":[\"TJ Holowaychuk <tj@vision-media.ca>\",\"Nathan Rajlich <nathan@tootallnate.net> (http://n8.io)\",\"Andrew Rhyne <rhyneandrew@gmail.com>\"],\"license\":\"MIT\",\"scripts\":{\"lint\":\"xo\",\"test\":\"npm run test:node && npm run test:browser && npm run lint\",\"test:node\":\"istanbul cover _mocha -- test.js\",\"test:browser\":\"karma start --single-run\",\"test:coverage\":\"cat ./coverage/lcov.info | coveralls\"},\"dependencies\":{\"ms\":\"2.1.2\"},\"devDependencies\":{\"brfs\":\"^2.0.1\",\"browserify\":\"^16.2.3\",\"coveralls\":\"^3.0.2\",\"istanbul\":\"^0.4.5\",\"karma\":\"^3.1.4\",\"karma-browserify\":\"^6.0.0\",\"karma-chrome-launcher\":\"^2.2.0\",\"karma-mocha\":\"^1.3.0\",\"mocha\":\"^5.2.0\",\"mocha-lcov-reporter\":\"^1.2.0\",\"xo\":\"^0.23.0\"},\"peerDependenciesMeta\":{\"supports-color\":{\"optional\":true}},\"main\":\"./src/index.js\",\"browser\":\"./src/browser.js\",\"engines\":{\"node\":\">=6.0\"}}");

/***/ }),

/***/ 859:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"deep-is\",\"version\":\"0.1.4\",\"description\":\"node's assert.deepEqual algorithm except for NaN being equal to NaN\",\"main\":\"index.js\",\"directories\":{\"lib\":\".\",\"example\":\"example\",\"test\":\"test\"},\"scripts\":{\"test\":\"tape test/*.js\"},\"devDependencies\":{\"tape\":\"~1.0.2\"},\"repository\":{\"type\":\"git\",\"url\":\"http://github.com/thlorenz/deep-is.git\"},\"keywords\":[\"equality\",\"equal\",\"compare\"],\"author\":{\"name\":\"Thorsten Lorenz\",\"email\":\"thlorenz@gmx.de\",\"url\":\"http://thlorenz.com\"},\"license\":\"MIT\",\"testling\":{\"files\":\"test/*.js\",\"browsers\":{\"ie\":[6,7,8,9],\"ff\":[3.5,10,15],\"chrome\":[10,22],\"safari\":[5.1],\"opera\":[12]}}}");

/***/ }),

/***/ 8651:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"detect-indent\",\"version\":\"6.1.0\",\"description\":\"Detect the indentation of code\",\"license\":\"MIT\",\"repository\":\"sindresorhus/detect-indent\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava && tsd\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"indent\",\"indentation\",\"detect\",\"infer\",\"identify\",\"code\",\"string\",\"text\",\"source\",\"space\",\"tab\"],\"devDependencies\":{\"ava\":\"^1.4.1\",\"tsd\":\"^0.7.2\",\"xo\":\"^0.24.0\"},\"xo\":{\"ignores\":[\"fixture\"]}}");

/***/ }),

/***/ 7548:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"detect-newline\",\"version\":\"3.1.0\",\"description\":\"Detect the dominant newline character of a string\",\"license\":\"MIT\",\"repository\":\"sindresorhus/detect-newline\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava && tsd\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"newline\",\"linebreak\",\"line-break\",\"line\",\"lf\",\"crlf\",\"eol\",\"linefeed\",\"character\",\"char\"],\"devDependencies\":{\"ava\":\"^1.4.1\",\"tsd\":\"^0.7.2\",\"xo\":\"^0.24.0\"}}");

/***/ }),

/***/ 4923:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"dir-glob\",\"version\":\"3.0.1\",\"description\":\"Convert directories to glob compatible strings\",\"license\":\"MIT\",\"repository\":\"kevva/dir-glob\",\"author\":{\"name\":\"Kevin Mårtensson\",\"email\":\"kevinmartensson@gmail.com\",\"url\":\"github.com/kevva\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava\"},\"files\":[\"index.js\"],\"keywords\":[\"convert\",\"directory\",\"extensions\",\"files\",\"glob\"],\"dependencies\":{\"path-type\":\"^4.0.0\"},\"devDependencies\":{\"ava\":\"^2.1.0\",\"del\":\"^4.1.1\",\"make-dir\":\"^3.0.0\",\"rimraf\":\"^2.5.0\",\"xo\":\"^0.24.0\"}}");

/***/ }),

/***/ 9516:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"doctrine\",\"description\":\"JSDoc parser\",\"homepage\":\"https://github.com/eslint/doctrine\",\"main\":\"lib/doctrine.js\",\"version\":\"3.0.0\",\"engines\":{\"node\":\">=6.0.0\"},\"directories\":{\"lib\":\"./lib\"},\"files\":[\"lib\"],\"maintainers\":[{\"name\":\"Nicholas C. Zakas\",\"email\":\"nicholas+npm@nczconsulting.com\",\"web\":\"https://www.nczonline.net\"},{\"name\":\"Yusuke Suzuki\",\"email\":\"utatane.tea@gmail.com\",\"web\":\"https://github.com/Constellation\"}],\"repository\":\"eslint/doctrine\",\"devDependencies\":{\"coveralls\":\"^3.0.1\",\"dateformat\":\"^1.0.11\",\"eslint\":\"^1.10.3\",\"eslint-release\":\"^1.0.0\",\"linefix\":\"^0.1.1\",\"mocha\":\"^3.4.2\",\"npm-license\":\"^0.3.1\",\"nyc\":\"^10.3.2\",\"semver\":\"^5.0.3\",\"shelljs\":\"^0.5.3\",\"shelljs-nodecli\":\"^0.1.1\",\"should\":\"^5.0.1\"},\"license\":\"Apache-2.0\",\"scripts\":{\"pretest\":\"npm run lint\",\"test\":\"nyc mocha\",\"coveralls\":\"nyc report --reporter=text-lcov | coveralls\",\"lint\":\"eslint lib/\",\"generate-release\":\"eslint-generate-release\",\"generate-alpharelease\":\"eslint-generate-prerelease alpha\",\"generate-betarelease\":\"eslint-generate-prerelease beta\",\"generate-rcrelease\":\"eslint-generate-prerelease rc\",\"publish-release\":\"eslint-publish-release\"},\"dependencies\":{\"esutils\":\"^2.0.2\"}}");

/***/ }),

/***/ 6211:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"electron-to-chromium\",\"version\":\"1.4.431\",\"description\":\"Provides a list of electron-to-chromium version mappings\",\"main\":\"index.js\",\"files\":[\"versions.js\",\"full-versions.js\",\"chromium-versions.js\",\"full-chromium-versions.js\",\"versions.json\",\"full-versions.json\",\"chromium-versions.json\",\"full-chromium-versions.json\",\"LICENSE\"],\"scripts\":{\"build\":\"node build.mjs\",\"update\":\"node automated-update.js\",\"test\":\"nyc ava --verbose\",\"report\":\"nyc report --reporter=text-lcov > coverage.lcov && codecov\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/kilian/electron-to-chromium/\"},\"keywords\":[\"electron\",\"chrome\",\"chromium\",\"browserslist\",\"browserlist\"],\"author\":\"Kilian Valkhof\",\"license\":\"ISC\",\"devDependencies\":{\"ava\":\"^5.1.1\",\"codecov\":\"^3.8.2\",\"compare-versions\":\"^6.0.0-rc.1\",\"node-fetch\":\"^3.3.0\",\"nyc\":\"^15.1.0\",\"shelljs\":\"^0.8.5\"}}");

/***/ }),

/***/ 9874:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"emoji-regex\",\"version\":\"8.0.0\",\"description\":\"A regular expression to match all Emoji-only symbols as per the Unicode Standard.\",\"homepage\":\"https://mths.be/emoji-regex\",\"main\":\"index.js\",\"types\":\"index.d.ts\",\"keywords\":[\"unicode\",\"regex\",\"regexp\",\"regular expressions\",\"code points\",\"symbols\",\"characters\",\"emoji\"],\"license\":\"MIT\",\"author\":{\"name\":\"Mathias Bynens\",\"url\":\"https://mathiasbynens.be/\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/mathiasbynens/emoji-regex.git\"},\"bugs\":\"https://github.com/mathiasbynens/emoji-regex/issues\",\"files\":[\"LICENSE-MIT.txt\",\"index.js\",\"index.d.ts\",\"text.js\",\"es2015/index.js\",\"es2015/text.js\"],\"scripts\":{\"build\":\"rm -rf -- es2015; babel src -d .; NODE_ENV=es2015 babel src -d ./es2015; node script/inject-sequences.js\",\"test\":\"mocha\",\"test:watch\":\"npm run test -- --watch\"},\"devDependencies\":{\"@babel/cli\":\"^7.2.3\",\"@babel/core\":\"^7.3.4\",\"@babel/plugin-proposal-unicode-property-regex\":\"^7.2.0\",\"@babel/preset-env\":\"^7.3.4\",\"mocha\":\"^6.0.2\",\"regexgen\":\"^1.3.0\",\"unicode-12.0.0\":\"^0.7.9\"}}");

/***/ }),

/***/ 7225:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"enquirer\",\"description\":\"Stylish, intuitive and user-friendly prompt system. Fast and lightweight enough for small projects, powerful and extensible enough for the most advanced use cases.\",\"version\":\"2.3.6\",\"homepage\":\"https://github.com/enquirer/enquirer\",\"author\":\"Jon Schlinkert (https://github.com/jonschlinkert)\",\"contributors\":[\"Brian Woodward (https://twitter.com/doowb)\",\"Jon Schlinkert (http://twitter.com/jonschlinkert)\"],\"repository\":\"enquirer/enquirer\",\"bugs\":{\"url\":\"https://github.com/enquirer/enquirer/issues\"},\"license\":\"MIT\",\"files\":[\"index.js\",\"index.d.ts\",\"lib\"],\"main\":\"index.js\",\"engines\":{\"node\":\">=8.6\"},\"scripts\":{\"test\":\"mocha && tsc -p ./test/types\",\"cover\":\"nyc --reporter=text --reporter=html mocha\"},\"dependencies\":{\"ansi-colors\":\"^4.1.1\"},\"devDependencies\":{\"@types/node\":\"^8\",\"gulp-format-md\":\"^2.0.0\",\"inquirer\":\"^6.2.0\",\"mocha\":\"^5.2.0\",\"nyc\":\"^13.1.0\",\"prompts\":\"^1.2.1\",\"time-require\":\"github:jonschlinkert/time-require\",\"typescript\":\"^3.1.6\"},\"keywords\":[\"answer\",\"answers\",\"ask\",\"base\",\"cli\",\"command\",\"command-line\",\"confirm\",\"enquirer\",\"generator\",\"generate\",\"hyper\",\"input\",\"inquire\",\"inquirer\",\"interface\",\"iterm\",\"javascript\",\"node\",\"nodejs\",\"prompt\",\"prompts\",\"promptly\",\"question\",\"readline\",\"scaffold\",\"scaffolding\",\"scaffolder\",\"stdin\",\"stdout\",\"terminal\",\"tty\",\"ui\",\"yeoman\",\"yo\",\"zsh\"],\"lintDeps\":{\"devDependencies\":{\"files\":{\"patterns\":[\"examples/**/*.js\",\"perf/*.js\",\"recipes/*.js\"]}}},\"verb\":{\"toc\":false,\"layout\":false,\"tasks\":[\"readme\"],\"plugins\":[\"gulp-format-md\"],\"helpers\":[\"./docs/helpers.js\"],\"lint\":{\"reflinks\":true},\"reflinks\":[\"inquirer\",\"prompt-skeleton\"]}}");

/***/ }),

/***/ 6935:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"escalade\",\"version\":\"3.1.1\",\"repository\":\"lukeed/escalade\",\"description\":\"A tiny (183B to 210B) and fast utility to ascend parent directories\",\"module\":\"dist/index.mjs\",\"main\":\"dist/index.js\",\"types\":\"index.d.ts\",\"license\":\"MIT\",\"author\":{\"name\":\"Luke Edwards\",\"email\":\"luke.edwards05@gmail.com\",\"url\":\"https://lukeed.com\"},\"exports\":{\".\":[{\"import\":\"./dist/index.mjs\",\"require\":\"./dist/index.js\"},\"./dist/index.js\"],\"./sync\":[{\"import\":\"./sync/index.mjs\",\"require\":\"./sync/index.js\"},\"./sync/index.js\"]},\"files\":[\"*.d.ts\",\"dist\",\"sync\"],\"modes\":{\"sync\":\"src/sync.js\",\"default\":\"src/async.js\"},\"engines\":{\"node\":\">=6\"},\"scripts\":{\"build\":\"bundt\",\"pretest\":\"npm run build\",\"test\":\"uvu -r esm test -i fixtures\"},\"keywords\":[\"find\",\"parent\",\"parents\",\"directory\",\"search\",\"walk\"],\"devDependencies\":{\"bundt\":\"1.1.1\",\"esm\":\"3.2.25\",\"uvu\":\"0.3.3\"}}");

/***/ }),

/***/ 6838:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"escape-string-regexp\",\"version\":\"1.0.5\",\"description\":\"Escape RegExp special characters\",\"license\":\"MIT\",\"repository\":\"sindresorhus/escape-string-regexp\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"maintainers\":[\"Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)\",\"Joshua Boy Nicolai Appelman <joshua@jbna.nl> (jbna.nl)\"],\"engines\":{\"node\":\">=0.8.0\"},\"scripts\":{\"test\":\"xo && ava\"},\"files\":[\"index.js\"],\"keywords\":[\"escape\",\"regex\",\"regexp\",\"re\",\"regular\",\"expression\",\"string\",\"str\",\"special\",\"characters\"],\"devDependencies\":{\"ava\":\"*\",\"xo\":\"*\"}}");

/***/ }),

/***/ 4717:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"eslint-config-google\",\"version\":\"0.14.0\",\"description\":\"ESLint shareable config for the Google style\",\"license\":\"Apache-2.0\",\"repository\":\"google/eslint-config-google\",\"author\":\"Google\",\"engines\":{\"node\":\">=0.10.0\"},\"scripts\":{\"test\":\"node test/test.js\"},\"files\":[\"index.js\"],\"keywords\":[\"google\",\"code\",\"quality\",\"style\",\"lint\",\"linter\",\"jscs\",\"jshint\",\"jslint\",\"eslint\",\"validate\",\"code style\",\"strict\",\"check\",\"checker\",\"verify\",\"enforce\",\"hint\"],\"devDependencies\":{\"eslint\":\"^5.16.0\"},\"peerDependencies\":{\"eslint\":\">=5.16.0\"}}");

/***/ }),

/***/ 2245:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"eslint-scope\",\"description\":\"ECMAScript scope analyzer for ESLint\",\"homepage\":\"http://github.com/eslint/eslint-scope\",\"main\":\"lib/index.js\",\"version\":\"5.1.1\",\"engines\":{\"node\":\">=8.0.0\"},\"repository\":\"eslint/eslint-scope\",\"bugs\":{\"url\":\"https://github.com/eslint/eslint-scope/issues\"},\"license\":\"BSD-2-Clause\",\"scripts\":{\"test\":\"node Makefile.js test\",\"lint\":\"node Makefile.js lint\",\"generate-release\":\"eslint-generate-release\",\"generate-alpharelease\":\"eslint-generate-prerelease alpha\",\"generate-betarelease\":\"eslint-generate-prerelease beta\",\"generate-rcrelease\":\"eslint-generate-prerelease rc\",\"publish-release\":\"eslint-publish-release\"},\"files\":[\"LICENSE\",\"README.md\",\"lib\"],\"dependencies\":{\"esrecurse\":\"^4.3.0\",\"estraverse\":\"^4.1.1\"},\"devDependencies\":{\"@typescript-eslint/parser\":\"^1.11.0\",\"chai\":\"^4.2.0\",\"eslint\":\"^6.0.1\",\"eslint-config-eslint\":\"^5.0.1\",\"eslint-plugin-node\":\"^9.1.0\",\"eslint-release\":\"^1.0.0\",\"eslint-visitor-keys\":\"^1.2.0\",\"espree\":\"^7.1.0\",\"istanbul\":\"^0.4.5\",\"mocha\":\"^6.1.4\",\"npm-license\":\"^0.3.3\",\"shelljs\":\"^0.8.3\",\"typescript\":\"^3.5.2\"}}");

/***/ }),

/***/ 2583:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"eslint-visitor-keys\",\"version\":\"1.3.0\",\"description\":\"Constants and utilities about visitor keys to traverse AST.\",\"main\":\"lib/index.js\",\"files\":[\"lib\"],\"engines\":{\"node\":\">=4\"},\"dependencies\":{},\"devDependencies\":{\"eslint\":\"^4.7.2\",\"eslint-config-eslint\":\"^4.0.0\",\"eslint-release\":\"^1.0.0\",\"mocha\":\"^3.5.3\",\"nyc\":\"^11.2.1\",\"opener\":\"^1.4.3\"},\"scripts\":{\"lint\":\"eslint lib tests/lib\",\"pretest\":\"npm run -s lint\",\"test\":\"nyc mocha tests/lib\",\"coverage\":\"nyc report --reporter lcov && opener coverage/lcov-report/index.html\",\"generate-release\":\"eslint-generate-release\",\"generate-alpharelease\":\"eslint-generate-prerelease alpha\",\"generate-betarelease\":\"eslint-generate-prerelease beta\",\"generate-rcrelease\":\"eslint-generate-prerelease rc\",\"publish-release\":\"eslint-publish-release\"},\"repository\":\"eslint/eslint-visitor-keys\",\"keywords\":[],\"author\":\"Toru Nagashima (https://github.com/mysticatea)\",\"license\":\"Apache-2.0\",\"bugs\":{\"url\":\"https://github.com/eslint/eslint-visitor-keys/issues\"},\"homepage\":\"https://github.com/eslint/eslint-visitor-keys#readme\"}");

/***/ }),

/***/ 5002:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"eslint-utils\",\"version\":\"2.1.0\",\"description\":\"Utilities for ESLint plugins.\",\"engines\":{\"node\":\">=6\"},\"sideEffects\":false,\"main\":\"index\",\"module\":\"index.mjs\",\"files\":[\"index.*\"],\"dependencies\":{\"eslint-visitor-keys\":\"^1.1.0\"},\"devDependencies\":{\"@mysticatea/eslint-plugin\":\"^12.0.0\",\"codecov\":\"^3.6.1\",\"dot-prop\":\"^4.2.0\",\"eslint\":\"^6.5.1\",\"esm\":\"^3.2.25\",\"espree\":\"^6.1.1\",\"mocha\":\"^6.2.2\",\"npm-run-all\":\"^4.1.5\",\"nyc\":\"^14.1.1\",\"opener\":\"^1.5.1\",\"rimraf\":\"^3.0.0\",\"rollup\":\"^1.25.0\",\"rollup-plugin-sourcemaps\":\"^0.4.2\",\"semver\":\"^7.3.2\",\"vuepress\":\"^1.2.0\",\"warun\":\"^1.0.0\"},\"scripts\":{\"prebuild\":\"npm run -s clean\",\"build\":\"rollup -c\",\"clean\":\"rimraf .nyc_output coverage index.*\",\"codecov\":\"nyc report -r lcovonly && codecov\",\"coverage\":\"opener ./coverage/lcov-report/index.html\",\"docs:build\":\"vuepress build docs\",\"docs:watch\":\"vuepress dev docs\",\"lint\":\"eslint src test\",\"test\":\"run-s lint build test:mocha\",\"test:mocha\":\"nyc mocha --reporter dot \\\"test/*.js\\\"\",\"preversion\":\"npm test && npm run -s build\",\"postversion\":\"git push && git push --tags\",\"prewatch\":\"npm run -s clean\",\"watch\":\"warun \\\"{src,test}/**/*.js\\\" -- npm run -s test:mocha\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/mysticatea/eslint-utils.git\"},\"keywords\":[\"eslint\"],\"author\":\"Toru Nagashima\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/mysticatea/eslint-utils/issues\"},\"homepage\":\"https://github.com/mysticatea/eslint-utils#readme\",\"funding\":\"https://github.com/sponsors/mysticatea\"}");

/***/ }),

/***/ 7491:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"eslint-visitor-keys\",\"version\":\"2.1.0\",\"description\":\"Constants and utilities about visitor keys to traverse AST.\",\"main\":\"lib/index.js\",\"files\":[\"lib\"],\"engines\":{\"node\":\">=10\"},\"dependencies\":{},\"devDependencies\":{\"eslint\":\"^4.7.2\",\"eslint-config-eslint\":\"^4.0.0\",\"eslint-release\":\"^1.0.0\",\"mocha\":\"^3.5.3\",\"nyc\":\"^11.2.1\",\"opener\":\"^1.4.3\"},\"scripts\":{\"lint\":\"eslint lib tests/lib\",\"test\":\"nyc mocha tests/lib\",\"coverage\":\"nyc report --reporter lcov && opener coverage/lcov-report/index.html\",\"generate-release\":\"eslint-generate-release\",\"generate-alpharelease\":\"eslint-generate-prerelease alpha\",\"generate-betarelease\":\"eslint-generate-prerelease beta\",\"generate-rcrelease\":\"eslint-generate-prerelease rc\",\"publish-release\":\"eslint-publish-release\"},\"repository\":\"eslint/eslint-visitor-keys\",\"keywords\":[],\"author\":\"Toru Nagashima (https://github.com/mysticatea)\",\"license\":\"Apache-2.0\",\"bugs\":{\"url\":\"https://github.com/eslint/eslint-visitor-keys/issues\"},\"homepage\":\"https://github.com/eslint/eslint-visitor-keys#readme\"}");

/***/ }),

/***/ 950:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@babel/code-frame\",\"version\":\"7.12.11\",\"description\":\"Generate errors that contain a code frame that point to source locations.\",\"author\":\"Sebastian McKenzie <sebmck@gmail.com>\",\"homepage\":\"https://babeljs.io/\",\"license\":\"MIT\",\"publishConfig\":{\"access\":\"public\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/babel/babel.git\",\"directory\":\"packages/babel-code-frame\"},\"main\":\"lib/index.js\",\"dependencies\":{\"@babel/highlight\":\"^7.10.4\"},\"devDependencies\":{\"@types/chalk\":\"^2.0.0\",\"chalk\":\"^2.0.0\",\"strip-ansi\":\"^4.0.0\"}}");

/***/ }),

/***/ 5937:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"ansi-styles\",\"version\":\"4.3.0\",\"description\":\"ANSI escape codes for styling strings in the terminal\",\"license\":\"MIT\",\"repository\":\"chalk/ansi-styles\",\"funding\":\"https://github.com/chalk/ansi-styles?sponsor=1\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava && tsd\",\"screenshot\":\"svg-term --command='node screenshot' --out=screenshot.svg --padding=3 --width=55 --height=3 --at=1000 --no-cursor\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"ansi\",\"styles\",\"color\",\"colour\",\"colors\",\"terminal\",\"console\",\"cli\",\"string\",\"tty\",\"escape\",\"formatting\",\"rgb\",\"256\",\"shell\",\"xterm\",\"log\",\"logging\",\"command-line\",\"text\"],\"dependencies\":{\"color-convert\":\"^2.0.1\"},\"devDependencies\":{\"@types/color-convert\":\"^1.9.0\",\"ava\":\"^2.3.0\",\"svg-term-cli\":\"^2.1.1\",\"tsd\":\"^0.11.0\",\"xo\":\"^0.25.3\"}}");

/***/ }),

/***/ 8399:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"chalk\",\"version\":\"4.1.2\",\"description\":\"Terminal string styling done right\",\"license\":\"MIT\",\"repository\":\"chalk/chalk\",\"funding\":\"https://github.com/chalk/chalk?sponsor=1\",\"main\":\"source\",\"engines\":{\"node\":\">=10\"},\"scripts\":{\"test\":\"xo && nyc ava && tsd\",\"bench\":\"matcha benchmark.js\"},\"files\":[\"source\",\"index.d.ts\"],\"keywords\":[\"color\",\"colour\",\"colors\",\"terminal\",\"console\",\"cli\",\"string\",\"str\",\"ansi\",\"style\",\"styles\",\"tty\",\"formatting\",\"rgb\",\"256\",\"shell\",\"xterm\",\"log\",\"logging\",\"command-line\",\"text\"],\"dependencies\":{\"ansi-styles\":\"^4.1.0\",\"supports-color\":\"^7.1.0\"},\"devDependencies\":{\"ava\":\"^2.4.0\",\"coveralls\":\"^3.0.7\",\"execa\":\"^4.0.0\",\"import-fresh\":\"^3.1.0\",\"matcha\":\"^0.7.0\",\"nyc\":\"^15.0.0\",\"resolve-from\":\"^5.0.0\",\"tsd\":\"^0.7.4\",\"xo\":\"^0.28.2\"},\"xo\":{\"rules\":{\"unicorn/prefer-string-slice\":\"off\",\"unicorn/prefer-includes\":\"off\",\"@typescript-eslint/member-ordering\":\"off\",\"no-redeclare\":\"off\",\"unicorn/string-content\":\"off\",\"unicorn/better-regex\":\"off\"}}}");

/***/ }),

/***/ 4033:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"color-convert\",\"description\":\"Plain color conversion functions\",\"version\":\"2.0.1\",\"author\":\"Heather Arthur <fayearthur@gmail.com>\",\"license\":\"MIT\",\"repository\":\"Qix-/color-convert\",\"scripts\":{\"pretest\":\"xo\",\"test\":\"node test/basic.js\"},\"engines\":{\"node\":\">=7.0.0\"},\"keywords\":[\"color\",\"colour\",\"convert\",\"converter\",\"conversion\",\"rgb\",\"hsl\",\"hsv\",\"hwb\",\"cmyk\",\"ansi\",\"ansi16\"],\"files\":[\"index.js\",\"conversions.js\",\"route.js\"],\"xo\":{\"rules\":{\"default-case\":0,\"no-inline-comments\":0,\"operator-linebreak\":0}},\"devDependencies\":{\"chalk\":\"^2.4.2\",\"xo\":\"^0.24.0\"},\"dependencies\":{\"color-name\":\"~1.1.4\"}}");

/***/ }),

/***/ 3413:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"color-name\",\"version\":\"1.1.4\",\"description\":\"A list of color names and its values\",\"main\":\"index.js\",\"files\":[\"index.js\"],\"scripts\":{\"test\":\"node test.js\"},\"repository\":{\"type\":\"git\",\"url\":\"git@github.com:colorjs/color-name.git\"},\"keywords\":[\"color-name\",\"color\",\"color-keyword\",\"keyword\"],\"author\":\"DY <dfcreative@gmail.com>\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/colorjs/color-name/issues\"},\"homepage\":\"https://github.com/colorjs/color-name\"}");

/***/ }),

/***/ 4693:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"escape-string-regexp\",\"version\":\"4.0.0\",\"description\":\"Escape RegExp special characters\",\"license\":\"MIT\",\"repository\":\"sindresorhus/escape-string-regexp\",\"funding\":\"https://github.com/sponsors/sindresorhus\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"https://sindresorhus.com\"},\"engines\":{\"node\":\">=10\"},\"scripts\":{\"test\":\"xo && ava && tsd\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"escape\",\"regex\",\"regexp\",\"regular\",\"expression\",\"string\",\"special\",\"characters\"],\"devDependencies\":{\"ava\":\"^1.4.1\",\"tsd\":\"^0.11.0\",\"xo\":\"^0.28.3\"}}");

/***/ }),

/***/ 2763:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"globals\",\"version\":\"13.20.0\",\"description\":\"Global identifiers from different JavaScript environments\",\"license\":\"MIT\",\"repository\":\"sindresorhus/globals\",\"funding\":\"https://github.com/sponsors/sindresorhus\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"https://sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava\"},\"files\":[\"index.js\",\"index.d.ts\",\"globals.json\"],\"keywords\":[\"globals\",\"global\",\"identifiers\",\"variables\",\"vars\",\"jshint\",\"eslint\",\"environments\"],\"dependencies\":{\"type-fest\":\"^0.20.2\"},\"devDependencies\":{\"ava\":\"^2.4.0\",\"tsd\":\"^0.14.0\",\"xo\":\"^0.36.1\"},\"xo\":{\"ignores\":[\"get-browser-globals.js\"],\"rules\":{\"node/no-unsupported-features/es-syntax\":\"off\"}},\"tsd\":{\"compilerOptions\":{\"resolveJsonModule\":true}}}");

/***/ }),

/***/ 6291:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"has-flag\",\"version\":\"4.0.0\",\"description\":\"Check if argv has a specific flag\",\"license\":\"MIT\",\"repository\":\"sindresorhus/has-flag\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava && tsd\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"has\",\"check\",\"detect\",\"contains\",\"find\",\"flag\",\"cli\",\"command-line\",\"argv\",\"process\",\"arg\",\"args\",\"argument\",\"arguments\",\"getopt\",\"minimist\",\"optimist\"],\"devDependencies\":{\"ava\":\"^1.4.1\",\"tsd\":\"^0.7.2\",\"xo\":\"^0.24.0\"}}");

/***/ }),

/***/ 8338:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"supports-color\",\"version\":\"7.2.0\",\"description\":\"Detect whether a terminal supports color\",\"license\":\"MIT\",\"repository\":\"chalk/supports-color\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava\"},\"files\":[\"index.js\",\"browser.js\"],\"keywords\":[\"color\",\"colour\",\"colors\",\"terminal\",\"console\",\"cli\",\"ansi\",\"styles\",\"tty\",\"rgb\",\"256\",\"shell\",\"xterm\",\"command-line\",\"support\",\"supports\",\"capability\",\"detect\",\"truecolor\",\"16m\"],\"dependencies\":{\"has-flag\":\"^4.0.0\"},\"devDependencies\":{\"ava\":\"^1.4.1\",\"import-fresh\":\"^3.0.0\",\"xo\":\"^0.24.0\"},\"browser\":\"browser.js\"}");

/***/ }),

/***/ 3269:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"eslint\",\"version\":\"7.32.0\",\"author\":\"Nicholas C. Zakas <nicholas+npm@nczconsulting.com>\",\"description\":\"An AST-based pattern checker for JavaScript.\",\"bin\":{\"eslint\":\"./bin/eslint.js\"},\"main\":\"./lib/api.js\",\"scripts\":{\"test\":\"node Makefile.js test\",\"test:cli\":\"mocha\",\"lint\":\"node Makefile.js lint\",\"fix\":\"node Makefile.js lint -- fix\",\"fuzz\":\"node Makefile.js fuzz\",\"generate-release\":\"node Makefile.js generateRelease\",\"generate-alpharelease\":\"node Makefile.js generatePrerelease -- alpha\",\"generate-betarelease\":\"node Makefile.js generatePrerelease -- beta\",\"generate-rcrelease\":\"node Makefile.js generatePrerelease -- rc\",\"publish-release\":\"node Makefile.js publishRelease\",\"docs\":\"node Makefile.js docs\",\"gensite\":\"node Makefile.js gensite\",\"webpack\":\"node Makefile.js webpack\",\"perf\":\"node Makefile.js perf\"},\"gitHooks\":{\"pre-commit\":\"lint-staged\"},\"lint-staged\":{\"*.js\":\"eslint --fix\",\"*.md\":\"markdownlint\"},\"files\":[\"LICENSE\",\"README.md\",\"bin\",\"conf\",\"lib\",\"messages\"],\"repository\":\"eslint/eslint\",\"funding\":\"https://opencollective.com/eslint\",\"homepage\":\"https://eslint.org\",\"bugs\":\"https://github.com/eslint/eslint/issues/\",\"dependencies\":{\"@babel/code-frame\":\"7.12.11\",\"@eslint/eslintrc\":\"^0.4.3\",\"@humanwhocodes/config-array\":\"^0.5.0\",\"ajv\":\"^6.10.0\",\"chalk\":\"^4.0.0\",\"cross-spawn\":\"^7.0.2\",\"debug\":\"^4.0.1\",\"doctrine\":\"^3.0.0\",\"enquirer\":\"^2.3.5\",\"escape-string-regexp\":\"^4.0.0\",\"eslint-scope\":\"^5.1.1\",\"eslint-utils\":\"^2.1.0\",\"eslint-visitor-keys\":\"^2.0.0\",\"espree\":\"^7.3.1\",\"esquery\":\"^1.4.0\",\"esutils\":\"^2.0.2\",\"fast-deep-equal\":\"^3.1.3\",\"file-entry-cache\":\"^6.0.1\",\"functional-red-black-tree\":\"^1.0.1\",\"glob-parent\":\"^5.1.2\",\"globals\":\"^13.6.0\",\"ignore\":\"^4.0.6\",\"import-fresh\":\"^3.0.0\",\"imurmurhash\":\"^0.1.4\",\"is-glob\":\"^4.0.0\",\"js-yaml\":\"^3.13.1\",\"json-stable-stringify-without-jsonify\":\"^1.0.1\",\"levn\":\"^0.4.1\",\"lodash.merge\":\"^4.6.2\",\"minimatch\":\"^3.0.4\",\"natural-compare\":\"^1.4.0\",\"optionator\":\"^0.9.1\",\"progress\":\"^2.0.0\",\"regexpp\":\"^3.1.0\",\"semver\":\"^7.2.1\",\"strip-ansi\":\"^6.0.0\",\"strip-json-comments\":\"^3.1.0\",\"table\":\"^6.0.9\",\"text-table\":\"^0.2.0\",\"v8-compile-cache\":\"^2.0.3\"},\"devDependencies\":{\"@babel/core\":\"^7.4.3\",\"@babel/preset-env\":\"^7.4.3\",\"babel-loader\":\"^8.0.5\",\"chai\":\"^4.0.1\",\"cheerio\":\"^0.22.0\",\"common-tags\":\"^1.8.0\",\"core-js\":\"^3.1.3\",\"dateformat\":\"^3.0.3\",\"ejs\":\"^3.0.2\",\"eslint\":\"file:.\",\"eslint-config-eslint\":\"file:packages/eslint-config-eslint\",\"eslint-plugin-eslint-plugin\":\"^3.5.3\",\"eslint-plugin-internal-rules\":\"file:tools/internal-rules\",\"eslint-plugin-jsdoc\":\"^25.4.3\",\"eslint-plugin-node\":\"^11.1.0\",\"eslint-release\":\"^2.0.0\",\"eslump\":\"^3.0.0\",\"esprima\":\"^4.0.1\",\"fs-teardown\":\"0.1.1\",\"glob\":\"^7.1.6\",\"jsdoc\":\"^3.5.5\",\"karma\":\"^6.1.1\",\"karma-chrome-launcher\":\"^3.1.0\",\"karma-mocha\":\"^2.0.1\",\"karma-mocha-reporter\":\"^2.2.5\",\"karma-webpack\":\"^5.0.0\",\"lint-staged\":\"^10.1.2\",\"load-perf\":\"^0.2.0\",\"markdownlint\":\"^0.19.0\",\"markdownlint-cli\":\"^0.22.0\",\"memfs\":\"^3.0.1\",\"mocha\":\"^8.3.2\",\"mocha-junit-reporter\":\"^2.0.0\",\"node-polyfill-webpack-plugin\":\"^1.0.3\",\"npm-license\":\"^0.3.3\",\"nyc\":\"^15.0.1\",\"proxyquire\":\"^2.0.1\",\"puppeteer\":\"^7.1.0\",\"recast\":\"^0.19.0\",\"regenerator-runtime\":\"^0.13.2\",\"shelljs\":\"^0.8.2\",\"sinon\":\"^9.0.1\",\"temp\":\"^0.9.0\",\"webpack\":\"^5.23.0\",\"webpack-cli\":\"^4.5.0\",\"yorkie\":\"^2.0.0\"},\"keywords\":[\"ast\",\"lint\",\"javascript\",\"ecmascript\",\"espree\"],\"license\":\"MIT\",\"engines\":{\"node\":\"^10.12.0 || >=12.0.0\"}}");

/***/ }),

/***/ 5633:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"eslint-visitor-keys\",\"version\":\"1.3.0\",\"description\":\"Constants and utilities about visitor keys to traverse AST.\",\"main\":\"lib/index.js\",\"files\":[\"lib\"],\"engines\":{\"node\":\">=4\"},\"dependencies\":{},\"devDependencies\":{\"eslint\":\"^4.7.2\",\"eslint-config-eslint\":\"^4.0.0\",\"eslint-release\":\"^1.0.0\",\"mocha\":\"^3.5.3\",\"nyc\":\"^11.2.1\",\"opener\":\"^1.4.3\"},\"scripts\":{\"lint\":\"eslint lib tests/lib\",\"pretest\":\"npm run -s lint\",\"test\":\"nyc mocha tests/lib\",\"coverage\":\"nyc report --reporter lcov && opener coverage/lcov-report/index.html\",\"generate-release\":\"eslint-generate-release\",\"generate-alpharelease\":\"eslint-generate-prerelease alpha\",\"generate-betarelease\":\"eslint-generate-prerelease beta\",\"generate-rcrelease\":\"eslint-generate-prerelease rc\",\"publish-release\":\"eslint-publish-release\"},\"repository\":\"eslint/eslint-visitor-keys\",\"keywords\":[],\"author\":\"Toru Nagashima (https://github.com/mysticatea)\",\"license\":\"Apache-2.0\",\"bugs\":{\"url\":\"https://github.com/eslint/eslint-visitor-keys/issues\"},\"homepage\":\"https://github.com/eslint/eslint-visitor-keys#readme\"}");

/***/ }),

/***/ 2598:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"espree\",\"description\":\"An Esprima-compatible JavaScript parser built on Acorn\",\"author\":\"Nicholas C. Zakas <nicholas+npm@nczconsulting.com>\",\"homepage\":\"https://github.com/eslint/espree\",\"main\":\"espree.js\",\"version\":\"7.3.1\",\"files\":[\"lib\",\"espree.js\"],\"engines\":{\"node\":\"^10.12.0 || >=12.0.0\"},\"repository\":\"eslint/espree\",\"bugs\":{\"url\":\"http://github.com/eslint/espree.git\"},\"license\":\"BSD-2-Clause\",\"dependencies\":{\"acorn\":\"^7.4.0\",\"acorn-jsx\":\"^5.3.1\",\"eslint-visitor-keys\":\"^1.3.0\"},\"devDependencies\":{\"browserify\":\"^16.5.0\",\"chai\":\"^4.2.0\",\"eslint\":\"^6.0.1\",\"eslint-config-eslint\":\"^5.0.1\",\"eslint-plugin-node\":\"^9.1.0\",\"eslint-release\":\"^1.0.0\",\"esprima\":\"latest\",\"esprima-fb\":\"^8001.2001.0-dev-harmony-fb\",\"json-diff\":\"^0.5.4\",\"leche\":\"^2.3.0\",\"mocha\":\"^6.2.0\",\"nyc\":\"^14.1.1\",\"regenerate\":\"^1.4.0\",\"shelljs\":\"^0.3.0\",\"shelljs-nodecli\":\"^0.1.1\",\"unicode-6.3.0\":\"^0.7.5\"},\"keywords\":[\"ast\",\"ecmascript\",\"javascript\",\"parser\",\"syntax\",\"acorn\"],\"scripts\":{\"generate-regex\":\"node tools/generate-identifier-regex.js\",\"test\":\"npm run-script lint && node Makefile.js test\",\"lint\":\"node Makefile.js lint\",\"fixlint\":\"node Makefile.js lint --fix\",\"sync-docs\":\"node Makefile.js docs\",\"browserify\":\"node Makefile.js browserify\",\"generate-release\":\"eslint-generate-release\",\"generate-alpharelease\":\"eslint-generate-prerelease alpha\",\"generate-betarelease\":\"eslint-generate-prerelease beta\",\"generate-rcrelease\":\"eslint-generate-prerelease rc\",\"publish-release\":\"eslint-publish-release\"}}");

/***/ }),

/***/ 126:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"esprima\",\"description\":\"ECMAScript parsing infrastructure for multipurpose analysis\",\"homepage\":\"http://esprima.org\",\"main\":\"dist/esprima.js\",\"bin\":{\"esparse\":\"./bin/esparse.js\",\"esvalidate\":\"./bin/esvalidate.js\"},\"version\":\"4.0.1\",\"files\":[\"bin\",\"dist/esprima.js\"],\"engines\":{\"node\":\">=4\"},\"author\":{\"name\":\"Ariya Hidayat\",\"email\":\"ariya.hidayat@gmail.com\"},\"maintainers\":[{\"name\":\"Ariya Hidayat\",\"email\":\"ariya.hidayat@gmail.com\",\"web\":\"http://ariya.ofilabs.com\"}],\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/jquery/esprima.git\"},\"bugs\":{\"url\":\"https://github.com/jquery/esprima/issues\"},\"license\":\"BSD-2-Clause\",\"devDependencies\":{\"codecov.io\":\"~0.1.6\",\"escomplex-js\":\"1.2.0\",\"everything.js\":\"~1.0.3\",\"glob\":\"~7.1.0\",\"istanbul\":\"~0.4.0\",\"json-diff\":\"~0.3.1\",\"karma\":\"~1.3.0\",\"karma-chrome-launcher\":\"~2.0.0\",\"karma-detect-browsers\":\"~2.2.3\",\"karma-edge-launcher\":\"~0.2.0\",\"karma-firefox-launcher\":\"~1.0.0\",\"karma-ie-launcher\":\"~1.0.0\",\"karma-mocha\":\"~1.3.0\",\"karma-safari-launcher\":\"~1.0.0\",\"karma-safaritechpreview-launcher\":\"~0.0.4\",\"karma-sauce-launcher\":\"~1.1.0\",\"lodash\":\"~3.10.1\",\"mocha\":\"~3.2.0\",\"node-tick-processor\":\"~0.0.2\",\"regenerate\":\"~1.3.2\",\"temp\":\"~0.8.3\",\"tslint\":\"~5.1.0\",\"typescript\":\"~2.3.2\",\"typescript-formatter\":\"~5.1.3\",\"unicode-8.0.0\":\"~0.7.0\",\"webpack\":\"~1.14.0\"},\"keywords\":[\"ast\",\"ecmascript\",\"esprima\",\"javascript\",\"parser\",\"syntax\"],\"scripts\":{\"check-version\":\"node test/check-version.js\",\"tslint\":\"tslint src/*.ts\",\"code-style\":\"tsfmt --verify src/*.ts && tsfmt --verify test/*.js\",\"format-code\":\"tsfmt -r src/*.ts && tsfmt -r test/*.js\",\"complexity\":\"node test/check-complexity.js\",\"static-analysis\":\"npm run check-version && npm run tslint && npm run code-style && npm run complexity\",\"hostile-env-tests\":\"node test/hostile-environment-tests.js\",\"unit-tests\":\"node test/unit-tests.js\",\"api-tests\":\"mocha -R dot test/api-tests.js\",\"grammar-tests\":\"node test/grammar-tests.js\",\"regression-tests\":\"node test/regression-tests.js\",\"all-tests\":\"npm run verify-line-ending && npm run generate-fixtures && npm run unit-tests && npm run api-tests && npm run grammar-tests && npm run regression-tests && npm run hostile-env-tests\",\"verify-line-ending\":\"node test/verify-line-ending.js\",\"generate-fixtures\":\"node tools/generate-fixtures.js\",\"browser-tests\":\"npm run compile && npm run generate-fixtures && cd test && karma start --single-run\",\"saucelabs-evergreen\":\"cd test && karma start saucelabs-evergreen.conf.js\",\"saucelabs-safari\":\"cd test && karma start saucelabs-safari.conf.js\",\"saucelabs-ie\":\"cd test && karma start saucelabs-ie.conf.js\",\"saucelabs\":\"npm run saucelabs-evergreen && npm run saucelabs-ie && npm run saucelabs-safari\",\"analyze-coverage\":\"istanbul cover test/unit-tests.js\",\"check-coverage\":\"istanbul check-coverage --statement 100 --branch 100 --function 100\",\"dynamic-analysis\":\"npm run analyze-coverage && npm run check-coverage\",\"compile\":\"tsc -p src/ && webpack && node tools/fixupbundle.js\",\"test\":\"npm run compile && npm run all-tests && npm run static-analysis && npm run dynamic-analysis\",\"prepublish\":\"npm run compile\",\"profile\":\"node --prof test/profile.js && mv isolate*.log v8.log && node-tick-processor\",\"benchmark-parser\":\"node -expose_gc test/benchmark-parser.js\",\"benchmark-tokenizer\":\"node --expose_gc test/benchmark-tokenizer.js\",\"benchmark\":\"npm run benchmark-parser && npm run benchmark-tokenizer\",\"codecov\":\"istanbul report cobertura && codecov < ./coverage/cobertura-coverage.xml\",\"downstream\":\"node test/downstream.js\",\"travis\":\"npm test\",\"circleci\":\"npm test && npm run codecov && npm run downstream\",\"appveyor\":\"npm run compile && npm run all-tests && npm run browser-tests\",\"droneio\":\"npm run compile && npm run all-tests && npm run saucelabs\",\"generate-regex\":\"node tools/generate-identifier-regex.js\",\"generate-xhtml-entities\":\"node tools/generate-xhtml-entities.js\"}}");

/***/ }),

/***/ 6734:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"estraverse\",\"description\":\"ECMAScript JS AST traversal functions\",\"homepage\":\"https://github.com/estools/estraverse\",\"main\":\"estraverse.js\",\"version\":\"5.3.0\",\"engines\":{\"node\":\">=4.0\"},\"maintainers\":[{\"name\":\"Yusuke Suzuki\",\"email\":\"utatane.tea@gmail.com\",\"web\":\"http://github.com/Constellation\"}],\"repository\":{\"type\":\"git\",\"url\":\"http://github.com/estools/estraverse.git\"},\"devDependencies\":{\"babel-preset-env\":\"^1.6.1\",\"babel-register\":\"^6.3.13\",\"chai\":\"^2.1.1\",\"espree\":\"^1.11.0\",\"gulp\":\"^3.8.10\",\"gulp-bump\":\"^0.2.2\",\"gulp-filter\":\"^2.0.0\",\"gulp-git\":\"^1.0.1\",\"gulp-tag-version\":\"^1.3.0\",\"jshint\":\"^2.5.6\",\"mocha\":\"^2.1.0\"},\"license\":\"BSD-2-Clause\",\"scripts\":{\"test\":\"npm run-script lint && npm run-script unit-test\",\"lint\":\"jshint estraverse.js\",\"unit-test\":\"mocha --compilers js:babel-register\"}}");

/***/ }),

/***/ 1396:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"esquery\",\"version\":\"1.5.0\",\"author\":\"Joel Feenstra <jrfeenst+esquery@gmail.com>\",\"contributors\":[],\"description\":\"A query library for ECMAScript AST using a CSS selector like query language.\",\"main\":\"dist/esquery.min.js\",\"module\":\"dist/esquery.esm.min.js\",\"files\":[\"dist/*.js\",\"dist/*.map\",\"parser.js\",\"license.txt\",\"README.md\"],\"nyc\":{\"branches\":100,\"lines\":100,\"functions\":100,\"statements\":100,\"reporter\":[\"html\",\"text\"],\"exclude\":[\"parser.js\",\"dist\",\"tests\"]},\"scripts\":{\"prepublishOnly\":\"npm run build && npm test\",\"build:parser\":\"rm parser.js && pegjs --cache --format umd -o \\\"parser.js\\\" \\\"grammar.pegjs\\\"\",\"build:browser\":\"rollup -c\",\"build\":\"npm run build:parser && npm run build:browser\",\"mocha\":\"mocha --require chai/register-assert --require @babel/register tests\",\"test\":\"nyc npm run mocha && npm run lint\",\"test:ci\":\"npm run mocha\",\"lint\":\"eslint .\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/estools/esquery.git\"},\"bugs\":\"https://github.com/estools/esquery/issues\",\"homepage\":\"https://github.com/estools/esquery/\",\"keywords\":[\"ast\",\"ecmascript\",\"javascript\",\"query\"],\"devDependencies\":{\"@babel/core\":\"^7.9.0\",\"@babel/preset-env\":\"^7.9.5\",\"@babel/register\":\"^7.9.0\",\"@rollup/plugin-commonjs\":\"^11.1.0\",\"@rollup/plugin-json\":\"^4.0.2\",\"@rollup/plugin-node-resolve\":\"^7.1.3\",\"babel-plugin-transform-es2017-object-entries\":\"0.0.5\",\"chai\":\"4.2.0\",\"eslint\":\"^6.8.0\",\"esprima\":\"~4.0.1\",\"mocha\":\"7.1.1\",\"nyc\":\"^15.0.1\",\"pegjs\":\"~0.10.0\",\"rollup\":\"^1.32.1\",\"rollup-plugin-babel\":\"^4.4.0\",\"rollup-plugin-terser\":\"^5.3.0\"},\"license\":\"BSD-3-Clause\",\"engines\":{\"node\":\">=0.10\"},\"dependencies\":{\"estraverse\":\"^5.1.0\"}}");

/***/ }),

/***/ 8376:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"estraverse\",\"description\":\"ECMAScript JS AST traversal functions\",\"homepage\":\"https://github.com/estools/estraverse\",\"main\":\"estraverse.js\",\"version\":\"5.3.0\",\"engines\":{\"node\":\">=4.0\"},\"maintainers\":[{\"name\":\"Yusuke Suzuki\",\"email\":\"utatane.tea@gmail.com\",\"web\":\"http://github.com/Constellation\"}],\"repository\":{\"type\":\"git\",\"url\":\"http://github.com/estools/estraverse.git\"},\"devDependencies\":{\"babel-preset-env\":\"^1.6.1\",\"babel-register\":\"^6.3.13\",\"chai\":\"^2.1.1\",\"espree\":\"^1.11.0\",\"gulp\":\"^3.8.10\",\"gulp-bump\":\"^0.2.2\",\"gulp-filter\":\"^2.0.0\",\"gulp-git\":\"^1.0.1\",\"gulp-tag-version\":\"^1.3.0\",\"jshint\":\"^2.5.6\",\"mocha\":\"^2.1.0\"},\"license\":\"BSD-2-Clause\",\"scripts\":{\"test\":\"npm run-script lint && npm run-script unit-test\",\"lint\":\"jshint estraverse.js\",\"unit-test\":\"mocha --compilers js:babel-register\"}}");

/***/ }),

/***/ 8492:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"esrecurse\",\"description\":\"ECMAScript AST recursive visitor\",\"homepage\":\"https://github.com/estools/esrecurse\",\"main\":\"esrecurse.js\",\"version\":\"4.3.0\",\"engines\":{\"node\":\">=4.0\"},\"maintainers\":[{\"name\":\"Yusuke Suzuki\",\"email\":\"utatane.tea@gmail.com\",\"web\":\"https://github.com/Constellation\"}],\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/estools/esrecurse.git\"},\"dependencies\":{\"estraverse\":\"^5.2.0\"},\"devDependencies\":{\"babel-cli\":\"^6.24.1\",\"babel-eslint\":\"^7.2.3\",\"babel-preset-es2015\":\"^6.24.1\",\"babel-register\":\"^6.24.1\",\"chai\":\"^4.0.2\",\"esprima\":\"^4.0.0\",\"gulp\":\"^3.9.0\",\"gulp-bump\":\"^2.7.0\",\"gulp-eslint\":\"^4.0.0\",\"gulp-filter\":\"^5.0.0\",\"gulp-git\":\"^2.4.1\",\"gulp-mocha\":\"^4.3.1\",\"gulp-tag-version\":\"^1.2.1\",\"jsdoc\":\"^3.3.0-alpha10\",\"minimist\":\"^1.1.0\"},\"license\":\"BSD-2-Clause\",\"scripts\":{\"test\":\"gulp travis\",\"unit-test\":\"gulp test\",\"lint\":\"gulp lint\"},\"babel\":{\"presets\":[\"es2015\"]}}");

/***/ }),

/***/ 2788:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"estraverse\",\"description\":\"ECMAScript JS AST traversal functions\",\"homepage\":\"https://github.com/estools/estraverse\",\"main\":\"estraverse.js\",\"version\":\"4.3.0\",\"engines\":{\"node\":\">=4.0\"},\"maintainers\":[{\"name\":\"Yusuke Suzuki\",\"email\":\"utatane.tea@gmail.com\",\"web\":\"http://github.com/Constellation\"}],\"repository\":{\"type\":\"git\",\"url\":\"http://github.com/estools/estraverse.git\"},\"devDependencies\":{\"babel-preset-env\":\"^1.6.1\",\"babel-register\":\"^6.3.13\",\"chai\":\"^2.1.1\",\"espree\":\"^1.11.0\",\"gulp\":\"^3.8.10\",\"gulp-bump\":\"^0.2.2\",\"gulp-filter\":\"^2.0.0\",\"gulp-git\":\"^1.0.1\",\"gulp-tag-version\":\"^1.3.0\",\"jshint\":\"^2.5.6\",\"mocha\":\"^2.1.0\"},\"license\":\"BSD-2-Clause\",\"scripts\":{\"test\":\"npm run-script lint && npm run-script unit-test\",\"lint\":\"jshint estraverse.js\",\"unit-test\":\"mocha --compilers js:babel-register\"}}");

/***/ }),

/***/ 3744:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"esutils\",\"description\":\"utility box for ECMAScript language tools\",\"homepage\":\"https://github.com/estools/esutils\",\"main\":\"lib/utils.js\",\"version\":\"2.0.3\",\"engines\":{\"node\":\">=0.10.0\"},\"directories\":{\"lib\":\"./lib\"},\"files\":[\"LICENSE.BSD\",\"README.md\",\"lib\"],\"maintainers\":[{\"name\":\"Yusuke Suzuki\",\"email\":\"utatane.tea@gmail.com\",\"web\":\"http://github.com/Constellation\"}],\"repository\":{\"type\":\"git\",\"url\":\"http://github.com/estools/esutils.git\"},\"devDependencies\":{\"chai\":\"~1.7.2\",\"coffee-script\":\"~1.6.3\",\"jshint\":\"2.6.3\",\"mocha\":\"~2.2.1\",\"regenerate\":\"~1.3.1\",\"unicode-9.0.0\":\"~0.7.0\"},\"license\":\"BSD-2-Clause\",\"scripts\":{\"test\":\"npm run-script lint && npm run-script unit-test\",\"lint\":\"jshint lib/*.js\",\"unit-test\":\"mocha --compilers coffee:coffee-script -R spec\",\"generate-regex\":\"node tools/generate-identifier-regex.js\"}}");

/***/ }),

/***/ 7803:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"external-editor\",\"version\":\"3.1.0\",\"description\":\"Edit a string with the users preferred text editor using $VISUAL or $ENVIRONMENT\",\"main\":\"main/index.js\",\"types\":\"main/index.d.ts\",\"scripts\":{\"test\":\"mocha --recursive --require ts-node/register --timeout 10000 ./test/spec 'test/spec/**/*.ts'\",\"compile\":\"tsc -p tsconfig.json\",\"lint\":\"tslint './src/**/*.ts' './test/**/*.ts'\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/mrkmg/node-external-editor.git\"},\"keywords\":[\"editor\",\"external\",\"user\",\"visual\"],\"author\":\"Kevin Gravier <kevin@mrkmg.com> (https://mrkmg.com)\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/mrkmg/node-external-editor/issues\"},\"homepage\":\"https://github.com/mrkmg/node-external-editor#readme\",\"dependencies\":{\"chardet\":\"^0.7.0\",\"iconv-lite\":\"^0.4.24\",\"tmp\":\"^0.0.33\"},\"engines\":{\"node\":\">=4\"},\"devDependencies\":{\"@types/chai\":\"^4.1.4\",\"@types/chardet\":\"^0.5.0\",\"@types/mocha\":\"^5.2.5\",\"@types/node\":\"^10.14.12\",\"@types/tmp\":\"0.0.33\",\"chai\":\"^4.0.0\",\"es6-shim\":\"^0.35.3\",\"mocha\":\"^5.2.0\",\"ts-node\":\"^7.0.1\",\"tslint\":\"^5.18.0\",\"typescript\":\"^3.5.2\"},\"files\":[\"main\",\"example_sync.js\",\"example_async.js\"],\"config\":{\"ndt\":{\"versions\":[\"major\"]}}}");

/***/ }),

/***/ 1470:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"fast-deep-equal\",\"version\":\"3.1.3\",\"description\":\"Fast deep equal\",\"main\":\"index.js\",\"scripts\":{\"eslint\":\"eslint *.js benchmark/*.js spec/*.js\",\"build\":\"node build\",\"benchmark\":\"npm i && npm run build && cd ./benchmark && npm i && node ./\",\"test-spec\":\"mocha spec/*.spec.js -R spec\",\"test-cov\":\"nyc npm run test-spec\",\"test-ts\":\"tsc --target ES5 --noImplicitAny index.d.ts\",\"test\":\"npm run build && npm run eslint && npm run test-ts && npm run test-cov\",\"prepublish\":\"npm run build\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/epoberezkin/fast-deep-equal.git\"},\"keywords\":[\"fast\",\"equal\",\"deep-equal\"],\"author\":\"Evgeny Poberezkin\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/epoberezkin/fast-deep-equal/issues\"},\"homepage\":\"https://github.com/epoberezkin/fast-deep-equal#readme\",\"devDependencies\":{\"coveralls\":\"^3.1.0\",\"dot\":\"^1.1.2\",\"eslint\":\"^7.2.0\",\"mocha\":\"^7.2.0\",\"nyc\":\"^15.1.0\",\"pre-commit\":\"^1.2.2\",\"react\":\"^16.12.0\",\"react-test-renderer\":\"^16.12.0\",\"sinon\":\"^9.0.2\",\"typescript\":\"^3.9.5\"},\"nyc\":{\"exclude\":[\"**/spec/**\",\"node_modules\"],\"reporter\":[\"lcov\",\"text-summary\"]},\"files\":[\"index.js\",\"index.d.ts\",\"react.js\",\"react.d.ts\",\"es6/\"],\"types\":\"index.d.ts\"}");

/***/ }),

/***/ 6071:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"fast-glob\",\"version\":\"3.2.12\",\"description\":\"It's a very fast and efficient glob library for Node.js\",\"license\":\"MIT\",\"repository\":\"mrmlnc/fast-glob\",\"author\":{\"name\":\"Denis Malinochkin\",\"url\":\"https://mrmlnc.com\"},\"engines\":{\"node\":\">=8.6.0\"},\"main\":\"out/index.js\",\"typings\":\"out/index.d.ts\",\"files\":[\"out\",\"!out/{benchmark,tests}\",\"!out/**/*.map\",\"!out/**/*.spec.*\"],\"keywords\":[\"glob\",\"patterns\",\"fast\",\"implementation\"],\"devDependencies\":{\"@nodelib/fs.macchiato\":\"^1.0.1\",\"@types/compute-stdev\":\"^1.0.0\",\"@types/easy-table\":\"^0.0.32\",\"@types/glob\":\"^7.1.1\",\"@types/glob-parent\":\"^5.1.0\",\"@types/is-ci\":\"^2.0.0\",\"@types/merge2\":\"^1.1.4\",\"@types/micromatch\":\"^4.0.0\",\"@types/minimist\":\"^1.2.0\",\"@types/mocha\":\"^5.2.7\",\"@types/node\":\"^12.7.8\",\"@types/rimraf\":\"^2.0.2\",\"@types/sinon\":\"^7.5.0\",\"compute-stdev\":\"^1.0.0\",\"easy-table\":\"^1.1.1\",\"eslint\":\"^6.5.1\",\"eslint-config-mrmlnc\":\"^1.1.0\",\"execa\":\"^2.0.4\",\"fast-glob\":\"^3.0.4\",\"fdir\":\"^5.1.0\",\"glob\":\"^7.1.4\",\"is-ci\":\"^2.0.0\",\"log-update\":\"^4.0.0\",\"minimist\":\"^1.2.0\",\"mocha\":\"^6.2.1\",\"rimraf\":\"^3.0.0\",\"sinon\":\"^7.5.0\",\"tiny-glob\":\"^0.2.6\",\"typescript\":\"^3.6.3\"},\"dependencies\":{\"@nodelib/fs.stat\":\"^2.0.2\",\"@nodelib/fs.walk\":\"^1.2.3\",\"glob-parent\":\"^5.1.2\",\"merge2\":\"^1.3.0\",\"micromatch\":\"^4.0.4\"},\"scripts\":{\"clean\":\"rimraf out\",\"lint\":\"eslint \\\"src/**/*.ts\\\" --cache\",\"compile\":\"tsc\",\"test\":\"mocha \\\"out/**/*.spec.js\\\" -s 0\",\"smoke\":\"mocha \\\"out/**/*.smoke.js\\\" -s 0\",\"smoke:sync\":\"mocha \\\"out/**/*.smoke.js\\\" -s 0 --grep \\\"\\\\(sync\\\\)\\\"\",\"smoke:async\":\"mocha \\\"out/**/*.smoke.js\\\" -s 0 --grep \\\"\\\\(async\\\\)\\\"\",\"smoke:stream\":\"mocha \\\"out/**/*.smoke.js\\\" -s 0 --grep \\\"\\\\(stream\\\\)\\\"\",\"build\":\"npm run clean && npm run compile && npm run lint && npm test\",\"watch\":\"npm run clean && npm run compile -- --sourceMap --watch\",\"bench\":\"npm run bench-async && npm run bench-stream && npm run bench-sync\",\"bench-async\":\"npm run bench-async-flatten && npm run bench-async-deep && npm run bench-async-partial-flatten && npm run bench-async-partial-deep\",\"bench-stream\":\"npm run bench-stream-flatten && npm run bench-stream-deep && npm run bench-stream-partial-flatten && npm run bench-stream-partial-deep\",\"bench-sync\":\"npm run bench-sync-flatten && npm run bench-sync-deep && npm run bench-sync-partial-flatten && npm run bench-sync-partial-deep\",\"bench-async-flatten\":\"node ./out/benchmark --mode async --pattern \\\"*\\\"\",\"bench-async-deep\":\"node ./out/benchmark --mode async --pattern \\\"**\\\"\",\"bench-async-partial-flatten\":\"node ./out/benchmark --mode async --pattern \\\"{fixtures,out}/{first,second}/*\\\"\",\"bench-async-partial-deep\":\"node ./out/benchmark --mode async --pattern \\\"{fixtures,out}/**\\\"\",\"bench-stream-flatten\":\"node ./out/benchmark --mode stream --pattern \\\"*\\\"\",\"bench-stream-deep\":\"node ./out/benchmark --mode stream --pattern \\\"**\\\"\",\"bench-stream-partial-flatten\":\"node ./out/benchmark --mode stream --pattern \\\"{fixtures,out}/{first,second}/*\\\"\",\"bench-stream-partial-deep\":\"node ./out/benchmark --mode stream --pattern \\\"{fixtures,out}/**\\\"\",\"bench-sync-flatten\":\"node ./out/benchmark --mode sync --pattern \\\"*\\\"\",\"bench-sync-deep\":\"node ./out/benchmark --mode sync --pattern \\\"**\\\"\",\"bench-sync-partial-flatten\":\"node ./out/benchmark --mode sync --pattern \\\"{fixtures,out}/{first,second}/*\\\"\",\"bench-sync-partial-deep\":\"node ./out/benchmark --mode sync --pattern \\\"{fixtures,out}/**\\\"\"}}");

/***/ }),

/***/ 7373:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"fast-json-stable-stringify\",\"version\":\"2.1.0\",\"description\":\"deterministic `JSON.stringify()` - a faster version of substack's json-stable-strigify without jsonify\",\"main\":\"index.js\",\"types\":\"index.d.ts\",\"dependencies\":{},\"devDependencies\":{\"benchmark\":\"^2.1.4\",\"coveralls\":\"^3.0.0\",\"eslint\":\"^6.7.0\",\"fast-stable-stringify\":\"latest\",\"faster-stable-stringify\":\"latest\",\"json-stable-stringify\":\"latest\",\"nyc\":\"^14.1.0\",\"pre-commit\":\"^1.2.2\",\"tape\":\"^4.11.0\"},\"scripts\":{\"eslint\":\"eslint index.js test\",\"test-spec\":\"tape test/*.js\",\"test\":\"npm run eslint && nyc npm run test-spec\"},\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/epoberezkin/fast-json-stable-stringify.git\"},\"homepage\":\"https://github.com/epoberezkin/fast-json-stable-stringify\",\"keywords\":[\"json\",\"stringify\",\"deterministic\",\"hash\",\"stable\"],\"author\":{\"name\":\"James Halliday\",\"email\":\"mail@substack.net\",\"url\":\"http://substack.net\"},\"license\":\"MIT\",\"nyc\":{\"exclude\":[\"test\",\"node_modules\"],\"reporter\":[\"lcov\",\"text-summary\"]}}");

/***/ }),

/***/ 7749:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"fast-levenshtein\",\"version\":\"2.0.6\",\"description\":\"Efficient implementation of Levenshtein algorithm  with locale-specific collator support.\",\"main\":\"levenshtein.js\",\"files\":[\"levenshtein.js\"],\"scripts\":{\"build\":\"grunt build\",\"prepublish\":\"npm run build\",\"benchmark\":\"grunt benchmark\",\"test\":\"mocha\"},\"devDependencies\":{\"chai\":\"~1.5.0\",\"grunt\":\"~0.4.1\",\"grunt-benchmark\":\"~0.2.0\",\"grunt-cli\":\"^1.2.0\",\"grunt-contrib-jshint\":\"~0.4.3\",\"grunt-contrib-uglify\":\"~0.2.0\",\"grunt-mocha-test\":\"~0.2.2\",\"grunt-npm-install\":\"~0.1.0\",\"load-grunt-tasks\":\"~0.6.0\",\"lodash\":\"^4.0.1\",\"mocha\":\"~1.9.0\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/hiddentao/fast-levenshtein.git\"},\"keywords\":[\"levenshtein\",\"distance\",\"string\"],\"author\":\"Ramesh Nair <ram@hiddentao.com> (http://www.hiddentao.com/)\",\"license\":\"MIT\"}");

/***/ }),

/***/ 4528:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"fastq\",\"version\":\"1.15.0\",\"description\":\"Fast, in memory work queue\",\"main\":\"queue.js\",\"scripts\":{\"lint\":\"standard --verbose | snazzy\",\"unit\":\"nyc --lines 100 --branches 100 --functions 100 --check-coverage --reporter=text tape test/test.js test/promise.js\",\"coverage\":\"nyc --reporter=html --reporter=cobertura --reporter=text tape test/test.js test/promise.js\",\"test:report\":\"npm run lint && npm run unit:report\",\"test\":\"npm run lint && npm run unit && npm run typescript\",\"typescript\":\"tsc --project ./test/tsconfig.json\",\"legacy\":\"tape test/test.js\"},\"pre-commit\":[\"test\"],\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/mcollina/fastq.git\"},\"keywords\":[\"fast\",\"queue\",\"async\",\"worker\"],\"author\":\"Matteo Collina <hello@matteocollina.com>\",\"license\":\"ISC\",\"bugs\":{\"url\":\"https://github.com/mcollina/fastq/issues\"},\"homepage\":\"https://github.com/mcollina/fastq#readme\",\"devDependencies\":{\"async\":\"^3.1.0\",\"neo-async\":\"^2.6.1\",\"nyc\":\"^15.0.0\",\"pre-commit\":\"^1.2.2\",\"snazzy\":\"^9.0.0\",\"standard\":\"^16.0.0\",\"tape\":\"^5.0.0\",\"typescript\":\"^4.0.2\"},\"dependencies\":{\"reusify\":\"^1.0.4\"},\"standard\":{\"ignore\":[\"example.mjs\"]}}");

/***/ }),

/***/ 1014:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"figures\",\"version\":\"3.2.0\",\"description\":\"Unicode symbols with Windows CMD fallbacks\",\"license\":\"MIT\",\"repository\":\"sindresorhus/figures\",\"funding\":\"https://github.com/sponsors/sindresorhus\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"https://sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava && tsd\",\"make\":\"./makefile.js\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"unicode\",\"cli\",\"cmd\",\"command-line\",\"characters\",\"symbol\",\"symbols\",\"figure\",\"figures\",\"fallback\"],\"dependencies\":{\"escape-string-regexp\":\"^1.0.5\"},\"devDependencies\":{\"ava\":\"^1.4.1\",\"markdown-table\":\"^1.1.2\",\"tsd\":\"^0.7.2\",\"xo\":\"^0.24.0\"}}");

/***/ }),

/***/ 6438:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"file-entry-cache\",\"version\":\"6.0.1\",\"description\":\"Super simple cache for file metadata, useful for process that work o a given series of files and that only need to repeat the job on the changed ones since the previous run of the process\",\"repository\":\"royriojas/file-entry-cache\",\"license\":\"MIT\",\"author\":{\"name\":\"Roy Riojas\",\"url\":\"http://royriojas.com\"},\"main\":\"cache.js\",\"files\":[\"cache.js\"],\"engines\":{\"node\":\"^10.12.0 || >=12.0.0\"},\"scripts\":{\"eslint\":\"eslint --cache --cache-location=node_modules/.cache/ 'cache.js' 'test/**/*.js' 'perf.js'\",\"autofix\":\"npm run eslint -- --fix\",\"install-hooks\":\"prepush install && changelogx install-hook && precommit install\",\"changelog\":\"changelogx -f markdown -o ./changelog.md\",\"do-changelog\":\"npm run changelog && git add ./changelog.md && git commit -m 'DOC: Generate changelog' --no-verify\",\"pre-v\":\"npm run test\",\"post-v\":\"npm run do-changelog && git push --no-verify && git push --tags --no-verify\",\"bump-major\":\"npm run pre-v && npm version major -m 'BLD: Release v%s' && npm run post-v\",\"bump-minor\":\"npm run pre-v && npm version minor -m 'BLD: Release v%s' && npm run post-v\",\"bump-patch\":\"npm run pre-v && npm version patch -m 'BLD: Release v%s' && npm run post-v\",\"test\":\"npm run eslint --silent && mocha -R spec test/specs\",\"perf\":\"node perf.js\",\"cover\":\"istanbul cover test/runner.js html text-summary\",\"watch\":\"watch-run -i -p 'test/specs/**/*.js' istanbul cover test/runner.js html text-summary\"},\"prepush\":[\"npm run eslint --silent\"],\"precommit\":[\"npm run eslint --silent\"],\"keywords\":[\"file cache\",\"task cache files\",\"file cache\",\"key par\",\"key value\",\"cache\"],\"changelogx\":{\"ignoreRegExp\":[\"BLD: Release\",\"DOC: Generate Changelog\",\"Generated Changelog\"],\"issueIDRegExp\":\"#(\\\\d+)\",\"commitURL\":\"https://github.com/royriojas/file-entry-cache/commit/{0}\",\"authorURL\":\"https://github.com/{0}\",\"issueIDURL\":\"https://github.com/royriojas/file-entry-cache/issues/{0}\",\"projectName\":\"file-entry-cache\"},\"devDependencies\":{\"chai\":\"^4.2.0\",\"changelogx\":\"^5.0.6\",\"del\":\"^6.0.0\",\"eslint\":\"^7.13.0\",\"eslint-config-prettier\":\"^6.15.0\",\"eslint-plugin-mocha\":\"^8.0.0\",\"eslint-plugin-prettier\":\"^3.1.4\",\"glob-expand\":\"^0.2.1\",\"istanbul\":\"^0.4.5\",\"mocha\":\"^8.2.1\",\"precommit\":\"^1.2.2\",\"prepush\":\"^3.1.11\",\"prettier\":\"^2.1.2\",\"watch-run\":\"^1.2.5\",\"write\":\"^2.0.0\"},\"dependencies\":{\"flat-cache\":\"^3.0.4\"}}");

/***/ }),

/***/ 226:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"fill-range\",\"description\":\"Fill in a range of numbers or letters, optionally passing an increment or `step` to use, or create a regex-compatible range with `options.toRegex`\",\"version\":\"7.0.1\",\"homepage\":\"https://github.com/jonschlinkert/fill-range\",\"author\":\"Jon Schlinkert (https://github.com/jonschlinkert)\",\"contributors\":[\"Edo Rivai (edo.rivai.nl)\",\"Jon Schlinkert (http://twitter.com/jonschlinkert)\",\"Paul Miller (paulmillr.com)\",\"Rouven Weßling (www.rouvenwessling.de)\",\"(https://github.com/wtgtybhertgeghgtwtg)\"],\"repository\":\"jonschlinkert/fill-range\",\"bugs\":{\"url\":\"https://github.com/jonschlinkert/fill-range/issues\"},\"license\":\"MIT\",\"files\":[\"index.js\"],\"main\":\"index.js\",\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"mocha\"},\"dependencies\":{\"to-regex-range\":\"^5.0.1\"},\"devDependencies\":{\"gulp-format-md\":\"^2.0.0\",\"mocha\":\"^6.1.1\"},\"keywords\":[\"alpha\",\"alphabetical\",\"array\",\"bash\",\"brace\",\"expand\",\"expansion\",\"fill\",\"glob\",\"match\",\"matches\",\"matching\",\"number\",\"numerical\",\"range\",\"ranges\",\"regex\",\"sh\"],\"verb\":{\"toc\":false,\"layout\":\"default\",\"tasks\":[\"readme\"],\"plugins\":[\"gulp-format-md\"],\"lint\":{\"reflinks\":true}}}");

/***/ }),

/***/ 1533:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"find-replace\",\"author\":\"Lloyd Brookes <75pound@gmail.com>\",\"version\":\"3.0.0\",\"description\":\"Find and either replace or remove items in an array\",\"repository\":\"https://github.com/75lb/find-replace.git\",\"license\":\"MIT\",\"main\":\"dist/index.js\",\"keywords\":[\"find\",\"replace\",\"array\",\"remove\",\"splice\"],\"engines\":{\"node\":\">=4.0.0\"},\"scripts\":{\"test\":\"test-runner test.js\",\"docs\":\"jsdoc2md -c jsdoc.conf -t README.hbs index.mjs > README.md; echo\",\"dist\":\"rollup index.mjs -f umd -n findReplace -o dist/index.js && rollup index.mjs -f esm -o dist/index.mjs\"},\"devDependencies\":{\"jsdoc-to-markdown\":\"^4.0.1\",\"rollup\":\"^1.7.0\",\"test-runner\":\"^0.5.1\"},\"dependencies\":{\"array-back\":\"^3.0.1\"},\"files\":[\"index.mjs\",\"dist\"]}");

/***/ }),

/***/ 824:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"flat-cache\",\"version\":\"3.0.4\",\"description\":\"A stupidly simple key/value storage using files to persist some data\",\"repository\":\"royriojas/flat-cache\",\"license\":\"MIT\",\"author\":{\"name\":\"Roy Riojas\",\"url\":\"http://royriojas.com\"},\"main\":\"src/cache.js\",\"files\":[\"src/cache.js\",\"src/del.js\",\"src/utils.js\"],\"engines\":{\"node\":\"^10.12.0 || >=12.0.0\"},\"precommit\":[\"npm run verify --silent\"],\"prepush\":[\"npm run verify --silent\"],\"scripts\":{\"eslint\":\"eslint --cache --cache-location=node_modules/.cache/ ./src/**/*.js ./test/**/*.js\",\"eslint-fix\":\"npm run eslint -- --fix\",\"autofix\":\"npm run eslint-fix\",\"check\":\"npm run eslint\",\"verify\":\"npm run eslint && npm run test:cache\",\"install-hooks\":\"prepush install && changelogx install-hook && precommit install\",\"changelog\":\"changelogx -f markdown -o ./changelog.md\",\"do-changelog\":\"npm run changelog && git add ./changelog.md && git commit -m 'DOC: Generate changelog' --no-verify\",\"pre-v\":\"npm run verify\",\"post-v\":\"npm run do-changelog && git push --no-verify && git push --tags --no-verify\",\"bump-major\":\"npm run pre-v && npm version major -m 'BLD: Release v%s' && npm run post-v\",\"bump-minor\":\"npm run pre-v && npm version minor -m 'BLD: Release v%s' && npm run post-v\",\"bump-patch\":\"npm run pre-v && npm version patch -m 'BLD: Release v%s' && npm run post-v\",\"test:cache\":\"mocha -R spec test/specs\",\"test\":\"npm run verify --silent\",\"cover\":\"istanbul cover test/runner.js html text-summary\",\"watch\":\"watch-run -i -p 'test/specs/**/*.js' istanbul cover test/runner.js html text-summary\"},\"keywords\":[\"json cache\",\"simple cache\",\"file cache\",\"key par\",\"key value\",\"cache\"],\"changelogx\":{\"ignoreRegExp\":[\"BLD: Release\",\"DOC: Generate Changelog\",\"Generated Changelog\"],\"issueIDRegExp\":\"#(\\\\d+)\",\"commitURL\":\"https://github.com/royriojas/flat-cache/commit/{0}\",\"authorURL\":\"https://github.com/{0}\",\"issueIDURL\":\"https://github.com/royriojas/flat-cache/issues/{0}\",\"projectName\":\"flat-cache\"},\"devDependencies\":{\"chai\":\"^4.2.0\",\"changelogx\":\"^5.0.6\",\"eslint\":\"^7.13.0\",\"eslint-config-prettier\":\"^6.15.0\",\"eslint-plugin-mocha\":\"^8.0.0\",\"eslint-plugin-prettier\":\"^3.1.4\",\"glob-expand\":\"^0.2.1\",\"istanbul\":\"^0.4.5\",\"mocha\":\"^8.2.1\",\"precommit\":\"^1.2.2\",\"prepush\":\"^3.1.11\",\"prettier\":\"^2.1.2\",\"watch-run\":\"^1.2.5\"},\"dependencies\":{\"flatted\":\"^3.1.0\",\"rimraf\":\"^3.0.2\"}}");

/***/ }),

/***/ 1508:
/***/ ((module) => {

"use strict";
module.exports = {"type":"commonjs"};

/***/ }),

/***/ 2737:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"flatted\",\"version\":\"3.2.7\",\"description\":\"A super light and fast circular JSON parser.\",\"unpkg\":\"min.js\",\"types\":\"types.d.ts\",\"main\":\"./cjs/index.js\",\"scripts\":{\"build\":\"npm run cjs && npm run rollup:esm && npm run rollup:es && npm run rollup:babel && npm run min && npm run test && npm run size\",\"cjs\":\"ascjs esm cjs\",\"rollup:es\":\"rollup --config rollup/es.config.js && sed -i.bck 's/^var /self./' es.js && rm -rf es.js.bck\",\"rollup:esm\":\"rollup --config rollup/esm.config.js\",\"rollup:babel\":\"rollup --config rollup/babel.config.js && sed -i.bck 's/^var /self./' index.js && rm -rf index.js.bck\",\"min\":\"terser index.js -c -m -o min.js\",\"size\":\"cat index.js | wc -c;cat min.js | wc -c;gzip -c9 min.js | wc -c;cat min.js | brotli | wc -c; cat es.js | brotli | wc -c; cat esm.js | brotli | wc -c\",\"test\":\"c8 node test/index.js\",\"test:php\":\"php php/test.php\",\"coverage\":\"mkdir -p ./coverage; c8 report --reporter=text-lcov > ./coverage/lcov.info\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/WebReflection/flatted.git\"},\"keywords\":[\"circular\",\"JSON\",\"fast\",\"parser\",\"minimal\"],\"author\":\"Andrea Giammarchi\",\"license\":\"ISC\",\"bugs\":{\"url\":\"https://github.com/WebReflection/flatted/issues\"},\"homepage\":\"https://github.com/WebReflection/flatted#readme\",\"devDependencies\":{\"@babel/core\":\"^7.18.10\",\"@babel/preset-env\":\"^7.18.10\",\"@ungap/structured-clone\":\"^1.0.1\",\"ascjs\":\"^5.0.1\",\"c8\":\"^7.12.0\",\"circular-json\":\"^0.5.9\",\"circular-json-es6\":\"^2.0.2\",\"jsan\":\"^3.1.14\",\"rollup\":\"^2.78.1\",\"rollup-plugin-babel\":\"^4.4.0\",\"rollup-plugin-node-resolve\":\"^5.2.0\",\"rollup-plugin-terser\":\"^7.0.2\",\"terser\":\"^5.14.2\"},\"module\":\"./esm/index.js\",\"type\":\"module\",\"exports\":{\".\":{\"types\":\"./types.d.ts\",\"import\":\"./esm/index.js\",\"default\":\"./cjs/index.js\"},\"./esm\":\"./esm.js\",\"./package.json\":\"./package.json\"}}");

/***/ }),

/***/ 3342:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"fs.realpath\",\"version\":\"1.0.0\",\"description\":\"Use node's fs.realpath, but fall back to the JS implementation if the native one fails\",\"main\":\"index.js\",\"dependencies\":{},\"devDependencies\":{},\"scripts\":{\"test\":\"tap test/*.js --cov\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/isaacs/fs.realpath.git\"},\"keywords\":[\"realpath\",\"fs\",\"polyfill\"],\"author\":\"Isaac Z. Schlueter <i@izs.me> (http://blog.izs.me/)\",\"license\":\"ISC\",\"files\":[\"old.js\",\"index.js\"]}");

/***/ }),

/***/ 6638:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"functional-red-black-tree\",\"version\":\"1.0.1\",\"description\":\"A fully persistent balanced binary search tree\",\"main\":\"rbtree.js\",\"directories\":{\"test\":\"test\"},\"dependencies\":{},\"devDependencies\":{\"iota-array\":\"^0.0.1\",\"tape\":\"^2.12.0\"},\"scripts\":{\"test\":\"tape test/*.js\"},\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/mikolalysenko/functional-red-black-tree.git\"},\"keywords\":[\"functional\",\"red\",\"black\",\"tree\",\"binary\",\"search\",\"balance\",\"persistent\",\"fully\",\"dynamic\",\"data\",\"structure\"],\"author\":\"Mikola Lysenko\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/mikolalysenko/functional-red-black-tree/issues\"}}");

/***/ }),

/***/ 4344:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"gensync\",\"version\":\"1.0.0-beta.2\",\"license\":\"MIT\",\"description\":\"Allows users to use generators in order to write common functions that can be both sync or async.\",\"main\":\"index.js\",\"author\":\"Logan Smyth <loganfsmyth@gmail.com>\",\"homepage\":\"https://github.com/loganfsmyth/gensync\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/loganfsmyth/gensync.git\"},\"scripts\":{\"test\":\"jest\"},\"engines\":{\"node\":\">=6.9.0\"},\"keywords\":[\"async\",\"sync\",\"generators\",\"async-await\",\"callbacks\"],\"devDependencies\":{\"babel-core\":\"^6.26.3\",\"babel-preset-env\":\"^1.6.1\",\"eslint\":\"^4.19.1\",\"eslint-config-prettier\":\"^2.9.0\",\"eslint-plugin-node\":\"^6.0.1\",\"eslint-plugin-prettier\":\"^2.6.0\",\"flow-bin\":\"^0.71.0\",\"jest\":\"^22.4.3\",\"prettier\":\"^1.12.1\"}}");

/***/ }),

/***/ 7770:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"glob-parent\",\"version\":\"5.1.2\",\"description\":\"Extract the non-magic parent path from a glob string.\",\"author\":\"Gulp Team <team@gulpjs.com> (https://gulpjs.com/)\",\"contributors\":[\"Elan Shanker (https://github.com/es128)\",\"Blaine Bublitz <blaine.bublitz@gmail.com>\"],\"repository\":\"gulpjs/glob-parent\",\"license\":\"ISC\",\"engines\":{\"node\":\">= 6\"},\"main\":\"index.js\",\"files\":[\"LICENSE\",\"index.js\"],\"scripts\":{\"lint\":\"eslint .\",\"pretest\":\"npm run lint\",\"test\":\"nyc mocha --async-only\",\"azure-pipelines\":\"nyc mocha --async-only --reporter xunit -O output=test.xunit\",\"coveralls\":\"nyc report --reporter=text-lcov | coveralls\"},\"dependencies\":{\"is-glob\":\"^4.0.1\"},\"devDependencies\":{\"coveralls\":\"^3.0.11\",\"eslint\":\"^2.13.1\",\"eslint-config-gulp\":\"^3.0.1\",\"expect\":\"^1.20.2\",\"mocha\":\"^6.0.2\",\"nyc\":\"^13.3.0\"},\"keywords\":[\"glob\",\"parent\",\"strip\",\"path\",\"dirname\",\"directory\",\"base\",\"wildcard\"]}");

/***/ }),

/***/ 388:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"author\":\"Isaac Z. Schlueter <i@izs.me> (http://blog.izs.me/)\",\"name\":\"glob\",\"description\":\"a little globber\",\"version\":\"7.2.3\",\"publishConfig\":{\"tag\":\"v7-legacy\"},\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/isaacs/node-glob.git\"},\"main\":\"glob.js\",\"files\":[\"glob.js\",\"sync.js\",\"common.js\"],\"engines\":{\"node\":\"*\"},\"dependencies\":{\"fs.realpath\":\"^1.0.0\",\"inflight\":\"^1.0.4\",\"inherits\":\"2\",\"minimatch\":\"^3.1.1\",\"once\":\"^1.3.0\",\"path-is-absolute\":\"^1.0.0\"},\"devDependencies\":{\"memfs\":\"^3.2.0\",\"mkdirp\":\"0\",\"rimraf\":\"^2.2.8\",\"tap\":\"^15.0.6\",\"tick\":\"0.0.6\"},\"tap\":{\"before\":\"test/00-setup.js\",\"after\":\"test/zz-cleanup.js\",\"jobs\":1},\"scripts\":{\"prepublish\":\"npm run benchclean\",\"profclean\":\"rm -f v8.log profile.txt\",\"test\":\"tap\",\"test-regen\":\"npm run profclean && TEST_REGEN=1 node test/00-setup.js\",\"bench\":\"bash benchmark.sh\",\"prof\":\"bash prof.sh && cat profile.txt\",\"benchclean\":\"node benchclean.js\"},\"license\":\"ISC\",\"funding\":{\"url\":\"https://github.com/sponsors/isaacs\"}}");

/***/ }),

/***/ 4709:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"globals\",\"version\":\"11.12.0\",\"description\":\"Global identifiers from different JavaScript environments\",\"license\":\"MIT\",\"repository\":\"sindresorhus/globals\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=4\"},\"scripts\":{\"test\":\"xo && ava\"},\"files\":[\"index.js\",\"globals.json\"],\"keywords\":[\"globals\",\"global\",\"identifiers\",\"variables\",\"vars\",\"jshint\",\"eslint\",\"environments\"],\"devDependencies\":{\"ava\":\"0.21.0\",\"xo\":\"0.18.0\"},\"xo\":{\"ignores\":[\"get-browser-globals.js\"]}}");

/***/ }),

/***/ 1000:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"ignore\",\"version\":\"5.2.4\",\"description\":\"Ignore is a manager and filter for .gitignore rules, the one used by eslint, gitbook and many others.\",\"files\":[\"legacy.js\",\"index.js\",\"index.d.ts\",\"LICENSE-MIT\"],\"scripts\":{\"prepublishOnly\":\"npm run build\",\"build\":\"babel -o legacy.js index.js\",\"test:lint\":\"eslint .\",\"test:tsc\":\"tsc ./test/ts/simple.ts --lib ES6\",\"test:ts\":\"node ./test/ts/simple.js\",\"tap\":\"tap --reporter classic\",\"test:git\":\"npm run tap test/git-check-ignore.js\",\"test:ignore\":\"npm run tap test/ignore.js\",\"test:others\":\"npm run tap test/others.js\",\"test:cases\":\"npm run tap test/*.js -- --coverage\",\"test:no-coverage\":\"npm run tap test/*.js -- --no-check-coverage\",\"test:only\":\"npm run test:lint && npm run test:tsc && npm run test:ts && npm run test:cases\",\"test\":\"npm run test:only\",\"test:win32\":\"IGNORE_TEST_WIN32=1 npm run test\",\"report\":\"tap --coverage-report=html\",\"posttest\":\"npm run report && codecov\"},\"repository\":{\"type\":\"git\",\"url\":\"git@github.com:kaelzhang/node-ignore.git\"},\"keywords\":[\"ignore\",\".gitignore\",\"gitignore\",\"npmignore\",\"rules\",\"manager\",\"filter\",\"regexp\",\"regex\",\"fnmatch\",\"glob\",\"asterisks\",\"regular-expression\"],\"author\":\"kael\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/kaelzhang/node-ignore/issues\"},\"devDependencies\":{\"@babel/cli\":\"^7.19.3\",\"@babel/core\":\"^7.20.5\",\"@babel/preset-env\":\"^7.20.2\",\"codecov\":\"^3.8.2\",\"debug\":\"^4.3.4\",\"eslint\":\"^8.30.0\",\"eslint-config-ostai\":\"^3.0.0\",\"eslint-plugin-import\":\"^2.26.0\",\"mkdirp\":\"^1.0.4\",\"pre-suf\":\"^1.1.1\",\"rimraf\":\"^3.0.2\",\"spawn-sync\":\"^2.0.0\",\"tap\":\"^16.3.2\",\"tmp\":\"0.2.1\",\"typescript\":\"^4.9.4\"},\"engines\":{\"node\":\">= 4\"}}");

/***/ }),

/***/ 7180:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"globby\",\"version\":\"11.1.0\",\"description\":\"User-friendly glob matching\",\"license\":\"MIT\",\"repository\":\"sindresorhus/globby\",\"funding\":\"https://github.com/sponsors/sindresorhus\",\"author\":{\"email\":\"sindresorhus@gmail.com\",\"name\":\"Sindre Sorhus\",\"url\":\"https://sindresorhus.com\"},\"engines\":{\"node\":\">=10\"},\"scripts\":{\"bench\":\"npm update glob-stream fast-glob && matcha bench.js\",\"test\":\"xo && ava && tsd\"},\"files\":[\"index.js\",\"index.d.ts\",\"gitignore.js\",\"stream-utils.js\"],\"keywords\":[\"all\",\"array\",\"directories\",\"expand\",\"files\",\"filesystem\",\"filter\",\"find\",\"fnmatch\",\"folders\",\"fs\",\"glob\",\"globbing\",\"globs\",\"gulpfriendly\",\"match\",\"matcher\",\"minimatch\",\"multi\",\"multiple\",\"paths\",\"pattern\",\"patterns\",\"traverse\",\"util\",\"utility\",\"wildcard\",\"wildcards\",\"promise\",\"gitignore\",\"git\"],\"dependencies\":{\"array-union\":\"^2.1.0\",\"dir-glob\":\"^3.0.1\",\"fast-glob\":\"^3.2.9\",\"ignore\":\"^5.2.0\",\"merge2\":\"^1.4.1\",\"slash\":\"^3.0.0\"},\"devDependencies\":{\"ava\":\"^3.13.0\",\"get-stream\":\"^6.0.0\",\"glob-stream\":\"^6.1.0\",\"globby\":\"sindresorhus/globby#main\",\"matcha\":\"^0.7.0\",\"rimraf\":\"^3.0.2\",\"tsd\":\"^0.13.1\",\"xo\":\"^0.33.1\"},\"xo\":{\"ignores\":[\"fixtures\"]}}");

/***/ }),

/***/ 9317:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"has-flag\",\"version\":\"3.0.0\",\"description\":\"Check if argv has a specific flag\",\"license\":\"MIT\",\"repository\":\"sindresorhus/has-flag\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=4\"},\"scripts\":{\"test\":\"xo && ava\"},\"files\":[\"index.js\"],\"keywords\":[\"has\",\"check\",\"detect\",\"contains\",\"find\",\"flag\",\"cli\",\"command-line\",\"argv\",\"process\",\"arg\",\"args\",\"argument\",\"arguments\",\"getopt\",\"minimist\",\"optimist\"],\"devDependencies\":{\"ava\":\"*\",\"xo\":\"*\"}}");

/***/ }),

/***/ 1773:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"iconv-lite\",\"description\":\"Convert character encodings in pure javascript.\",\"version\":\"0.4.24\",\"license\":\"MIT\",\"keywords\":[\"iconv\",\"convert\",\"charset\",\"icu\"],\"author\":\"Alexander Shtuchkin <ashtuchkin@gmail.com>\",\"main\":\"./lib/index.js\",\"typings\":\"./lib/index.d.ts\",\"homepage\":\"https://github.com/ashtuchkin/iconv-lite\",\"bugs\":\"https://github.com/ashtuchkin/iconv-lite/issues\",\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/ashtuchkin/iconv-lite.git\"},\"engines\":{\"node\":\">=0.10.0\"},\"scripts\":{\"coverage\":\"istanbul cover _mocha -- --grep .\",\"coverage-open\":\"open coverage/lcov-report/index.html\",\"test\":\"mocha --reporter spec --grep .\"},\"browser\":{\"./lib/extend-node\":false,\"./lib/streams\":false},\"devDependencies\":{\"mocha\":\"^3.1.0\",\"request\":\"~2.87.0\",\"unorm\":\"*\",\"errto\":\"*\",\"async\":\"*\",\"istanbul\":\"*\",\"semver\":\"*\",\"iconv\":\"*\"},\"dependencies\":{\"safer-buffer\":\">= 2.1.2 < 3\"}}");

/***/ }),

/***/ 3548:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"ignore\",\"version\":\"4.0.6\",\"description\":\"Ignore is a manager and filter for .gitignore rules.\",\"files\":[\"legacy.js\",\"index.js\",\"index.d.ts\",\"LICENSE-MIT\"],\"scripts\":{\"prepublish\":\"npm run build\",\"build\":\"babel -o legacy.js index.js\",\"test:lint\":\"eslint .\",\"test:tsc\":\"tsc ./test/ts/simple.ts\",\"test:git\":\"tap test/git-check-ignore.js\",\"test:ignore\":\"tap test/ignore.js --coverage\",\"test-no-cov\":\"npm run test:lint && npm run test:tsc && tap test/*.js --coverage\",\"test\":\"npm run test-no-cov\",\"posttest\":\"tap --coverage-report=html && codecov\"},\"repository\":{\"type\":\"git\",\"url\":\"git@github.com:kaelzhang/node-ignore.git\"},\"keywords\":[\"ignore\",\".gitignore\",\"gitignore\",\"npmignore\",\"rules\",\"manager\",\"filter\",\"regexp\",\"regex\",\"fnmatch\",\"glob\",\"asterisks\",\"regular-expression\"],\"author\":\"kael\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/kaelzhang/node-ignore/issues\"},\"devDependencies\":{\"babel-cli\":\"^6.26.0\",\"babel-preset-env\":\"^1.7.0\",\"codecov\":\"^3.0.4\",\"eslint\":\"^5.3.0\",\"eslint-config-ostai\":\"^1.3.2\",\"eslint-plugin-import\":\"^2.13.0\",\"mkdirp\":\"^0.5.1\",\"pre-suf\":\"^1.1.0\",\"rimraf\":\"^2.6.2\",\"spawn-sync\":\"^2.0.0\",\"tap\":\"^12.0.1\",\"tmp\":\"0.0.33\",\"typescript\":\"^3.0.1\"},\"engines\":{\"node\":\">= 4\"}}");

/***/ }),

/***/ 886:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"import-fresh\",\"version\":\"3.3.0\",\"description\":\"Import a module while bypassing the cache\",\"license\":\"MIT\",\"repository\":\"sindresorhus/import-fresh\",\"funding\":\"https://github.com/sponsors/sindresorhus\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"https://sindresorhus.com\"},\"engines\":{\"node\":\">=6\"},\"scripts\":{\"test\":\"xo && ava && tsd\",\"heapdump\":\"node heapdump.js\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"require\",\"cache\",\"uncache\",\"uncached\",\"module\",\"fresh\",\"bypass\"],\"dependencies\":{\"parent-module\":\"^1.0.0\",\"resolve-from\":\"^4.0.0\"},\"devDependencies\":{\"ava\":\"^1.0.1\",\"heapdump\":\"^0.3.12\",\"tsd\":\"^0.7.3\",\"xo\":\"^0.23.0\"}}");

/***/ }),

/***/ 8528:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"imurmurhash\",\"version\":\"0.1.4\",\"description\":\"An incremental implementation of MurmurHash3\",\"homepage\":\"https://github.com/jensyt/imurmurhash-js\",\"main\":\"imurmurhash.js\",\"files\":[\"imurmurhash.js\",\"imurmurhash.min.js\",\"package.json\",\"README.md\"],\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/jensyt/imurmurhash-js\"},\"bugs\":{\"url\":\"https://github.com/jensyt/imurmurhash-js/issues\"},\"keywords\":[\"murmur\",\"murmurhash\",\"murmurhash3\",\"hash\",\"incremental\"],\"author\":{\"name\":\"Jens Taylor\",\"email\":\"jensyt@gmail.com\",\"url\":\"https://github.com/homebrewing\"},\"license\":\"MIT\",\"dependencies\":{},\"devDependencies\":{},\"engines\":{\"node\":\">=0.8.19\"}}");

/***/ }),

/***/ 8755:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"inflight\",\"version\":\"1.0.6\",\"description\":\"Add callbacks to requests in flight to avoid async duplication\",\"main\":\"inflight.js\",\"files\":[\"inflight.js\"],\"dependencies\":{\"once\":\"^1.3.0\",\"wrappy\":\"1\"},\"devDependencies\":{\"tap\":\"^7.1.2\"},\"scripts\":{\"test\":\"tap test.js --100\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/npm/inflight.git\"},\"author\":\"Isaac Z. Schlueter <i@izs.me> (http://blog.izs.me/)\",\"bugs\":{\"url\":\"https://github.com/isaacs/inflight/issues\"},\"homepage\":\"https://github.com/isaacs/inflight\",\"license\":\"ISC\"}");

/***/ }),

/***/ 9394:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"inherits\",\"description\":\"Browser-friendly inheritance fully compatible with standard node.js inherits()\",\"version\":\"2.0.4\",\"keywords\":[\"inheritance\",\"class\",\"klass\",\"oop\",\"object-oriented\",\"inherits\",\"browser\",\"browserify\"],\"main\":\"./inherits.js\",\"browser\":\"./inherits_browser.js\",\"repository\":\"git://github.com/isaacs/inherits\",\"license\":\"ISC\",\"scripts\":{\"test\":\"tap\"},\"devDependencies\":{\"tap\":\"^14.2.4\"},\"files\":[\"inherits.js\",\"inherits_browser.js\"]}");

/***/ }),

/***/ 7566:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"ansi-styles\",\"version\":\"4.3.0\",\"description\":\"ANSI escape codes for styling strings in the terminal\",\"license\":\"MIT\",\"repository\":\"chalk/ansi-styles\",\"funding\":\"https://github.com/chalk/ansi-styles?sponsor=1\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava && tsd\",\"screenshot\":\"svg-term --command='node screenshot' --out=screenshot.svg --padding=3 --width=55 --height=3 --at=1000 --no-cursor\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"ansi\",\"styles\",\"color\",\"colour\",\"colors\",\"terminal\",\"console\",\"cli\",\"string\",\"tty\",\"escape\",\"formatting\",\"rgb\",\"256\",\"shell\",\"xterm\",\"log\",\"logging\",\"command-line\",\"text\"],\"dependencies\":{\"color-convert\":\"^2.0.1\"},\"devDependencies\":{\"@types/color-convert\":\"^1.9.0\",\"ava\":\"^2.3.0\",\"svg-term-cli\":\"^2.1.1\",\"tsd\":\"^0.11.0\",\"xo\":\"^0.25.3\"}}");

/***/ }),

/***/ 69:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"chalk\",\"version\":\"4.1.2\",\"description\":\"Terminal string styling done right\",\"license\":\"MIT\",\"repository\":\"chalk/chalk\",\"funding\":\"https://github.com/chalk/chalk?sponsor=1\",\"main\":\"source\",\"engines\":{\"node\":\">=10\"},\"scripts\":{\"test\":\"xo && nyc ava && tsd\",\"bench\":\"matcha benchmark.js\"},\"files\":[\"source\",\"index.d.ts\"],\"keywords\":[\"color\",\"colour\",\"colors\",\"terminal\",\"console\",\"cli\",\"string\",\"str\",\"ansi\",\"style\",\"styles\",\"tty\",\"formatting\",\"rgb\",\"256\",\"shell\",\"xterm\",\"log\",\"logging\",\"command-line\",\"text\"],\"dependencies\":{\"ansi-styles\":\"^4.1.0\",\"supports-color\":\"^7.1.0\"},\"devDependencies\":{\"ava\":\"^2.4.0\",\"coveralls\":\"^3.0.7\",\"execa\":\"^4.0.0\",\"import-fresh\":\"^3.1.0\",\"matcha\":\"^0.7.0\",\"nyc\":\"^15.0.0\",\"resolve-from\":\"^5.0.0\",\"tsd\":\"^0.7.4\",\"xo\":\"^0.28.2\"},\"xo\":{\"rules\":{\"unicorn/prefer-string-slice\":\"off\",\"unicorn/prefer-includes\":\"off\",\"@typescript-eslint/member-ordering\":\"off\",\"no-redeclare\":\"off\",\"unicorn/string-content\":\"off\",\"unicorn/better-regex\":\"off\"}}}");

/***/ }),

/***/ 5273:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"color-convert\",\"description\":\"Plain color conversion functions\",\"version\":\"2.0.1\",\"author\":\"Heather Arthur <fayearthur@gmail.com>\",\"license\":\"MIT\",\"repository\":\"Qix-/color-convert\",\"scripts\":{\"pretest\":\"xo\",\"test\":\"node test/basic.js\"},\"engines\":{\"node\":\">=7.0.0\"},\"keywords\":[\"color\",\"colour\",\"convert\",\"converter\",\"conversion\",\"rgb\",\"hsl\",\"hsv\",\"hwb\",\"cmyk\",\"ansi\",\"ansi16\"],\"files\":[\"index.js\",\"conversions.js\",\"route.js\"],\"xo\":{\"rules\":{\"default-case\":0,\"no-inline-comments\":0,\"operator-linebreak\":0}},\"devDependencies\":{\"chalk\":\"^2.4.2\",\"xo\":\"^0.24.0\"},\"dependencies\":{\"color-name\":\"~1.1.4\"}}");

/***/ }),

/***/ 6513:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"color-name\",\"version\":\"1.1.4\",\"description\":\"A list of color names and its values\",\"main\":\"index.js\",\"files\":[\"index.js\"],\"scripts\":{\"test\":\"node test.js\"},\"repository\":{\"type\":\"git\",\"url\":\"git@github.com:colorjs/color-name.git\"},\"keywords\":[\"color-name\",\"color\",\"color-keyword\",\"keyword\"],\"author\":\"DY <dfcreative@gmail.com>\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/colorjs/color-name/issues\"},\"homepage\":\"https://github.com/colorjs/color-name\"}");

/***/ }),

/***/ 1429:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"has-flag\",\"version\":\"4.0.0\",\"description\":\"Check if argv has a specific flag\",\"license\":\"MIT\",\"repository\":\"sindresorhus/has-flag\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava && tsd\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"has\",\"check\",\"detect\",\"contains\",\"find\",\"flag\",\"cli\",\"command-line\",\"argv\",\"process\",\"arg\",\"args\",\"argument\",\"arguments\",\"getopt\",\"minimist\",\"optimist\"],\"devDependencies\":{\"ava\":\"^1.4.1\",\"tsd\":\"^0.7.2\",\"xo\":\"^0.24.0\"}}");

/***/ }),

/***/ 7834:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"supports-color\",\"version\":\"7.2.0\",\"description\":\"Detect whether a terminal supports color\",\"license\":\"MIT\",\"repository\":\"chalk/supports-color\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava\"},\"files\":[\"index.js\",\"browser.js\"],\"keywords\":[\"color\",\"colour\",\"colors\",\"terminal\",\"console\",\"cli\",\"ansi\",\"styles\",\"tty\",\"rgb\",\"256\",\"shell\",\"xterm\",\"command-line\",\"support\",\"supports\",\"capability\",\"detect\",\"truecolor\",\"16m\"],\"dependencies\":{\"has-flag\":\"^4.0.0\"},\"devDependencies\":{\"ava\":\"^1.4.1\",\"import-fresh\":\"^3.0.0\",\"xo\":\"^0.24.0\"},\"browser\":\"browser.js\"}");

/***/ }),

/***/ 994:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"inquirer\",\"version\":\"7.3.3\",\"description\":\"A collection of common interactive command line user interfaces.\",\"author\":\"Simon Boudrias <admin@simonboudrias.com>\",\"files\":[\"lib\",\"README.md\"],\"main\":\"lib/inquirer.js\",\"keywords\":[\"command\",\"prompt\",\"stdin\",\"cli\",\"tty\",\"menu\"],\"engines\":{\"node\":\">=8.0.0\"},\"devDependencies\":{\"chai\":\"^4.2.0\",\"chalk-pipe\":\"^4.0.0\",\"cmdify\":\"^0.0.4\",\"mocha\":\"^8.0.1\",\"mockery\":\"^2.1.0\",\"nyc\":\"^15.0.0\",\"sinon\":\"^9.0.0\"},\"scripts\":{\"test\":\"nyc mocha test/**/* -r ./test/before\",\"posttest\":\"nyc report --reporter=text-lcov > ../../coverage/nyc-report.lcov\",\"prepublishOnly\":\"cp ../../README.md .\",\"postpublish\":\"rm -f README.md\"},\"repository\":\"SBoudrias/Inquirer.js\",\"license\":\"MIT\",\"dependencies\":{\"ansi-escapes\":\"^4.2.1\",\"chalk\":\"^4.1.0\",\"cli-cursor\":\"^3.1.0\",\"cli-width\":\"^3.0.0\",\"external-editor\":\"^3.0.3\",\"figures\":\"^3.0.0\",\"lodash\":\"^4.17.19\",\"mute-stream\":\"0.0.8\",\"run-async\":\"^2.4.0\",\"rxjs\":\"^6.6.0\",\"string-width\":\"^4.1.0\",\"strip-ansi\":\"^6.0.0\",\"through\":\"^2.3.6\"},\"gitHead\":\"808d5538531c1ca1c34f832d77bc98dfd0ba4000\"}");

/***/ }),

/***/ 8434:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"is-extglob\",\"description\":\"Returns true if a string has an extglob.\",\"version\":\"2.1.1\",\"homepage\":\"https://github.com/jonschlinkert/is-extglob\",\"author\":\"Jon Schlinkert (https://github.com/jonschlinkert)\",\"repository\":\"jonschlinkert/is-extglob\",\"bugs\":{\"url\":\"https://github.com/jonschlinkert/is-extglob/issues\"},\"license\":\"MIT\",\"files\":[\"index.js\"],\"main\":\"index.js\",\"engines\":{\"node\":\">=0.10.0\"},\"scripts\":{\"test\":\"mocha\"},\"devDependencies\":{\"gulp-format-md\":\"^0.1.10\",\"mocha\":\"^3.0.2\"},\"keywords\":[\"bash\",\"braces\",\"check\",\"exec\",\"expression\",\"extglob\",\"glob\",\"globbing\",\"globstar\",\"is\",\"match\",\"matches\",\"pattern\",\"regex\",\"regular\",\"string\",\"test\"],\"verb\":{\"toc\":false,\"layout\":\"default\",\"tasks\":[\"readme\"],\"plugins\":[\"gulp-format-md\"],\"related\":{\"list\":[\"has-glob\",\"is-glob\",\"micromatch\"]},\"reflinks\":[\"verb\",\"verb-generate-readme\"],\"lint\":{\"reflinks\":true}}}");

/***/ }),

/***/ 9458:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"is-fullwidth-code-point\",\"version\":\"3.0.0\",\"description\":\"Check if the character represented by a given Unicode code point is fullwidth\",\"license\":\"MIT\",\"repository\":\"sindresorhus/is-fullwidth-code-point\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava && tsd-check\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"fullwidth\",\"full-width\",\"full\",\"width\",\"unicode\",\"character\",\"string\",\"codepoint\",\"code\",\"point\",\"is\",\"detect\",\"check\"],\"devDependencies\":{\"ava\":\"^1.3.1\",\"tsd-check\":\"^0.5.0\",\"xo\":\"^0.24.0\"}}");

/***/ }),

/***/ 5646:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"is-glob\",\"description\":\"Returns `true` if the given string looks like a glob pattern or an extglob pattern. This makes it easy to create code that only uses external modules like node-glob when necessary, resulting in much faster code execution and initialization time, and a better user experience.\",\"version\":\"4.0.3\",\"homepage\":\"https://github.com/micromatch/is-glob\",\"author\":\"Jon Schlinkert (https://github.com/jonschlinkert)\",\"contributors\":[\"Brian Woodward (https://twitter.com/doowb)\",\"Daniel Perez (https://tuvistavie.com)\",\"Jon Schlinkert (http://twitter.com/jonschlinkert)\"],\"repository\":\"micromatch/is-glob\",\"bugs\":{\"url\":\"https://github.com/micromatch/is-glob/issues\"},\"license\":\"MIT\",\"files\":[\"index.js\"],\"main\":\"index.js\",\"engines\":{\"node\":\">=0.10.0\"},\"scripts\":{\"test\":\"mocha && node benchmark.js\"},\"dependencies\":{\"is-extglob\":\"^2.1.1\"},\"devDependencies\":{\"gulp-format-md\":\"^0.1.10\",\"mocha\":\"^3.0.2\"},\"keywords\":[\"bash\",\"braces\",\"check\",\"exec\",\"expression\",\"extglob\",\"glob\",\"globbing\",\"globstar\",\"is\",\"match\",\"matches\",\"pattern\",\"regex\",\"regular\",\"string\",\"test\"],\"verb\":{\"layout\":\"default\",\"plugins\":[\"gulp-format-md\"],\"related\":{\"list\":[\"assemble\",\"base\",\"update\",\"verb\"]},\"reflinks\":[\"assemble\",\"bach\",\"base\",\"composer\",\"gulp\",\"has-glob\",\"is-valid-glob\",\"micromatch\",\"npm\",\"scaffold\",\"verb\",\"vinyl\"]}}");

/***/ }),

/***/ 4278:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"is-number\",\"description\":\"Returns true if a number or string value is a finite number. Useful for regex matches, parsing, user input, etc.\",\"version\":\"7.0.0\",\"homepage\":\"https://github.com/jonschlinkert/is-number\",\"author\":\"Jon Schlinkert (https://github.com/jonschlinkert)\",\"contributors\":[\"Jon Schlinkert (http://twitter.com/jonschlinkert)\",\"Olsten Larck (https://i.am.charlike.online)\",\"Rouven Weßling (www.rouvenwessling.de)\"],\"repository\":\"jonschlinkert/is-number\",\"bugs\":{\"url\":\"https://github.com/jonschlinkert/is-number/issues\"},\"license\":\"MIT\",\"files\":[\"index.js\"],\"main\":\"index.js\",\"engines\":{\"node\":\">=0.12.0\"},\"scripts\":{\"test\":\"mocha\"},\"devDependencies\":{\"ansi\":\"^0.3.1\",\"benchmark\":\"^2.1.4\",\"gulp-format-md\":\"^1.0.0\",\"mocha\":\"^3.5.3\"},\"keywords\":[\"cast\",\"check\",\"coerce\",\"coercion\",\"finite\",\"integer\",\"is\",\"isnan\",\"is-nan\",\"is-num\",\"is-number\",\"isnumber\",\"isfinite\",\"istype\",\"kind\",\"math\",\"nan\",\"num\",\"number\",\"numeric\",\"parseFloat\",\"parseInt\",\"test\",\"type\",\"typeof\",\"value\"],\"verb\":{\"toc\":false,\"layout\":\"default\",\"tasks\":[\"readme\"],\"related\":{\"list\":[\"is-plain-object\",\"is-primitive\",\"isobject\",\"kind-of\"]},\"plugins\":[\"gulp-format-md\"],\"lint\":{\"reflinks\":true}}}");

/***/ }),

/***/ 6565:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"is-unicode-supported\",\"version\":\"0.1.0\",\"description\":\"Detect whether the terminal supports Unicode\",\"license\":\"MIT\",\"repository\":\"sindresorhus/is-unicode-supported\",\"funding\":\"https://github.com/sponsors/sindresorhus\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"https://sindresorhus.com\"},\"engines\":{\"node\":\">=10\"},\"scripts\":{\"test\":\"xo && ava && tsd\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"terminal\",\"unicode\",\"detect\",\"utf8\",\"console\",\"shell\",\"support\",\"supports\",\"supported\",\"check\",\"detection\"],\"devDependencies\":{\"ava\":\"^2.4.0\",\"tsd\":\"^0.14.0\",\"xo\":\"^0.38.2\"}}");

/***/ }),

/***/ 7938:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"isexe\",\"version\":\"2.0.0\",\"description\":\"Minimal module to check if a file is executable.\",\"main\":\"index.js\",\"directories\":{\"test\":\"test\"},\"devDependencies\":{\"mkdirp\":\"^0.5.1\",\"rimraf\":\"^2.5.0\",\"tap\":\"^10.3.0\"},\"scripts\":{\"test\":\"tap test/*.js --100\",\"preversion\":\"npm test\",\"postversion\":\"npm publish\",\"postpublish\":\"git push origin --all; git push origin --tags\"},\"author\":\"Isaac Z. Schlueter <i@izs.me> (http://blog.izs.me/)\",\"license\":\"ISC\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/isaacs/isexe.git\"},\"keywords\":[],\"bugs\":{\"url\":\"https://github.com/isaacs/isexe/issues\"},\"homepage\":\"https://github.com/isaacs/isexe#readme\"}");

/***/ }),

/***/ 6399:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"js-tokens\",\"version\":\"4.0.0\",\"author\":\"Simon Lydell\",\"license\":\"MIT\",\"description\":\"A regex that tokenizes JavaScript.\",\"keywords\":[\"JavaScript\",\"js\",\"token\",\"tokenize\",\"regex\"],\"files\":[\"index.js\"],\"repository\":\"lydell/js-tokens\",\"scripts\":{\"test\":\"mocha --ui tdd\",\"esprima-compare\":\"node esprima-compare ./index.js everything.js/es5.js\",\"build\":\"node generate-index.js\",\"dev\":\"npm run build && npm test\"},\"devDependencies\":{\"coffeescript\":\"2.1.1\",\"esprima\":\"4.0.0\",\"everything.js\":\"1.0.3\",\"mocha\":\"5.0.0\"}}");

/***/ }),

/***/ 1080:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"js-yaml\",\"version\":\"3.14.1\",\"description\":\"YAML 1.2 parser and serializer\",\"keywords\":[\"yaml\",\"parser\",\"serializer\",\"pyyaml\"],\"homepage\":\"https://github.com/nodeca/js-yaml\",\"author\":\"Vladimir Zapparov <dervus.grim@gmail.com>\",\"contributors\":[\"Aleksey V Zapparov <ixti@member.fsf.org> (http://www.ixti.net/)\",\"Vitaly Puzrin <vitaly@rcdesign.ru> (https://github.com/puzrin)\",\"Martin Grenfell <martin.grenfell@gmail.com> (http://got-ravings.blogspot.com)\"],\"license\":\"MIT\",\"repository\":\"nodeca/js-yaml\",\"files\":[\"index.js\",\"lib/\",\"bin/\",\"dist/\"],\"bin\":{\"js-yaml\":\"bin/js-yaml.js\"},\"unpkg\":\"dist/js-yaml.min.js\",\"jsdelivr\":\"dist/js-yaml.min.js\",\"dependencies\":{\"argparse\":\"^1.0.7\",\"esprima\":\"^4.0.0\"},\"devDependencies\":{\"ansi\":\"^0.3.1\",\"benchmark\":\"^2.1.4\",\"browserify\":\"^16.2.2\",\"codemirror\":\"^5.13.4\",\"eslint\":\"^7.0.0\",\"fast-check\":\"^1.24.2\",\"istanbul\":\"^0.4.5\",\"mocha\":\"^7.1.2\",\"uglify-js\":\"^3.0.1\"},\"scripts\":{\"test\":\"make test\"}}");

/***/ }),

/***/ 9723:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"jsesc\",\"version\":\"2.5.2\",\"description\":\"Given some data, jsesc returns the shortest possible stringified & ASCII-safe representation of that data.\",\"homepage\":\"https://mths.be/jsesc\",\"engines\":{\"node\":\">=4\"},\"main\":\"jsesc.js\",\"bin\":\"bin/jsesc\",\"man\":\"man/jsesc.1\",\"keywords\":[\"buffer\",\"escape\",\"javascript\",\"json\",\"map\",\"set\",\"string\",\"stringify\",\"tool\"],\"license\":\"MIT\",\"author\":{\"name\":\"Mathias Bynens\",\"url\":\"https://mathiasbynens.be/\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/mathiasbynens/jsesc.git\"},\"bugs\":\"https://github.com/mathiasbynens/jsesc/issues\",\"files\":[\"LICENSE-MIT.txt\",\"jsesc.js\",\"bin/\",\"man/\"],\"scripts\":{\"build\":\"grunt template\",\"coveralls\":\"istanbul cover --verbose --dir 'coverage' 'tests/tests.js' && coveralls < coverage/lcov.info'\",\"cover\":\"istanbul cover --report 'html' --verbose --dir 'coverage' 'tests/tests.js'\",\"test\":\"mocha tests\"},\"devDependencies\":{\"coveralls\":\"^2.11.6\",\"grunt\":\"^0.4.5\",\"grunt-template\":\"^0.2.3\",\"istanbul\":\"^0.4.2\",\"mocha\":\"*\",\"regenerate\":\"^1.3.0\",\"requirejs\":\"^2.1.22\"}}");

/***/ }),

/***/ 2371:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"json-schema-traverse\",\"version\":\"0.4.1\",\"description\":\"Traverse JSON Schema passing each schema object to callback\",\"main\":\"index.js\",\"scripts\":{\"eslint\":\"eslint index.js spec\",\"test-spec\":\"mocha spec -R spec\",\"test\":\"npm run eslint && nyc npm run test-spec\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/epoberezkin/json-schema-traverse.git\"},\"keywords\":[\"JSON-Schema\",\"traverse\",\"iterate\"],\"author\":\"Evgeny Poberezkin\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/epoberezkin/json-schema-traverse/issues\"},\"homepage\":\"https://github.com/epoberezkin/json-schema-traverse#readme\",\"devDependencies\":{\"coveralls\":\"^2.13.1\",\"eslint\":\"^3.19.0\",\"mocha\":\"^3.4.2\",\"nyc\":\"^11.0.2\",\"pre-commit\":\"^1.2.2\"},\"nyc\":{\"exclude\":[\"**/spec/**\",\"node_modules\"],\"reporter\":[\"lcov\",\"text-summary\"]}}");

/***/ }),

/***/ 2709:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"json-stable-stringify-without-jsonify\",\"version\":\"1.0.1\",\"description\":\"deterministic JSON.stringify() with custom sorting to get deterministic hashes from stringified results, with no public domain dependencies\",\"main\":\"index.js\",\"dependencies\":{},\"devDependencies\":{\"tape\":\"~1.0.4\"},\"scripts\":{\"test\":\"tape test/*.js\"},\"testling\":{\"files\":\"test/*.js\",\"browsers\":[\"ie/8..latest\",\"ff/5\",\"ff/latest\",\"chrome/15\",\"chrome/latest\",\"safari/latest\",\"opera/latest\"]},\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/samn/json-stable-stringify.git\"},\"homepage\":\"https://github.com/samn/json-stable-stringify\",\"keywords\":[\"json\",\"stringify\",\"deterministic\",\"hash\",\"sort\",\"stable\"],\"author\":{\"name\":\"James Halliday\",\"email\":\"mail@substack.net\",\"url\":\"http://substack.net\"},\"license\":\"MIT\"}");

/***/ }),

/***/ 988:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"json5\",\"version\":\"2.2.3\",\"description\":\"JSON for Humans\",\"main\":\"lib/index.js\",\"module\":\"dist/index.mjs\",\"bin\":\"lib/cli.js\",\"browser\":\"dist/index.js\",\"types\":\"lib/index.d.ts\",\"files\":[\"lib/\",\"dist/\"],\"engines\":{\"node\":\">=6\"},\"scripts\":{\"build\":\"rollup -c\",\"build-package\":\"node build/package.js\",\"build-unicode\":\"node build/unicode.js\",\"coverage\":\"tap --coverage-report html test\",\"lint\":\"eslint --fix .\",\"lint-report\":\"eslint .\",\"prepublishOnly\":\"npm run production\",\"preversion\":\"npm run production\",\"production\":\"run-s test build\",\"tap\":\"tap -Rspec --100 test\",\"test\":\"run-s lint-report tap\",\"version\":\"npm run build-package && git add package.json5\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/json5/json5.git\"},\"keywords\":[\"json\",\"json5\",\"es5\",\"es2015\",\"ecmascript\"],\"author\":\"Aseem Kishore <aseem.kishore@gmail.com>\",\"contributors\":[\"Max Nanasy <max.nanasy@gmail.com>\",\"Andrew Eisenberg <andrew@eisenberg.as>\",\"Jordan Tucker <jordanbtucker@gmail.com>\"],\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/json5/json5/issues\"},\"homepage\":\"http://json5.org/\",\"devDependencies\":{\"core-js\":\"^2.6.5\",\"eslint\":\"^5.15.3\",\"eslint-config-standard\":\"^12.0.0\",\"eslint-plugin-import\":\"^2.16.0\",\"eslint-plugin-node\":\"^8.0.1\",\"eslint-plugin-promise\":\"^4.0.1\",\"eslint-plugin-standard\":\"^4.0.0\",\"npm-run-all\":\"^4.1.5\",\"regenerate\":\"^1.4.0\",\"rollup\":\"^0.64.1\",\"rollup-plugin-buble\":\"^0.19.6\",\"rollup-plugin-commonjs\":\"^9.2.1\",\"rollup-plugin-node-resolve\":\"^3.4.0\",\"rollup-plugin-terser\":\"^1.0.1\",\"sinon\":\"^6.3.5\",\"tap\":\"^12.6.0\",\"unicode-10.0.0\":\"^0.7.5\"}}");

/***/ }),

/***/ 7265:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"levn\",\"version\":\"0.4.1\",\"author\":\"George Zahariev <z@georgezahariev.com>\",\"description\":\"Light ECMAScript (JavaScript) Value Notation - human written, concise, typed, flexible\",\"homepage\":\"https://github.com/gkz/levn\",\"keywords\":[\"levn\",\"light\",\"ecmascript\",\"value\",\"notation\",\"json\",\"typed\",\"human\",\"concise\",\"typed\",\"flexible\"],\"files\":[\"lib\",\"README.md\",\"LICENSE\"],\"main\":\"./lib/\",\"bugs\":\"https://github.com/gkz/levn/issues\",\"license\":\"MIT\",\"engines\":{\"node\":\">= 0.8.0\"},\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/gkz/levn.git\"},\"scripts\":{\"test\":\"make test\"},\"dependencies\":{\"prelude-ls\":\"^1.2.1\",\"type-check\":\"~0.4.0\"},\"devDependencies\":{\"livescript\":\"^1.6.0\",\"mocha\":\"^7.1.1\"}}");

/***/ }),

/***/ 3496:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"lodash.camelcase\",\"version\":\"4.3.0\",\"description\":\"The lodash method `_.camelCase` exported as a module.\",\"homepage\":\"https://lodash.com/\",\"icon\":\"https://lodash.com/icon.svg\",\"license\":\"MIT\",\"keywords\":\"lodash-modularized, camelcase\",\"author\":\"John-David Dalton <john.david.dalton@gmail.com> (http://allyoucanleet.com/)\",\"contributors\":[\"John-David Dalton <john.david.dalton@gmail.com> (http://allyoucanleet.com/)\",\"Blaine Bublitz <blaine.bublitz@gmail.com> (https://github.com/phated)\",\"Mathias Bynens <mathias@qiwi.be> (https://mathiasbynens.be/)\"],\"repository\":\"lodash/lodash\",\"scripts\":{\"test\":\"echo \\\"See https://travis-ci.org/lodash/lodash-cli for testing details.\\\"\"}}");

/***/ }),

/***/ 6421:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"lodash.merge\",\"version\":\"4.6.2\",\"description\":\"The Lodash method `_.merge` exported as a module.\",\"homepage\":\"https://lodash.com/\",\"icon\":\"https://lodash.com/icon.svg\",\"license\":\"MIT\",\"keywords\":\"lodash-modularized, merge\",\"author\":\"John-David Dalton <john.david.dalton@gmail.com>\",\"contributors\":[\"John-David Dalton <john.david.dalton@gmail.com>\",\"Mathias Bynens <mathias@qiwi.be>\"],\"repository\":\"lodash/lodash\",\"scripts\":{\"test\":\"echo \\\"See https://travis-ci.org/lodash/lodash-cli for testing details.\\\"\"}}");

/***/ }),

/***/ 8889:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"lodash.truncate\",\"version\":\"4.4.2\",\"description\":\"The lodash method `_.truncate` exported as a module.\",\"homepage\":\"https://lodash.com/\",\"icon\":\"https://lodash.com/icon.svg\",\"license\":\"MIT\",\"keywords\":\"lodash-modularized, truncate\",\"author\":\"John-David Dalton <john.david.dalton@gmail.com> (http://allyoucanleet.com/)\",\"contributors\":[\"John-David Dalton <john.david.dalton@gmail.com> (http://allyoucanleet.com/)\",\"Blaine Bublitz <blaine.bublitz@gmail.com> (https://github.com/phated)\",\"Mathias Bynens <mathias@qiwi.be> (https://mathiasbynens.be/)\"],\"repository\":\"lodash/lodash\",\"scripts\":{\"test\":\"echo \\\"See https://travis-ci.org/lodash/lodash-cli for testing details.\\\"\"}}");

/***/ }),

/***/ 3235:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"lodash\",\"version\":\"4.17.21\",\"description\":\"Lodash modular utilities.\",\"keywords\":\"modules, stdlib, util\",\"homepage\":\"https://lodash.com/\",\"repository\":\"lodash/lodash\",\"icon\":\"https://lodash.com/icon.svg\",\"license\":\"MIT\",\"main\":\"lodash.js\",\"author\":\"John-David Dalton <john.david.dalton@gmail.com>\",\"contributors\":[\"John-David Dalton <john.david.dalton@gmail.com>\",\"Mathias Bynens <mathias@qiwi.be>\"],\"scripts\":{\"test\":\"echo \\\"See https://travis-ci.org/lodash-archive/lodash-cli for testing details.\\\"\"}}");

/***/ }),

/***/ 4910:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"ansi-styles\",\"version\":\"4.3.0\",\"description\":\"ANSI escape codes for styling strings in the terminal\",\"license\":\"MIT\",\"repository\":\"chalk/ansi-styles\",\"funding\":\"https://github.com/chalk/ansi-styles?sponsor=1\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava && tsd\",\"screenshot\":\"svg-term --command='node screenshot' --out=screenshot.svg --padding=3 --width=55 --height=3 --at=1000 --no-cursor\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"ansi\",\"styles\",\"color\",\"colour\",\"colors\",\"terminal\",\"console\",\"cli\",\"string\",\"tty\",\"escape\",\"formatting\",\"rgb\",\"256\",\"shell\",\"xterm\",\"log\",\"logging\",\"command-line\",\"text\"],\"dependencies\":{\"color-convert\":\"^2.0.1\"},\"devDependencies\":{\"@types/color-convert\":\"^1.9.0\",\"ava\":\"^2.3.0\",\"svg-term-cli\":\"^2.1.1\",\"tsd\":\"^0.11.0\",\"xo\":\"^0.25.3\"}}");

/***/ }),

/***/ 6525:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"chalk\",\"version\":\"4.1.2\",\"description\":\"Terminal string styling done right\",\"license\":\"MIT\",\"repository\":\"chalk/chalk\",\"funding\":\"https://github.com/chalk/chalk?sponsor=1\",\"main\":\"source\",\"engines\":{\"node\":\">=10\"},\"scripts\":{\"test\":\"xo && nyc ava && tsd\",\"bench\":\"matcha benchmark.js\"},\"files\":[\"source\",\"index.d.ts\"],\"keywords\":[\"color\",\"colour\",\"colors\",\"terminal\",\"console\",\"cli\",\"string\",\"str\",\"ansi\",\"style\",\"styles\",\"tty\",\"formatting\",\"rgb\",\"256\",\"shell\",\"xterm\",\"log\",\"logging\",\"command-line\",\"text\"],\"dependencies\":{\"ansi-styles\":\"^4.1.0\",\"supports-color\":\"^7.1.0\"},\"devDependencies\":{\"ava\":\"^2.4.0\",\"coveralls\":\"^3.0.7\",\"execa\":\"^4.0.0\",\"import-fresh\":\"^3.1.0\",\"matcha\":\"^0.7.0\",\"nyc\":\"^15.0.0\",\"resolve-from\":\"^5.0.0\",\"tsd\":\"^0.7.4\",\"xo\":\"^0.28.2\"},\"xo\":{\"rules\":{\"unicorn/prefer-string-slice\":\"off\",\"unicorn/prefer-includes\":\"off\",\"@typescript-eslint/member-ordering\":\"off\",\"no-redeclare\":\"off\",\"unicorn/string-content\":\"off\",\"unicorn/better-regex\":\"off\"}}}");

/***/ }),

/***/ 3302:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"color-convert\",\"description\":\"Plain color conversion functions\",\"version\":\"2.0.1\",\"author\":\"Heather Arthur <fayearthur@gmail.com>\",\"license\":\"MIT\",\"repository\":\"Qix-/color-convert\",\"scripts\":{\"pretest\":\"xo\",\"test\":\"node test/basic.js\"},\"engines\":{\"node\":\">=7.0.0\"},\"keywords\":[\"color\",\"colour\",\"convert\",\"converter\",\"conversion\",\"rgb\",\"hsl\",\"hsv\",\"hwb\",\"cmyk\",\"ansi\",\"ansi16\"],\"files\":[\"index.js\",\"conversions.js\",\"route.js\"],\"xo\":{\"rules\":{\"default-case\":0,\"no-inline-comments\":0,\"operator-linebreak\":0}},\"devDependencies\":{\"chalk\":\"^2.4.2\",\"xo\":\"^0.24.0\"},\"dependencies\":{\"color-name\":\"~1.1.4\"}}");

/***/ }),

/***/ 9838:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"color-name\",\"version\":\"1.1.4\",\"description\":\"A list of color names and its values\",\"main\":\"index.js\",\"files\":[\"index.js\"],\"scripts\":{\"test\":\"node test.js\"},\"repository\":{\"type\":\"git\",\"url\":\"git@github.com:colorjs/color-name.git\"},\"keywords\":[\"color-name\",\"color\",\"color-keyword\",\"keyword\"],\"author\":\"DY <dfcreative@gmail.com>\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/colorjs/color-name/issues\"},\"homepage\":\"https://github.com/colorjs/color-name\"}");

/***/ }),

/***/ 2206:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"has-flag\",\"version\":\"4.0.0\",\"description\":\"Check if argv has a specific flag\",\"license\":\"MIT\",\"repository\":\"sindresorhus/has-flag\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava && tsd\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"has\",\"check\",\"detect\",\"contains\",\"find\",\"flag\",\"cli\",\"command-line\",\"argv\",\"process\",\"arg\",\"args\",\"argument\",\"arguments\",\"getopt\",\"minimist\",\"optimist\"],\"devDependencies\":{\"ava\":\"^1.4.1\",\"tsd\":\"^0.7.2\",\"xo\":\"^0.24.0\"}}");

/***/ }),

/***/ 2230:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"supports-color\",\"version\":\"7.2.0\",\"description\":\"Detect whether a terminal supports color\",\"license\":\"MIT\",\"repository\":\"chalk/supports-color\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava\"},\"files\":[\"index.js\",\"browser.js\"],\"keywords\":[\"color\",\"colour\",\"colors\",\"terminal\",\"console\",\"cli\",\"ansi\",\"styles\",\"tty\",\"rgb\",\"256\",\"shell\",\"xterm\",\"command-line\",\"support\",\"supports\",\"capability\",\"detect\",\"truecolor\",\"16m\"],\"dependencies\":{\"has-flag\":\"^4.0.0\"},\"devDependencies\":{\"ava\":\"^1.4.1\",\"import-fresh\":\"^3.0.0\",\"xo\":\"^0.24.0\"},\"browser\":\"browser.js\"}");

/***/ }),

/***/ 5741:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"log-symbols\",\"version\":\"4.1.0\",\"description\":\"Colored symbols for various log levels. Example: `✔︎ Success`\",\"license\":\"MIT\",\"repository\":\"sindresorhus/log-symbols\",\"funding\":\"https://github.com/sponsors/sindresorhus\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"https://sindresorhus.com\"},\"engines\":{\"node\":\">=10\"},\"scripts\":{\"test\":\"xo && ava && tsd\"},\"files\":[\"index.js\",\"index.d.ts\",\"browser.js\"],\"keywords\":[\"unicode\",\"cli\",\"cmd\",\"command-line\",\"characters\",\"symbol\",\"symbols\",\"figure\",\"figures\",\"fallback\",\"windows\",\"log\",\"logging\",\"terminal\",\"stdout\"],\"dependencies\":{\"chalk\":\"^4.1.0\",\"is-unicode-supported\":\"^0.1.0\"},\"devDependencies\":{\"ava\":\"^2.4.0\",\"strip-ansi\":\"^6.0.0\",\"tsd\":\"^0.14.0\",\"xo\":\"^0.38.2\"},\"browser\":\"browser.js\"}");

/***/ }),

/***/ 1410:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"lru-cache\",\"description\":\"A cache object that deletes the least-recently-used items.\",\"version\":\"5.1.1\",\"author\":\"Isaac Z. Schlueter <i@izs.me>\",\"keywords\":[\"mru\",\"lru\",\"cache\"],\"scripts\":{\"test\":\"tap test/*.js --100 -J\",\"snap\":\"TAP_SNAPSHOT=1 tap test/*.js -J\",\"coveragerport\":\"tap --coverage-report=html\",\"preversion\":\"npm test\",\"postversion\":\"npm publish\",\"postpublish\":\"git push origin --all; git push origin --tags\"},\"main\":\"index.js\",\"repository\":\"git://github.com/isaacs/node-lru-cache.git\",\"devDependencies\":{\"benchmark\":\"^2.1.4\",\"tap\":\"^12.1.0\"},\"license\":\"ISC\",\"dependencies\":{\"yallist\":\"^3.0.2\"},\"files\":[\"index.js\"]}");

/***/ }),

/***/ 3121:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"merge2\",\"description\":\"Merge multiple streams into one stream in sequence or parallel.\",\"authors\":[\"Yan Qing <admin@zensh.com>\"],\"license\":\"MIT\",\"version\":\"1.4.1\",\"main\":\"./index.js\",\"repository\":{\"type\":\"git\",\"url\":\"git@github.com:teambition/merge2.git\"},\"homepage\":\"https://github.com/teambition/merge2\",\"keywords\":[\"merge2\",\"multiple\",\"sequence\",\"parallel\",\"merge\",\"stream\",\"merge stream\",\"sync\"],\"engines\":{\"node\":\">= 8\"},\"dependencies\":{},\"devDependencies\":{\"standard\":\"^14.3.4\",\"through2\":\"^3.0.1\",\"thunks\":\"^4.9.6\",\"tman\":\"^1.10.0\",\"to-through\":\"^2.0.0\"},\"scripts\":{\"test\":\"standard && tman\"},\"files\":[\"README.md\",\"index.js\"]}");

/***/ }),

/***/ 4266:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"micromatch\",\"description\":\"Glob matching for javascript/node.js. A replacement and faster alternative to minimatch and multimatch.\",\"version\":\"4.0.5\",\"homepage\":\"https://github.com/micromatch/micromatch\",\"author\":\"Jon Schlinkert (https://github.com/jonschlinkert)\",\"contributors\":[\"(https://github.com/DianeLooney)\",\"Amila Welihinda (amilajack.com)\",\"Bogdan Chadkin (https://github.com/TrySound)\",\"Brian Woodward (https://twitter.com/doowb)\",\"Devon Govett (http://badassjs.com)\",\"Elan Shanker (https://github.com/es128)\",\"Fabrício Matté (https://ultcombo.js.org)\",\"Jon Schlinkert (http://twitter.com/jonschlinkert)\",\"Martin Kolárik (https://kolarik.sk)\",\"Olsten Larck (https://i.am.charlike.online)\",\"Paul Miller (paulmillr.com)\",\"Tom Byrer (https://github.com/tomByrer)\",\"Tyler Akins (http://rumkin.com)\",\"Peter Bright <drpizza@quiscalusmexicanus.org> (https://github.com/drpizza)\",\"Kuba Juszczyk (https://github.com/ku8ar)\"],\"repository\":\"micromatch/micromatch\",\"bugs\":{\"url\":\"https://github.com/micromatch/micromatch/issues\"},\"license\":\"MIT\",\"files\":[\"index.js\"],\"main\":\"index.js\",\"engines\":{\"node\":\">=8.6\"},\"scripts\":{\"test\":\"mocha\"},\"dependencies\":{\"braces\":\"^3.0.2\",\"picomatch\":\"^2.3.1\"},\"devDependencies\":{\"fill-range\":\"^7.0.1\",\"gulp-format-md\":\"^2.0.0\",\"minimatch\":\"^5.0.1\",\"mocha\":\"^9.2.2\",\"time-require\":\"github:jonschlinkert/time-require\"},\"keywords\":[\"bash\",\"bracket\",\"character-class\",\"expand\",\"expansion\",\"expression\",\"extglob\",\"extglobs\",\"file\",\"files\",\"filter\",\"find\",\"glob\",\"globbing\",\"globs\",\"globstar\",\"lookahead\",\"lookaround\",\"lookbehind\",\"match\",\"matcher\",\"matches\",\"matching\",\"micromatch\",\"minimatch\",\"multimatch\",\"negate\",\"negation\",\"path\",\"pattern\",\"patterns\",\"posix\",\"regex\",\"regexp\",\"regular\",\"shell\",\"star\",\"wildcard\"],\"verb\":{\"toc\":\"collapsible\",\"layout\":\"default\",\"tasks\":[\"readme\"],\"plugins\":[\"gulp-format-md\"],\"lint\":{\"reflinks\":true},\"related\":{\"list\":[\"braces\",\"expand-brackets\",\"extglob\",\"fill-range\",\"nanomatch\"]},\"reflinks\":[\"extglob\",\"fill-range\",\"glob-object\",\"minimatch\",\"multimatch\"]}}");

/***/ }),

/***/ 92:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"mimic-fn\",\"version\":\"2.1.0\",\"description\":\"Make a function mimic another one\",\"license\":\"MIT\",\"repository\":\"sindresorhus/mimic-fn\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=6\"},\"scripts\":{\"test\":\"xo && ava && tsd\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"function\",\"mimic\",\"imitate\",\"rename\",\"copy\",\"inherit\",\"properties\",\"name\",\"func\",\"fn\",\"set\",\"infer\",\"change\"],\"devDependencies\":{\"ava\":\"^1.4.1\",\"tsd\":\"^0.7.1\",\"xo\":\"^0.24.0\"}}");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"author\":\"Isaac Z. Schlueter <i@izs.me> (http://blog.izs.me)\",\"name\":\"minimatch\",\"description\":\"a glob matcher in javascript\",\"version\":\"3.1.2\",\"publishConfig\":{\"tag\":\"v3-legacy\"},\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/isaacs/minimatch.git\"},\"main\":\"minimatch.js\",\"scripts\":{\"test\":\"tap\",\"preversion\":\"npm test\",\"postversion\":\"npm publish\",\"postpublish\":\"git push origin --all; git push origin --tags\"},\"engines\":{\"node\":\"*\"},\"dependencies\":{\"brace-expansion\":\"^1.1.7\"},\"devDependencies\":{\"tap\":\"^15.1.6\"},\"license\":\"ISC\",\"files\":[\"minimatch.js\"]}");

/***/ }),

/***/ 317:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"ms\",\"version\":\"2.1.2\",\"description\":\"Tiny millisecond conversion utility\",\"repository\":\"zeit/ms\",\"main\":\"./index\",\"files\":[\"index.js\"],\"scripts\":{\"precommit\":\"lint-staged\",\"lint\":\"eslint lib/* bin/*\",\"test\":\"mocha tests.js\"},\"eslintConfig\":{\"extends\":\"eslint:recommended\",\"env\":{\"node\":true,\"es6\":true}},\"lint-staged\":{\"*.js\":[\"npm run lint\",\"prettier --single-quote --write\",\"git add\"]},\"license\":\"MIT\",\"devDependencies\":{\"eslint\":\"4.12.1\",\"expect.js\":\"0.3.1\",\"husky\":\"0.14.3\",\"lint-staged\":\"5.0.0\",\"mocha\":\"4.0.1\"}}");

/***/ }),

/***/ 5274:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"mute-stream\",\"version\":\"0.0.8\",\"main\":\"mute.js\",\"directories\":{\"test\":\"test\"},\"devDependencies\":{\"tap\":\"^12.1.1\"},\"scripts\":{\"test\":\"tap test/*.js --cov\"},\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/isaacs/mute-stream\"},\"keywords\":[\"mute\",\"stream\",\"pipe\"],\"author\":\"Isaac Z. Schlueter <i@izs.me> (http://blog.izs.me/)\",\"license\":\"ISC\",\"description\":\"Bytes go in, but they don't come out (when muted).\",\"files\":[\"mute.js\"]}");

/***/ }),

/***/ 7503:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"natural-compare\",\"version\":\"1.4.0\",\"stability\":3,\"author\":\"Lauri Rooden (https://github.com/litejs/natural-compare-lite)\",\"license\":\"MIT\",\"description\":\"Compare strings containing a mix of letters and numbers in the way a human being would in sort order.\",\"keywords\":[\"string\",\"natural\",\"order\",\"sort\",\"natsort\",\"natcmp\",\"compare\",\"alphanum\",\"litejs\"],\"main\":\"index.js\",\"readmeFilename\":\"README.md\",\"files\":[\"index.js\"],\"scripts\":{\"build\":\"node node_modules/buildman/index.js --all\",\"test\":\"node tests/index.js\"},\"repository\":\"git://github.com/litejs/natural-compare-lite.git\",\"bugs\":{\"url\":\"https://github.com/litejs/natural-compare-lite/issues\"},\"devDependencies\":{\"buildman\":\"*\",\"testman\":\"*\"},\"buildman\":{\"dist/index-min.js\":{\"banner\":\"/*! litejs.com/MIT-LICENSE.txt */\",\"input\":\"index.js\"}}}");

/***/ }),

/***/ 4144:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"node-releases\",\"version\":\"2.0.12\",\"description\":\"Node.js releases data\",\"type\":\"module\",\"scripts\":{\"build\":\"node scripts/build.js\"},\"repository\":\"chicoxyzzy/node-releases\",\"keywords\":[\"nodejs\",\"releases\"],\"author\":\"Sergey Rubanov <chi187@gmail.com>\",\"license\":\"MIT\",\"devDependencies\":{\"semver\":\"^7.3.5\"}}");

/***/ }),

/***/ 7376:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"once\",\"version\":\"1.4.0\",\"description\":\"Run a function exactly one time\",\"main\":\"once.js\",\"directories\":{\"test\":\"test\"},\"dependencies\":{\"wrappy\":\"1\"},\"devDependencies\":{\"tap\":\"^7.0.1\"},\"scripts\":{\"test\":\"tap test/*.js\"},\"files\":[\"once.js\"],\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/isaacs/once\"},\"keywords\":[\"once\",\"function\",\"one\",\"single\"],\"author\":\"Isaac Z. Schlueter <i@izs.me> (http://blog.izs.me/)\",\"license\":\"ISC\"}");

/***/ }),

/***/ 4776:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"onetime\",\"version\":\"5.1.2\",\"description\":\"Ensure a function is only called once\",\"license\":\"MIT\",\"repository\":\"sindresorhus/onetime\",\"funding\":\"https://github.com/sponsors/sindresorhus\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"https://sindresorhus.com\"},\"engines\":{\"node\":\">=6\"},\"scripts\":{\"test\":\"xo && ava && tsd\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"once\",\"function\",\"one\",\"onetime\",\"func\",\"fn\",\"single\",\"call\",\"called\",\"prevent\"],\"dependencies\":{\"mimic-fn\":\"^2.1.0\"},\"devDependencies\":{\"ava\":\"^1.4.1\",\"tsd\":\"^0.7.1\",\"xo\":\"^0.24.0\"}}");

/***/ }),

/***/ 9026:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"optionator\",\"version\":\"0.9.1\",\"author\":\"George Zahariev <z@georgezahariev.com>\",\"description\":\"option parsing and help generation\",\"homepage\":\"https://github.com/gkz/optionator\",\"keywords\":[\"options\",\"flags\",\"option parsing\",\"cli\"],\"files\":[\"lib\",\"README.md\",\"LICENSE\"],\"main\":\"./lib/\",\"bugs\":\"https://github.com/gkz/optionator/issues\",\"license\":\"MIT\",\"engines\":{\"node\":\">= 0.8.0\"},\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/gkz/optionator.git\"},\"scripts\":{\"test\":\"make test\"},\"dependencies\":{\"prelude-ls\":\"^1.2.1\",\"deep-is\":\"^0.1.3\",\"word-wrap\":\"^1.2.3\",\"type-check\":\"^0.4.0\",\"levn\":\"^0.4.1\",\"fast-levenshtein\":\"^2.0.6\"},\"devDependencies\":{\"livescript\":\"^1.6.0\",\"mocha\":\"^7.1.1\"}}");

/***/ }),

/***/ 4370:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"os-tmpdir\",\"version\":\"1.0.2\",\"description\":\"Node.js os.tmpdir() ponyfill\",\"license\":\"MIT\",\"repository\":\"sindresorhus/os-tmpdir\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=0.10.0\"},\"scripts\":{\"test\":\"xo && ava\"},\"files\":[\"index.js\"],\"keywords\":[\"built-in\",\"core\",\"ponyfill\",\"polyfill\",\"shim\",\"os\",\"tmpdir\",\"tempdir\",\"tmp\",\"temp\",\"dir\",\"directory\",\"env\",\"environment\"],\"devDependencies\":{\"ava\":\"*\",\"xo\":\"^0.16.0\"}}");

/***/ }),

/***/ 2802:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"parent-module\",\"version\":\"1.0.1\",\"description\":\"Get the path of the parent module\",\"license\":\"MIT\",\"repository\":\"sindresorhus/parent-module\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=6\"},\"scripts\":{\"test\":\"xo && ava\"},\"files\":[\"index.js\"],\"keywords\":[\"parent\",\"module\",\"package\",\"pkg\",\"caller\",\"calling\",\"module\",\"path\",\"callsites\",\"callsite\",\"stacktrace\",\"stack\",\"trace\",\"function\",\"file\"],\"dependencies\":{\"callsites\":\"^3.0.0\"},\"devDependencies\":{\"ava\":\"^1.4.1\",\"execa\":\"^1.0.0\",\"xo\":\"^0.24.0\"}}");

/***/ }),

/***/ 5418:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"path-is-absolute\",\"version\":\"1.0.1\",\"description\":\"Node.js 0.12 path.isAbsolute() ponyfill\",\"license\":\"MIT\",\"repository\":\"sindresorhus/path-is-absolute\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=0.10.0\"},\"scripts\":{\"test\":\"xo && node test.js\"},\"files\":[\"index.js\"],\"keywords\":[\"path\",\"paths\",\"file\",\"dir\",\"absolute\",\"isabsolute\",\"is-absolute\",\"built-in\",\"util\",\"utils\",\"core\",\"ponyfill\",\"polyfill\",\"shim\",\"is\",\"detect\",\"check\"],\"devDependencies\":{\"xo\":\"^0.16.0\"}}");

/***/ }),

/***/ 8664:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"path-key\",\"version\":\"3.1.1\",\"description\":\"Get the PATH environment variable key cross-platform\",\"license\":\"MIT\",\"repository\":\"sindresorhus/path-key\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava && tsd\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"path\",\"key\",\"environment\",\"env\",\"variable\",\"var\",\"get\",\"cross-platform\",\"windows\"],\"devDependencies\":{\"@types/node\":\"^11.13.0\",\"ava\":\"^1.4.1\",\"tsd\":\"^0.7.2\",\"xo\":\"^0.24.0\"}}");

/***/ }),

/***/ 8042:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"path-type\",\"version\":\"4.0.0\",\"description\":\"Check if a path is a file, directory, or symlink\",\"license\":\"MIT\",\"repository\":\"sindresorhus/path-type\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && nyc ava && tsd-check\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"path\",\"fs\",\"type\",\"is\",\"check\",\"directory\",\"dir\",\"file\",\"filepath\",\"symlink\",\"symbolic\",\"link\",\"stat\",\"stats\",\"filesystem\"],\"devDependencies\":{\"ava\":\"^1.3.1\",\"nyc\":\"^13.3.0\",\"tsd-check\":\"^0.3.0\",\"xo\":\"^0.24.0\"}}");

/***/ }),

/***/ 7999:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"picocolors\",\"version\":\"1.0.0\",\"main\":\"./picocolors.js\",\"types\":\"./picocolors.d.ts\",\"browser\":{\"./picocolors.js\":\"./picocolors.browser.js\"},\"sideEffects\":false,\"description\":\"The tiniest and the fastest library for terminal output formatting with ANSI colors\",\"files\":[\"picocolors.*\",\"types.ts\"],\"keywords\":[\"terminal\",\"colors\",\"formatting\",\"cli\",\"console\"],\"author\":\"Alexey Raspopov\",\"repository\":\"alexeyraspopov/picocolors\",\"license\":\"ISC\"}");

/***/ }),

/***/ 5202:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"picomatch\",\"description\":\"Blazing fast and accurate glob matcher written in JavaScript, with no dependencies and full support for standard and extended Bash glob features, including braces, extglobs, POSIX brackets, and regular expressions.\",\"version\":\"2.3.1\",\"homepage\":\"https://github.com/micromatch/picomatch\",\"author\":\"Jon Schlinkert (https://github.com/jonschlinkert)\",\"funding\":\"https://github.com/sponsors/jonschlinkert\",\"repository\":\"micromatch/picomatch\",\"bugs\":{\"url\":\"https://github.com/micromatch/picomatch/issues\"},\"license\":\"MIT\",\"files\":[\"index.js\",\"lib\"],\"main\":\"index.js\",\"engines\":{\"node\":\">=8.6\"},\"scripts\":{\"lint\":\"eslint --cache --cache-location node_modules/.cache/.eslintcache --report-unused-disable-directives --ignore-path .gitignore .\",\"mocha\":\"mocha --reporter dot\",\"test\":\"npm run lint && npm run mocha\",\"test:ci\":\"npm run test:cover\",\"test:cover\":\"nyc npm run mocha\"},\"devDependencies\":{\"eslint\":\"^6.8.0\",\"fill-range\":\"^7.0.1\",\"gulp-format-md\":\"^2.0.0\",\"mocha\":\"^6.2.2\",\"nyc\":\"^15.0.0\",\"time-require\":\"github:jonschlinkert/time-require\"},\"keywords\":[\"glob\",\"match\",\"picomatch\"],\"nyc\":{\"reporter\":[\"html\",\"lcov\",\"text-summary\"]},\"verb\":{\"toc\":{\"render\":true,\"method\":\"preWrite\",\"maxdepth\":3},\"layout\":\"empty\",\"tasks\":[\"readme\"],\"plugins\":[\"gulp-format-md\"],\"lint\":{\"reflinks\":true},\"related\":{\"list\":[\"braces\",\"micromatch\"]},\"reflinks\":[\"braces\",\"expand-brackets\",\"extglob\",\"fill-range\",\"micromatch\",\"minimatch\",\"nanomatch\",\"picomatch\"]}}");

/***/ }),

/***/ 2546:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"prelude-ls\",\"version\":\"1.2.1\",\"author\":\"George Zahariev <z@georgezahariev.com>\",\"description\":\"prelude.ls is a functionally oriented utility library. It is powerful and flexible. Almost all of its functions are curried. It is written in, and is the recommended base library for, LiveScript.\",\"keywords\":[\"prelude\",\"livescript\",\"utility\",\"ls\",\"coffeescript\",\"javascript\",\"library\",\"functional\",\"array\",\"list\",\"object\",\"string\"],\"main\":\"lib/\",\"files\":[\"lib/\",\"README.md\",\"LICENSE\"],\"homepage\":\"http://preludels.com\",\"bugs\":\"https://github.com/gkz/prelude-ls/issues\",\"license\":\"MIT\",\"engines\":{\"node\":\">= 0.8.0\"},\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/gkz/prelude-ls.git\"},\"scripts\":{\"test\":\"make test\"},\"devDependencies\":{\"livescript\":\"^1.6.0\",\"uglify-js\":\"^3.8.1\",\"mocha\":\"^7.1.1\",\"browserify\":\"^16.5.1\",\"sinon\":\"~8.0.1\"}}");

/***/ }),

/***/ 4493:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"progress\",\"version\":\"2.0.3\",\"description\":\"Flexible ascii progress bar\",\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/visionmedia/node-progress\"},\"keywords\":[\"cli\",\"progress\"],\"author\":\"TJ Holowaychuk <tj@vision-media.ca>\",\"contributors\":[\"Christoffer Hallas <christoffer.hallas@gmail.com>\",\"Jordan Scales <scalesjordan@gmail.com>\",\"Andrew Rhyne <rhyneandrew@gmail.com>\",\"Marco Brack <PapstDonB@Googlemail.com>\"],\"dependencies\":{},\"main\":\"./index.js\",\"engines\":{\"node\":\">=0.4.0\"},\"license\":\"MIT\"}");

/***/ }),

/***/ 9548:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"punycode\",\"version\":\"2.3.0\",\"description\":\"A robust Punycode converter that fully complies to RFC 3492 and RFC 5891, and works on nearly all JavaScript platforms.\",\"homepage\":\"https://mths.be/punycode\",\"main\":\"punycode.js\",\"jsnext:main\":\"punycode.es6.js\",\"module\":\"punycode.es6.js\",\"engines\":{\"node\":\">=6\"},\"keywords\":[\"punycode\",\"unicode\",\"idn\",\"idna\",\"dns\",\"url\",\"domain\"],\"license\":\"MIT\",\"author\":{\"name\":\"Mathias Bynens\",\"url\":\"https://mathiasbynens.be/\"},\"contributors\":[{\"name\":\"Mathias Bynens\",\"url\":\"https://mathiasbynens.be/\"}],\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/mathiasbynens/punycode.js.git\"},\"bugs\":\"https://github.com/mathiasbynens/punycode.js/issues\",\"files\":[\"LICENSE-MIT.txt\",\"punycode.js\",\"punycode.es6.js\"],\"scripts\":{\"test\":\"mocha tests\",\"build\":\"node scripts/prepublish.js\"},\"devDependencies\":{\"codecov\":\"^1.0.1\",\"istanbul\":\"^0.4.1\",\"mocha\":\"^10.2.0\"},\"jspm\":{\"map\":{\"./punycode.js\":{\"node\":\"@node/punycode\"}}}}");

/***/ }),

/***/ 6966:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"queue-microtask\",\"description\":\"fast, tiny `queueMicrotask` shim for modern engines\",\"version\":\"1.2.3\",\"author\":{\"name\":\"Feross Aboukhadijeh\",\"email\":\"feross@feross.org\",\"url\":\"https://feross.org\"},\"bugs\":{\"url\":\"https://github.com/feross/queue-microtask/issues\"},\"devDependencies\":{\"standard\":\"*\",\"tape\":\"^5.2.2\"},\"funding\":[{\"type\":\"github\",\"url\":\"https://github.com/sponsors/feross\"},{\"type\":\"patreon\",\"url\":\"https://www.patreon.com/feross\"},{\"type\":\"consulting\",\"url\":\"https://feross.org/support\"}],\"homepage\":\"https://github.com/feross/queue-microtask\",\"keywords\":[\"asap\",\"immediate\",\"micro task\",\"microtask\",\"nextTick\",\"process.nextTick\",\"queue micro task\",\"queue microtask\",\"queue-microtask\",\"queueMicrotask\",\"setImmediate\",\"task\"],\"license\":\"MIT\",\"main\":\"index.js\",\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/feross/queue-microtask.git\"},\"scripts\":{\"test\":\"standard && tape test/*.js\"}}");

/***/ }),

/***/ 9263:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"regexpp\",\"version\":\"3.2.0\",\"description\":\"Regular expression parser for ECMAScript.\",\"engines\":{\"node\":\">=8\"},\"main\":\"index\",\"files\":[\"index.*\"],\"exports\":{\".\":{\"import\":\"./index.mjs\",\"default\":\"./index.js\"},\"./package.json\":\"./package.json\"},\"dependencies\":{},\"devDependencies\":{\"@mysticatea/eslint-plugin\":\"^11.0.0\",\"@types/eslint\":\"^4.16.2\",\"@types/jsdom\":\"^12.2.4\",\"@types/mocha\":\"^5.2.2\",\"@types/node\":\"^12.6.8\",\"codecov\":\"^3.5.0\",\"dts-bundle\":\"^0.7.3\",\"eslint\":\"^6.1.0\",\"jsdom\":\"^15.1.1\",\"mocha\":\"^6.2.0\",\"npm-run-all\":\"^4.1.5\",\"nyc\":\"^14.1.1\",\"rimraf\":\"^2.6.2\",\"rollup\":\"^1.17.0\",\"rollup-plugin-node-resolve\":\"^5.2.0\",\"rollup-plugin-sourcemaps\":\"^0.4.2\",\"ts-node\":\"^8.3.0\",\"typescript\":\"^3.5.3\"},\"scripts\":{\"prebuild\":\"npm run -s clean\",\"build\":\"run-s build:*\",\"build:tsc\":\"tsc --module es2015\",\"build:rollup\":\"rollup -c\",\"build:dts\":\"dts-bundle --name regexpp --main .temp/index.d.ts --out ../index.d.ts\",\"clean\":\"rimraf .temp index.*\",\"codecov\":\"nyc report -r lcovonly && codecov -t ${CODECOV_TOKEN} --disable=gcov\",\"lint\":\"eslint scripts src test --ext .ts\",\"pretest\":\"run-s build lint\",\"test\":\"nyc _mocha \\\"test/*.ts\\\" --reporter dot --timeout 10000\",\"update:test\":\"ts-node scripts/update-fixtures.ts\",\"update:unicode\":\"run-s update:unicode:*\",\"update:unicode:ids\":\"ts-node scripts/update-unicode-ids.ts\",\"update:unicode:props\":\"ts-node scripts/update-unicode-properties.ts\",\"preversion\":\"npm test\",\"version\":\"npm run -s build\",\"postversion\":\"git push && git push --tags\",\"prewatch\":\"npm run -s clean\",\"watch\":\"_mocha \\\"test/*.ts\\\" --require ts-node/register --reporter dot --timeout 10000 --watch-extensions ts --watch --growl\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/mysticatea/regexpp.git\"},\"keywords\":[\"regexp\",\"regular\",\"expression\",\"parser\",\"validator\",\"ast\",\"abstract\",\"syntax\",\"tree\",\"ecmascript\",\"es2015\",\"es2016\",\"es2017\",\"es2018\",\"es2019\",\"es2020\",\"annexB\"],\"author\":\"Toru Nagashima (https://github.com/mysticatea)\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/mysticatea/regexpp/issues\"},\"homepage\":\"https://github.com/mysticatea/regexpp#readme\",\"funding\":\"https://github.com/sponsors/mysticatea\"}");

/***/ }),

/***/ 9643:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"require-from-string\",\"version\":\"2.0.2\",\"description\":\"Require module from string\",\"license\":\"MIT\",\"repository\":\"floatdrop/require-from-string\",\"author\":{\"name\":\"Vsevolod Strukchinsky\",\"email\":\"floatdrop@gmail.com\",\"url\":\"github.com/floatdrop\"},\"engines\":{\"node\":\">=0.10.0\"},\"scripts\":{\"test\":\"mocha\"},\"files\":[\"index.js\"],\"keywords\":[\"\"],\"dependencies\":{},\"devDependencies\":{\"mocha\":\"*\"}}");

/***/ }),

/***/ 8659:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"resolve-from\",\"version\":\"4.0.0\",\"description\":\"Resolve the path of a module like `require.resolve()` but from a given path\",\"license\":\"MIT\",\"repository\":\"sindresorhus/resolve-from\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=4\"},\"scripts\":{\"test\":\"xo && ava\"},\"files\":[\"index.js\"],\"keywords\":[\"require\",\"resolve\",\"path\",\"module\",\"from\",\"like\",\"import\"],\"devDependencies\":{\"ava\":\"*\",\"xo\":\"*\"}}");

/***/ }),

/***/ 5667:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"restore-cursor\",\"version\":\"3.1.0\",\"description\":\"Gracefully restore the CLI cursor on exit\",\"license\":\"MIT\",\"repository\":\"sindresorhus/restore-cursor\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && tsd\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"exit\",\"quit\",\"process\",\"graceful\",\"shutdown\",\"sigterm\",\"sigint\",\"terminate\",\"kill\",\"stop\",\"cli\",\"cursor\",\"ansi\",\"show\",\"term\",\"terminal\",\"console\",\"tty\",\"shell\",\"command-line\"],\"dependencies\":{\"onetime\":\"^5.1.0\",\"signal-exit\":\"^3.0.2\"},\"devDependencies\":{\"tsd\":\"^0.7.2\",\"xo\":\"^0.24.0\"}}");

/***/ }),

/***/ 7263:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"reusify\",\"version\":\"1.0.4\",\"description\":\"Reuse objects and functions with style\",\"main\":\"reusify.js\",\"scripts\":{\"lint\":\"standard\",\"test\":\"tape test.js | faucet\",\"istanbul\":\"istanbul cover tape test.js\",\"coverage\":\"npm run istanbul; cat coverage/lcov.info | coveralls\"},\"pre-commit\":[\"lint\",\"test\"],\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/mcollina/reusify.git\"},\"keywords\":[\"reuse\",\"object\",\"performance\",\"function\",\"fast\"],\"author\":\"Matteo Collina <hello@matteocollina.com>\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/mcollina/reusify/issues\"},\"homepage\":\"https://github.com/mcollina/reusify#readme\",\"engines\":{\"node\":\">=0.10.0\",\"iojs\":\">=1.0.0\"},\"devDependencies\":{\"coveralls\":\"^2.13.3\",\"faucet\":\"0.0.1\",\"istanbul\":\"^0.4.5\",\"pre-commit\":\"^1.2.2\",\"standard\":\"^10.0.3\",\"tape\":\"^4.8.0\"}}");

/***/ }),

/***/ 5817:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"rimraf\",\"version\":\"3.0.2\",\"main\":\"rimraf.js\",\"description\":\"A deep deletion module for node (like `rm -rf`)\",\"author\":\"Isaac Z. Schlueter <i@izs.me> (http://blog.izs.me/)\",\"license\":\"ISC\",\"repository\":\"git://github.com/isaacs/rimraf.git\",\"scripts\":{\"preversion\":\"npm test\",\"postversion\":\"npm publish\",\"postpublish\":\"git push origin --follow-tags\",\"test\":\"tap test/*.js\"},\"bin\":\"./bin.js\",\"dependencies\":{\"glob\":\"^7.1.3\"},\"files\":[\"LICENSE\",\"README.md\",\"bin.js\",\"rimraf.js\"],\"devDependencies\":{\"mkdirp\":\"^0.5.1\",\"tap\":\"^12.1.1\"},\"funding\":{\"url\":\"https://github.com/sponsors/isaacs\"}}");

/***/ }),

/***/ 8213:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"run-async\",\"version\":\"2.4.1\",\"description\":\"Utility method to run function either synchronously or asynchronously using the common `this.async()` style.\",\"main\":\"index.js\",\"scripts\":{\"test\":\"mocha -R spec\"},\"engines\":{\"node\":\">=0.12.0\"},\"repository\":\"SBoudrias/run-async\",\"keywords\":[\"flow\",\"flow-control\",\"async\"],\"files\":[\"index.js\"],\"author\":\"Simon Boudrias <admin@simonboudrias.com>\",\"license\":\"MIT\",\"dependencies\":{},\"devDependencies\":{\"mocha\":\"^7.1.0\"}}");

/***/ }),

/***/ 2186:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"run-parallel\",\"description\":\"Run an array of functions in parallel\",\"version\":\"1.2.0\",\"author\":{\"name\":\"Feross Aboukhadijeh\",\"email\":\"feross@feross.org\",\"url\":\"https://feross.org\"},\"bugs\":{\"url\":\"https://github.com/feross/run-parallel/issues\"},\"dependencies\":{\"queue-microtask\":\"^1.2.2\"},\"devDependencies\":{\"airtap\":\"^3.0.0\",\"standard\":\"*\",\"tape\":\"^5.0.1\"},\"homepage\":\"https://github.com/feross/run-parallel\",\"keywords\":[\"parallel\",\"async\",\"function\",\"callback\",\"asynchronous\",\"run\",\"array\",\"run parallel\"],\"license\":\"MIT\",\"main\":\"index.js\",\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/feross/run-parallel.git\"},\"scripts\":{\"test\":\"standard && npm run test-node && npm run test-browser\",\"test-browser\":\"airtap -- test/*.js\",\"test-browser-local\":\"airtap --local -- test/*.js\",\"test-node\":\"tape test/*.js\"},\"funding\":[{\"type\":\"github\",\"url\":\"https://github.com/sponsors/feross\"},{\"type\":\"patreon\",\"url\":\"https://www.patreon.com/feross\"},{\"type\":\"consulting\",\"url\":\"https://feross.org/support\"}]}");

/***/ }),

/***/ 9284:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"rxjs/ajax\",\"typings\":\"./index.d.ts\",\"main\":\"./index.js\",\"module\":\"../_esm5/ajax/index.js\",\"es2015\":\"../_esm2015/ajax/index.js\",\"sideEffects\":false}");

/***/ }),

/***/ 3410:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"rxjs/fetch\",\"typings\":\"./index.d.ts\",\"main\":\"./index.js\",\"module\":\"../_esm5/fetch/index.js\",\"es2015\":\"../_esm2015/fetch/index.js\",\"sideEffects\":false}");

/***/ }),

/***/ 6473:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"rxjs/internal-compatibility\",\"typings\":\"./index.d.ts\",\"main\":\"./index.js\",\"module\":\"../_esm5/internal-compatibility/index.js\",\"es2015\":\"../_esm2015/internal-compatibility/index.js\",\"sideEffects\":false}");

/***/ }),

/***/ 9109:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"rxjs/operators\",\"typings\":\"./index.d.ts\",\"main\":\"./index.js\",\"module\":\"../_esm5/operators/index.js\",\"es2015\":\"../_esm2015/operators/index.js\",\"sideEffects\":false}");

/***/ }),

/***/ 248:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"rxjs\",\"version\":\"6.6.7\",\"description\":\"Reactive Extensions for modern JavaScript\",\"main\":\"./index.js\",\"sideEffects\":false,\"config\":{\"commitizen\":{\"path\":\"cz-conventional-changelog\"}},\"nyc\":{\"include\":[\"src/*.ts\",\"src/**/*.ts\"],\"exclude\":[\"node_modules\",\"dist\",\"*.d.ts\",\"src/**/MiscJSDoc.ts\"],\"extension\":[\".ts\"],\"reporter\":[\"html\"],\"all\":true},\"lint-staged\":{\"linters\":{\"*.@(js)\":[\"eslint --fix\",\"git add\"],\"*.@(ts)\":[\"tslint --fix\",\"git add\"]},\"ignore\":[\"spec-dtslint/**/*.{js,ts}\",\"api_guard/**/*.{js,ts}\"]},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/reactivex/rxjs.git\"},\"keywords\":[\"Rx\",\"RxJS\",\"ReactiveX\",\"ReactiveExtensions\",\"Streams\",\"Observables\",\"Observable\",\"Stream\",\"ES6\",\"ES2015\"],\"author\":\"Ben Lesh <ben@benlesh.com>\",\"contributors\":[{\"name\":\"Ben Lesh\",\"email\":\"ben@benlesh.com\"},{\"name\":\"Paul Taylor\",\"email\":\"paul.e.taylor@me.com\"},{\"name\":\"Jeff Cross\",\"email\":\"crossj@google.com\"},{\"name\":\"Matthew Podwysocki\",\"email\":\"matthewp@microsoft.com\"},{\"name\":\"OJ Kwon\",\"email\":\"kwon.ohjoong@gmail.com\"},{\"name\":\"Andre Staltz\",\"email\":\"andre@staltz.com\"}],\"license\":\"Apache-2.0\",\"bugs\":{\"url\":\"https://github.com/ReactiveX/RxJS/issues\"},\"homepage\":\"https://github.com/ReactiveX/RxJS\",\"dependencies\":{\"tslib\":\"^1.9.0\"},\"devDependencies\":{\"@angular-devkit/build-optimizer\":\"0.4.6\",\"@angular-devkit/schematics\":\"^0.5.4\",\"@types/chai\":\"4.1.2\",\"@types/lodash\":\"4.14.102\",\"@types/mocha\":\"2.2.48\",\"@types/node\":\"9.4.5\",\"@types/sinon\":\"4.1.3\",\"@types/sinon-chai\":\"2.7.29\",\"@types/source-map\":\"^0.5.2\",\"babel-polyfill\":\"6.26.0\",\"benchmark\":\"2.1.0\",\"benchpress\":\"2.0.0-beta.1\",\"chai\":\"4.1.2\",\"check-side-effects\":\"0.0.20\",\"color\":\"3.0.0\",\"colors\":\"1.1.2\",\"commitizen\":\"2.9.6\",\"coveralls\":\"3.0.0\",\"cross-env\":\"5.1.3\",\"cz-conventional-changelog\":\"1.2.0\",\"danger\":\"1.1.0\",\"dependency-cruiser\":\"2.13.0\",\"doctoc\":\"1.3.0\",\"dtslint\":\"0.6.1\",\"escape-string-regexp\":\"1.0.5\",\"esdoc\":\"0.4.7\",\"eslint\":\"4.17.0\",\"eslint-plugin-jasmine\":\"^2.10.1\",\"fs-extra\":\"5.0.0\",\"get-folder-size\":\"1.0.1\",\"glob\":\"7.1.2\",\"gm\":\"1.23.1\",\"google-closure-compiler-js\":\"20170218.0.0\",\"gzip-size\":\"4.1.0\",\"http-server\":\"0.11.1\",\"husky\":\"0.14.3\",\"klaw-sync\":\"3.0.2\",\"lint-staged\":\"7.1.1\",\"lodash\":\"4.17.5\",\"markdown-doctest\":\"0.9.1\",\"minimist\":\"1.2.0\",\"mkdirp\":\"^1.0.4\",\"mocha\":\"5.0.0\",\"mocha-in-sauce\":\"0.0.1\",\"npm-run-all\":\"4.1.2\",\"nyc\":\"11.4.1\",\"opn-cli\":\"3.1.0\",\"platform\":\"1.3.5\",\"promise\":\"8.0.1\",\"protractor\":\"3.1.1\",\"rollup\":\"0.66.6\",\"rollup-plugin-alias\":\"1.4.0\",\"rollup-plugin-inject\":\"2.0.0\",\"rollup-plugin-node-resolve\":\"2.0.0\",\"rx\":\"latest\",\"rxjs\":\"^5.5.7\",\"shx\":\"^0.3.2\",\"sinon\":\"4.3.0\",\"sinon-chai\":\"2.14.0\",\"source-map-support\":\"0.5.3\",\"symbol-observable\":\"1.0.1\",\"systemjs\":\"^0.21.0\",\"ts-api-guardian\":\"^0.5.0\",\"ts-node\":\"6.1.0\",\"tsconfig-paths\":\"3.2.0\",\"tslint\":\"5.9.1\",\"tslint-etc\":\"1.2.6\",\"tslint-no-toplevel-property-access\":\"0.0.2\",\"tslint-no-unused-expression-chai\":\"0.0.3\",\"typescript\":\"^3.0.1\",\"validate-commit-msg\":\"2.14.0\",\"webpack\":\"1.13.1\",\"xmlhttprequest\":\"1.8.0\"},\"engines\":{\"npm\":\">=2.0.0\"},\"typings\":\"./index.d.ts\",\"ng-update\":{\"migrations\":\"./migrations/collection.json\"},\"module\":\"./_esm5/index.js\",\"es2015\":\"./_esm2015/index.js\"}");

/***/ }),

/***/ 1582:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"rxjs/ajax\",\"typings\":\"./index.d.ts\",\"main\":\"./index.js\",\"module\":\"../_esm5/ajax/index.js\",\"es2015\":\"../_esm2015/ajax/index.js\",\"sideEffects\":false}");

/***/ }),

/***/ 2332:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"rxjs/fetch\",\"typings\":\"./index.d.ts\",\"main\":\"./index.js\",\"module\":\"../_esm5/fetch/index.js\",\"es2015\":\"../_esm2015/fetch/index.js\",\"sideEffects\":false}");

/***/ }),

/***/ 1554:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"rxjs/internal-compatibility\",\"typings\":\"./index.d.ts\",\"main\":\"./index.js\",\"module\":\"../_esm5/internal-compatibility/index.js\",\"es2015\":\"../_esm2015/internal-compatibility/index.js\",\"sideEffects\":false}");

/***/ }),

/***/ 2643:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"rxjs/operators\",\"typings\":\"./index.d.ts\",\"main\":\"./index.js\",\"module\":\"../_esm5/operators/index.js\",\"es2015\":\"../_esm2015/operators/index.js\",\"sideEffects\":false}");

/***/ }),

/***/ 2950:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"rxjs/testing\",\"typings\":\"./index.d.ts\",\"main\":\"./index.js\",\"module\":\"../_esm5/testing/index.js\",\"es2015\":\"../_esm2015/testing/index.js\",\"sideEffects\":false}");

/***/ }),

/***/ 9772:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"rxjs/webSocket\",\"typings\":\"./index.d.ts\",\"main\":\"./index.js\",\"module\":\"../_esm5/webSocket/index.js\",\"es2015\":\"../_esm2015/webSocket/index.js\",\"sideEffects\":false}");

/***/ }),

/***/ 3626:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"rxjs/testing\",\"typings\":\"./index.d.ts\",\"main\":\"./index.js\",\"module\":\"../_esm5/testing/index.js\",\"es2015\":\"../_esm2015/testing/index.js\",\"sideEffects\":false}");

/***/ }),

/***/ 4419:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"rxjs/webSocket\",\"typings\":\"./index.d.ts\",\"main\":\"./index.js\",\"module\":\"../_esm5/webSocket/index.js\",\"es2015\":\"../_esm2015/webSocket/index.js\",\"sideEffects\":false}");

/***/ }),

/***/ 8780:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"safer-buffer\",\"version\":\"2.1.2\",\"description\":\"Modern Buffer API polyfill without footguns\",\"main\":\"safer.js\",\"scripts\":{\"browserify-test\":\"browserify --external tape tests.js > browserify-tests.js && tape browserify-tests.js\",\"test\":\"standard && tape tests.js\"},\"author\":{\"name\":\"Nikita Skovoroda\",\"email\":\"chalkerx@gmail.com\",\"url\":\"https://github.com/ChALkeR\"},\"license\":\"MIT\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/ChALkeR/safer-buffer.git\"},\"bugs\":{\"url\":\"https://github.com/ChALkeR/safer-buffer/issues\"},\"devDependencies\":{\"standard\":\"^11.0.1\",\"tape\":\"^4.9.0\"},\"files\":[\"Porting-Buffer.md\",\"Readme.md\",\"tests.js\",\"dangerous.js\",\"safer.js\"]}");

/***/ }),

/***/ 6259:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"lru-cache\",\"description\":\"A cache object that deletes the least-recently-used items.\",\"version\":\"6.0.0\",\"author\":\"Isaac Z. Schlueter <i@izs.me>\",\"keywords\":[\"mru\",\"lru\",\"cache\"],\"scripts\":{\"test\":\"tap\",\"snap\":\"tap\",\"preversion\":\"npm test\",\"postversion\":\"npm publish\",\"prepublishOnly\":\"git push origin --follow-tags\"},\"main\":\"index.js\",\"repository\":\"git://github.com/isaacs/node-lru-cache.git\",\"devDependencies\":{\"benchmark\":\"^2.1.4\",\"tap\":\"^14.10.7\"},\"license\":\"ISC\",\"dependencies\":{\"yallist\":\"^4.0.0\"},\"files\":[\"index.js\"],\"engines\":{\"node\":\">=10\"}}");

/***/ }),

/***/ 7905:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"yallist\",\"version\":\"4.0.0\",\"description\":\"Yet Another Linked List\",\"main\":\"yallist.js\",\"directories\":{\"test\":\"test\"},\"files\":[\"yallist.js\",\"iterator.js\"],\"dependencies\":{},\"devDependencies\":{\"tap\":\"^12.1.0\"},\"scripts\":{\"test\":\"tap test/*.js --100\",\"preversion\":\"npm test\",\"postversion\":\"npm publish\",\"postpublish\":\"git push origin --all; git push origin --tags\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/isaacs/yallist.git\"},\"author\":\"Isaac Z. Schlueter <i@izs.me> (http://blog.izs.me/)\",\"license\":\"ISC\"}");

/***/ }),

/***/ 5543:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"semver\",\"version\":\"7.5.2\",\"description\":\"The semantic version parser used by npm.\",\"main\":\"index.js\",\"scripts\":{\"test\":\"tap\",\"snap\":\"tap\",\"lint\":\"eslint \\\"**/*.js\\\"\",\"postlint\":\"template-oss-check\",\"lintfix\":\"npm run lint -- --fix\",\"posttest\":\"npm run lint\",\"template-oss-apply\":\"template-oss-apply --force\"},\"devDependencies\":{\"@npmcli/eslint-config\":\"^4.0.0\",\"@npmcli/template-oss\":\"4.15.1\",\"tap\":\"^16.0.0\"},\"license\":\"ISC\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/npm/node-semver.git\"},\"bin\":{\"semver\":\"bin/semver.js\"},\"files\":[\"bin/\",\"lib/\",\"classes/\",\"functions/\",\"internal/\",\"ranges/\",\"index.js\",\"preload.js\",\"range.bnf\"],\"tap\":{\"timeout\":30,\"coverage-map\":\"map.js\",\"nyc-arg\":[\"--exclude\",\"tap-snapshots/**\"]},\"engines\":{\"node\":\">=10\"},\"dependencies\":{\"lru-cache\":\"^6.0.0\"},\"author\":\"GitHub Inc.\",\"templateOSS\":{\"//@npmcli/template-oss\":\"This file is partially managed by @npmcli/template-oss. Edits may be overwritten.\",\"version\":\"4.15.1\",\"engines\":\">=10\",\"ciVersions\":[\"10.0.0\",\"10.x\",\"12.x\",\"14.x\",\"16.x\",\"18.x\"],\"npmSpec\":\"8\",\"distPaths\":[\"classes/\",\"functions/\",\"internal/\",\"ranges/\",\"index.js\",\"preload.js\",\"range.bnf\"],\"allowPaths\":[\"/classes/\",\"/functions/\",\"/internal/\",\"/ranges/\",\"/index.js\",\"/preload.js\",\"/range.bnf\"],\"publish\":\"true\"}}");

/***/ }),

/***/ 331:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"shebang-command\",\"version\":\"2.0.0\",\"description\":\"Get the command from a shebang\",\"license\":\"MIT\",\"repository\":\"kevva/shebang-command\",\"author\":{\"name\":\"Kevin Mårtensson\",\"email\":\"kevinmartensson@gmail.com\",\"url\":\"github.com/kevva\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava\"},\"files\":[\"index.js\"],\"keywords\":[\"cmd\",\"command\",\"parse\",\"shebang\"],\"dependencies\":{\"shebang-regex\":\"^3.0.0\"},\"devDependencies\":{\"ava\":\"^2.3.0\",\"xo\":\"^0.24.0\"}}");

/***/ }),

/***/ 4217:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"shebang-regex\",\"version\":\"3.0.0\",\"description\":\"Regular expression for matching a shebang line\",\"license\":\"MIT\",\"repository\":\"sindresorhus/shebang-regex\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava && tsd\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"regex\",\"regexp\",\"shebang\",\"match\",\"test\",\"line\"],\"devDependencies\":{\"ava\":\"^1.4.1\",\"tsd\":\"^0.7.2\",\"xo\":\"^0.24.0\"}}");

/***/ }),

/***/ 9636:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"signal-exit\",\"version\":\"3.0.7\",\"description\":\"when you want to fire an event no matter how a process exits.\",\"main\":\"index.js\",\"scripts\":{\"test\":\"tap\",\"snap\":\"tap\",\"preversion\":\"npm test\",\"postversion\":\"npm publish\",\"prepublishOnly\":\"git push origin --follow-tags\"},\"files\":[\"index.js\",\"signals.js\"],\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/tapjs/signal-exit.git\"},\"keywords\":[\"signal\",\"exit\"],\"author\":\"Ben Coe <ben@npmjs.com>\",\"license\":\"ISC\",\"bugs\":{\"url\":\"https://github.com/tapjs/signal-exit/issues\"},\"homepage\":\"https://github.com/tapjs/signal-exit\",\"devDependencies\":{\"chai\":\"^3.5.0\",\"coveralls\":\"^3.1.1\",\"nyc\":\"^15.1.0\",\"standard-version\":\"^9.3.1\",\"tap\":\"^15.1.1\"}}");

/***/ }),

/***/ 12:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"slash\",\"version\":\"3.0.0\",\"description\":\"Convert Windows backslash paths to slash paths\",\"license\":\"MIT\",\"repository\":\"sindresorhus/slash\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava && tsd\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"path\",\"seperator\",\"slash\",\"backslash\",\"windows\",\"convert\"],\"devDependencies\":{\"ava\":\"^1.4.1\",\"tsd\":\"^0.7.2\",\"xo\":\"^0.24.0\"}}");

/***/ }),

/***/ 4760:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"ansi-styles\",\"version\":\"4.3.0\",\"description\":\"ANSI escape codes for styling strings in the terminal\",\"license\":\"MIT\",\"repository\":\"chalk/ansi-styles\",\"funding\":\"https://github.com/chalk/ansi-styles?sponsor=1\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava && tsd\",\"screenshot\":\"svg-term --command='node screenshot' --out=screenshot.svg --padding=3 --width=55 --height=3 --at=1000 --no-cursor\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"ansi\",\"styles\",\"color\",\"colour\",\"colors\",\"terminal\",\"console\",\"cli\",\"string\",\"tty\",\"escape\",\"formatting\",\"rgb\",\"256\",\"shell\",\"xterm\",\"log\",\"logging\",\"command-line\",\"text\"],\"dependencies\":{\"color-convert\":\"^2.0.1\"},\"devDependencies\":{\"@types/color-convert\":\"^1.9.0\",\"ava\":\"^2.3.0\",\"svg-term-cli\":\"^2.1.1\",\"tsd\":\"^0.11.0\",\"xo\":\"^0.25.3\"}}");

/***/ }),

/***/ 8891:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"color-convert\",\"description\":\"Plain color conversion functions\",\"version\":\"2.0.1\",\"author\":\"Heather Arthur <fayearthur@gmail.com>\",\"license\":\"MIT\",\"repository\":\"Qix-/color-convert\",\"scripts\":{\"pretest\":\"xo\",\"test\":\"node test/basic.js\"},\"engines\":{\"node\":\">=7.0.0\"},\"keywords\":[\"color\",\"colour\",\"convert\",\"converter\",\"conversion\",\"rgb\",\"hsl\",\"hsv\",\"hwb\",\"cmyk\",\"ansi\",\"ansi16\"],\"files\":[\"index.js\",\"conversions.js\",\"route.js\"],\"xo\":{\"rules\":{\"default-case\":0,\"no-inline-comments\":0,\"operator-linebreak\":0}},\"devDependencies\":{\"chalk\":\"^2.4.2\",\"xo\":\"^0.24.0\"},\"dependencies\":{\"color-name\":\"~1.1.4\"}}");

/***/ }),

/***/ 8229:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"color-name\",\"version\":\"1.1.4\",\"description\":\"A list of color names and its values\",\"main\":\"index.js\",\"files\":[\"index.js\"],\"scripts\":{\"test\":\"node test.js\"},\"repository\":{\"type\":\"git\",\"url\":\"git@github.com:colorjs/color-name.git\"},\"keywords\":[\"color-name\",\"color\",\"color-keyword\",\"keyword\"],\"author\":\"DY <dfcreative@gmail.com>\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/colorjs/color-name/issues\"},\"homepage\":\"https://github.com/colorjs/color-name\"}");

/***/ }),

/***/ 3781:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"slice-ansi\",\"version\":\"4.0.0\",\"description\":\"Slice a string with ANSI escape codes\",\"license\":\"MIT\",\"repository\":\"chalk/slice-ansi\",\"funding\":\"https://github.com/chalk/slice-ansi?sponsor=1\",\"engines\":{\"node\":\">=10\"},\"scripts\":{\"test\":\"xo && ava\"},\"files\":[\"index.js\"],\"keywords\":[\"slice\",\"string\",\"ansi\",\"styles\",\"color\",\"colour\",\"colors\",\"terminal\",\"console\",\"cli\",\"tty\",\"escape\",\"formatting\",\"rgb\",\"256\",\"shell\",\"xterm\",\"log\",\"logging\",\"command-line\",\"text\"],\"dependencies\":{\"ansi-styles\":\"^4.0.0\",\"astral-regex\":\"^2.0.0\",\"is-fullwidth-code-point\":\"^3.0.0\"},\"devDependencies\":{\"ava\":\"^2.1.0\",\"chalk\":\"^3.0.0\",\"random-item\":\"^3.0.0\",\"strip-ansi\":\"^6.0.0\",\"xo\":\"^0.26.1\"}}");

/***/ }),

/***/ 8204:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"sprintf-js\",\"version\":\"1.0.3\",\"description\":\"JavaScript sprintf implementation\",\"author\":\"Alexandru Marasteanu <hello@alexei.ro> (http://alexei.ro/)\",\"main\":\"src/sprintf.js\",\"scripts\":{\"test\":\"mocha test/test.js\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/alexei/sprintf.js.git\"},\"license\":\"BSD-3-Clause\",\"readmeFilename\":\"README.md\",\"devDependencies\":{\"mocha\":\"*\",\"grunt\":\"*\",\"grunt-contrib-watch\":\"*\",\"grunt-contrib-uglify\":\"*\"}}");

/***/ }),

/***/ 671:
/***/ ((module) => {

"use strict";
module.exports = {"type":"commonjs"};

/***/ }),

/***/ 2990:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"string-argv\",\"description\":\"string-argv parses a string into an argument array to mimic process.argv. This is useful when testing Command Line Utilities that you want to pass arguments to.\",\"version\":\"0.3.2\",\"contributors\":[{\"name\":\"Michael Ferris\",\"email\":\"mike.ferri@hotmail.com\"}],\"author\":{\"name\":\"Anthony McCormick\",\"email\":\"anthony.mccormick@gmail.com\"},\"license\":\"MIT\",\"keywords\":[\"argv\"],\"scripts\":{\"build\":\"tsc -p . & tsc -p tsconfig.commonjs.json\",\"prepublishOnly\":\"npm test\",\"test\":\"npm run build & jasmine --config=test/config.json\"},\"type\":\"module\",\"exports\":{\".\":{\"types\":\"./index.d.ts\",\"import\":\"./index.js\",\"require\":\"./commonjs/index.js\"}},\"main\":\"./commonjs/index.js\",\"module\":\"./index.js\",\"types\":\"index.d.ts\",\"engines\":{\"node\":\">=0.6.19\"},\"bugs\":{\"url\":\"https://github.com/mccormicka/string-argv/issues\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/mccormicka/string-argv\"},\"homepage\":\"https://github.com/mccormicka/string-argv\",\"readmeFilename\":\"README.md\",\"devDependencies\":{\"jasmine\":\"^4.4.0\",\"typescript\":\"^5.0.4\"}}");

/***/ }),

/***/ 7846:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"string-width\",\"version\":\"4.2.3\",\"description\":\"Get the visual width of a string - the number of columns required to display it\",\"license\":\"MIT\",\"repository\":\"sindresorhus/string-width\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava && tsd\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"string\",\"character\",\"unicode\",\"width\",\"visual\",\"column\",\"columns\",\"fullwidth\",\"full-width\",\"full\",\"ansi\",\"escape\",\"codes\",\"cli\",\"command-line\",\"terminal\",\"console\",\"cjk\",\"chinese\",\"japanese\",\"korean\",\"fixed-width\"],\"dependencies\":{\"emoji-regex\":\"^8.0.0\",\"is-fullwidth-code-point\":\"^3.0.0\",\"strip-ansi\":\"^6.0.1\"},\"devDependencies\":{\"ava\":\"^1.4.1\",\"tsd\":\"^0.7.1\",\"xo\":\"^0.24.0\"}}");

/***/ }),

/***/ 9725:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"strip-ansi\",\"version\":\"6.0.1\",\"description\":\"Strip ANSI escape codes from a string\",\"license\":\"MIT\",\"repository\":\"chalk/strip-ansi\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava && tsd\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"strip\",\"trim\",\"remove\",\"ansi\",\"styles\",\"color\",\"colour\",\"colors\",\"terminal\",\"console\",\"string\",\"tty\",\"escape\",\"formatting\",\"rgb\",\"256\",\"shell\",\"xterm\",\"log\",\"logging\",\"command-line\",\"text\"],\"dependencies\":{\"ansi-regex\":\"^5.0.1\"},\"devDependencies\":{\"ava\":\"^2.4.0\",\"tsd\":\"^0.10.0\",\"xo\":\"^0.25.3\"}}");

/***/ }),

/***/ 6821:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"strip-json-comments\",\"version\":\"3.1.1\",\"description\":\"Strip comments from JSON. Lets you use comments in your JSON files!\",\"license\":\"MIT\",\"repository\":\"sindresorhus/strip-json-comments\",\"funding\":\"https://github.com/sponsors/sindresorhus\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"https://sindresorhus.com\"},\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"xo && ava && tsd\",\"bench\":\"matcha benchmark.js\"},\"files\":[\"index.js\",\"index.d.ts\"],\"keywords\":[\"json\",\"strip\",\"comments\",\"remove\",\"delete\",\"trim\",\"multiline\",\"parse\",\"config\",\"configuration\",\"settings\",\"util\",\"env\",\"environment\",\"jsonc\"],\"devDependencies\":{\"ava\":\"^1.4.1\",\"matcha\":\"^0.7.0\",\"tsd\":\"^0.7.2\",\"xo\":\"^0.24.0\"}}");

/***/ }),

/***/ 5760:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"supports-color\",\"version\":\"5.5.0\",\"description\":\"Detect whether a terminal supports color\",\"license\":\"MIT\",\"repository\":\"chalk/supports-color\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=4\"},\"scripts\":{\"test\":\"xo && ava\"},\"files\":[\"index.js\",\"browser.js\"],\"keywords\":[\"color\",\"colour\",\"colors\",\"terminal\",\"console\",\"cli\",\"ansi\",\"styles\",\"tty\",\"rgb\",\"256\",\"shell\",\"xterm\",\"command-line\",\"support\",\"supports\",\"capability\",\"detect\",\"truecolor\",\"16m\"],\"dependencies\":{\"has-flag\":\"^3.0.0\"},\"devDependencies\":{\"ava\":\"^0.25.0\",\"import-fresh\":\"^2.0.0\",\"xo\":\"^0.20.0\"},\"browser\":\"browser.js\"}");

/***/ }),

/***/ 6057:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"ajv\",\"version\":\"8.12.0\",\"description\":\"Another JSON Schema Validator\",\"main\":\"dist/ajv.js\",\"types\":\"dist/ajv.d.ts\",\"files\":[\"lib/\",\"dist/\",\".runkit_example.js\"],\"scripts\":{\"eslint\":\"eslint \\\"lib/**/*.ts\\\" \\\"spec/**/*.*s\\\" --ignore-pattern spec/JSON-Schema-Test-Suite\",\"prettier:write\":\"prettier --write \\\"./**/*.{json,yaml,js,ts}\\\"\",\"prettier:check\":\"prettier --list-different \\\"./**/*.{json,yaml,js,ts}\\\"\",\"test-spec\":\"cross-env TS_NODE_PROJECT=spec/tsconfig.json mocha -r ts-node/register \\\"spec/**/*.spec.{ts,js}\\\" -R dot\",\"test-codegen\":\"nyc cross-env TS_NODE_PROJECT=spec/tsconfig.json mocha -r ts-node/register 'spec/codegen.spec.ts' -R spec\",\"test-debug\":\"npm run test-spec -- --inspect-brk\",\"test-cov\":\"nyc npm run test-spec\",\"rollup\":\"rm -rf bundle && rollup -c\",\"bundle\":\"rm -rf bundle && node ./scripts/bundle.js ajv ajv7 ajv7 && node ./scripts/bundle.js 2019 ajv2019 ajv2019 && node ./scripts/bundle.js 2020 ajv2020 ajv2020 && node ./scripts/bundle.js jtd ajvJTD ajvJTD\",\"build\":\"rm -rf dist && tsc && cp -r lib/refs dist && rm dist/refs/json-schema-2019-09/index.ts && rm dist/refs/json-schema-2020-12/index.ts && rm dist/refs/jtd-schema.ts\",\"json-tests\":\"rm -rf spec/_json/*.js && node scripts/jsontests\",\"test-karma\":\"karma start\",\"test-browser\":\"rm -rf .browser && npm run bundle && scripts/prepare-tests && karma start\",\"test-all\":\"npm run test-cov && if-node-version 12 npm run test-browser\",\"test\":\"npm run json-tests && npm run prettier:check && npm run eslint && npm link && npm link --legacy-peer-deps ajv && npm run test-cov\",\"test-ci\":\"AJV_FULL_TEST=true npm test\",\"prepublish\":\"npm run build\",\"benchmark\":\"npm i && npm run build && npm link && cd ./benchmark && npm link --legacy-peer-deps ajv && npm i && node ./jtd\",\"docs:dev\":\"./scripts/prepare-site && vuepress dev docs\",\"docs:build\":\"./scripts/prepare-site && vuepress build docs\"},\"nyc\":{\"exclude\":[\"**/spec/**\",\"node_modules\"],\"reporter\":[\"lcov\",\"text-summary\"]},\"repository\":\"ajv-validator/ajv\",\"keywords\":[\"JSON\",\"schema\",\"validator\",\"validation\",\"jsonschema\",\"json-schema\",\"json-schema-validator\",\"json-schema-validation\"],\"author\":\"Evgeny Poberezkin\",\"license\":\"MIT\",\"bugs\":\"https://github.com/ajv-validator/ajv/issues\",\"homepage\":\"https://ajv.js.org\",\"runkitExampleFilename\":\".runkit_example.js\",\"dependencies\":{\"fast-deep-equal\":\"^3.1.1\",\"json-schema-traverse\":\"^1.0.0\",\"require-from-string\":\"^2.0.2\",\"uri-js\":\"^4.2.2\"},\"devDependencies\":{\"@ajv-validator/config\":\"^0.3.0\",\"@rollup/plugin-commonjs\":\"^24.0.0\",\"@rollup/plugin-json\":\"^6.0.0\",\"@rollup/plugin-node-resolve\":\"^15.0.1\",\"@rollup/plugin-typescript\":\"^10.0.1\",\"@types/chai\":\"^4.2.12\",\"@types/mocha\":\"^10.0.0\",\"@types/node\":\"^18.11.9\",\"@types/require-from-string\":\"^1.2.0\",\"@typescript-eslint/eslint-plugin\":\"^3.8.0\",\"@typescript-eslint/parser\":\"^3.8.0\",\"ajv-formats\":\"^3.0.0-rc.0\",\"browserify\":\"^17.0.0\",\"chai\":\"^4.0.1\",\"cross-env\":\"^7.0.2\",\"dayjs\":\"^1.10.4\",\"dayjs-plugin-utc\":\"^0.1.2\",\"eslint\":\"^7.8.1\",\"eslint-config-prettier\":\"^7.0.0\",\"fast-uri\":\"^2.1.0\",\"glob\":\"^8.0.2\",\"husky\":\"^8.0.2\",\"if-node-version\":\"^1.0.0\",\"jimp\":\"^0.16.1\",\"js-beautify\":\"^1.7.3\",\"json-schema-test\":\"^2.0.0\",\"karma\":\"^6.0.0\",\"karma-chrome-launcher\":\"^3.0.0\",\"karma-mocha\":\"^2.0.0\",\"lint-staged\":\"^13.0.3\",\"mocha\":\"^10.0.0\",\"module-from-string\":\"^3.1.3\",\"node-fetch\":\"^3.0.0\",\"nyc\":\"^15.0.0\",\"prettier\":\"^2.3.1\",\"re2\":\"^1.16.0\",\"rollup\":\"^2.44.0\",\"rollup-plugin-terser\":\"^7.0.2\",\"ts-node\":\"^10.0.0\",\"tsify\":\"^5.0.2\",\"typescript\":\"^4.8.0\"},\"collective\":{\"type\":\"opencollective\",\"url\":\"https://opencollective.com/ajv\"},\"funding\":{\"type\":\"github\",\"url\":\"https://github.com/sponsors/epoberezkin\"},\"prettier\":\"@ajv-validator/config/prettierrc.json\",\"husky\":{\"hooks\":{\"pre-commit\":\"lint-staged && npm test\"}},\"lint-staged\":{\"*.{json,yaml,js,ts}\":\"prettier --write\"}}");

/***/ }),

/***/ 3966:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"json-schema-traverse\",\"version\":\"1.0.0\",\"description\":\"Traverse JSON Schema passing each schema object to callback\",\"main\":\"index.js\",\"types\":\"index.d.ts\",\"scripts\":{\"eslint\":\"eslint index.js spec\",\"test-spec\":\"mocha spec -R spec\",\"test\":\"npm run eslint && nyc npm run test-spec\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/epoberezkin/json-schema-traverse.git\"},\"keywords\":[\"JSON-Schema\",\"traverse\",\"iterate\"],\"author\":\"Evgeny Poberezkin\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/epoberezkin/json-schema-traverse/issues\"},\"homepage\":\"https://github.com/epoberezkin/json-schema-traverse#readme\",\"devDependencies\":{\"eslint\":\"^7.3.1\",\"mocha\":\"^8.0.1\",\"nyc\":\"^15.0.0\",\"pre-commit\":\"^1.2.2\"},\"nyc\":{\"exclude\":[\"**/spec/**\",\"node_modules\"],\"reporter\":[\"lcov\",\"text-summary\"]}}");

/***/ }),

/***/ 3354:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"author\":{\"email\":\"gajus@gajus.com\",\"name\":\"Gajus Kuizinas\",\"url\":\"http://gajus.com\"},\"dependencies\":{\"ajv\":\"^8.0.1\",\"lodash.truncate\":\"^4.4.2\",\"slice-ansi\":\"^4.0.0\",\"string-width\":\"^4.2.3\",\"strip-ansi\":\"^6.0.1\"},\"description\":\"Formats data into a string table.\",\"devDependencies\":{\"@types/chai\":\"^4.2.16\",\"@types/lodash.mapvalues\":\"^4.6.6\",\"@types/lodash.truncate\":\"^4.4.6\",\"@types/mocha\":\"^9.0.0\",\"@types/node\":\"^14.14.37\",\"@types/sinon\":\"^10.0.0\",\"@types/slice-ansi\":\"^4.0.0\",\"ajv-cli\":\"^5.0.0\",\"ajv-keywords\":\"^5.0.0\",\"chai\":\"^4.2.0\",\"chalk\":\"^4.1.0\",\"coveralls\":\"^3.1.0\",\"eslint\":\"^7.32.0\",\"eslint-config-canonical\":\"^25.0.0\",\"gitdown\":\"^3.1.4\",\"husky\":\"^4.3.6\",\"js-beautify\":\"^1.14.0\",\"lodash.mapvalues\":\"^4.6.0\",\"mkdirp\":\"^1.0.4\",\"mocha\":\"^8.2.1\",\"nyc\":\"^15.1.0\",\"semantic-release\":\"^17.3.1\",\"sinon\":\"^12.0.1\",\"ts-node\":\"^9.1.1\",\"typescript\":\"4.5.2\"},\"engines\":{\"node\":\">=10.0.0\"},\"husky\":{\"hooks\":{\"post-commit\":\"npm run create-readme && git add README.md && git commit -m 'docs: generate docs' --no-verify\",\"pre-commit\":\"npm run build && npm run lint && npm run test\"}},\"keywords\":[\"ascii\",\"text\",\"table\",\"align\",\"ansi\"],\"license\":\"BSD-3-Clause\",\"main\":\"./dist/src/index.js\",\"files\":[\"dist/src/\"],\"name\":\"table\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/gajus/table\"},\"scripts\":{\"prebuild\":\"rm -fr ./src/generated && mkdirp ./src/generated\",\"build\":\"npm run create-validators && tsc\",\"create-readme\":\"gitdown ./.README/README.md --output-file ./README.md\",\"create-validators\":\"ajv compile --all-errors --inline-refs=false -s src/schemas/config -s src/schemas/streamConfig -r src/schemas/shared -c ajv-keywords/dist/keywords/typeof -o | js-beautify > ./src/generated/validators.js\",\"lint\":\"eslint ./src ./test\",\"test\":\"nyc mocha && nyc check-coverage --lines 95\"},\"version\":\"6.8.1\"}");

/***/ }),

/***/ 5471:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"text-table\",\"version\":\"0.2.0\",\"description\":\"borderless text tables with alignment\",\"main\":\"index.js\",\"devDependencies\":{\"tap\":\"~0.4.0\",\"tape\":\"~1.0.2\",\"cli-color\":\"~0.2.3\"},\"scripts\":{\"test\":\"tap test/*.js\"},\"testling\":{\"files\":\"test/*.js\",\"browsers\":[\"ie/6..latest\",\"chrome/20..latest\",\"firefox/10..latest\",\"safari/latest\",\"opera/11.0..latest\",\"iphone/6\",\"ipad/6\"]},\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/substack/text-table.git\"},\"homepage\":\"https://github.com/substack/text-table\",\"keywords\":[\"text\",\"table\",\"align\",\"ascii\",\"rows\",\"tabular\"],\"author\":{\"name\":\"James Halliday\",\"email\":\"mail@substack.net\",\"url\":\"http://substack.net\"},\"license\":\"MIT\"}");

/***/ }),

/***/ 9904:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"through\",\"version\":\"2.3.8\",\"description\":\"simplified stream construction\",\"main\":\"index.js\",\"scripts\":{\"test\":\"set -e; for t in test/*.js; do node $t; done\"},\"devDependencies\":{\"stream-spec\":\"~0.3.5\",\"tape\":\"~2.3.2\",\"from\":\"~0.1.3\"},\"keywords\":[\"stream\",\"streams\",\"user-streams\",\"pipe\"],\"author\":\"Dominic Tarr <dominic.tarr@gmail.com> (dominictarr.com)\",\"license\":\"MIT\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/dominictarr/through.git\"},\"homepage\":\"https://github.com/dominictarr/through\",\"testling\":{\"browsers\":[\"ie/8..latest\",\"ff/15..latest\",\"chrome/20..latest\",\"safari/5.1..latest\"],\"files\":\"test/*.js\"}}");

/***/ }),

/***/ 8591:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"tmp\",\"version\":\"0.0.33\",\"description\":\"Temporary file and directory creator\",\"author\":\"KARASZI István <github@spam.raszi.hu> (http://raszi.hu/)\",\"keywords\":[\"temporary\",\"tmp\",\"temp\",\"tempdir\",\"tempfile\",\"tmpdir\",\"tmpfile\"],\"license\":\"MIT\",\"repository\":\"raszi/node-tmp\",\"homepage\":\"http://github.com/raszi/node-tmp\",\"bugs\":{\"url\":\"http://github.com/raszi/node-tmp/issues\"},\"engines\":{\"node\":\">=0.6.0\"},\"dependencies\":{\"os-tmpdir\":\"~1.0.2\"},\"devDependencies\":{\"vows\":\"~0.7.0\"},\"main\":\"lib/tmp.js\",\"files\":[\"lib/\"],\"scripts\":{\"test\":\"vows test/*-test.js\",\"doc\":\"jsdoc -c .jsdoc.json\"}}");

/***/ }),

/***/ 1663:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"to-fast-properties\",\"version\":\"2.0.0\",\"description\":\"Force V8 to use fast properties for an object\",\"license\":\"MIT\",\"repository\":\"sindresorhus/to-fast-properties\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"sindresorhus.com\"},\"engines\":{\"node\":\">=4\"},\"scripts\":{\"test\":\"node --allow-natives-syntax test.js\"},\"files\":[\"index.js\"],\"keywords\":[\"object\",\"obj\",\"properties\",\"props\",\"v8\",\"optimize\",\"fast\",\"convert\",\"mode\"],\"devDependencies\":{\"ava\":\"0.0.4\"}}");

/***/ }),

/***/ 64:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"to-regex-range\",\"description\":\"Pass two numbers, get a regex-compatible source string for matching ranges. Validated against more than 2.78 million test assertions.\",\"version\":\"5.0.1\",\"homepage\":\"https://github.com/micromatch/to-regex-range\",\"author\":\"Jon Schlinkert (https://github.com/jonschlinkert)\",\"contributors\":[\"Jon Schlinkert (http://twitter.com/jonschlinkert)\",\"Rouven Weßling (www.rouvenwessling.de)\"],\"repository\":\"micromatch/to-regex-range\",\"bugs\":{\"url\":\"https://github.com/micromatch/to-regex-range/issues\"},\"license\":\"MIT\",\"files\":[\"index.js\"],\"main\":\"index.js\",\"engines\":{\"node\":\">=8.0\"},\"scripts\":{\"test\":\"mocha\"},\"dependencies\":{\"is-number\":\"^7.0.0\"},\"devDependencies\":{\"fill-range\":\"^6.0.0\",\"gulp-format-md\":\"^2.0.0\",\"mocha\":\"^6.0.2\",\"text-table\":\"^0.2.0\",\"time-diff\":\"^0.3.1\"},\"keywords\":[\"bash\",\"date\",\"expand\",\"expansion\",\"expression\",\"glob\",\"match\",\"match date\",\"match number\",\"match numbers\",\"match year\",\"matches\",\"matching\",\"number\",\"numbers\",\"numerical\",\"range\",\"ranges\",\"regex\",\"regexp\",\"regular\",\"regular expression\",\"sequence\"],\"verb\":{\"layout\":\"default\",\"toc\":false,\"tasks\":[\"readme\"],\"plugins\":[\"gulp-format-md\"],\"lint\":{\"reflinks\":true},\"helpers\":{\"examples\":{\"displayName\":\"examples\"}},\"related\":{\"list\":[\"expand-range\",\"fill-range\",\"micromatch\",\"repeat-element\",\"repeat-string\"]}}}");

/***/ }),

/***/ 7104:
/***/ ((module) => {

"use strict";
module.exports = {"type":"module"};

/***/ }),

/***/ 4346:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"tslib\",\"author\":\"Microsoft Corp.\",\"homepage\":\"https://www.typescriptlang.org/\",\"version\":\"1.14.1\",\"license\":\"0BSD\",\"description\":\"Runtime library for TypeScript helper functions\",\"keywords\":[\"TypeScript\",\"Microsoft\",\"compiler\",\"language\",\"javascript\",\"tslib\",\"runtime\"],\"bugs\":{\"url\":\"https://github.com/Microsoft/TypeScript/issues\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/Microsoft/tslib.git\"},\"main\":\"tslib.js\",\"module\":\"tslib.es6.js\",\"jsnext:main\":\"tslib.es6.js\",\"typings\":\"tslib.d.ts\",\"sideEffects\":false,\"exports\":{\".\":{\"module\":\"./tslib.es6.js\",\"import\":\"./modules/index.js\",\"default\":\"./tslib.js\"},\"./\":\"./\"}}");

/***/ }),

/***/ 6676:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"type\":\"module\",\"scripts\":{\"test\":\"node index.js\"}}");

/***/ }),

/***/ 957:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"tunnel\",\"version\":\"0.0.6\",\"description\":\"Node HTTP/HTTPS Agents for tunneling proxies\",\"keywords\":[\"http\",\"https\",\"agent\",\"proxy\",\"tunnel\"],\"homepage\":\"https://github.com/koichik/node-tunnel/\",\"bugs\":\"https://github.com/koichik/node-tunnel/issues\",\"license\":\"MIT\",\"author\":\"Koichi Kobayashi <koichik@improvement.jp>\",\"main\":\"./index.js\",\"directories\":{\"lib\":\"./lib\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/koichik/node-tunnel.git\"},\"scripts\":{\"test\":\"mocha\"},\"devDependencies\":{\"mocha\":\"^5.2.0\",\"should\":\"^13.2.3\"},\"engines\":{\"node\":\">=0.6.11 <=0.7.0 || >=0.7.3\"}}");

/***/ }),

/***/ 2935:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"type-check\",\"version\":\"0.4.0\",\"author\":\"George Zahariev <z@georgezahariev.com>\",\"description\":\"type-check allows you to check the types of JavaScript values at runtime with a Haskell like type syntax.\",\"homepage\":\"https://github.com/gkz/type-check\",\"keywords\":[\"type\",\"check\",\"checking\",\"library\"],\"files\":[\"lib\",\"README.md\",\"LICENSE\"],\"main\":\"./lib/\",\"bugs\":\"https://github.com/gkz/type-check/issues\",\"license\":\"MIT\",\"engines\":{\"node\":\">= 0.8.0\"},\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/gkz/type-check.git\"},\"scripts\":{\"test\":\"make test\"},\"dependencies\":{\"prelude-ls\":\"^1.2.1\"},\"devDependencies\":{\"livescript\":\"^1.6.0\",\"mocha\":\"^7.1.1\",\"browserify\":\"^16.5.1\"}}");

/***/ }),

/***/ 999:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"type-detect\",\"description\":\"Improved typeof detection for node.js and the browser.\",\"keywords\":[\"type\",\"typeof\",\"types\"],\"license\":\"MIT\",\"author\":\"Jake Luer <jake@alogicalparadox.com> (http://alogicalparadox.com)\",\"contributors\":[\"Keith Cirkel (https://github.com/keithamus)\",\"David Losert (https://github.com/davelosert)\",\"Aleksey Shvayka (https://github.com/shvaikalesh)\",\"Lucas Fernandes da Costa (https://github.com/lucasfcosta)\",\"Grant Snodgrass (https://github.com/meeber)\",\"Jeremy Tice (https://github.com/jetpacmonkey)\",\"Edward Betts (https://github.com/EdwardBetts)\",\"dvlsg (https://github.com/dvlsg)\",\"Amila Welihinda (https://github.com/amilajack)\",\"Jake Champion (https://github.com/JakeChampion)\",\"Miroslav Bajtoš (https://github.com/bajtos)\"],\"files\":[\"index.js\",\"type-detect.js\"],\"main\":\"./type-detect.js\",\"repository\":{\"type\":\"git\",\"url\":\"git+ssh://git@github.com/chaijs/type-detect.git\"},\"scripts\":{\"bench\":\"node bench\",\"build\":\"rollup -c rollup.conf.js\",\"commit-msg\":\"commitlint -x angular\",\"lint\":\"eslint --ignore-path .gitignore .\",\"prepare\":\"cross-env NODE_ENV=production npm run build\",\"semantic-release\":\"semantic-release pre && npm publish && semantic-release post\",\"pretest:node\":\"cross-env NODE_ENV=test npm run build\",\"pretest:browser\":\"cross-env NODE_ENV=test npm run build\",\"test\":\"npm run test:node && npm run test:browser\",\"test:browser\":\"karma start --singleRun=true\",\"test:node\":\"nyc mocha type-detect.test.js\",\"posttest:node\":\"nyc report --report-dir \\\"coverage/node-$(node --version)\\\" --reporter=lcovonly && npm run upload-coverage\",\"posttest:browser\":\"npm run upload-coverage\",\"upload-coverage\":\"codecov\"},\"eslintConfig\":{\"env\":{\"es6\":true},\"extends\":[\"strict/es6\"],\"globals\":{\"HTMLElement\":false},\"rules\":{\"complexity\":0,\"max-statements\":0,\"prefer-rest-params\":0}},\"devDependencies\":{\"@commitlint/cli\":\"^4.2.2\",\"benchmark\":\"^2.1.0\",\"buble\":\"^0.16.0\",\"codecov\":\"^3.0.0\",\"commitlint-config-angular\":\"^4.2.1\",\"cross-env\":\"^5.1.1\",\"eslint\":\"^4.10.0\",\"eslint-config-strict\":\"^14.0.0\",\"eslint-plugin-filenames\":\"^1.2.0\",\"husky\":\"^0.14.3\",\"karma\":\"^1.7.1\",\"karma-chrome-launcher\":\"^2.2.0\",\"karma-coverage\":\"^1.1.1\",\"karma-detect-browsers\":\"^2.2.5\",\"karma-edge-launcher\":\"^0.4.2\",\"karma-firefox-launcher\":\"^1.0.1\",\"karma-ie-launcher\":\"^1.0.0\",\"karma-mocha\":\"^1.3.0\",\"karma-opera-launcher\":\"^1.0.0\",\"karma-safari-launcher\":\"^1.0.0\",\"karma-safaritechpreview-launcher\":\"0.0.6\",\"karma-sauce-launcher\":\"^1.2.0\",\"mocha\":\"^4.0.1\",\"nyc\":\"^11.3.0\",\"rollup\":\"^0.50.0\",\"rollup-plugin-buble\":\"^0.16.0\",\"rollup-plugin-commonjs\":\"^8.2.6\",\"rollup-plugin-istanbul\":\"^1.1.0\",\"rollup-plugin-node-resolve\":\"^3.0.0\",\"semantic-release\":\"^8.2.0\",\"simple-assert\":\"^1.0.0\"},\"engines\":{\"node\":\">=4\"},\"version\":\"4.0.8\"}");

/***/ }),

/***/ 7725:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"type-fest\",\"version\":\"0.20.2\",\"description\":\"A collection of essential TypeScript types\",\"license\":\"(MIT OR CC0-1.0)\",\"repository\":\"sindresorhus/type-fest\",\"funding\":\"https://github.com/sponsors/sindresorhus\",\"author\":{\"name\":\"Sindre Sorhus\",\"email\":\"sindresorhus@gmail.com\",\"url\":\"https://sindresorhus.com\"},\"engines\":{\"node\":\">=10\"},\"scripts\":{\"//test\":\"xo && tsd && tsc\",\"test\":\"xo && tsc\"},\"files\":[\"index.d.ts\",\"base.d.ts\",\"source\",\"ts41\"],\"keywords\":[\"typescript\",\"ts\",\"types\",\"utility\",\"util\",\"utilities\",\"omit\",\"merge\",\"json\"],\"devDependencies\":{\"@sindresorhus/tsconfig\":\"~0.7.0\",\"tsd\":\"^0.13.1\",\"typescript\":\"^4.1.2\",\"xo\":\"^0.35.0\"},\"types\":\"./index.d.ts\",\"typesVersions\":{\">=4.1\":{\"*\":[\"ts41/*\"]}},\"xo\":{\"rules\":{\"@typescript-eslint/ban-types\":\"off\",\"@typescript-eslint/indent\":\"off\",\"node/no-unsupported-features/es-builtins\":\"off\"}}}");

/***/ }),

/***/ 29:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"typical\",\"author\":\"Lloyd Brookes <75pound@gmail.com>\",\"version\":\"4.0.0\",\"description\":\"Robust Javascript type-checking\",\"repository\":\"https://github.com/75lb/typical\",\"license\":\"MIT\",\"main\":\"dist/index.js\",\"keywords\":[\"type\",\"checking\",\"check\",\"value\",\"valid\",\"is\",\"number\",\"object\",\"plainobject\",\"array\",\"like\",\"defined\",\"string\",\"boolean\",\"function\",\"promise\",\"iterable\",\"class\",\"primitive\"],\"engines\":{\"node\":\">=8\"},\"scripts\":{\"test\":\"npm run test:js && npm run test:esm && npm run test:web\",\"test:js\":\"rollup test.mjs -f cjs -o dist/test.js && rollup test-v10.mjs -f cjs -o dist/test-v10.js && test-runner dist/test*.js\",\"test:esm\":\"esm-runner test*.mjs\",\"test:web\":\"web-runner test.mjs\",\"dist\":\"rollup index.mjs -f umd -n typical -o dist/index.js\",\"docs\":\"jsdoc2md -c jsdoc.conf -t README.hbs index.mjs > README.md; echo\",\"cover\":\"nyc --reporter=text-lcov test-runner test.js | coveralls\"},\"devDependencies\":{\"@test-runner/web\":\"^0.1.4\",\"coveralls\":\"^3.0.3\",\"esm-runner\":\"^0.1.2\",\"jsdoc-to-markdown\":\"^4.0.1\",\"rollup\":\"^1.7.0\",\"test-object-model\":\"^0.3.8\",\"test-runner\":\"^0.6.0-14\"},\"files\":[\"index.mjs\",\"dist/index.js\"]}");

/***/ }),

/***/ 5752:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"update-browserslist-db\",\"version\":\"1.0.11\",\"description\":\"CLI tool to update caniuse-lite to refresh target browsers from Browserslist config\",\"keywords\":[\"caniuse\",\"browsers\",\"target\"],\"funding\":[{\"type\":\"opencollective\",\"url\":\"https://opencollective.com/browserslist\"},{\"type\":\"tidelift\",\"url\":\"https://tidelift.com/funding/github/npm/browserslist\"},{\"type\":\"github\",\"url\":\"https://github.com/sponsors/ai\"}],\"author\":\"Andrey Sitnik <andrey@sitnik.ru>\",\"license\":\"MIT\",\"repository\":\"browserslist/update-db\",\"types\":\"./index.d.ts\",\"exports\":{\".\":\"./index.js\",\"./package.json\":\"./package.json\"},\"dependencies\":{\"escalade\":\"^3.1.1\",\"picocolors\":\"^1.0.0\"},\"peerDependencies\":{\"browserslist\":\">= 4.21.0\"},\"bin\":\"cli.js\"}");

/***/ }),

/***/ 1569:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"uri-js\",\"version\":\"4.4.1\",\"description\":\"An RFC 3986/3987 compliant, scheme extendable URI/IRI parsing/validating/resolving library for JavaScript.\",\"main\":\"dist/es5/uri.all.js\",\"types\":\"dist/es5/uri.all.d.ts\",\"directories\":{\"test\":\"tests\"},\"files\":[\"dist\",\"package.json\",\"yarn.lock\",\"README.md\",\"CHANGELOG\",\"LICENSE\"],\"scripts\":{\"build:esnext\":\"tsc\",\"build:es5\":\"rollup -c && cp dist/esnext/uri.d.ts dist/es5/uri.all.d.ts && npm run build:es5:fix-sourcemap\",\"build:es5:fix-sourcemap\":\"sorcery -i dist/es5/uri.all.js\",\"build:es5:min\":\"uglifyjs dist/es5/uri.all.js --support-ie8 --output dist/es5/uri.all.min.js --in-source-map dist/es5/uri.all.js.map --source-map uri.all.min.js.map --comments --compress --mangle --pure-funcs merge subexp && mv uri.all.min.js.map dist/es5/ && cp dist/es5/uri.all.d.ts dist/es5/uri.all.min.d.ts\",\"build\":\"npm run build:esnext && npm run build:es5 && npm run build:es5:min\",\"clean\":\"rm -rf dist\",\"test\":\"mocha -u mocha-qunit-ui dist/es5/uri.all.js tests/tests.js\"},\"repository\":{\"type\":\"git\",\"url\":\"http://github.com/garycourt/uri-js\"},\"keywords\":[\"URI\",\"IRI\",\"IDN\",\"URN\",\"UUID\",\"HTTP\",\"HTTPS\",\"WS\",\"WSS\",\"MAILTO\",\"RFC3986\",\"RFC3987\",\"RFC5891\",\"RFC2616\",\"RFC2818\",\"RFC2141\",\"RFC4122\",\"RFC4291\",\"RFC5952\",\"RFC6068\",\"RFC6455\",\"RFC6874\"],\"author\":\"Gary Court <gary.court@gmail.com>\",\"license\":\"BSD-2-Clause\",\"bugs\":{\"url\":\"https://github.com/garycourt/uri-js/issues\"},\"homepage\":\"https://github.com/garycourt/uri-js\",\"devDependencies\":{\"babel-cli\":\"^6.26.0\",\"babel-plugin-external-helpers\":\"^6.22.0\",\"babel-preset-latest\":\"^6.24.1\",\"mocha\":\"^8.2.1\",\"mocha-qunit-ui\":\"^0.1.3\",\"rollup\":\"^0.41.6\",\"rollup-plugin-babel\":\"^2.7.1\",\"rollup-plugin-node-resolve\":\"^2.0.0\",\"sorcery\":\"^0.10.0\",\"typescript\":\"^2.8.1\",\"uglify-js\":\"^2.8.14\"},\"dependencies\":{\"punycode\":\"^2.1.0\"}}");

/***/ }),

/***/ 4820:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"uuid\",\"version\":\"8.3.2\",\"description\":\"RFC4122 (v1, v4, and v5) UUIDs\",\"commitlint\":{\"extends\":[\"@commitlint/config-conventional\"]},\"keywords\":[\"uuid\",\"guid\",\"rfc4122\"],\"license\":\"MIT\",\"bin\":{\"uuid\":\"./dist/bin/uuid\"},\"sideEffects\":false,\"main\":\"./dist/index.js\",\"exports\":{\".\":{\"node\":{\"module\":\"./dist/esm-node/index.js\",\"require\":\"./dist/index.js\",\"import\":\"./wrapper.mjs\"},\"default\":\"./dist/esm-browser/index.js\"},\"./package.json\":\"./package.json\"},\"module\":\"./dist/esm-node/index.js\",\"browser\":{\"./dist/md5.js\":\"./dist/md5-browser.js\",\"./dist/rng.js\":\"./dist/rng-browser.js\",\"./dist/sha1.js\":\"./dist/sha1-browser.js\",\"./dist/esm-node/index.js\":\"./dist/esm-browser/index.js\"},\"files\":[\"CHANGELOG.md\",\"CONTRIBUTING.md\",\"LICENSE.md\",\"README.md\",\"dist\",\"wrapper.mjs\"],\"devDependencies\":{\"@babel/cli\":\"7.11.6\",\"@babel/core\":\"7.11.6\",\"@babel/preset-env\":\"7.11.5\",\"@commitlint/cli\":\"11.0.0\",\"@commitlint/config-conventional\":\"11.0.0\",\"@rollup/plugin-node-resolve\":\"9.0.0\",\"babel-eslint\":\"10.1.0\",\"bundlewatch\":\"0.3.1\",\"eslint\":\"7.10.0\",\"eslint-config-prettier\":\"6.12.0\",\"eslint-config-standard\":\"14.1.1\",\"eslint-plugin-import\":\"2.22.1\",\"eslint-plugin-node\":\"11.1.0\",\"eslint-plugin-prettier\":\"3.1.4\",\"eslint-plugin-promise\":\"4.2.1\",\"eslint-plugin-standard\":\"4.0.1\",\"husky\":\"4.3.0\",\"jest\":\"25.5.4\",\"lint-staged\":\"10.4.0\",\"npm-run-all\":\"4.1.5\",\"optional-dev-dependency\":\"2.0.1\",\"prettier\":\"2.1.2\",\"random-seed\":\"0.3.0\",\"rollup\":\"2.28.2\",\"rollup-plugin-terser\":\"7.0.2\",\"runmd\":\"1.3.2\",\"standard-version\":\"9.0.0\"},\"optionalDevDependencies\":{\"@wdio/browserstack-service\":\"6.4.0\",\"@wdio/cli\":\"6.4.0\",\"@wdio/jasmine-framework\":\"6.4.0\",\"@wdio/local-runner\":\"6.4.0\",\"@wdio/spec-reporter\":\"6.4.0\",\"@wdio/static-server-service\":\"6.4.0\",\"@wdio/sync\":\"6.4.0\"},\"scripts\":{\"examples:browser:webpack:build\":\"cd examples/browser-webpack && npm install && npm run build\",\"examples:browser:rollup:build\":\"cd examples/browser-rollup && npm install && npm run build\",\"examples:node:commonjs:test\":\"cd examples/node-commonjs && npm install && npm test\",\"examples:node:esmodules:test\":\"cd examples/node-esmodules && npm install && npm test\",\"lint\":\"npm run eslint:check && npm run prettier:check\",\"eslint:check\":\"eslint src/ test/ examples/ *.js\",\"eslint:fix\":\"eslint --fix src/ test/ examples/ *.js\",\"pretest\":\"[ -n $CI ] || npm run build\",\"test\":\"BABEL_ENV=commonjs node --throw-deprecation node_modules/.bin/jest test/unit/\",\"pretest:browser\":\"optional-dev-dependency && npm run build && npm-run-all --parallel examples:browser:**\",\"test:browser\":\"wdio run ./wdio.conf.js\",\"pretest:node\":\"npm run build\",\"test:node\":\"npm-run-all --parallel examples:node:**\",\"test:pack\":\"./scripts/testpack.sh\",\"pretest:benchmark\":\"npm run build\",\"test:benchmark\":\"cd examples/benchmark && npm install && npm test\",\"prettier:check\":\"prettier --ignore-path .prettierignore --check '**/*.{js,jsx,json,md}'\",\"prettier:fix\":\"prettier --ignore-path .prettierignore --write '**/*.{js,jsx,json,md}'\",\"bundlewatch\":\"npm run pretest:browser && bundlewatch --config bundlewatch.config.json\",\"md\":\"runmd --watch --output=README.md README_js.md\",\"docs\":\"( node --version | grep -q 'v12' ) && ( npm run build && runmd --output=README.md README_js.md )\",\"docs:diff\":\"npm run docs && git diff --quiet README.md\",\"build\":\"./scripts/build.sh\",\"prepack\":\"npm run build\",\"release\":\"standard-version --no-verify\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/uuidjs/uuid.git\"},\"husky\":{\"hooks\":{\"commit-msg\":\"commitlint -E HUSKY_GIT_PARAMS\",\"pre-commit\":\"lint-staged\"}},\"lint-staged\":{\"*.{js,jsx,json,md}\":[\"prettier --write\"],\"*.{js,jsx}\":[\"eslint --fix\"]},\"standard-version\":{\"scripts\":{\"postchangelog\":\"prettier --write CHANGELOG.md\"}}}");

/***/ }),

/***/ 3733:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"v8-compile-cache\",\"version\":\"2.3.0\",\"description\":\"Require hook for automatic V8 compile cache persistence\",\"main\":\"v8-compile-cache.js\",\"scripts\":{\"bench\":\"bench/run.sh\",\"eslint\":\"eslint --max-warnings=0 .\",\"tap\":\"tap test/*-test.js\",\"test\":\"npm run tap\",\"posttest\":\"npm run eslint\"},\"author\":\"Andres Suarez <zertosh@gmail.com>\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/zertosh/v8-compile-cache.git\"},\"files\":[\"v8-compile-cache.js\"],\"license\":\"MIT\",\"dependencies\":{},\"devDependencies\":{\"babel-core\":\"6.26.3\",\"eslint\":\"^7.12.1\",\"flow-parser\":\"0.136.0\",\"rimraf\":\"^2.5.4\",\"rxjs\":\"6.6.3\",\"semver\":\"^5.3.0\",\"tap\":\"^9.0.0\",\"temp\":\"^0.8.3\",\"yarn\":\"1.22.10\"}}");

/***/ }),

/***/ 9965:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"version-bump-prompt\",\"version\":\"6.1.0\",\"description\":\"Automatically (or with prompts) bump your version number, commit changes, tag, and push to Git\",\"keywords\":[\"version\",\"bump\",\"npm\",\"node\",\"bower\",\"package\",\"git\",\"tag\",\"push\",\"prompt\"],\"author\":{\"name\":\"James Messinger\",\"url\":\"https://jamesmessinger.com\"},\"license\":\"MIT\",\"homepage\":\"https://jstools.dev/version-bump-prompt\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/JS-DevTools/version-bump-prompt.git\"},\"main\":\"index.js\",\"types\":\"index.d.ts\",\"bin\":{\"bump\":\"bump.js\"},\"files\":[\"bump.js\",\"index.js\",\"index.d.ts\"],\"dependencies\":{\"@jsdevtools/version-bump-prompt\":\"6.1.0\"},\"engines\":{\"node\":\">=10\"},\"engineStrict\":true}");

/***/ }),

/***/ 5048:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"author\":\"Isaac Z. Schlueter <i@izs.me> (http://blog.izs.me)\",\"name\":\"which\",\"description\":\"Like which(1) unix command. Find the first instance of an executable in the PATH.\",\"version\":\"2.0.2\",\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/isaacs/node-which.git\"},\"main\":\"which.js\",\"bin\":{\"node-which\":\"./bin/node-which\"},\"license\":\"ISC\",\"dependencies\":{\"isexe\":\"^2.0.0\"},\"devDependencies\":{\"mkdirp\":\"^0.5.0\",\"rimraf\":\"^2.6.2\",\"tap\":\"^14.6.9\"},\"scripts\":{\"test\":\"tap\",\"preversion\":\"npm test\",\"postversion\":\"npm publish\",\"prepublish\":\"npm run changelog\",\"prechangelog\":\"bash gen-changelog.sh\",\"changelog\":\"git add CHANGELOG.md\",\"postchangelog\":\"git commit -m 'update changelog - '${npm_package_version}\",\"postpublish\":\"git push origin --follow-tags\"},\"files\":[\"which.js\",\"bin/node-which\"],\"tap\":{\"check-coverage\":true},\"engines\":{\"node\":\">= 8\"}}");

/***/ }),

/***/ 6255:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"word-wrap\",\"description\":\"Wrap words to a specified length.\",\"version\":\"1.2.3\",\"homepage\":\"https://github.com/jonschlinkert/word-wrap\",\"author\":\"Jon Schlinkert (https://github.com/jonschlinkert)\",\"contributors\":[\"Danilo Sampaio <danilo.sampaio@gmail.com> (localhost:8080)\",\"Fede Ramirez <i@2fd.me> (https://2fd.github.io)\",\"Joe Hildebrand <joe-github@cursive.net> (https://twitter.com/hildjj)\",\"Jon Schlinkert <jon.schlinkert@sellside.com> (http://twitter.com/jonschlinkert)\",\"Todd Kennedy (https://tck.io)\",\"Waldemar Reusch (https://github.com/lordvlad)\",\"Wolfgang Faust (http://www.linestarve.com)\",\"Zach Hale <zachhale@gmail.com> (http://zachhale.com)\"],\"repository\":\"jonschlinkert/word-wrap\",\"bugs\":{\"url\":\"https://github.com/jonschlinkert/word-wrap/issues\"},\"license\":\"MIT\",\"files\":[\"index.js\",\"index.d.ts\"],\"main\":\"index.js\",\"engines\":{\"node\":\">=0.10.0\"},\"scripts\":{\"test\":\"mocha\"},\"devDependencies\":{\"gulp-format-md\":\"^0.1.11\",\"mocha\":\"^3.2.0\"},\"keywords\":[\"break\",\"carriage\",\"line\",\"new-line\",\"newline\",\"return\",\"soft\",\"text\",\"word\",\"word-wrap\",\"words\",\"wrap\"],\"typings\":\"index.d.ts\",\"verb\":{\"toc\":false,\"layout\":\"default\",\"tasks\":[\"readme\"],\"plugins\":[\"gulp-format-md\"],\"lint\":{\"reflinks\":true},\"related\":{\"list\":[\"common-words\",\"shuffle-words\",\"unique-words\",\"wordcount\"]},\"reflinks\":[\"verb\",\"verb-generate-readme\"]}}");

/***/ }),

/***/ 7603:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"wrappy\",\"version\":\"1.0.2\",\"description\":\"Callback wrapping utility\",\"main\":\"wrappy.js\",\"files\":[\"wrappy.js\"],\"directories\":{\"test\":\"test\"},\"dependencies\":{},\"devDependencies\":{\"tap\":\"^2.3.1\"},\"scripts\":{\"test\":\"tap --coverage test/*.js\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/npm/wrappy\"},\"author\":\"Isaac Z. Schlueter <i@izs.me> (http://blog.izs.me/)\",\"license\":\"ISC\",\"bugs\":{\"url\":\"https://github.com/npm/wrappy/issues\"},\"homepage\":\"https://github.com/npm/wrappy\"}");

/***/ }),

/***/ 9712:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"yallist\",\"version\":\"3.1.1\",\"description\":\"Yet Another Linked List\",\"main\":\"yallist.js\",\"directories\":{\"test\":\"test\"},\"files\":[\"yallist.js\",\"iterator.js\"],\"dependencies\":{},\"devDependencies\":{\"tap\":\"^12.1.0\"},\"scripts\":{\"test\":\"tap test/*.js --100\",\"preversion\":\"npm test\",\"postversion\":\"npm publish\",\"postpublish\":\"git push origin --all; git push origin --tags\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/isaacs/yallist.git\"},\"author\":\"Isaac Z. Schlueter <i@izs.me> (http://blog.izs.me/)\",\"license\":\"ISC\"}");

/***/ }),

/***/ 306:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@lando/prepare-release-action\",\"version\":\"2.0.0-alpha.0\",\"description\":\"An action that can automate release steps and sync them back to the releasing repo.\",\"contributors\":[\"Alec Reynolds @reynoldsalec\",\"Mike Pirog @pirog\"],\"license\":\"GPL-3.0\",\"repository\":\"https://github.com/lando/prepare-release-action\",\"bugs\":\"https://github.com/lando/prepare-release-action/issues\",\"homepage\":\"https://github.com/lando/prepare-release-action\",\"keywords\":[\"lando\",\"Github Actions\"],\"engines\":{\"node\":\">=16.0.0\"},\"dependencies\":{\"@actions/core\":\"^1.10.0\",\"@actions/exec\":\"^1.1.1\",\"bundle-dependencies\":\"^1.0.2\",\"semver\":\"^7.5.1\",\"version-bump-prompt\":\"^6.1.0\"},\"devDependencies\":{\"@babel/core\":\"^7.21.5\",\"@babel/eslint-parser\":\"^7.16.0\",\"@vercel/ncc\":\"^0.24.1\",\"eslint\":\"^7.32.0\",\"eslint-config-google\":\"^0.14.0\"},\"scripts\":{\"lint\":\"eslint .\",\"prepare\":\"ncc build prepare-release.js -o dist --source-map --license licenses.txt\"}}");

/***/ }),

/***/ 2357:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 3129:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 6417:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 8614:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 5747:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 8605:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 7211:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 1631:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 2087:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 5622:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 4304:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 9343:
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 8818:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 1669:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__webpack_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(691);
/******/ })()
;
//# sourceMappingURL=index.js.map