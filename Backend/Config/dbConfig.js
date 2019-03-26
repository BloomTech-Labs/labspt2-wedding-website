require('dotenv').config();
const db = process.env.TESTING_DB || 'development'|| process.env.DB;
<<<<<<< HEAD
=======

>>>>>>> fccf74a0f2dfbb382df59da1002709679fe14ce5

const config = require('../knexfile')[db];

module.exports = require('knex')(config); 