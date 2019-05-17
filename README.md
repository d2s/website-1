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

**We are defining `VWO_ID` in the `.env.production` file to be aligned to the implementation of `INCLUDE_MARKETING_SCRIPTS`**
