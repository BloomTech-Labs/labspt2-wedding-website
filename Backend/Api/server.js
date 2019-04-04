require('dotenv').config()
// const request = require('request')
const passport = require('passport')
const auth = require('../Auth/passportConfig')

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const logger = require('morgan')

const configGuestRoutes = require('../Config/routes/guestRoute')
const configUserRoutes = require('../Config/routes/userRoute')
const configRsvpRoutes = require('../Config/routes/rsvpRoute')
const configLivePhotoRoute = require('../Config/routes/photoUploadRoute')
const configQuestionRoutes = require('../Config/routes/questionsRoute')
const configRsvpAnswersRoutes = require('../Config/routes/rsvpAnswersRoute')
const configAuthRoutes = require('../Config/routes/authRoute')

const server = express()

auth(passport)

server.use(
  express.json(),
  logger('dev'),
  cors(),
  helmet(),
  passport.initialize()
)
configUserRoutes(server)
configGuestRoutes(server)
configRsvpRoutes(server)
configLivePhotoRoute(server)
configQuestionRoutes(server)
configRsvpAnswersRoutes(server)
configAuthRoutes(server)

server.get('/', (req, res) => {
  res.status(200).json({
    api: 'WOW welcome to the JoinOurBigDay API!',
  })
})

module.exports = server
