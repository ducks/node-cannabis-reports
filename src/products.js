'use strict';

export default class Products {
  constructor(ch) {
    this._ch = ch;
  }

  getAll(page, sort) {
    return this._ch.get('products');
  }

  getByType(type, page, sort) {
    let url = `products/type/${type}`;
    return this._ch.get(url);
  }

  getProduct(ucpc) {
    let url = `products/${ucpc}`;
    return this._ch.get(url);
  }

  getUser(ucpc) {
    let url = `products/${ucpc}/user`;
    return this._ch.get(url);
  }

  getReviews(ucpc) {
    let url = `products/${ucpc}/reviews`;
    return this._ch.get(url);
  }

  getEffectsFlavors(ucpc) {
    let url = `products/${ucpc}/effectsFlavors`;
    return this._ch.get(url);
  }

  getProducer(ucpc) {
    let url = `products/${ucpc}/producer`;
    return this._ch.get(url);
  }

  getStrain(ucpc) {
    let url = `products/${ucpc}/strain`;
    return this._ch.get(url);
  }

  getAvailability(ucpc, lat, lng, radius) {
    let url = `products/${ucpc}/availability/geo/${lat}/${lng}/${radius}`;
    return this._ch.get(url);
  }
}
