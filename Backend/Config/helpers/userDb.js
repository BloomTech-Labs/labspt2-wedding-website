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
          'socialName',
          'email',
          'weddingParty',
          'venueLocation',
          'isPremium'
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
}
