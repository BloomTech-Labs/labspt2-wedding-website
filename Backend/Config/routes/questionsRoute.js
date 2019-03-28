const helper = require('../helpers/questionsDB')

module.exports = server => {
  // server.get('/users/:id/questions', questionsById)
  server.get('/:id/questions', getAllUserQuestions)
  server.post('/:user/addquestion', addNewQuestion)
  server.put('/update-question/:user/:questionId', editQuestion)
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


addNewQuestion = (req, res) => {
  const newQ = req.body
  const { user } = req.params
  newQ.users_id = user
  console.log(newQ)
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
  const { user, questionId } = req.params
  question.users_id = user
  console.log(req.params)
  // need to check for ID and return 404 if false
  helper
    .updateQuestion(questionId, question)
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
