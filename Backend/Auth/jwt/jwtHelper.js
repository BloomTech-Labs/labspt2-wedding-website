const jwt = require('jsonwebtoken')

//check if token exists on request header

module.exports = {
  generateToken: user => {
    const payload = {
      username: user.username,
    }
    const secret = process.env.JWT_SECRET
    const options = {
      expiresIn: '30m',
    }
    return jwt.sign(payload, secret, options)
  },

  authenticate: (req, res, next) => {
    const token = req.get('Authorization')
    if (token) {
      jwt.verify(token, jwtKey, (err, decoded) => {
        if (err) return res.status(401).json(err)
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
