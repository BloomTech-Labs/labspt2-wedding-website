require('dotenv').config()
const googleStrategy = require('passport-google-oauth').OAuth2Strategy

const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_ID
const callbackUrl = process.env.CLIENT_URL

module.exports = passport => {
  passport.serializeUser((user, done) => {
    done(null, user)
  })

  passport.deserializeUser((user, done) => {
    done(null, user)
  })

  passport.use(
    new googleStrategy(
      {
        clientID: clientId,
        clientSecret: clientSecret,
        callbackURL: callbackUrl,
      },
      (token, refreshToken, profile, done) => {
        return done(null, {
          profile: profile,
          token: token,
        })
      }
    )
  )
}
