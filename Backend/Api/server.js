const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const logger = require('morgan')
const server = express()
//auth
const passport = require('passport')
const auth = require('../Oauth/authConfigs/authConfig')

//routes
const configGuestRoutes = require('../Config/routes/guestRoute')
const configUserRoutes = require('../Config/routes/userRoute')
const configRsvpRoutes = require('../Config/routes/rsvpRoute')
const configOauthRoutes = require('../Config/routes/oauthRoute')

auth(passport)

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
// configOauthRoutes(server)

server.get('/', (req, res) => {
  res.status(200).json({
    api: 'WOW welcome to the JoinOurBigDay API!',
  })
})

// authRoute in server not working on Route idk why
server.get('/auth', (req, res) => {
  res.json({
    status: 'session cookie not set',
  })
})

server.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
  (req, res) => {
    console.log('google', 'success')
  }
)

server.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/',
  }),
  (req, res) => {
    res.redirect('/auth')
    console.log(req.user)
  }
)

module.exports = server
