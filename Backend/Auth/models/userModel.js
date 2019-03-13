const Password = require('objection-password')({
  allowEmptyPassword: true,
})
const { Model } = require('objection')

class User extends Password(Model) {
  static get tableName() {
    return 'users'
  }
}

const verifyPass = (email, password) => {
  const user = User.query().findOne('email', email)
}

module.exports = User
