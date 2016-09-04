'use strict';

class Producers {
  /**
   * Create a producers instance
   * @param {CannabisHelper} ch - A CannabisHelper instance
   */
  constructor(ch) {
    this._ch = ch;
  }

  /**
   * Gets a paginated list of producers with optional sorting.
   * @param {integer} page - Which page of results you want
   * @param {string} sort - How you would like the results sorted
   * @returns {array} A list of all producers
   * @TODO add page and count sorting
   */
  getAll(page, sort) {
    return this._ch.get('producers');
  }

  /**
   * Gets individual producer based on the UCPC
   * @param {string} ucpc - UCPC for the cannabis extract
   * @returns {object} An object representing the extract
   */
  getProducer(ucpc) {
    let url = `producers/${ucpc}`;
    return this._ch.get(url);
  }

  /**
   * Gets a paginated list of extracts for a producer with given UCPC
   * @param {string} ucpc - UCPC for the cannabis producer 
   * @param {integer} page - Which page of results you want
   * @param {string} sort - How you would like the results sorted
   * @returns {array} A list of all producers
   * @TODO add page and count sorting
   */
  getExtracts(ucpc, page, sort) {
    return this._ch.get('producers');
  }

  /**
   * Gets a paginated list of edibles for a producer with given UCPC
   * @param {string} ucpc - UCPC for the cannabis producer 
   * @param {integer} page - Which page of results you want
   * @param {string} sort - How you would like the results sorted
   * @returns {array} A list of all producers
   * @TODO add page and count sorting
   */
  getEdibles(ucpc, page, sort) {
    return this._ch.get('producers');
  }

  /**
   * Gets a paginated list of products for a producer with given UCPC
   * @param {string} ucpc - UCPC for the cannabis producer 
   * @param {integer} page - Which page of results you want
   * @param {string} sort - How you would like the results sorted
   * @returns {array} A list of all producers
   * @TODO add page and count sorting
   */
  getProducts(ucpc, page, sort) {
    return this._ch.get('producers');
  }

  /**
   * Get information about the availability of a product using 
   * latitude and longitude.
   * @param {string} ucpc - UCPC for the cannabis product you 
   * want information about. 
   * @param {string} lat - Latitude for the center of your 
   * availability search.
   * @param {string} lng - Longitude for the center of your 
   * availability search.
   * @param {integer} radius - Radius to search for in miles, max 25.
   * @returns {array} An array representing the locations of availibility 
   */
  getAvailability(ucpc, lat, lng, radius) {
    let url = `producers/${ucpc}/availability/geo/${lat}/${lng}/${radius}`;
    return this._ch.get(url);
  }
}

module.exports = Producers;
