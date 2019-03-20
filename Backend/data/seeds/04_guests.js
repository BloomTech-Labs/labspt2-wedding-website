exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('guestList')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('guestList').insert([
        {
          id: 1,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email.com',
          userId: 1,
          rsvp: true,
        },
        {
          id: 2,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email.com',
          userId: 1,
          rsvpMaybe: true,
        },
        {
          id: 3,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email.com',
          userId: 2,
          rsvp: false,
        },
        {
          id: 4,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email.com',
          userId: 2,
          rsvp: true,
        },
        {
          id: 3,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email.com',
          userId: 3,
          rsvpMaybe: true,
        },
        {
          id: 6,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email.com',
          userId: 3,
          rsvp: true,
        },
        {
          id: 7,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email.com',
          userId: 4,
          rsvpMaybe: true,
        },
        {
          id: 8,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email.com',
          userId: 4,
          rsvp: true,
        },
        {
          id: 9,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email.com',
          userId: 5,
          rsvpMaybe: true,
        },
        {
          id: 10,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email.com',
          userId: 5,
          rsvp: true,
        },
      ])
    })
}
