exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userPhotos')
  .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('userPhotos').insert([
        {
          id: 1,
          imgURL: 'http://worldartsme.com/images/hithere-clipart-1.jpg',
          userId: 1,
        },
        {
          id: 2,
          imgURL: 'http://worldartsme.com/images/hithere-clipart-1.jpg',
          userId: 1,
        },
        {
          id: 3,
          imgURL: 'http://worldartsme.com/images/hithere-clipart-1.jpg',
          userId: 2,
        },
        {
          id: 4,
          imgURL: 'http://worldartsme.com/images/hithere-clipart-1.jpg',
          userId: 2,
        },
        {
          id: 5,
          imgURL: 'http://worldartsme.com/images/hithere-clipart-1.jpg',
          userId: 3,
        },
        {
          id: 6,
          imgURL: 'http://worldartsme.com/images/hithere-clipart-1.jpg',
          userId: 3,
        },
        {
          id: 7,
          imgURL: 'http://worldartsme.com/images/hithere-clipart-1.jpg',
          userId: 4,
        },
        {
          id: 8,
          imgURL: 'http://worldartsme.com/images/hithere-clipart-1.jpg',
          userId: 4,
        },
        {
          id: 9,
          imgURL: 'http://worldartsme.com/images/hithere-clipart-1.jpg',
          userId: 5,
        },
        {
          id: 10,
          imgURL: 'http://worldartsme.com/images/hithere-clipart-1.jpg',
          userId: 5,
        },
      ])
    })
}
