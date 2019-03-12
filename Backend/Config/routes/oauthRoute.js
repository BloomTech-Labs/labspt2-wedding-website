const passport = require('passport')
const auth = require('../../Oauth/authConfigs/authConfig')

auth(passport)

module.exports = server => {
  server.use(passport.initialize())
  server.get('/auth', main)
  server.get('/auth/google', oauthGoogle)
  server.get('/auth/google/callback', oauthCallback, (req, res) => {
    res.redirect('/')
  })
}

main = (req, res) => {
  res.json({ message: 'yep' })
}

oauthGoogle = () => {
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
}

oauthCallback = () => {
  passport.authenticate('google', {
    failureRedirect: '/auth',
  })
}
