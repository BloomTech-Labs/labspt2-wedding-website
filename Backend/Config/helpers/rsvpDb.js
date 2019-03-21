const db = require('../dbConfig')

module.exports = {
  rsvpInfo: (id, rsvpInfo) => {
    // rsvp - boolean
    // rsvpMaybe - boolean
    // rsvpComment - string
    return db('guestList')
      .where('id', id)
      .update(rsvpInfo)
  },

  rsvpAddress: (id, address) => {
    //we need
    //guest Id - int, address - string, zipcode - string
    return db('guestAddress').insert(address)
  },
}

