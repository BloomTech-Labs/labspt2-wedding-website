const db = process.env.TESTING_DB || 'development';
const config = require('../knexfile')[db];

module.exports = require('knex')(config);