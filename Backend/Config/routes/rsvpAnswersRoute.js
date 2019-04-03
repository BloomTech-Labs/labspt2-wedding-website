const helper = require('../helpers/rsvpAnswersDb.js')

module.exports = server => {
  server.get('/rsvp/answers', allAnswers)
  server.get('/rsvp/answer/:id', answerById)
  server.post('/rsvp/answers', addAnswer)
}
;(allAnswers = (req, res) => {
  helper
    .rsvpAnswers()
    .then(answers => {
      res.status(201).json(answers)
    })
    .catch(err => {
      res.status(500).send('Internal server error.')
    })
}),
  (answerById = (req, res) => {
    const { id } = req.params
    helper
      .rsvpAnswersById(id)
      .then(answer => {
        if (answer) {
          res.status(200).json(answer)
        } else {
          res.status(404).json({ message: 'No answer with that id' })
        }
      })
      .catch(() => {
        res.status(500).json({ message: 'Failed to grab answer' })
      })
  })

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
