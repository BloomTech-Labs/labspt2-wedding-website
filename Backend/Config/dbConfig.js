require('dotenv').config()
const db = process.env.TESTING_DB || /*process.env.DB || */ 'development'

const config = require('../knexfile')[db]

module.exports = require('knex')(config)
