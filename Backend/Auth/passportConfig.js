require('dotenv').config()
const User = require('./models/userModel')
// passport strategies
// passport jwt
const jsonStrategy = require('passport-json')
const passportJWT = require('passport-jwt')
const jwtStrategy = passportJWT.Strategy
const extractJwt = passportJWT.ExtractJwt
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
        // do stuff here
      }
    )
  )

  // -------- JWT Strategy ---------

  passport.use(
    new jwtStrategy(
      {
        jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'hflakjsdhfmeihu',
        passReqToCallback: true,
      },
      (req, payload, done) => {
        console.log('payload', payload)
        console.log('req', req)
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
        const { id, displayName, name, photos, emails } = profile
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

        // User.db('users')
        //   .where('oauthid', id)
        //   .first()
        //   .then(user => {
        //     if (user && user.id) {
        //       return done(null, user)
        //     } else {
        //       const newGoogle = {
        //         oauthId,
        //         username,
        //         firstname,
        //         lastname,
        //         profileImg,
        //         email,
        //       }
        //       db('users')
        //         .insert(newGoogle)
        //         .then(id => done(null, newGoogle))
        //         .catch(err => done(err, false))
        //     }
        //   })
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
