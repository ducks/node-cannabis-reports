<a href="https://travis-ci.org/rjgoldsborough/node-cannabis-reports">
![Node Cannabis Reports travisci
badge](https://travis-ci.org/rjgoldsborough/node-cannabis-reports.svg?branch=master)
</a>

[![Coverage Status](https://coveralls.io/repos/github/rjgoldsborough/node-cannabis-reports/badge.svg?branch=master)](https://coveralls.io/github/rjgoldsborough/node-cannabis-reports?branch=master)

# Node Cannabis Reports

A node wrapper around 
[Cannabis Reports](https://developers.cannabisreports.com).

## Installation

You should only need to run `yarn install --no-lockfile`.

## Tests

There is a minimal set of tests currently but more are coming.
Run `yarn run test`.

## Docs

This module uses [RAML](http://raml.org).
The docs are located in `index.html`.
You can regenerate the docs by running `yarn run docs`.

They can also be viewed online at:
https://rjgoldsborough.github.io/node-cannabis-reports

## Usage

```
const CannabisReports = require('src/index');
const cr = new CannabisReport(apiKey);

cr.Strains.getAll().then(function(strains) {
  // list of strains
});
```
