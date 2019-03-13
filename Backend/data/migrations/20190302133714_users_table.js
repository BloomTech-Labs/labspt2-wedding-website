exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments()
    tbl.string('googleId').unique
    tbl
      .string('email')
      .notNullable()
      .unique()
    tbl
      .string('username')
      .notNullable()
      .unique()
    tbl.string('password').notNullable()
    tbl.string('weddingParty').notNullable()
    tbl.string('venueLocation')
    tbl.boolean('isPremium').defaultTo(false)
    tbl.json('rsvpExtraQuestions')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.raw('DROP TABLE if exists users cascade')
}
