'use strict';

const config = require('config');
const https = require('https');

class CannabisHelper {
  constructor(key) {
    if (!key) {
      throw new Error("No API key found"); 
    }

    this._key = key;
  }

  _parseResponse(res) {
    return new Promise((resolve, reject) => {
      var body = '';

      res.on('data', function(val) {
        body += val;
      });

      res.on('end', function() {
        resolve(JSON.parse(body));
      });
    });
  }

  get(path) {
    return new Promise((resolve, reject) => {
      const opts = {
        headers: {
          'X-API-Key': this._key
        },
        hostname: config.api.host,
        port: 443,
        path: config.api.path + path,
      }

      const request = https.get(opts, res => {
        resolve(this._parseResponse(res));
      });

      request.on('error', reject);
    });
  }
}

module.exports = CannabisHelper;
