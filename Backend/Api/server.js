const passport = require('passport')
const auth = require('../Auth/passportConfig')
const jwt = require('jsonwebtoken')

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
server.get(
  '/getUser',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    return res.status(200).json(req.user)
  }
)

server.post('/auth/register', (req, res) => {
  console.log(req.body)
})

server.post('/getToken', (req, res) => {
  const creds = req.body
  if (!creds.email && !creds.password && !creds.username) {
    return res.status(401).json({ message: 'no fields' })
  }
  User.forge({ email: creds.email })
    .fetch()
    .then(result => {
      if (!result) {
        return res.status(400).json({ message: 'user not found' })
      }

      result
        .authenticate(creds.password)
        .then(user => {
          const payload = { id: user.id }
          const token = jwt.sign(payload, process.env.SECRET_OR_KEY)
          res.status(200).json({ token })
        })
        .catch(err => {
          return res.status(401).json({ err })
        })
    })
})

server.get(
  '/protected',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({ message: "i'm protected" })
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
    scope: ['profile', 'email'],
    session: false,
  }),
  (req, res) => {
    console.log('from get', req.user)
  }
)

server.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth',
  }),
  (req, res) => {
    res.redirect('/auth')
  }
)

module.exports = server
