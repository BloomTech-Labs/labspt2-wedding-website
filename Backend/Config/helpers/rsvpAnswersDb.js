const db = require('../dbConfig')

module.exports = {
<<<<<<< HEAD
    rsvpAnswers: () => {
        return db('rsvpAnswers').leftJoin('rsvpQuestions', rsvpQuestions_id, rsvpQuestions.id)
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
         db('rsvpAnswers')
         .where('id', id)
         .del()
       },
}
=======
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
    db('rsvpAnswers')
      .where('id', id)
      .del()
  },
}
>>>>>>> fccf74a0f2dfbb382df59da1002709679fe14ce5
