'use strict';

class SeedCompanies {
  constructor(ch) {
    this._ch = ch;
  }

  getCompany(ucpc) {
    let url = `seed-companies/${ucpc}`;
    return this._ch.get(url);
  }

  getStrains(ucpc) {
    let url = `seed-companies/${ucpc}/strains`;
    return this._ch.get(url);
  }

  getReviews(ucpc) {
    let url = `seed-companies/${ucpc}/reviews`;
    return this._ch.get(url);
  }
}

module.exports = SeedCompanies;
