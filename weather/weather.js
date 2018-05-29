const request = require('request');

let getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/031e0be6395ed6953d69d6505aaebc86/${latitude},${longitude}`,
        json: true
    },(error, response, body) => {
        if(!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fatch weather!');
        }
    });
};

module.exports.getWeather = getWeather;