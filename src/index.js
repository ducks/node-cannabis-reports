'use strict';

import config from 'config';

import CannabisHelper from './helper';
import Strains from './strains';
import Flowers from './flowers';
import Extracts from './extracts';
import Edibles from './edibles';
import Products from './products';
import Producers from './producers';
import Dispensaries from './dispensaries';
import SeedCompanies from './seed-companies';

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
