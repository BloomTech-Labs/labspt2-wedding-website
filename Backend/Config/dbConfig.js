const db = process.env.TESTING_DB || process.env.DATABASE_URL || 'development';
const config = require('../knexfile')[db];

module.exports = require('knex')(config);