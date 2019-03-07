const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const logger = require('morgan')
const server = express()
//auth
const passport = require('passport')
const auth = require('../Oauth/authConfig')

auth(passport)

//routes
const configGuestRoutes = require('../Config/routes/guestRoute')
const configUserRoutes = require('../Config/routes/userRoute')
const configRsvpRoutes = require('../Config/routes/rsvpRoute')
const configOauthRoutes = require('../Config/routes/oauthRoute')

server.use(
  express.json(),
  logger('dev'),
  cors(),
  helmet(),
  passport.initialize()
)
configUserRoutes(server)
configGuestRoutes(server)
configRsvpRoutes(server)
configOauthRoutes(server)

server.get('/', (req, res) => {
  res.status(200).json({
    api: 'WOW welcome to the JoinOurBigDay API!',
  })
})

module.exports = server
