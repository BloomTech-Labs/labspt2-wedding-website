const Password = require('objection-password')()
const Model = require('objection').Model
const knex = require('knex')

const knexDb = knex({
  client: 'sqlite3',
  connection: {
    filename: './data/labsDB.sqlite3',
  },
  useNullAsDefault: true,
})

Model.knex(knexDb)

class User extends Password(Model) {
  static get tableName() {
    return 'users'
  }
}
