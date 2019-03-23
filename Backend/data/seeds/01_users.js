exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        // basic User
        {
          id: 1,
          email: 'bla@gmail.com',
          username: 'Boi1',
          password: 'dkshfbv',
          isPremium: false,
          weddingParty: 'Party Test',
          venueLocation: '123 street address',
        },
        {
          id: 2,
          email: 'yup@gmail.com',
          username: 'Boi2',
          password: 'alkjse',
          isPremium: false,
          weddingParty: 'Party Test',
          venueLocation: '123 street address',
        },
        {
          id: 3,
          email: 'meh@gmail.com',
          username: 'Boi3',
          password: 'slejnr',
          isPremium: true,

          weddingParty: 'Party Test',
          venueLocation: '123 street address',
        },
        {
          id: 4,
          email: 'sup@gmail.com',
          username: 'Boi4',
          password: 'sdjfo',
          isPremium: false,
          weddingParty: 'Party Test',
          venueLocation: '123 street address',
        },
        {
          id: 5,
          email: 'blu@gmail.com',
          username: 'Boi5',
          password: 'msnzdl',
          isPremium: true,
          weddingParty: 'Party Test',
          venueLocation: '123 street address',
        },
      ])
    })
}
