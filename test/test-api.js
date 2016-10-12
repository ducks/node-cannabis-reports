const chai = require('chai');
const config = require('config');
const CannabisReport = require('../src/index');
const api = new CannabisReport(config.api.key);
const sinon = require('sinon');
const sinonAsPromised = require('sinon-as-promised');
const expect = chai.expect;

describe('Strains', function() {

  it('should get ALL strains on /strains GET', function() {
    let data = require('./data/strains/strains');
    let stub = sinon.stub(api.Strains, 'getAll').resolves(data);

    return api.Strains.getAll().then(function(res) {
      expect(res.data).to.not.be.empty;
      expect(res.data).to.be.an('array');
    });
  });

  it('should get a SINGLE strain on /strains/<UCPC> GET', function() {
    let data = require('./data/strains/strain');
    let stub = sinon.stub(api.Strains, 'getStrain').resolves(data);

    return api.Strains.getStrain().then(function(res) {
      expect(res.data).to.not.be.empty;
      expect(res.data).to.be.an('object');
    });
  });

  it('should get user who added strain to the database GET', function() {
    let data = require('./data/strains/user');
    let stub = sinon.stub(api.Strains, 'getUser').resolves(data);

    return api.Strains.getUser().then(function(res) {
      expect(res.data).to.not.be.empty;
      expect(res.data).to.be.an('object');
    });
  });

  it('should get reviews for strain GET', function() {
    let data = require('./data/strains/review');
    let stub = sinon.stub(api.Strains, 'getReviews').resolves(data);

    return api.Strains.getReviews().then(function(res) {
      expect(res.data).to.not.be.empty;
      expect(res.data).to.be.an('array');
    });
  });

  it('should get the average effects and flavors for this strain GET',
    function() {
      let data = require('./data/strains/effectsFlavors');
      let stub = sinon.stub(api.Strains, 'getEffectsFlavors').resolves(data);

      return api.Strains.getEffectsFlavors().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('object');
      });
  });

  it('should get the seed company that was responsible for a cannabis strain GET',
    function() {
      let data = require('./data/strains/seedCompany');
      let stub = sinon.stub(api.Strains, 'getSeedCompany').resolves(data);

      return api.Strains.getSeedCompany().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('object');
      });
  });

  it('should get the strains that were the parent material for the strain with the given UCPC',
    function() {
      let data = require('./data/strains/genetics');
      let stub = sinon.stub(api.Strains, 'getGenetics').resolves(data);

      return api.Strains.getGenetics().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('array');
      });
  });

  it('should get the child strains that this one has been bred into',
    function() {
      let data = require('./data/strains/children');
      let stub = sinon.stub(api.Strains, 'getChildren').resolves(data);

      return api.Strains.getChildren().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('array');
      });
  });

  it('should get information about the availability of a strain using latitude and longitude',
    function() {
      let data = require('./data/strains/availability');
      let stub = sinon.stub(api.Strains, 'getAvailability').resolves(data);

      return api.Strains.getAvailability().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('array');
      });
  });
});
