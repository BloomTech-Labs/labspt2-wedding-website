const db = require('../dbConfig')

module.exports = {
  rsvpAnswers: () => {
    return db(rsvpAnswers)
  },

  rsvpAnswersById: id => {
    if (id) {
      return db('rsvpAnswers')
        .where('id', id)
        .first()
    }
    return db('rsvpAnswers')
  },

  addAnswer: answer => {
    return db('rsvpAnswers').insert(answer)
  },

  updateAnswer: (id, answer) => {
    return db('rsvpAnswers')
      .where('id', id)
      .update(answer)
  },

  deleteAnswer: id => {
    return db('rsvpAnswers')
      .where('id', id)
      .del()
  },
}
