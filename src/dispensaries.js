'use strict';

class Dispensaries {
  /**
   * Create a producers instance
   * @param {CannabisHelper} ch - A CannabisHelper instance
   */
  constructor(ch) {
    this._ch = ch;
  }

  /**
   * Gets a paginated list of dispensaries with optional sorting.
   * @param {integer} page - Which page of results you want
   * @param {string} sort - How you would like the results sorted
   * @returns {array} A list of all producers
   * @TODO add page and count sorting
   */
  getAll(page, sort) {
    return this._ch.get('dispensaries');
  }

  /**
   * Gets info about an individual dispensary based on state, city, and slug
   * @param {string} state - Two char state for dispensary
   * @param {string} city - City where the dispensary is located
   * @param {string} slug - Slug for the name of the dispensary
   * @returns {object} A dispensary object
   */
  getDispensary(state, city, slug) {
    let url = `dispensaries/${state}/${city}/${slug}`;
    return this._ch.get(url);
  }

  /**
   * Get a paginated list of strains for a dispensary from 
   * the given information
   * @param {string} state - Two char state for dispensary
   * @param {string} city - City where the dispensary is located
   * @param {string} slug - Slug for the name of the dispensary
   * @returns {array} A list of strains offered by a dispensary
   */
  getStrains(state, city, slug) {
    let url = `dispensaries/${state}/${city}/${slug}/strains`;
    return this._ch.get(url);
  }

  /**
   * Get a paginated list of extracts for a dispensary from 
   * the given information
   * @param {string} state - Two char state for dispensary
   * @param {string} city - City where the dispensary is located
   * @param {string} slug - Slug for the name of the dispensary
   * @returns {array} A list of extracts offered by a dispensary
   */
  getExtracts(state, city, slug) {
    let url = `dispensaries/${state}/${city}/${slug}/extracts`;
    return this._ch.get(url);
  }

  /**
   * Get a paginated list of edibles for a dispensary from 
   * the given information
   * @param {string} state - Two char state for dispensary
   * @param {string} city - City where the dispensary is located
   * @param {string} slug - Slug for the name of the dispensary
   * @returns {array} A list of edibles offered by a dispensary
   */
  getEdibles(state, city, slug) {
    let url = `dispensaries/${state}/${city}/${slug}/edibles`;
    return this._ch.get(url);
  }

  /**
   * Get a paginated list of products for a dispensary from 
   * the given information
   * @param {string} state - Two char state for dispensary
   * @param {string} city - City where the dispensary is located
   * @param {string} slug - Slug for the name of the dispensary
   * @returns {array} A list of products offered by a dispensary
   */
  getProducts(state, city, slug) {
    let url = `dispensaries/${state}/${city}/${slug}/products`;
    return this._ch.get(url);
  }
}

module.exports = Dispensaries;
