exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments()
    tbl.string('oauthId').unique()
    tbl
      .string('username')
      .notNullable()
      .unique()
    tbl.string('password')
    tbl.string('firstname')
    tbl.string('lastname')
    tbl.string('profileImg')
    tbl.string('weddingParty')
    //No password because Oauth
    tbl.string('venueLocation')
    tbl
      .string('email')
      .notNullable()
      .unique()
    tbl.boolean('isPremium').defaultTo(false)
    tbl.json('rsvpExtraQuestions')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
