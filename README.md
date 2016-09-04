# Node Cannabis Reports

A node wrapper around 
[Cannabis Reports](https://developers.cannabisreports.com).

## Installation

You should only need to run `npm install`.

## Tests

There is a minimal set of tests currently but more are coming.
Run `npm run test`.

## Docs

This module uses jsdoc.
The docs are located in `/docs`. They are ok for now but will be improving.
You can regenerate the docs by running `npm run docs`.

## Usage

```
const CannabisReports = require('src/index');
const cr = new CannabisReport(apiKey);

cr.Strains.getAll().then(function(strains) {
  // list of strains
});
```