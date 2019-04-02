const db = require('../dbConfig')

module.exports = {
  getGuest: id => {
    if (id) {
      return db('guestList')
        .where('id', id)
        .first()
    }
    return db('guestList')
  },

  guestsByUserId: id => {
    return db('guestList')
      .select('*')
      .from('guestList')
      .where('userId', id)
  },

  addGuest: guest => {
    return db('guestList').insert(guest)
  },

  updateGuest: (id, guest) => {
    return db('guestList')
      .where('id', id)
      .update(guest)
  },

  deleteGuest: id => {
    console.log('id on delete helper', id)
    return db('guestList')
      .where('id', id)
      .del()
  },
}
