'use strict';

export default class Producers {
  constructor(ch) {
    this._ch = ch;
  }

  getAll(page, sort) {
    return this._ch.get('producers');
  }

  getProducer(ucpc) {
    let url = `producers/${ucpc}`;
    return this._ch.get(url);
  }

  getExtracts(ucpc, page, sort) {
    return this._ch.get('producers');
  }

  getEdibles(ucpc, page, sort) {
    return this._ch.get('producers');
  }

  getProducts(ucpc, page, sort) {
    return this._ch.get('producers');
  }

  getAvailability(ucpc, lat, lng, radius) {
    let url = `producers/${ucpc}/availability/geo/${lat}/${lng}/${radius}`;
    return this._ch.get(url);
  }
}
