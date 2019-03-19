require('dotenv').config();
const db = process.env.TESTING_DB || 'development'|| process.env.DB;

const config = require('../knexfile')[db];

module.exports = require('knex')(config);