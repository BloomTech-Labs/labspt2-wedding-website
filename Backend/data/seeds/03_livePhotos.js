exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('livePhotos')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('livePhotos').insert([
        {
          id: 1,
          imgURL: 'http://worldartsme.com/images/hithere-clipart-1.jpg',
          name: 'livePhotoTest',
          user_id: 1,
        },
        {
          id: 2,
          imgURL: 'http://domain.com/images/1.jpg',
          name: 'livePhotoTest2',
          user_id: 1,
        },
        {
          id: 3,
          imgURL: 'http://domain.com/images/2.jpg',
          name: 'livePhotoTest',
          user_id: 2,
        },
        {
          id: 4,
          imgURL: 'http://domain.com/images/3.jpg',
          name: 'livePhotoTest2',
          user_id: 2,
        },
        {
          id: 5,
          imgURL: 'http://domain.com/images/4.jpg',
          name: 'livePhotoTest',
          user_id: 3,
        },
        {
          id: 6,
          imgURL: 'http://domain.com/images/5.jpg',
          name: 'livePhotoTest2',
          user_id: 3,
        },
        {
          id: 7,
          imgURL: 'http://domain.com/images/6.jpg',
          name: 'livePhotoTest',
          user_id: 4,
        },
        {
          id: 8,
          imgURL: 'http://domain.com/images/7.jpg',
          name: 'livePhotoTest2',
          user_id: 4,
        },
        {
          id: 9,
          imgURL: 'http://domain.com/images/8.jpg',
          name: 'livePhotoTest',
          user_id: 5,
        },
        {
          id: 10,
          imgURL: 'http://domain.com/images/9.jpg',
          name: 'livePhotoTest2',
          user_id: 5,
        },
      ])
    })
}
