exports.up = function(knex, Promise) {
  /*
    User table is still not completly decided
    - password cant be notNull() since social users don't need password
    - username can't be notNull() since facebook and google dont provide username
      - usernames could be later added by users by doing a put request on their id
    
    Will have to check with team 
  */
  //removed the socialname column
  return knex.schema.createTable('users', tbl => {
    tbl.increments()
    tbl.string('socialId').unique()
    tbl
      .string('email')
      .notNullable()
      .unique()
    tbl.string('username').unique()
    tbl.string('partnerName1')
    tbl.string('partnerName2')
    tbl.date('weddingDate')
    tbl.string('password')
    tbl.string('weddingParty')
    //feel that venue location should be an object to separate sections of the address
    tbl.string('venueLocation')
    tbl.string('addressUrl')
    tbl.boolean('isPremium').defaultTo(false)
    // this won't be needed with the new rsvp questions and answers tables
    // tbl.json('rsvpExtraQuestions')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
