'use strict';

export default class Flowers {
  constructor(ch) {
    this._ch = ch;
  }

  getAll(page, sort) {
    return this._ch.get('flowers');
  }

  getByType(type, page, sort) {
    let url = `flowers/type/${type}`;
    return this._ch.get(url);
  }

  getFlower(ucpc) {
    let url = `flowers/${ucpc}`;
    return this._ch.get(url);
  }

  getUser(ucpc) {
    let url = `flowers/${ucpc}/user`;
    return this._ch.get(url);
  }

  getReviews(ucpc) {
    let url = `flowers/${ucpc}/reviews`;
    return this._ch.get(url);
  }
  
  getEffectsFlavors(ucpc) {
    let url = `flowers/${ucpc}/effectsFlavors`;
    return this._ch.get(url);
  }

  getProducer(ucpc) {
    let url = `flowers/${ucpc}/producer`;
    return this._ch.get(url);
  }

  getStrain(ucpc) {
    let url = `flowers/${ucpc}/strain`;
    return this._ch.get(url);
  }

  getAvailability(ucpc, lat, lng, radius) {
    let url = `strains/${ucpc}/availability/geo/${lat}/${lng}/${radius}`;
    return this._ch.get(url);
  }
}
