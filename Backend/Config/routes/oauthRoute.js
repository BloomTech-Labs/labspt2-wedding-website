const passport = require('passport')

module.exports = server => {
  server.get('/auth/google', oauthGoogle)
  server.get('/login', redirect)
  server.get('/auth/google/callback', oauthCallback, () => (req, res))
  server.use(passport.initialize())
}

redirect = (req, res) => {
  res.json({ message: 'yep' })
}

oauthGoogle = () => {
  passport.authenticate('google', {
    scope: ['profile'],
  })
}

oauthCallback = () => {
  passport.authenticate('google', {
    failureRedirect: '/login',
  })
}
