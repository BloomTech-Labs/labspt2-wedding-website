const Password = require('objection-password')({
  allowEmptyPassword: true,
})
const { Model } = require('objection')

class User extends Password(Model) {
  static get tableName() {
    return 'users'
  }
}

module.exports = User
