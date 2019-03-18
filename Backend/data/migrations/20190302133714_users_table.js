exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments()
    tbl
      .string('username')
      .notNullable()
      .unique()
    tbl.string('weddingParty').notNullable()
    tbl.string('password').notNullable()
    tbl.string('venueLocation')
    tbl.string('email').notNullable()
    tbl.boolean('isPremium').defaultTo(false)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.raw("DROP TABLE if exists users cascade")
}