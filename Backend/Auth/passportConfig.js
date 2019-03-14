require('dotenv').config()
const User = require('./models/userModel')
// passport strategies
// passport jwt
const jsonStrategy = require('passport-json')
const bcrypt = require('bcrypt')
//passport google
const googleStrategy = require('passport-google-oauth').OAuth2Strategy
//passport twitter
const twitterStrategy = require('passport-twitter').Strategy
//passport facebook
const facebookStrategy = require('passport-facebook').Strategy

// ------ google secret values

const googleClientId = process.env.GOOGLE_CLIENT_ID
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET
const googleCallbackUrl = process.env.GOOGLE_CB_URL

// ----- twitter secret values

// ----- facebook secret values

module.exports = passport => {
  // -------- json Strategy ---------
  passport.use(
    new jsonStrategy(
      {
        passReqToCallback: true,
      },
      (req, username, password, done) => {
        const creds = req.body
        const hash = bcrypt.hashSync(creds.password, 12)
        User.query()
          .findOne('username', creds.username)
          .then(user => {
            if (user && user.id) {
              console.log('user exists')
              if (
                creds.password &&
                bcrypt.compareSync(creds.password, user.password)
              ) {
                console.log('authenticted')
                return done(null, user)
              } else {
                const failedAuth = { fail: 'fail fail fail' }
                done(null, { message: 'not authorized' })
              }
            } else {
              console.log('creating new user')
              const newUser = User.query()
                .insert({
                  username: creds.username,
                  email: creds.email,
                  password: hash,
                })
                .then(user => {
                  console.log('new user created')
                  done(null, user)
                })
                .catch(err => done(err, false))
            }
          })
      }
    )
  )

  // -------- Google Strategy ---------

  passport.use(
    new googleStrategy(
      {
        clientID: googleClientId,
        clientSecret: googleClientSecret,
        callbackURL: googleCallbackUrl,
      },
      (token, refreshToken, profile, done) => {
        const { id, displayName, emails } = profile
        const username = displayName
        const email = emails[0].value
        User.query()
          .findOne('googleId', id)
          .then(user => {
            if (user && user.id) {
              // console.log(user)
              return done(null, user)
            } else {
              console.log('creating new user')
              const newUser = User.query()
                .insert({
                  username: username,
                  email: email,
                  googleId: id,
                })
                .then(user => {
                  console.log('newUser', user)
                  done(null, user)
                })
                .catch(err => done(err, false))
            }
          })
      }
    )
  )

  // // -------- Twitter Strategy ---------

  // passport.use(
  //   new twitterStrategy(
  //     {
  //       consumerKey: 'consumer key',
  //       consumerSecret: 'consumer secret',
  //       callbackURL: 'callback url',
  //     },
  //     (token, tokenSecret, profile, done) => {}
  //   )
  // )

  // // -------- Facebook Strategy ---------

  // passport.use(
  //   new facebookStrategy(
  //     {
  //       clientID: 'FACEBOOK_APP_ID',
  //       clientSecret: 'FACEBOOK_APP_SECRET',
  //       callbackURL: 'http://localhost:3000/auth/facebook/callback',
  //     },
  //     (accessToken, refreshToken, profile, cb) => {}
  //   )
  // )
}
