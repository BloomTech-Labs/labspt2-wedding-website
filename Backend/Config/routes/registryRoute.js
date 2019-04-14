const helper = require('../helpers/questionsDB')
const db = require('../dbConfig')

module.exports = server => {
  server.get('/registry/:id')
  server.post('/registry/:id')
  server.put('/registry/:id')
  server.delete('/registry/:id/:registry')
}
