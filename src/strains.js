'use strict';

/** Class representing cannabis strains */
class Strains {
  /**
   * Create a Strains instance
   * @param {CannabisHelper} ch - A CannabisHelper instance
   */
  constructor(ch) {
    this._ch = ch;
  }

  /**
   * Gets a paginated list of strains with optional sorting.
   * @param {integer} page - Which page of results you want
   * @param {string} sort - How you would like the results sorted
   * @returns {array} A list of all strains
   * @TODO add page and count sorting 
   */
  getAll(page, sort) {
    return this._ch.get('strains');
  }

  /**
   * Gets search results for strains in our databasae
   * @param {string} query - Search query to find strains in our system. Must be
   * at least 2 characters.
   * @param {integer} page - Which page of results you want
   * @returns {array} A list of strains matching search query
   */
  searchAll(query) {
    let url = `strains/search/${query}`;
    return this._ch.get(url);
  }

  /**
   * Gets individual strain based on the UCPC
   * @param {string} ucpc - UCPC for the cannabis strain
   * @returns {object} An object representing the strain
   */
  getStrain(ucpc) {
    let url = `strains/${ucpc}`;
    return this._ch.get(url);
  }

  /**
   * Get the user who added the strain to the database. 
   * @param {string} ucpc - UCPC for the cannabis strain
   * @returns {object} An object representing the user 
   */
  getUser(ucpc) {
    let url = `strains/${ucpc}/user`;
    return this._ch.get(url);
  }

  /**
   * Get the reviews for a cannabis strain 
   * @param {string} ucpc - UCPC for the cannabis strain you would like reviews
   * for
   * @returns {array} An array representing the reviews 
   */
  getReviews(ucpc) {
    let url = `strains/${ucpc}/reviews`;
    return this._ch.get(url);
  }

  /**
   * Get the average effects and flavors from reviews for this strain. 
   * @param {string} ucpc - UCPC for the cannabis strain you would like the
   * effects and flavors for. 
   * @returns {object} An object representing the effects and flavors 
   */
  getEffectsFlavors(ucpc) {
    let url = `strains/${ucpc}/effectsFlavors`;
    return this._ch.get(url);
  }

  /**
   * Get the seed company that was responsible for a cannabis strain. 
   * @param {string} ucpc - UCPC of the strain you would like to find the seed
   * company for. 
   * @returns {object} An object representing the seed company 
   */
  getSeedCompany(ucpc) {
    let url = `strains/${ucpc}/seedCompany`;
    return this._ch.get(url);
  }

  /**
   * Gets the strains that were the parent material for the strain with the
   * given UCPC.
   * @param {string} ucpc - UCPC for the cannabis strain you want information
   * about. 
   * @returns {array} An array representing the parent strains 
   */
  getGenetics(ucpc) {
    let url = `strains/${ucpc}/genetics`;
    return this._ch.get(url);
  }

  /**
   * Get the child strains that this one has been bred into. 
   * @param {string} ucpc - UCPC for the cannabis strain you want information
   * about. 
   * @returns {array} An array representing the child strains 
   */
  getChildren(ucpc) {
    let url = `strains/${ucpc}/children`;
    return this._ch.get(url);
  }

  /**
   * Get information about the availability of a product using 
   * latitude and longitude.
   * @param {string} ucpc - UCPC for the cannabis strain you 
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

module.exports = Strains;
