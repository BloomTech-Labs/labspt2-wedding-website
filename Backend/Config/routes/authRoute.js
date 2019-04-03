const db = require('../dbConfig')
const { Model } = require('objection')
const knex = require('knex')
const passport = require('passport')
const jwtHelper = require('../../Auth/jwt/jwtHelper')

Model.knex(db)

module.exports = server => {
  server.get('/auth', authHome),
    server.get('/auth/fail', fail),
    server.post('/auth/register-login', regLoginMiddle, regLogin),
    server.get('/auth/google', googleGetMiddle),
    server.get('/auth/google/callback', googleCallBackMiddle, googleCB),
    server.get('/auth/facebook', facebookGetMiddle)
}

authHome = (req, res) => {
  res.json({
    status: 'Auth Home',
  })
}

fail = (req, res) => {
  res.status(500).json({
    message: 'Something has gone wrong',
  })
}
//-------Middleware for login route
regLoginMiddle = () => {
  passport.authenticate('json', {
    session: false,
  })
}

regLogin = (req, res) => {
  const user = req.user
  console.log(user)
  const userInfo = {
    id: user.id,
    username: user.username,
    email: user.email,
    isPremium: user.isPremium,
  }
  if (user.id) {
    const token = jwtHelper.generateToken(userInfo)
    res.status(201).json({ token, userInfo })
  } else {
    res.status(500).json({
      message: `${req.user}`,
    })
  }
}

//----------------->Google Routes<------------------------

//---google redirect midleware
googleGetMiddle = () => {
  passport.authenticate('google', {
    session: false,
    scope: ['profile', 'email'],
  })
}
//---google callback middleware
googleCallBackMiddle = () => {
  passport.authenticate('google', {
    failureRedirect: '/auth/fail',
    session: false,
  })
}

googleCB = (req, res) => {
  const user = req.user
  console.log('google user:', user)
  const tokenUser = {
    userId: user.id,
    username: user.username,
    email: user.email,
    partnerName1: user.partnerName1,
    partnerName2: user.partnerName1,
    weddingDate: user.weddingDate,
    weddingParty: user.weddingParty,
    venueLocation: user.venueLocation,
    isPremium: user.isPremium,
  }
  const token = jwtHelper.generateToken(tokenUser)
  // redirects to account set up
  console.log('token :', token)
  res.redirect('http://localhost:3000?token=' + token)
}

//------------------->Facebook Routes<--------------------------

//---Facebook redirect middleware
facebookGetMiddle = () => {
  passport.authenticate('facebook', {
    session: false,
    scope: ['email'],
  })
}
