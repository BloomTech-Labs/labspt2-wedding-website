exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        // basic User
        {
          id: 1,
          email: 'bla@gmail.com',
          username: 'Boi1',
          password: 'dkshfbv',
          boolean: false,
        },
        {
          id: 2,
          email: 'yup@gmail.com',
          username: 'Boi2',
          password: 'alkjse',
          boolean: false,
        },
        {
          id: 3,
          email: 'meh@gmail.com',
          username: 'Boi3',
          password: 'slejnr',
          boolean: true,
        },
        {
          id: 4,
          email: 'sup@gmail.com',
          username: 'Boi4',
          password: 'sdjfo',
          boolean: false,
        },
        {
          id: 5,
          email: 'blu@gmail.com',
          username: 'Boi5',
          password: 'msnzdl',
          boolean: true,
        },
      ])
    })
}
