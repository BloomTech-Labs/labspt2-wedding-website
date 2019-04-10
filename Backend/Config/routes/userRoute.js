const helper = require('../helpers/userDb')
const bcrypt = require('bcrypt')

module.exports = server => {
  server.get('/users', allUsers)
  server.get('/users/:id', userById)
  server.put('/users/:id', editUser)
  server.get('/users/:id/images', userPhotos)
}

allUsers = (req, res) => {
  helper
    .getUsers()
    .then(users => {
      res.status(201).json(users)
    })
    .catch(err => {
      res.status(500).send({
        error: err.message,
      })
    })
}

userById = (req, res) => {
  const {
    id
  } = req.params
  helper
    .getUsers(id)
    .then(row => {
      console.log('user by id endpoint', row) !row[0] ?
        res.json(row) :
        res.status(404).json({
          error: 'User with that ID not found',
        })
    })
    .catch(err => {
      res
        .status(500)
        .send(
          'internal server error, Its probably a typo.. maybe yours maybe ours....'
        )
    })
}

editUser = (req, res) => {
  const {
    id
  } = req.params
  const user = req.body
  let password = user.password
  console.log('no hash :', user)
  if (password) {
    user.password = bcrypt.hashSync(password, 12)
    console.log('w/hash :', user)
  }

  helper
    .updateUser(id, user)
    .then(number => {
      res.json(number)
    })
    .catch(err => {
      res.status(500).send({
        error: 'Internal server issue with the edit of the user.',
      })
    })
}

removeUser = (req, res) => {
  const {
    id
  } = req.params
  helper
    .deleteUser(id)
    .then(number => {
      !number
        ?
        res.status(404).json({
          message: 'user Not Found',
        }) :
        res.json({
          message: 'Its gone!',
        })
    })
    .catch(err => {
      res.status(500).send({
        error: err,
      })
    })
}

userPhotos = (req, res) => {
  const {
    id
  } = req.params
  helper.getUserPhotos(id).then(images => {
    res.json(images)
  }).catch(err => {
    res.status(500).send(err)
  })
}