exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rsvpQuestions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('rsvpQuestions').insert([
        { id: 1, Question_body: 'rsvp question example?', users_id: 1 },
        { id: 2, Question_body: 'rsvp question example?', users_id: 2 },
        { id: 3, Question_body: 'rsvp question example?', users_id: 3 },
        { id: 4, Question_body: 'rsvp question example?', users_id: 4 },
        { id: 5, Question_body: 'rsvp question example?', users_id: 5 },
      ])
    })
}
