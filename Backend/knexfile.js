require('dotenv').config()
const localPg = {
  host: 'localhost',
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
}

const dbConnection = process.env.DATABASE_URL || localPg

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/labsDB.sqlite3',
    },
    useNullAsDefault: true,
    migrations:{
      directory: './data/migrations'
    }, 
    seeds:{
      directory: './data/seeds'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'pg',
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations',
    },
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/weddingLabsTestDB.sqlite3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
}
