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
  addGuest: guest => {
    return db('guestList').insert(guest)
  },

  updateGuest: guest => {
    return db(guestList)
      .where('id', id)
      .update(guest)
  },

  deleteGuest: id => {
    db('guestList')
      .where('id', id)
      .del()
  },
}
//Hello Wold
