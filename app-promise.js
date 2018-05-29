const yargs = require('yargs');
const axios = require('axios');

let argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let encodedAddress = encodeURIComponent(argv.address);
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCalDm5TPnN3KGeymub70L9Ek-oMq4xgH4`;

axios.get(geocodeUrl).then(response => {
    if(response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address!');
    }

    let latitude = response.data.results[0].geometry.location.lat;
    let longitude =response.data.results[0].geometry.location.lng;
    let weatherUrl = `https://api.darksky.net/forecast/031e0be6395ed6953d69d6505aaebc86/${latitude},${longitude}`;

    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
    let temperature = response.data.currently.temperature;
    let apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}!`);
}).catch(error => {
    if(error.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers.');
    } else {
        console.log(error.message);
    }
});

//1301 lombard street philadelphia