const knexDb = require('../dbConfig')
const bookshelf = require('bookshelf')
const bsSecurePass = require('bookshelf-secure-password')
const db = bookshelf(knexDb)
db.plugin(bsSecurePass)

const User = db.Model.extend({
  tableName: 'users',
  hasSecurePassword: 'password',
})

module.exports = User
