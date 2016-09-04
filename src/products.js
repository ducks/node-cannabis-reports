'use strict';

class Products {
  /**
   * Create a products instance
   * @param {CannabisHelper} ch - A CannabisHelper instance
   */
  constructor(ch) {
    this._ch = ch;
  }

  /**
   * Gets a paginated list of products with optional sorting.
   * @param {integer} page - Which page of results you want
   * @param {string} sort - How you would like the results sorted
   * @returns {array} A list of all products 
   * @TODO add page and count sorting 
   */
  getAll(page, sort) {
    return this._ch.get('products');
  }

  /**
   * Gets a paginated list of products for a given type with optional sorting
   * @param {string} type - The type of products you want to search
   * @param {integer} page - which page of results you want
   * @param {string} sort - how you would like the results sorted
   */
  getByType(type, page, sort) {
    let url = `products/type/${type}`;
    return this._ch.get(url);
  }

  /**
   * Gets individual product based on the UCPC
   * @param {string} ucpc - UCPC for the cannabis product 
   * @returns {object} An object representing the product 
   */
  getProduct(ucpc) {
    let url = `products/${ucpc}`;
    return this._ch.get(url);
  }

  /**
   * Get the user who added the product to the database. 
   * @param {string} ucpc - UCPC for the cannabis product
   * @returns {object} An object representing the user 
   */
  getUser(ucpc) {
    let url = `products/${ucpc}/user`;
    return this._ch.get(url);
  }

  /**
   * Get the reviews for a cannabis product 
   * @param {string} ucpc - UCPC for the cannabis product you 
   * would like reviews for
   * @returns {array} An array representing the reviews 
   */
  getReviews(ucpc) {
    let url = `products/${ucpc}/reviews`;
    return this._ch.get(url);
  }

  /**
   * Get the average effects and flavors from reviews for this product. 
   * @param {string} ucpc - UCPC for the cannabis product you would like the
   * effects and flavors for. 
   * @returns {object} An object representing the effects and flavors 
   */
  getEffectsFlavors(ucpc) {
    let url = `products/${ucpc}/effectsFlavors`;
    return this._ch.get(url);
  }

  /**
   * Gets the producer for a given product
   * @param {string} ucpc - UCPC for the cannabis product you want the 
   * producer for
   * @returns {object} An object representing the producer
   */
  getProducer(ucpc) {
    let url = `products/${ucpc}/producer`;
    return this._ch.get(url);
  }

  /**
   * Gets the info about a strain for a product with the given UCPC
   * @param {string} ucpc - UCPC for the cannabis product you want strain
   * info about
   * @returns {object} An object representings the strain
   */
  getStrain(ucpc) {
    let url = `products/${ucpc}/strain`;
    return this._ch.get(url);
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
    let url = `products/${ucpc}/availability/geo/${lat}/${lng}/${radius}`;
    return this._ch.get(url);
  }
}

module.exports = Products;
