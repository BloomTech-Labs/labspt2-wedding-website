require('dotenv').config()
const User = require('./models/userModel')
// passport strategies
// passport jwt
const passportJWT = require('passport-jwt')
const jwtStrategy = passportJWT.Strategy
const extractJwt = passportJWT.ExtractJwt
//passport google
const googleStrategy = require('passport-google-oauth').OAuth2Strategy
//passport twitter
const twitterStrategy = require('passport-twitter').Strategy
//passport facebook
const facebookStrategy = require('passport-facebook').Strategy

// to be able to control the db
const knex = require('knex')
const db = require('../../Config/dbConfig')
const bookshelf = require('bookshelf')(knex)
const bsSecuredPass = require()
// ------ google secret values

const googleClientId = process.env.CLIENT_ID
const googleClientSecret = process.env.CLIENT_SECRET
const googleCallbackUrl = process.env.CLIENT_URL

// ----- twitter secret values

// ----- facebook secret values

module.exports = passport => {
  // -------- JWT Strategy ---------

  passport.use(
    new jwtStrategy(
      {
        jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
        passReqToCallback: true,
      },
      (req, payload, done) => {
        // find user using bookshelf ORM or create a new user
        const user = null
        done(null, use)
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
        console.log('token', token)
        const { id, displayName, name, photos, emails } = profile
        const oauthId = id
        const username = displayName
        const firstname = name.givenName
        const lastname = name.familyName
        const profileImg = photos[0].value
        const email = emails[0].value
        User.db('users')
          .where('oauthid', id)
          .first()
          .then(user => {
            if (user && user.id) {
              return done(null, user)
            } else {
              const newGoogle = {
                oauthId,
                username,
                firstname,
                lastname,
                profileImg,
                email,
              }
              db('users')
                .insert(newGoogle)
                .then(id => done(null, newGoogle))
                .catch(err => done(err, false))
            }
          })
      }
    )
  )

  // -------- Twitter Strategy ---------

  passport.use(
    new twitterStrategy(
      {
        consumerKey: 'consumer key',
        consumerSecret: 'consumer secret',
        callbackURL: 'callback url',
      },
      (token, tokenSecret, profile, done) => {}
    )
  )
}

// -------- Facebook Strategy ---------

passport.use(
  new facebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: 'http://localhost:3000/auth/facebook/callback',
    },
    (accessToken, refreshToken, profile, cb) => {}
  )
)
