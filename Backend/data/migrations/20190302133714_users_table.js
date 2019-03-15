exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments()
    tbl.string('socialId').unique
    tbl
      .string('email')
      .notNullable()
      .unique()
    tbl.string('username').unique()
    tbl.string('socialName')
    tbl.string('password')
    tbl.string('weddingParty')
    tbl.string('venueLocation')
    tbl.boolean('isPremium').defaultTo(false)
    tbl.json('rsvpExtraQuestions')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
