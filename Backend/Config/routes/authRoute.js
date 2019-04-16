const db = require('../dbConfig')
const { Model } = require('objection')
const User = require('../../Auth/models/userModel')
const passport = require('passport')
const jwtHelper = require('../../Auth/jwt/jwtHelper')
const { sendVerificationEmail } = require('../helpers/emailVerification')

Model.knex(db)

module.exports = server => {
  server.get('/auth', authHome),
    server.get('/auth/fail', fail),
    server.post(
      '/auth/register-login',
      passport.authenticate('json', {
        session: false,
      }),
      regLogin
    ),
    server.get(
      '/auth/google',
      passport.authenticate('google', {
        session: false,
        scope: ['profile', 'email'],
      })
    ),
    server.get(
      '/auth/google/callback',
      passport.authenticate('google', {
        failureRedirect: '/auth/fail',
        session: false,
      }),
      googleCB
    ),
    server.get(
      '/auth/facebook',
      passport.authenticate('facebook', {
        session: false,
        scope: ['email'],
      })
    ),
    server.get(
      '/auth/facebook/callback',
      passport.authenticate('facebook', {
        failureRedirect: '/auth/fail',
        session: false,
      }),
      facebookCB
    ),
    server.post('/auth/verification', verifyEmail)
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
// regLoginMiddle = () => {
//     passport.authenticate('json', {
//         session: false
//     })
// }

regLogin = (req, res) => {
  const user = req.user
  const tokenUser = {
    userId: user.id,
    username: user.username,
    email: user.email,
  }
  const userInfo = {
    id: user.id,
    username: user.username,
    email: user.email,
    partnerName1: user.partnerName1,
    partnerName2: user.partnerName2,
    weddingDate: user.weddingDate,
    weddingParty: user.weddingParty,
    venueLocation: user.venueLocation,
    isPremium: user.isPremium,
    verifyToken: user.verifyToken,
    verify: user.verify,
  }

  if (user.id) {
    console.log('token User:', tokenUser)
    const token = jwtHelper.generateToken(tokenUser)
    sendVerificationEmail(user.email, user.verifyToken)
    res.status(201).json({
      token,
      userInfo,
    })
  } else {
    res.status(500).json({
      message: `${user}`,
    })
  }
}

//----------------->Google Routes<------------------------

//---google redirect midleware
// googleGetMiddle = () => {
//     return passport.authenticate('google', {
//         session: false,
//         scope: ['profile', 'email'],
//     })
// }
//---google callback middleware
// googleCallBackMiddle = () => {
//     passport.authenticate('google', {
//         failureRedirect: '/auth/fail',
//         session: false,
//     })
// }

verifyEmail = (req, res) => {
  const email = req.body.email
  const token = req.body.token
  User.query()
    // finds user to verify via email
    .findOne('email', email)
    .then(user => {
      if (user) {
        if (user.verify) {
          res.status(202).json({ message: 'Email already verified' })
        } else {
          const userToken = user.verifyToken
          console.log('tokens :', userToken, token)
          if (userToken === token) {
            console.log('yep they match')
            User.query()
              .update({ verify: true })
              .where('email', email)
            res.status(200).json({ message: 'Email verification successfull' })
          }
        }
      } else {
        console.log('failed')
        res.status(404).json({ message: ' email not found' })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'verification failed' })
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
    partnerName2: user.partnerName2,
    weddingDate: user.weddingDate,
    weddingParty: user.weddingParty,
    venueLocation: user.venueLocation,
    isPremium: user.isPremium,
  }
  const token = jwtHelper.generateToken(tokenUser)
  // redirects to account set up
  console.log('token :', token)
  res.redirect('http://localhost:3000/?token=' + token)
}

//------------------->Facebook Routes<--------------------------

//---Facebook redirect middleware
// facebookGetMiddle = () => {
//     passport.authenticate('facebook', {
//         session: false,
//         scope: ['email'],
//     })
// }
//---facebook call back middleware
// facebookCBMiddle = () => {
//     passport.authenticate('facebook', {
//         failureRedirect: '/auth/fail',
//         session: false,
//     })
// }

facebookCB = (req, res) => {
  const user = req.user
  const tokenUser = {
    userID: user.id,
    email: user.email,
  }
  const token = jwtHelper.generateToken(tokenUser)
  console.log('GOOGLE Token:', token)
  res.status(201).json({
    token,
  })
}
