const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const logger = require('morgan')

const configGuestRoutes = require('../Config/routes/guestRoute')
const configUserRoutes = require('../Config/routes/userRoute')
const configRsvpRoutes = require('../Config/routes/rsvpRoute')

const server = express()

server.use(express.json(), logger('dev'), cors(), helmet())
configUserRoutes(server)
configGuestRoutes(server)
configRsvpRoutes(server)

server.get('/', (req, res) => {
  res.status(200).json({
    api: 'WOW welcome to the JoinOurBigDay API!',
  })
})

module.exports = server