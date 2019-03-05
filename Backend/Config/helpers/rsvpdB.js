const db = require('../dbConfig')

module.exports = {
  addRsvp: rsvp => {
    return db('guestList').update(rsvp)
  },
}
