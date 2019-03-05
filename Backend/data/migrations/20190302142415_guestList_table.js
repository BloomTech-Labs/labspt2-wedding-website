exports.up = function(knex, Promise) {
  return knex.schema.createTable('guestList', tbl => {
    tbl.increments()
    tbl.string('firstName').notNullable()
    tbl.string('lastName').notNullable()
    tbl
      .string('email')
      .notNullable()
      .unique()
    tbl.boolean('rsvp').defaultTo(null)
    tbl.boolean('rsvpMaybe').defaultTo(false)
    tbl.string('rsvpMailing')
    tbl.string('rsvpStory')
    tbl.integer('userId').unsigned()
    tbl.foreign('userId').references('users.id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('guestList')
}
