const db = require('../dbConfig')

module.exports = {

rsvpAnswers: () => {
    return db("rsvpAnswers").leftJoin('rsvpQuestions', 'rsvpAnswers.rsvpQuestions.id', 'rsvpQuestions.id')

},

  rsvpAnswersById: id => {
    return db("rsvpQuestions")
    .where("id", id).first()
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
    db('rsvpAnswers')
      .where('id', id)
      .del()
  },

}
