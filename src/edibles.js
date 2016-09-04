'use strict';

class Edibles {
  /**
   * Create a edibles instance
   * @param {CannabisHelper} ch - A CannabisHelper instance
   */
  constructor(ch) {
    this._ch = ch;
  }

  /**
   * Gets a paginated list of edibles with optional sorting.
   * @param {integer} page - Which page of results you want
   * @param {string} sort - How you would like the results sorted
   * @returns {array} A list of all edibles 
   * @TODO add page and count sorting 
   */
  getAll(page, sort) {
    return this._ch.get('edibles');
  }

  /**
   * Gets a paginated list of products for a given type with optional sorting
   * @param {string} type - The type of edibles you want to search
   * @param {integer} page - which page of results you want
   * @param {string} sort - how you would like the results sorted
   */
  getByType(type, page, sort) {
    let url = `edibles/type/${type}`;
    return this._ch.get(url);
  }

  /**
   * Gets individual edible based on the UCPC
   * @param {string} ucpc - UCPC for the cannabis edible 
   * @returns {object} An object representing the edible 
   */
  getEdible(ucpc) {
    let url = `edibles/${ucpc}`;
    return this._ch.get(url);
  }

  /**
   * Get the user who added the edible to the database. 
   * @param {string} ucpc - UCPC for the cannabis edible
   * @returns {object} An object representing the user 
   */
  getUser(ucpc) {
    let url = `edibles/${ucpc}/user`;
    return this._ch.get(url);
  }

  /**
   * Get the reviews for a cannabis edible 
   * @param {string} ucpc - UCPC for the cannabis edible you 
   * would like reviews for
   * @returns {array} An array representing the reviews 
   */
  getReviews(ucpc) {
    let url = `edibles/${ucpc}/reviews`;
    return this._ch.get(url);
  }

  /**
   * Get the average effects and flavors from reviews for this edible. 
   * @param {string} ucpc - UCPC for the cannabis edible you would like the
   * effects and flavors for. 
   * @returns {object} An object representing the effects and flavors 
   */
  getEffectsFlavors(ucpc) {
    let url = `edibles/${ucpc}/effectsFlavors`;
    return this._ch.get(url);
  }

  /**
   * Gets the producer for a given edible
   * @param {string} ucpc - UCPC for the cannabis edible you want the 
   * producer for
   * @returns {object} An object representing the producer
   */
  getProducer(ucpc) {
    let url = `edibles/${ucpc}/producer`;
    return this._ch.get(url);
  }

  /**
   * Gets the info about a strain for a edible with the given UCPC
   * @param {string} ucpc - UCPC for the cannabis edible you want strain
   * info about
   * @returns {object} An object representings the strain
   */
  getStrain(ucpc) {
    let url = `edibles/${ucpc}/strain`;
    return this._ch.get(url);
  }

  /**
   * Get information about the availability of a product using 
   * latitude and longitude.
   * @param {string} ucpc - UCPC for the cannabis edible you 
   * want information about. 
   * @param {string} lat - Latitude for the center of your 
   * availability search.
   * @param {string} lng - Longitude for the center of your 
   * availability search.
   * @param {integer} radius - Radius to search for in miles, max 25.
   * @returns {array} An array representing the locations of availibility 
   */
  getAvailability(ucpc, lat, lng, radius) {
    let url = `edibles/${ucpc}/availability/geo/${lat}/${lng}/${radius}`;
    return this._ch.get(url);
  }
}

module.exports = Edibles;
