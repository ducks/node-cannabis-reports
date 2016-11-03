'use strict';

export default class Edibles {
  constructor(ch) {
    this._ch = ch;
  }

  // TODO add page and count sorting 
  getAll(page, sort) {
    return this._ch.get('edibles');
  }

  getByType(type, page, sort) {
    let url = `edibles/type/${type}`;
    return this._ch.get(url);
  }

  getEdible(ucpc) {
    let url = `edibles/${ucpc}`;
    return this._ch.get(url);
  }

  getUser(ucpc) {
    let url = `edibles/${ucpc}/user`;
    return this._ch.get(url);
  }

  getReviews(ucpc) {
    let url = `edibles/${ucpc}/reviews`;
    return this._ch.get(url);
  }

  getEffectsFlavors(ucpc) {
    let url = `edibles/${ucpc}/effectsFlavors`;
    return this._ch.get(url);
  }

  getProducer(ucpc) {
    let url = `edibles/${ucpc}/producer`;
    return this._ch.get(url);
  }

  getStrain(ucpc) {
    let url = `edibles/${ucpc}/strain`;
    return this._ch.get(url);
  }

  getAvailability(ucpc, lat, lng, radius) {
    let url = `edibles/${ucpc}/availability/geo/${lat}/${lng}/${radius}`;
    return this._ch.get(url);
  }
}
