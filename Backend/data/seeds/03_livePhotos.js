exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1,
          imURL: 'http://worldartsme.com/images/hithere-clipart-1.jpg',
          name: 'test',
          user_id: 1,
        },
        {
          id: 1,
          imURL: 'http://worldartsme.com/images/hithere-clipart-1.jpg',
          name: 'test2',
          user_id: 1,
        },
        {
          id: 1,
          imURL: 'http://worldartsme.com/images/hithere-clipart-1.jpg',
          name: 'test',
          user_id: 2,
        },
        {
          id: 1,
          imURL: 'http://worldartsme.com/images/hithere-clipart-1.jpg',
          name: 'test2',
          user_id: 2,
        },
        {
          id: 1,
          imURL: 'http://worldartsme.com/images/hithere-clipart-1.jpg',
          name: 'test',
          user_id: 3,
        },
        {
          id: 1,
          imURL: 'http://worldartsme.com/images/hithere-clipart-1.jpg',
          name: 'test2',
          user_id: 3,
        },
        {
          id: 1,
          imURL: 'http://worldartsme.com/images/hithere-clipart-1.jpg',
          name: 'test',
          user_id: 4,
        },
        {
          id: 1,
          imURL: 'http://worldartsme.com/images/hithere-clipart-1.jpg',
          name: 'test2',
          user_id: 4,
        },
        {
          id: 1,
          imURL: 'http://worldartsme.com/images/hithere-clipart-1.jpg',
          name: 'test',
          user_id: 5,
        },
        {
          id: 1,
          imURL: 'http://worldartsme.com/images/hithere-clipart-1.jpg',
          name: 'test2',
          user_id: 5,
        },
      ])
    })
}
