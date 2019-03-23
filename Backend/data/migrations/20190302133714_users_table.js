exports.up = function(knex, Promise) {
  /*
    User table is still not completly decided
    - password cant be notNull() since social users don't need password
    - username can't be notNull() since facebook and google dont provide username
      - usernames could be later added by users by doing a put request on their id
    
    Will have to check with team 
  */
  return knex.schema.createTable('users', tbl => {
    tbl.increments()
    tbl.string('socialId').unique()
    tbl
      .string('email')
      .notNullable()
      .unique()
    tbl.string('username').unique()
    tbl.string('socialName')
    tbl.string('password')
    tbl.string('weddingParty')
    //feel that venue location should be an object to separate sections of the address
    tbl.string('venueLocation')
    tbl.boolean('isPremium').defaultTo(false)
<<<<<<< HEAD
=======
    // this won't be needed with the new rsvp questions and answers tables
    // tbl.json('rsvpExtraQuestions')
>>>>>>> 98a2898e0d66cb6dee013aa6b6ab0d9f307e6faa
  })
}

exports.down = function(knex, Promise) {
<<<<<<< HEAD
  return knex.schema.raw("DROP TABLE if exists users cascade")
}
=======
  return knex.schema.dropTableIfExists('users')
}
>>>>>>> 98a2898e0d66cb6dee013aa6b6ab0d9f307e6faa
