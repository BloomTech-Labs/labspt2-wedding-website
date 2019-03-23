require('dotenv').config()
const request = require('request')
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

const configGuestRoutes = require('../Config/routes/guestRoute')
const configUserRoutes = require('../Config/routes/userRoute')
const configRsvpRoutes = require('../Config/routes/rsvpRoute')
const configLivePhotoRoute = require('../Config/routes/photoUploadRoute')
const configQuestionRoutes = require('/Config/routes/questionsRoutes')
const configRsvpAnswersRoutes = require('/Config/routes/rsvpAnswersRoute')

const server = express()

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
configLivePhotoRoute(server)
configQuestionRoutes(server)
configRsvpAnswersRoutes(server)


server.get('/', (req, res) => {
  res.status(200).json({
    api: 'WOW welcome to the JoinOurBigDay API!'
  })
})

module.exports = server




// auth endpoints

server.get('/auth', (req, res) => {
  res.json({
    status: 'auth home',
  })
})

server.get('/auth/fail', (req, res) => {
  res.status(200).json({
    message: 'something went wrong',
  })
})

server.post(
  '/auth/register-login',
  passport.authenticate('json', { session: false }),
  (req, res) => {
    const user = req.user
    const tokenUser = {
      userID: user.id,
      email: user.email,
    }
    if (user.id) {
      const token = jwtHelper.generateToken(tokenUser)
      res.status(201).json({ token })
    } else {
      res.status(500).json({
        message: `${req.user}`,
      })
    }
  }
)

//google

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
    failureRedirect: '/auth/fail',
    session: false,
  }),
  (req, res) => {
    const user = req.user
    console.log('google user:', user)
    const tokenUser = {
      userID: user.id,
      email: user.email,
    }
    const token = jwtHelper.generateToken(tokenUser)
    console.log('GOOGLE Token:', token)
    res.status(201).json({ token })
  }
)

//facebook

server.get(
  '/auth/facebook',
  passport.authenticate('facebook', {
    session: false,
    scope: ['email'],
  })
)

server.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/auth/fail',
    session: false,
  }),
  (req, res) => {
    const user = req.user
    const tokenUser = {
      userID: user.id,
      email: user.email,
    }
    const token = jwtHelper.generateToken(tokenUser)
    console.log('GOOGLE Token:', token)
    res.status(201).json({ token })
  }
)

// ----- twitter uses oauth1.0a and requires an instance of expres-session but we are working with jwt

// ----- twitter oauth is now a stretch

// // twitter
// server.post(
//   '/auth/twitter',
//   passport.authenticate('twitter-token'),
//   (req, res) => {
//     // do something with req.user
//     res.json(req.user)
//   }
// )

// server.post('/auth/twitter/reverse', (req, res) => {
//   request.post(
//     {
//       url: 'https://api.twitter.com/oauth/request_token',
//       oauth: {
//         oauth_callback: process.env.TW_CB_URL,
//         consumer_key: process.env.TW_KEY,
//         consumer_secret: process.env.TW_KEY_SECRET,
//       },
//     },
//     (err, r, body) => {
//       if (err) {
//         return res.status(500).json({ message: err.message })
//       }

//       var jsonStr =
//         '{ "' + body.replace(/&/g, '", "').replace(/=/g, '": "') + '"}'
//       res.send(JSON.parse(jsonStr))
//     }
//   )
// })
