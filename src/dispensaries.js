'use strict';

class Dispensaries {
  constructor(ch) {
    this._ch = ch;
  }

  //  TODO add page and count sorting
  getAll(page, sort) {
    return this._ch.get('dispensaries');
  }

  getDispensary(state, city, slug) {
    let url = `dispensaries/${state}/${city}/${slug}`;
    return this._ch.get(url);
  }

  getStrains(state, city, slug) {
    let url = `dispensaries/${state}/${city}/${slug}/strains`;
    return this._ch.get(url);
  }

  getExtracts(state, city, slug) {
    let url = `dispensaries/${state}/${city}/${slug}/extracts`;
    return this._ch.get(url);
  }

  getEdibles(state, city, slug) {
    let url = `dispensaries/${state}/${city}/${slug}/edibles`;
    return this._ch.get(url);
  }

  getProducts(state, city, slug) {
    let url = `dispensaries/${state}/${city}/${slug}/products`;
    return this._ch.get(url);
  }
}

module.exports = Dispensaries;
