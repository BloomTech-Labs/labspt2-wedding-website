const helper = require('../helpers/questionsDB')

module.exports = server => {
  server.get('/users/:id/questions', questionsById)
  server.get('/:id/questions', getAllUserQuestions)
  server.post('/users/:user/addquestion', addNewQuestion)
  server.put('/users/:questionID')
}

getAllUserQuestions = (req, res) => {
  const { id } = req.params
  helper
    .allQuestionsById(id)
    .then(questions => {
      res.json(questions)
    })
    .catch(err => {
      res.status(500).send({ error: err })
    })
}
//NEED TO FIGURE OUT THE PARAM SETTINGS FOR THE USER AND QUESTION ID
questionsById = (req, res) => {
  const {id} = req.params
  console.log('test teste stes')
  helper
    .questionsWAnswersByUserId(id)
    .then(qs => {
      console.log(qs)
      qs.forEach(column => {
        console.log(column)
        console.log('questionId:',column.rsvpQuestions_id )
        console.log('answerBody:',column.answerBody)
        let removeRepeat = [...new Set(column.rsvpQuestions_id)]
        console.log('filtered question ids:', removeRepeat)
        let answerObject = {
          answerBody: 'blabla',
          guestId: 'id'
        }
        
        const returnObj = {
          userId: qs.users_id,
          questionId: qs.rsvpQuestions_id,
          questionBody: qs.Question_body,
          answers: {
            answersArr
          }
        }
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({ error: err })
    })
}

addNewQuestion = (req, res) => {
  const newQ = req.body
  const { user } = req.params
  helper
    .addQuestion(newQ)
    .then(id => {
      res.status(201).json({ message: 'Question Added' })
    })
    .catch(err => {
      res.status(500).send({ error: err })
    })
}

editQuestion = (res, req) => {
  const question = req.body
  const { questionID } = req.params
  // need to check for ID and return 404 if false
  helper
    .updateQuestion(id, questionID)
    .then(number => {
      res.status(202).json({ message: 'Question Updated' })
    })
    .catch(err => {
      res.status(500).send({ error: err })
    })
}

removeQuestion = (req, body) => {
  const { id } = req.params
  helper
    .deleteQuestion(id)
    .then(number => {
      number
        ? res.status(404).json({
            message: 'Question Not Found',
          })
        : res.json({
            message: 'Its gone!',
          })
    })
    .catch(err => {
      res.status(500).send({
        error: err,
      })
    })
}
