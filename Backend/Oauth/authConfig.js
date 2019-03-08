require('dotenv').config()
const googleStrategy = require('passport-google-oauth').OAuth2Strategy
const db = require('../Config/dbConfig')

const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
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
        const { id, displayName, name, photos, emails } = profile
        const username = displayName
        const firstname = name.givenName
        const lastname = name.familyName
        const profileImg = photos[0].value
        const email = emails[0].value

        db('users')
          .where('id', id)
          .first()
          .then(user => {
            if (user && user.id) {
              return done(null, user)
            } else {
              const newUser = {
                id,
                username,
                firstname,
                lastname,
                profileImg,
                email,
              }
              db('users')
                .insert(newUser)
                .then(id => done(null, newUser))
                .catch(err => done(err, false))
            }
          })
      }
    )
  )
}
