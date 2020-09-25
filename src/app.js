const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')
const Json2KV = require('./utils/Json2KV')

const app = express()
const port = process.env.PORT || 3000 // heroku will assign a value


// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'LZ'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'LZ'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'LZ'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'LZ',
        errorMessage: 'Help article not found.'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send('You must provide an address!')
    }
    console.log('>>>', JSON.stringify(req.query))
    geocode(req.query.address, (error, body) => {
        if (error != null && body == null) {
            return res.send(error)
        } else if (body == null) {
            return res.send({ type: 'Oops! There are some error' })
        } else if (body.location == null || body.location == '') {
            return res.send({ error: 'Unable to find location. Try another search.' })

        } else {
            console.log(`<<< Geocode = ${JSON.stringify(body)}`)
            let { latitude, longitude } = body
            forecast(latitude, longitude, req.query.unit, (error, ret) => {
                let location = Json2KV(ret.name) + ', Coordinate is ' + Json2KV(ret.coord)
                let temperature = 'Weather, ' + Json2KV(ret.main)
                res.send({ error, location, temperature })
            })
        }
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'LZ',
        errorMessage: 'Page not found.'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port + '.')
})