'use strict';

class Extracts {
  constructor(ch) {
    this._ch = ch;
  }

  // TODO add page and count sorting 
  getAll(page, sort) {
    return this._ch.get('extracts');
  }

  getByType(type, page, sort) {
    let url = `extracts/type/${type}`;
    return this._ch.get(url);
  }

  getExtract(ucpc) {
    let url = `extracts/${ucpc}`;
    return this._ch.get(url);
  }

  getUser(ucpc) {
    let url = `extracts/${ucpc}/user`;
    return this._ch.get(url);
  }

  getReviews(ucpc) {
    let url = `extracts/${ucpc}/reviews`;
    return this._ch.get(url);
  }

  getEffectsFlavors(ucpc) {
    let url = `extracts/${ucpc}/effectsFlavors`;
    return this._ch.get(url);
  }

  getProducer(ucpc) {
    let url = `extracts/${ucpc}/producer`;
    return this._ch.get(url);
  }

  getStrain(ucpc) {
    let url = `extracts/${ucpc}/strain`;
    return this._ch.get(url);
  }

  getAvailability(ucpc, lat, lng, radius) {
    let url = `extracts/${ucpc}/availability/geo/${lat}/${lng}/${radius}`;
    return this._ch.get(url);
  }
}

module.exports = Extracts;
