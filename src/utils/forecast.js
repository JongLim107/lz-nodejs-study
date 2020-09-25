const request = require('request')
const config = require('../../config/api_keys')

const forecast = (lat, lon, unit, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${config.OPEN_WEATHER_MAP}&units=${unit}`// Openweathermap API

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error || body.cod != 200) {
            callback(body, undefined)
        } else {
            // console.log(JSON.stringify(body))
            callback(undefined, body)
        }
    })
}

module.exports = forecast