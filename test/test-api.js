const chai = require('chai');
const config = require('config');
const CannabisReport = require('../src/index');
const api = new CannabisReport(config.api.key);
const sinon = require('sinon');
const sinonAsPromised = require('sinon-as-promised');
const expect = chai.expect;

describe('Strains', function() {

  it('should get ALL strains GET /strains', function() {
    let data = require('./data/strains/strains');
    let stub = sinon.stub(api.Strains, 'getAll').resolves(data);

    return api.Strains.getAll().then(function(res) {
      expect(res.data).to.not.be.empty;
      expect(res.data).to.be.an('array');
    });
  });

  it('should get a SINGLE strain GET /strains/<UCPC>', function() {
    let data = require('./data/strains/strain');
    let stub = sinon.stub(api.Strains, 'getStrain').resolves(data);

    return api.Strains.getStrain().then(function(res) {
      expect(res.data).to.not.be.empty;
      expect(res.data).to.be.an('object');
    });
  });

  it('should get user who added strain to the database GET /strains/:ucpc/user', function() {
    let data = require('./data/strains/user');
    let stub = sinon.stub(api.Strains, 'getUser').resolves(data);

    return api.Strains.getUser().then(function(res) {
      expect(res.data).to.not.be.empty;
      expect(res.data).to.be.an('object');
    });
  });

  it('should get reviews for strain GET /strains/:ucpc/reviews', function() {
    let data = require('./data/strains/review');
    let stub = sinon.stub(api.Strains, 'getReviews').resolves(data);

    return api.Strains.getReviews().then(function(res) {
      expect(res.data).to.not.be.empty;
      expect(res.data).to.be.an('array');
    });
  });

  it('should get the average effects and flavors for this strain GET /strains/:ucpc/effectsFlavors',
    function() {
      let data = require('./data/strains/effectsFlavors');
      let stub = sinon.stub(api.Strains, 'getEffectsFlavors').resolves(data);

      return api.Strains.getEffectsFlavors().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('object');
      });
  });

  it('should get the seed company that was responsible for a cannabis strain GET /strains/:ucpc/seedCompany',
    function() {
      let data = require('./data/strains/seedCompany');
      let stub = sinon.stub(api.Strains, 'getSeedCompany').resolves(data);

      return api.Strains.getSeedCompany().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('object');
      });
  });

  it('should get the strains that were the parent material for the strain with the given UCPC GET /strains/:ucpc/genetics',
    function() {
      let data = require('./data/strains/genetics');
      let stub = sinon.stub(api.Strains, 'getGenetics').resolves(data);

      return api.Strains.getGenetics().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('array');
      });
  });

  it('should get the child strains that this one has been bred into GET /strains/:ucpc/children',
    function() {
      let data = require('./data/strains/children');
      let stub = sinon.stub(api.Strains, 'getChildren').resolves(data);

      return api.Strains.getChildren().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('array');
      });
  });

  it('should get information about the availability of a strain using latitude and longitude GET /strains/:ucpc/availability/geo/:lat/:lng/:radius',
    function() {
      let data = require('./data/strains/availability');
      let stub = sinon.stub(api.Strains, 'getAvailability').resolves(data);

      return api.Strains.getAvailability().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('array');
      });
  });
});

describe('Flowers', function() {
  it('should get ALL flowers GET /flowers', function() {
    let data = require('./data/flowers/flowers');
    let stub = sinon.stub(api.Flowers, 'getAll').resolves(data);

    return api.Flowers.getAll().then(function(res) {
      expect(res.data).to.not.be.empty;
      expect(res.data).to.be.an('array');
    });
  });

  it('should get flowers GET /flowers/type/:flowerType', function() {
    let data = require('./data/flowers/type');
    let stub = sinon.stub(api.Flowers, 'getByType').resolves(data);

    return api.Flowers.getByType().then(function(res) {
      expect(res.data).to.not.be.empty;
      expect(res.data).to.be.an('array');
    });
  });

  it('should get an individual flower based on the UCPC GET /flowers/:ucpc', function() {
    let data = require('./data/flowers/flower');
    let stub = sinon.stub(api.Flowers, 'getFlower').resolves(data);

    return api.Flowers.getFlower().then(function(res) {
      expect(res.data).to.not.be.empty;
      expect(res.data).to.be.an('object');
    });
  });

  it('should get the user who added the product to the database GET /flowers/:ucpc/user', function() {
    let data = require('./data/flowers/user');
    let stub = sinon.stub(api.Flowers, 'getUser').resolves(data);

    return api.Flowers.getUser().then(function(res) {
      expect(res.data).to.not.be.empty;
      expect(res.data).to.be.an('object');
    });
  });

  it('should get the reviews for a cannabis flower GET /flowers/:ucpc/reviews', function() {
    let data = require('./data/flowers/reviews');
    let stub = sinon.stub(api.Flowers, 'getReviews').resolves(data);

    return api.Flowers.getReviews().then(function(res) {
      expect(res.data).to.not.be.empty;
      expect(res.data).to.be.an('array');
    });
  });

  it('should get the average effects and flavors from reviews for this flower GET /flowers/:ucpc/effectsFlavors', function() {
    let data = require('./data/flowers/effectsFlavors');
    let stub = sinon.stub(api.Flowers, 'getEffectsFlavors').resolves(data);

    return api.Flowers.getEffectsFlavors().then(function(res) {
      expect(res.data).to.not.be.empty;
      expect(res.data).to.be.an('object');
    });
  });

  it('should get the producer for a given flower GET /flowers/:ucpc/producer', function() {
    let data = require('./data/flowers/producer');
    let stub = sinon.stub(api.Flowers, 'getProducer').resolves(data);

    return api.Flowers.getProducer().then(function(res) {
      expect(res.data).to.not.be.empty;
      expect(res.data).to.be.an('object');
    });
  });

  it('should get the information about a strain for a flower with the given UCPC GET /flowers/:ucpc/strain', function() {
    let data = require('./data/flowers/strain');
    let stub = sinon.stub(api.Flowers, 'getStrain').resolves(data);

    return api.Flowers.getProducer().then(function(res) {
      expect(res.data).to.not.be.empty;
      expect(res.data).to.be.an('object');
    });
  });

  it('should get information about the availability of a product using latitude and longitude GET /flowers/:ucpc/availability/geo/:lat/:lng/:radius',
    function() {
      let data = require('./data/flowers/availability');
      let stub = sinon.stub(api.Flowers, 'getAvailability').resolves(data);

      return api.Flowers.getAvailability().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('array');
      });
  });
});
