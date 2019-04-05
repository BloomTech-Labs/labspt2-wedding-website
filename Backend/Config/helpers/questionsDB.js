const db = require('../dbConfig')

module.exports = {
  allQuestionsById: id => {
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
    return db('rsvpQuestions')
      .insert(Question)
  },

  updateQuestion: (id, updated) => {
    return db('rsvpQuestions')
      .where('id', id)
      .update(updated)
  },

  deleteQuestion: id => {
    return  db('rsvpQuestions')
      .where('id', id)
      .del()
  },

  userById: id => {
    return db('users').where('id', id).first()
  }
}