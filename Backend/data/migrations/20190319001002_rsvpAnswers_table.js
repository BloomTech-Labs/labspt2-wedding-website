
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rsvpAnswers', table => {
      table.increments();
      table.string('answer_body');
      table.integer('rsvpQuestions_id').unsigned();
      table.foreign('rsvpQuestions_id').references('id').on('users');
      table.integer('users_id').unsigned();
      table.foreign('users_id').references('id').on('users');
      table.integer('guestList_id').unsigned();
      table.foreign('guestList_id').references('id').on('guestList')
   
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('rsvpAnswers');
};
