const passport = require('passport')
const auth = require('../Auth/passportConfig')
const jwtHelper = require('../Auth/jwt/jwtHelper')
const { Model } = require('objection')
const knex = require('knex')

const KnexConfig = require('../knexfile')

Model.knex(knex(KnexConfig.development))

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const logger = require('morgan')
const server = express()

const configGuestRoutes = require('../Config/routes/guestRoute')
const configUserRoutes = require('../Config/routes/userRoute')
const configRsvpRoutes = require('../Config/routes/rsvpRoute')

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

server.get('/', (req, res) => {
  res.status(200).json({
    api: 'WOW welcome to the JoinOurBigDay API!',
  })
})

// auth endpoints
server.post(
  '/auth/register-login',
  passport.authenticate('json', { session: false }),
  function(req, res) {
    const user = req.user
    if (user.id) {
      console.log('sucess', user)
      const token = jwtHelper.generateToken(user)
      res.status(201).json({ token })
    } else {
      res.status(500).json({
        message: 'Failed to authenticate user. check username/password',
      })
    }
  }
)

//google
server.get('/auth', (req, res) => {
  res.json({
    status: 'session cookie not set',
  })
})

server.get(
  '/auth/google',
  passport.authenticate('google', {
    session: false,
    scope: ['profile', 'email'],
  })
)

server.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth',
    session: false,
  }),
  (req, res) => {
    const user = req.user
    const token = jwtHelper.generateToken(user)
    console.log('GOOGLE Token:', token)
    res.status(201).json({ token })
  }
)

module.exports = server
