'use strict'

const Weather = {
    "coord":{
       "lon":103.81,
       "lat":1.35
    },
    "weather":[
       {
          "id":501,
          "main":"Rain",
          "description":"moderate rain",
          "icon":"10d"
       }
    ],
    "base":"stations",
    "main":{
       "temp":300.05,
       "feels_like":301.92,
       "temp_min":299.82,
       "temp_max":300.15,
       "pressure":1006,
       "humidity":78
    },
    "visibility":10000,
    "wind":{
       "speed":4.6,
       "deg":180
    },
    "rain":{
       "1h":3.5
    },
    "clouds":{
       "all":75
    },
    "dt":1600338989,
    "sys":{
       "type":1,
       "id":9479,
       "country":"SG",
       "sunrise":1600296949,
       "sunset":1600340572
    },
    "timezone":28800,
    "id":1880251,
    "name":"Singapore",
    "cod":200
 }

 module.exports = Weather