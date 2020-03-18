![Build Status](https://api.travis-ci.org/honeypotio/website.svg?branch=master)

# Honeypot Website 2.0

## Setup

### Install nvm

https://github.com/creationix/nvm#install--update-script


### Install nvm at the specific version of node

```bash
nvm install 10.10.0
```

### Install dependencies

```bash
npm install
```

### Run app

```bash
npm run develop
```

## Environment variables

From [Gatsby documentation](https://www.gatsbyjs.org/docs/environment-variables/#example):

- `VWO_ID` will be available to your site (Server-side) as `process.env.VWO_ID`.
- If you commit your `.env.*` file containing `VWO_ID` to source control it would also be available on the client-side.
- However they strongly advise against that! You should prefix your variable with `GATSBY_` instead and Gatsby automatically makes it available in the browser context.

## Adding new languages

If you want to add another language, e.g. Spanish, you need to:
- get its shortcode, i.e. `es`
- Ensure that each file with an english suffix in `src/pages` has a corresponding file, e.g. `index.en.js` has a corresponding `index.es.js`. In most cases these files can be identical.
- Add the shortcode to the `languages` array in `src/utils/i18n.js`.
- Ensure that each of the files in `src/locales` has a key for `es` and translations for all the values.