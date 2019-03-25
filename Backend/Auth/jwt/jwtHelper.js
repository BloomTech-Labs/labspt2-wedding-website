require('dotenv').config()
const jwt = require('jsonwebtoken')

//check if token exists on request header

module.exports = {
  generateToken: user => {
    console.log(user)
    const payload = {
      id: user.userId,
      username: user.username,
      email: user.email,
      isPremium: user.isPremium,
    }
    const secret = process.env.JWT_SECRET
    const options = {
      expiresIn: '10d',
    }
    return jwt.sign(payload, secret, options)
  },

  authenticate: (req, res, next) => {
    const token = req.get('Authorization')
    if (token) {
      jwt.verify(token, jwtKey, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Invalid Token' })
        req.decoded = decoded
        next()
      })
    } else {
      return res.status(401).json({
        error: 'no Token provided, must be set on the Authorization header',
      })
    }
  },
}
