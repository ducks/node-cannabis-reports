'use strict';

export default class Strains {
  constructor(ch) {
    this._ch = ch;
  }

  getAll(page, sort) {
    return this._ch.get('strains');
  }

  searchAll(query) {
    let url = `strains/search/${query}`;
    return this._ch.get(url);
  }

  getStrain(ucpc) {
    let url = `strains/${ucpc}`;
    return this._ch.get(url);
  }

  getUser(ucpc) {
    let url = `strains/${ucpc}/user`;
    return this._ch.get(url);
  }

  getReviews(ucpc) {
    let url = `strains/${ucpc}/reviews`;
    return this._ch.get(url);
  }

  getEffectsFlavors(ucpc) {
    let url = `strains/${ucpc}/effectsFlavors`;
    return this._ch.get(url);
  }

  getSeedCompany(ucpc) {
    let url = `strains/${ucpc}/seedCompany`;
    return this._ch.get(url);
  }

  getGenetics(ucpc) {
    let url = `strains/${ucpc}/genetics`;
    return this._ch.get(url);
  }

  getChildren(ucpc) {
    let url = `strains/${ucpc}/children`;
    return this._ch.get(url);
  }

  getAvailability(ucpc, lat, lng, radius) {
    let url = `strains/${ucpc}/availability/geo/${lat}/${lng}/${radius}`;
    return this._ch.get(url);
  }
}
