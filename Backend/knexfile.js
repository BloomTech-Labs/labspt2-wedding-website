require('dotenv').config()
<<<<<<< HEAD
const localPg = {
  host: 'localhost',
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
}

const dbConnection = process.env.DATABASE_URL || localPg
=======
>>>>>>> Frontend

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/labsDB.sqlite3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
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
<<<<<<< HEAD
    connection: dbConnection,
=======
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
>>>>>>> Frontend
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
<<<<<<< HEAD
      directory: './data/migrations',
=======
>>>>>>> Frontend
    },
  },
  testing: {
    client: 'sqlite3',
    connection: {
<<<<<<< HEAD
      filename: './data/weddingLabsTestDB.sqlite3',
=======
      filename: './data/guidrTestDB.sqlite3',
>>>>>>> Frontend
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
