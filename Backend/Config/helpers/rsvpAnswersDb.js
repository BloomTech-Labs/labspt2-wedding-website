const db = require('../dbConfig')

module.exports = {
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