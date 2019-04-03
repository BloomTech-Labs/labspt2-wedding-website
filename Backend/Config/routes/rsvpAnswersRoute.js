const helper = require('../helpers/rsvpAnswersDb.js')
const db = require('../dbConfig')

module.exports = server => {
  server.get('/rsvp/answers', allAnswers)
  server.get('/rsvp/answer/:id', answerByQId)
  server.post('/rsvp/answers', addAnswer)
}

allAnswers = (req, res) => {}
answerByQId = (req, res) => {
  const { id } = req.params
  helper
    .rsvpAnswersById(id)
    .then(question => {
      db('rsvpAnswers')
        .where('rsvpQuestions_id', id)
        .then(Answers => {
          let allAnswers = []
          Answers.forEach(obj => {
            let newObj = {
              guestid: obj.guestList_id,
              answer: obj.answer_body,
            }
            allAnswers.push(newObj)
          })

          question.answers = allAnswers
          res.json(question)
        })
        .catch(err => {
          res.status(404).send({ message: 'answers not found' })
        })
    })
    .catch(err => {
      res.status(500).send()
    })
}

addAnswer = (req, res) => {
  const body = req.body
  if (!body.answer_body) {
    res.status(404).json({ err: 'Please provide an answer' })
  } else {
    helper
      .addAnswer(body)
      .then(newAnswer => {
        res.status(201).json(newAnswer)
      })
      .catch(() => {
        res.status(500).json({ message: 'Failed to add new answer' })
      })
  }
}

editAnswer = (req, res) => {
  const { id } = req.params
  const answer = req.body
  helper
    .updateAnswer(id, answer)
    .then(num => {
      res.json(num)
    })
    .catch(err => {
      res.status(500).json({
        message: 'Failed to edit answer',
      })
    })
}
