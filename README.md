# Prepare Lando Plugin Action

Basic action to prepare a Lando plugin for publishing to a package registry like NPM. The action will...

- Make sure the plugin in question
- Bundle dependencies using [bundle-dependencies](https://www.npmjs.com/package/bundle-dependencies)
- Bump the version of the plugin in package.json using [version-bump-prompt](https://www.npmjs.com/package/version-bump-prompt)

```
      # Prepare plugin for release
      - name: Prepare Plugin
        uses: lando/prepare-plugin-action
        with:
          # Note these are optional inputs; shown are the default values.
          tag: ${{ github.event.release.tag_name }}
          commit-username: 'github-actions'
          commit-email: 'github-actions@github.com'
          lando-plugin: true
```

## Warnings

We do expand the initial shallow clone that's the default for `actions/checkout` to a full clone in order to re-commit the "bumped" version of your plugin.

Usage assumes that the action is being used in a workflow that checks out a Lando plugin's code. See usage in the [`lando/plugin-test`](https://github.com/lando/plugin-test/blob/main/.github/workflows/release.yml) plugin's release workflow.

## Example Workflow:

```
name: Publish to NPM

on:
  release:
    types:
      - published

jobs:
  deploy:
    runs-on: ubuntu-22.04
    env:
      TERM: xterm
      PRERELEASE_TAG: edge
    steps:
      # Install deps and cache
      - name: Checkout code
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - name: Install node 16
        uses: actions/setup-node@v3
        with:
          node-version: 16
          registry-url: https://registry.npmjs.org
          cache: yarn
      - name: Install Yarn dependencies
        run: yarn install --prefer-offline --frozen-lockfile

      # Let's do tests rq just to make sure we dont push something that is fundamentally broken
      - name: Lint code
        run: yarn lint
      - name: Run unit tests
        run: yarn test:unit

      # Prepare plugin for release
      - name: Prepare Plugin
        uses: lando/prepare-plugin-action

      # Deploy
      - name: Publish latest release to GitHub Packages
        if: ${{ !github.event.release.prerelease }}
        run: |
            npm publish --access public --dry-run
            npm publish --access public
            echo "::notice title=Published ${{ github.ref_name }} to @${{ github.repository }}::This is a stable release published to the default 'latest' npm tag"
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_DEPLOY_TOKEN }}
      - name: Publish edge release to GitHub Packages
        if: ${{ github.event.release.prerelease }}
        run: |
            npm publish --access public --tag ${{ env.PRERELEASE_TAG }} --dry-run
            npm publish --access public --tag ${{ env.PRERELEASE_TAG }}
            echo "::notice title=Published ${{ github.ref_name }} to @${{ github.repository }}@${{ env.PRERELEASE_TAG }}::This is a pre-release published to the '${{ env.PRERELEASE_TAG }}' npm tag"
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_DEPLOY_TOKEN }}
```