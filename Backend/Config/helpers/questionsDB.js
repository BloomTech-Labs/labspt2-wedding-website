const db = require('../dbConfig')

module.exports = {
  allQuestions: () => {
    return db('rsvpQuestions')
  },

  questionsById: id => {
    if (id) {
      return db('rsvpQuestions').where('id', id)
    }
    return db('rsvpQuestions')
  },

  addQuestion: Question => {
    return db('rsvpQuestions').leftJoin('users', 'users_id', 'users.id')
  },

  updateQuestion: (id, answer) => {
    return db('rsvpQuestions')
      .where('id', id)
      .update(answer)
  },

  deleteQuestion: id => {
    db('rsvpQuestions')
      .where('id', id)
      .del()
  },
}
