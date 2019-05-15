const db = require('../dbConfig')

module.exports = {
  getUsers: id => {
    if (id) {
      return db('users')
        .where('id', id)
        .first()
        .select(
          'id',
          'username',
          'email',
          'partnerName1',
          'partnerName2',
          'weddingDate',
          'weddingParty',
          'venueLocation',
          'isPremium',
          'addressUrl'
        )
    }
    return db('users').select('id', 'username', 'email')
  },

  addUser: user => {
    return db('users').insert(user)
  },

  updateUser: (id, user) => {
    return db('users')
      .where('id', id)
      .update(user)
  },

  deleteUser: id => {
    return db('users')
      .where('id', id)
      .del()
  },
  getUserPhotos: id => {
    return db('userPhotos').where('userId', id)
  },
}
