exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('guestAddress')
  .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('guestAddress').insert([
        {
          id: 1,
          guestId: 1,
          address: '123 st. address',
          zipCode: '12345',
          city: 'cityville',
          state: 'Dorado',
          country: 'US',
        },
        {
          id: 2,
          guestId: 1,
          address: '123 st. address',
          zipCode: '12345',
          city: 'cityville',
          state: 'Dorado',
          country: 'US',
        },
        {
          id: 3,
          guestId: 2,
          address: '123 st. address',
          zipCode: '12345',
          city: 'cityville',
          state: 'Dorado',
          country: 'US',
        },
        {
          id: 4,
          guestId: 2,
          address: '123 st. address',
          zipCode: '12345',
          city: 'cityville',
          state: 'Dorado',
          country: 'US',
        },
        {
          id: 5,
          guestId: 3,
          address: '123 st. address',
          zipCode: '12345',
          city: 'cityville',
          state: 'Dorado',
          country: 'US',
        },
        {
          id: 6,
          guestId: 3,
          address: '123 st. address',
          zipCode: '12345',
          city: 'cityville',
          state: 'Dorado',
          country: 'US',
        },
        {
          id: 7,
          guestId: 4,
          address: '123 st. address',
          zipCode: '12345',
          city: 'cityville',
          state: 'Dorado',
          country: 'US',
        },
        {
          id: 8,
          guestId: 4,
          address: '123 st. address',
          zipCode: '12345',
          city: 'cityville',
          state: 'Dorado',
          country: 'US',
        },
        {
          id: 9,
          guestId: 5,
          address: '123 st. address',
          zipCode: '12345',
          city: 'cityville',
          state: 'Dorado',
          country: 'US',
        },
        {
          id: 10,
          guestId: 5,
          address: '123 st. address',
          zipCode: '12345',
          city: 'cityville',
          state: 'Dorado',
          country: 'US',
        },
      ])
    })
}
