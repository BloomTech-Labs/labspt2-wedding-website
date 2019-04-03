exports.up = function(knex, Promise) {
  return knex.schema.createTable('rsvpQuestions', table => {
    table.increments()
    table.string('Question_body').notNullable()
    table.integer('users_id').unsigned()
    table
      .foreign('users_id')
      .references('id')
      .on('users')
    table.integer('guestList_id').unsigned()
    table
      .foreign('guestList_id')
      .references('id')
      .on('guestList')
      
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('rsvpQuestions')
}
