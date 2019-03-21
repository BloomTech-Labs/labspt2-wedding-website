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
        },
        {
          id: 2,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email1.com',
          userId: 1,
          rsvpMaybe: true,
        },
        {
          id: 3,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email2.com',
          userId: 2,
          rsvp: false,
        },
        {
          id: 4,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email3.com',
          userId: 2,
          rsvp: true,
        },
        {
          id: 5,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email4.com',
          userId: 3,
          rsvpMaybe: true,
        },
        {
          id: 6,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email5.com',
          userId: 3,
          rsvp: true,
        },
        {
          id: 7,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email6.com',
          userId: 4,
          rsvpMaybe: true,
        },
        {
          id: 8,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email7.com',
          userId: 4,
          rsvp: true,
        },
        {
          id: 9,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email8.com',
          userId: 5,
          rsvpMaybe: true,
        },
        {
          id: 10,
          firstName: 'name',
          lastName: 'lastname',
          email: 'guest@email9.com',
          userId: 5,
          rsvp: true,
        },
      ])
    })
}
