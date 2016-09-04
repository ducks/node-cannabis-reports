'use strict';

/** Class representing cannabis flowers */
class Flowers {
  /**
   * Create a Flowers instance
   * @param {CannabisHelper} ch - A CannabisHelper instance
   */
  constructor(ch) {
    this._ch = ch;
  }

  /**
   * Gets a paginated list of flowers with optional sorting.
   * @param {integer} page - Which page of results you want
   * @param {string} sort - How you would like the results sorted
   * @returns {array} A list of all flowers 
   * @TODO add page and count sorting 
   */
  getAll(page, sort) {
    return this._ch.get('flowers');
  }

  /**
   * Gets a paginated list of products for a given type with optional sorting
   * @param {string} type - The type of flowers you want to search
   * @param {integer} page - which page of results you want
   * @param {string} sort - how you would like the results sorted
   */
  getByType(type, page, sort) {
    let url = `flowers/type/${type}`;
    return this._ch.get(url);
  }

  /**
   * Gets individual flower based on the UCPC
   * @param {string} ucpc - UCPC for the cannabis flower 
   * @returns {object} An object representing the flower 
   */
  getFlower(ucpc) {
    let url = `flowers/${ucpc}`;
    return this._ch.get(url);
  }

  /**
   * Get the user who added the flower to the database. 
   * @param {string} ucpc - UCPC for the cannabis flower
   * @returns {object} An object representing the user 
   */
  getUser(ucpc) {
    let url = `flowers/${ucpc}/user`;
    return this._ch.get(url);
  }

  /**
   * Get the reviews for a cannabis flower 
   * @param {string} ucpc - UCPC for the cannabis flower you 
   * would like reviews for
   * @returns {array} An array representing the reviews 
   */
  getReviews(ucpc) {
    let url = `flowers/${ucpc}/reviews`;
    return this._ch.get(url);
  }

  /**
   * Get the average effects and flavors from reviews for this flower. 
   * @param {string} ucpc - UCPC for the cannabis flower you would like the
   * effects and flavors for. 
   * @returns {object} An object representing the effects and flavors 
   */
  getEffectsFlavors(ucpc) {
    let url = `flowers/${ucpc}/effectsFlavors`;
    return this._ch.get(url);
  }

  /**
   * Gets the producer for a given flower
   * @param {string} ucpc - UCPC for the cannabis flower you want the 
   * producer for
   * @returns {object} An object representing the producer
   */
  getProducer(ucpc) {
    let url = `flowers/${ucpc}/producer`;
    return this._ch.get(url);
  }

  /**
   * Gets the info about a strain for a flower with the given UCPC
   * @param {string} ucpc - UCPC for the cannabis flower you want strain
   * info about
   * @returns {object} An object representings the strain
   */
  getStrain(ucpc) {
    let url = `flowers/${ucpc}/strain`;
    return this._ch.get(url);
  }

  /**
   * Get information about the availability of a product using 
   * latitude and longitude.
   * @param {string} ucpc - UCPC for the cannabis flower you 
   * want information about. 
   * @param {string} lat - Latitude for the center of your 
   * availability search.
   * @param {string} lng - Longitude for the center of your 
   * availability search.
   * @param {integer} radius - Radius to search for in miles, max 25.
   * @returns {array} An array representing the locations of availibility 
   */
  getAvailability(ucpc, lat, lng, radius) {
    let url = `strains/${ucpc}/availability/geo/${lat}/${lng}/${radius}`;
    return this._ch.get(url);
  }
}

module.exports = Flowers;
