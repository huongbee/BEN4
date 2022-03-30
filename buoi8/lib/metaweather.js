const request = require('request');

class Metaweather {
  constructor() {
    this.baseUrl = 'https://www.metaweather.com/api/location';
  }
  getLocation(locationName) {
    return new Promise((resolve, reject) => {
      request.get(`${this.baseUrl}/search/?query=${locationName}`, {}, (err, res, body) => {
        if (err) return reject(err);
        const data = JSON.parse(body);
        return resolve(data);
      })
    })
  }
  getWeather = (id) => new Promise((resolve, reject) => {
    request.get(`${this.baseUrl}/${id}`, { timeout: 6000 }, (err, res, body) => {
      if (err) return reject(err);
      const data = JSON.parse(body);
      return resolve(data);
    });
  });
}

module.exports = Metaweather;