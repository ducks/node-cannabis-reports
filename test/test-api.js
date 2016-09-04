const chai = require('chai');
const config = require('config');
const CannabisReport = require('../src/index');
const api = new CannabisReport(config.api.key);
const sinon = require('sinon');
const sinonAsPromised = require('sinon-as-promised');
const expect = chai.expect;

describe('Strains', function() {

  it('should list ALL strains on /strains GET', function() {
    let data = require('./data/strains/strains');
    let stub = sinon.stub(api.Strains, 'getAll').resolves(data);

    return api.Strains.getAll().then(function(res) {
      expect(res.data).to.not.be.empty;
      expect(res.data).to.be.an('array');
    });
  });

  it('should list a SINGLE strain on /strains/<UCPC> GET', function() {
    let data = require('./data/strains/strain');
    let stub = sinon.stub(api.Strains, 'getStrain').resolves(data);

    return api.Strains.getStrain().then(function(res) {
      expect(res.data).to.not.be.empty;
      expect(res.data).to.be.an('object');
    });
  });

  it('should list user who added strain to the database GET', function() {
    let data = require('./data/strains/user');
    let stub = sinon.stub(api.Strains, 'getUser').resolves(data);

    return api.Strains.getUser().then(function(res) {
      expect(res.data).to.not.be.empty;
      expect(res.data).to.be.an('object');
    });
  });

  it('should list reviews for strain GET', function() {
    let data = require('./data/strains/review');
    let stub = sinon.stub(api.Strains, 'getReviews').resolves(data);

    return api.Strains.getReviews().then(function(res) {
      expect(res.data).to.not.be.empty;
      expect(res.data).to.be.an('array');
    });
  });
});
