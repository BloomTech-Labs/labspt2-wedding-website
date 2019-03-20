exports.up = function(knex, Promise) {
  return knex.schema.createTable('guestList', tbl => {
    tbl.increments()
    tbl
      .string('firstName')
      .notNullable()
      .required()
    tbl
      .string('lastName')
      .notNullable()
      .required()
    tbl
      .string('email')
      .notNullable()
      .unique()
    tbl.integer('userId').unsigned()
    tbl.foreign('userId').references('users.id')
    //set on RSVP form + other table

    // are you going
    tbl.boolean('rsvp').defaultTo(null)
    tbl.boolean('rsvpMaybe').defaultTo(false)
    // How do you know the couple
    tbl.string('rsvpComment')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('guestList')
}
