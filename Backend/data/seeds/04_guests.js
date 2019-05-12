exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('guestList')
    .truncate()
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
          code:1234
        },
        {
          id: 2,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email1.com',
          userId: 1,
          rsvpMaybe: true,
          code:1234
        },
        {
          id: 3,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email2.com',
          userId: 2,
          rsvp: false,
          code:1234
        },
        {
          id: 4,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email3.com',
          userId: 2,
          rsvp: true,
          code:1234
        },
        {
          id: 5,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email4.com',
          userId: 3,
          rsvpMaybe: true,
          code:1234
        },
        {
          id: 6,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email5.com',
          userId: 3,
          rsvp: true,
          code:1234
        },
        {
          id: 7,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email6.com',
          userId: 4,
          rsvpMaybe: true,
          code:1234
        },
        {
          id: 8,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email7.com',
          userId: 4,
          rsvp: true,
          code:1234
        },
        {
          id: 9,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email8.com',
          userId: 5,
          rsvpMaybe: true,
          code:1234
        },
        {
          id: 10,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email9.com',
          userId: 5,
          rsvp: true,
          code:1234
        },
        {
          id: 11,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email10.com',
          userId: 6,
          rsvpMaybe: true,
          code:1234
        },
        {
          id: 12,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email11.com',
          userId: 6,
          rsvp: true,
          code:1234
        },
        {
          id: 13,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email12.com',
          userId: 6,
          rsvpMaybe: true,
          code:1234
        },
        {
          id: 14,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email13.com',
          userId: 6,
          rsvp: true,
          code:1234
        },
      ])
    })
}
