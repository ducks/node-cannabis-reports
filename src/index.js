'use strict';

const config = require('config');

const CannabisHelper = require('./helper');
const Strains = require('./strains');
const Flowers = require('./flowers');
const Extracts = require('./extracts');
const Edibles = require('./edibles');
const Products = require('./products');
const Producers = require('./producers');
const Dispensaries = require('./dispensaries');
const SeedCompanies = require('./seed-companies');

class CannabisReport {
  constructor(key) {
    this._ch = new CannabisHelper(key);
    this.Strains = new Strains(this._ch);
    this.Flowers = new Flowers(this._ch);
    this.Extracts = new Extracts(this._ch);
    this.Edibles = new Edibles(this._ch);
    this.Products = new Products(this._ch);
    this.Producers = new Producers(this._ch);
    this.Dispensaries = new Dispensaries(this._ch);
    this.SeedCompanies = new SeedCompanies(this._ch);
  }
}

module.exports = CannabisReport;
