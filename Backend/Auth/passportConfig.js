require('dotenv').config()
const User = require('./models/userModel')
const bcrypt = require('bcrypt')

// ----- passport strategies

// passport json
const jsonStrategy = require('passport-json')
//passport google
const googleStrategy = require('passport-google-oauth').OAuth2Strategy
//passport twitter
const twitterTokenStrategy = require('passport-twitter-token')
//passport facebook
const facebookStrategy = require('passport-facebook').Strategy

// ------ google secret values

const googleClientId = process.env.GOOGLE_CLIENT_ID
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET
const googleCallbackUrl = process.env.GOOGLE_CB_URL

// ----- facebook secret values

const fbAppId = process.env.FB_APP_ID
const fbAppSecret = process.env.FB_APP_SECRET
const fbCallbackUrl = process.env.FB_CB_URL

module.exports = passport => {
  // -------- json Strategy ---------
  passport.use(
    new jsonStrategy(
      {
        passReqToCallback: true,
        allowEmptyPasswords: true,
      },
      (req, username, password, done) => {
        const email = req.body.email
        const hash = bcrypt.hashSync(password, 12)
        // look if user exist in the database
        User.query()
          .findOne('username', username)
          .then(user => {
            if (user && user.id) {
              //yep it does
              console.log('user exists')

              if (password && bcrypt.compareSync(password, user.password)) {
                // yep password is correct
                console.log('authenticted')

                return done(null, user)
              } else {
                const message =
                  'Register - User already exist, Login - wrong Password'
                done(null, message)
              }
            } else {
              //nope that username is not in the database
              console.log('creating new user')

              //check for email field
              if (email) {
                User.query()
                  .insert({
                    username: username,
                    email: email,
                    password: hash,
                  })
                  .then(user => {
                    //success
                    console.log('new user created')
                    done(null, user)
                  })
                  .catch(err => {
                    //something went wrong
                    const message = 'Failed to register User'
                    done(err, message)
                  })
              } else {
                const message =
                  'Register - email not provided, Login - Username does not exist'
                done(null, message)
              }
            }
          })
          .catch(err => {
            //when one of the fields is not provided

            const message = 'user/password not provided'
            done(err, message)
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
        const email = emails[0].value
        // look for the google id store in databse to see if user exists
        User.query()
          .findOne('socialId', id)
          .then(user => {
            //check if social id has a user and user id
            if (user && user.id) {
              console.log('User exist and authenticated')

              return done(null, user)
            } else {
              //google id not found on the database

              console.log('creating new user')
              User.query()
                .insert({
                  socialName: displayName,
                  email: email,
                  socialId: id,
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

  // // -------- Facebook Strategy ---------

  passport.use(
    new facebookStrategy(
      {
        clientID: fbAppId,
        clientSecret: fbAppSecret,
        callbackURL: fbCallbackUrl,
        profileFields: ['id', 'emails', 'displayName'],
      },
      (accessToken, refreshToken, profile, done) => {
        const { id, displayName, emails } = profile
        const email = emails[0].value
        //look for the google id store in databse to see if user exists

        User.query()
          .findOne('socialId', id)
          .then(user => {
            //check if social id has a user and user id
            if (user && user.id) {
              console.log('User exist and authenticated')

              return done(null, user)
            } else {
              //facebook id not found on the database

              console.log('creating new user')
              User.query()
                .insert({
                  socialName: displayName,
                  email: email,
                  socialId: id,
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
}
