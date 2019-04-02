const db = require('../dbConfig')
const {
    Model
} = require('objection')
const knex = require('knex')
const passport = require('passport')

Model.knex(db)

module.exports = server => {
    server.get('/auth', authHome),
        server.get('/auth/fail', fail),
        server.post('/auth/register-login',
            regLoginMiddle,
            regLogin),
        server.get('/auth/google', googleGetMiddle),
        server.get(
            '/auth/google/callback',
            googleCallBackMiddle, googleCB),
        server.get('/auth/facebook', facebookGetMiddle)
}



authHome = (req, res) => {
    res.json({
        status: 'Auth Home'
    })
}

fail = (req, res) => {
    res.status(500).json({
        message: 'Something has gone wrong'
    })
}
//-------Middleware for login route
regLoginMiddle = () => {
    passport.authenticate('json', {
        session: false
    })
}

regLogin = (req, res) => {
    const user = req.user
    const tokenUser = {
        userID: user.id,
        email: user.email,
    }
    if (user.id) {
        const token = jwtHelper.generateToken(tokenUser)
        res.status(201).json({
            token
        })
    } else {
        res.status(500).json({
            message: `${user}`,
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
        userID: user.id,
        email: user.email,
    }
    const token = jwtHelper.generateToken(tokenUser)
    console.log('GOOGLE Token:', token)
    res.status(201).json({
        token
    })
}

//------------------->Facebook Routes<--------------------------

//---Facebook redirect middleware
facebookGetMiddle = () => {
    passport.authenticate('facebook', {
        session: false,
        scope: ['email'],
    })
}