exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1,
          answerBody: 'question answer',
          rsvpQuestions_id: 1,
          user_id: 1,
          guestList_id: 1,
        },
        {
          id: 2,
          answerBody: 'question answer',
          rsvpQuestions_id: 2,
          user_id: 2,
          guestList_id: 2,
        },
        {
          id: 3,
          answerBody: 'question answer',
          rsvpQuestions_id: 3,
          user_id: 3,
          guestList_id: 3,
        },
        {
          id: 4,
          answerBody: 'question answer',
          rsvpQuestions_id: 4,
          user_id: 4,
          guestList_id: 4,
        },
        {
          id: 5,
          answerBody: 'question answer',
          rsvpQuestions_id: 5,
          user_id: 5,
          guestList_id: 5,
        },
      ])
    })
}
