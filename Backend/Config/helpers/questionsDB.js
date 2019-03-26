const db = require('../dbConfig')

module.exports = {
  allQuestionsById: id  => {
    return db('rsvpQuestions').where('users_id', id)
  },


  questionsWAnswersByUserId: id => {
    //expects the user Id
    if (id) {
      return db('rsvpQuestions')
      .from('rsvpQuestions').leftJoin('rsvpAnswers', 'rsvpQuestions.id', 'rsvpAnswers.rsvpQuestions_id')
      .where('rsvpAnswers.users_id', id)
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