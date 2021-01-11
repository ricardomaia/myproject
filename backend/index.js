const express = require('express')
const http = require('http')
const reload = require('reload')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')

// Environment Configurations
dotenv.config({ path: `${__dirname} /../.env` })
const env = process.env.NODE_ENV


const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.set('port', process.env.PORT || 5000)
app.use(express.static('public'))


// Reload code here
reload(app)
  .then(function (reloadReturned) {
    // reloadReturned is documented in the returns API in the README

    // Reload started, start web server
    server.listen(app.get('port'), function () {
      console.log('Web server listening on port ' + app.get('port'))
    })
  })
  .catch(function (err) {
    console.error(
      'Reload could not start, could not start server',
      err
    )
  })
var server = http.createServer(app)

/**
 * https://next.json-generator.com/Nk6OQ_EAt
 */
app.get('/api', (req, res) => {
    res.send(
[
  {
    "_id": "5ffb845d98c8f8d41b556b19",
    "index": 0,
    "guid": "8e09d117-8b2a-435b-8bf1-a5a33436d263",
    "isActive": false,
    "picture": "https://via.placeholder.com/300x400",
    "age": 33,
    "name": {
      "first": "Byrd",
      "last": "Robinson"
    },
    "email": "byrd.robinson@undefined.io",
    "phone": "+1 (934) 467-2967",
    "address": "656 Cooper Street, Cherokee, Palau, 1968",
    "registered": "Sunday, February 23, 2020 5:20 PM"
  },
  {
    "_id": "5ffb845d24ca5e847606f736",
    "index": 1,
    "guid": "9ee801d3-d8c9-4882-8b59-66d95841b18f",
    "isActive": false,
    "picture": "https://via.placeholder.com/300x400",
    "age": 24,
    "name": {
      "first": "Watson",
      "last": "Bryant"
    },
    "email": "watson.bryant@undefined.com",
    "phone": "+1 (886) 509-3317",
    "address": "912 Bouck Court, Katonah, Missouri, 4984",
    "registered": "Wednesday, July 11, 2018 10:24 AM"
  },
  {
    "_id": "5ffb845db30ce4b4afe8d63a",
    "index": 2,
    "guid": "418ff494-f926-450a-a560-bdc6c31bce97",
    "isActive": false,
    "picture": "https://via.placeholder.com/300x400",
    "age": 22,
    "name": {
      "first": "Gracie",
      "last": "Kelly"
    },
    "email": "gracie.kelly@undefined.biz",
    "phone": "+1 (952) 482-3165",
    "address": "549 Whitwell Place, Albrightsville, Minnesota, 2925",
    "registered": "Sunday, July 30, 2017 4:52 PM"
  },
  {
    "_id": "5ffb845d6be170e285d1fe3f",
    "index": 3,
    "guid": "8d5b9a6f-5cb6-423e-bc44-29040b963770",
    "isActive": false,
    "picture": "https://via.placeholder.com/300x400",
    "age": 36,
    "name": {
      "first": "Shelia",
      "last": "Frazier"
    },
    "email": "shelia.frazier@undefined.biz",
    "phone": "+1 (825) 531-3288",
    "address": "145 Hemlock Street, Courtland, South Dakota, 8010",
    "registered": "Tuesday, April 30, 2019 11:32 AM"
  },
  {
    "_id": "5ffb845d8e839db7a3920e50",
    "index": 4,
    "guid": "29e18aad-311e-432f-8d91-2f30c144b39a",
    "isActive": false,
    "picture": "https://via.placeholder.com/300x400",
    "age": 31,
    "name": {
      "first": "Hamilton",
      "last": "Farrell"
    },
    "email": "hamilton.farrell@undefined.org",
    "phone": "+1 (948) 488-2849",
    "address": "325 Crooke Avenue, Barstow, Kansas, 802",
    "registered": "Tuesday, August 6, 2019 4:02 AM"
  },
  {
    "_id": "5ffb845db99bcb012e8f43ef",
    "index": 5,
    "guid": "d23c178f-2117-47de-a4d2-d4129a0c5d0b",
    "isActive": true,
    "picture": "https://via.placeholder.com/300x400",
    "age": 35,
    "name": {
      "first": "Hilary",
      "last": "Head"
    },
    "email": "hilary.head@undefined.tv",
    "phone": "+1 (878) 465-3689",
    "address": "572 Sumner Place, Albany, Pennsylvania, 6618",
    "registered": "Monday, April 13, 2020 9:27 PM"
  },
  {
    "_id": "5ffb845d04a1b4329d893ca8",
    "index": 6,
    "guid": "f99fada0-75c0-44d1-a888-385bf2a8a266",
    "isActive": false,
    "picture": "https://via.placeholder.com/300x400",
    "age": 30,
    "name": {
      "first": "Lara",
      "last": "Keith"
    },
    "email": "lara.keith@undefined.net",
    "phone": "+1 (981) 437-2514",
    "address": "756 Conduit Boulevard, Grimsley, Guam, 9438",
    "registered": "Monday, May 11, 2020 4:37 AM"
  },
  {
    "_id": "5ffb845d9403215ee2145d4b",
    "index": 7,
    "guid": "949024eb-227a-405d-89be-5f01588dd519",
    "isActive": false,
    "picture": "https://via.placeholder.com/300x400",
    "age": 22,
    "name": {
      "first": "Nanette",
      "last": "Gentry"
    },
    "email": "nanette.gentry@undefined.ca",
    "phone": "+1 (986) 430-3787",
    "address": "478 Campus Road, Felt, Vermont, 3395",
    "registered": "Thursday, March 12, 2015 7:57 AM"
  }
])
  })