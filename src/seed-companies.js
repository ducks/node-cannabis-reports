'use strict';

class SeedCompanies {
  /**
   * Create a producers instance
   * @param {CannabisHelper} ch - A CannabisHelper instance
   */
  constructor(ch) {
    this._ch = ch;
  }

  /**
   * Gets an individual seed company based on the UCPC
   * @param {string} ucpc - UCPC for the cannabis seed company
   * @returns {object} An object representing the seed company
   */
  getCompany(ucpc) {
    let url = `seed-companies/${ucpc}`;
    return this._ch.get(url);
  }

  /**
   * Gets the information about the strains offered by the seed company
   * @param {string} ucpc - UCPC for the cannabis seed company
   * @returns {object} An array of strains from seed company
   */
  getStrains(ucpc) {
    let url = `seed-companies/${ucpc}/strains`;
    return this._ch.get(url);
  }

  /**
   * Gets the reviews for the strains available from the seed company
   * @param {string} ucpc - UCPC for the cannabis seed company
   * @returns {object} An array of reviews for the seed company
   */
  getReviews(ucpc) {
    let url = `seed-companies/${ucpc}/reviews`;
    return this._ch.get(url);
  }
}

module.exports = SeedCompanies;
