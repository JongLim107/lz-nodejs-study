const request = require('request')
const config = require('../../config/api_keys')

const geocode = (address, callback) => {
    // Get access_token by sign in mapbox account.
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${config.MAPBOX_KEYS}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features == null) {
            callback('Oops! There are some error', body)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode