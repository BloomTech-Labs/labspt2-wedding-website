const helper = require('../helpers/userDb')

module.exports = server => {
<<<<<<< HEAD
        server.get('/users', allUsers),
        server.post('/register', register),
        server.get('/users/:id', userById),
        server.put('/users/:id', editUser)
=======
  server.get('/users', allUsers),
    server.get('/users/:id', userById),
    server.put('/users/:id', editUser)
>>>>>>> 98a2898e0d66cb6dee013aa6b6ab0d9f307e6faa
}

allUsers = (req, res) => {
  helper.getUsers().then(users => {
<<<<<<< HEAD
    res.status(201).json(users)
  }).catch(err=>{
      res.status(500).send({error:err.message})
  })
}

register = (req, res) => {
    const user = req.body
  
    helper
        .addUser(user)
        .then(id => {
            res.status(201).json(id)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to add user',
                error: err
            })
        })
}

=======
    res.status(200).json(users)
  }).catch(err => {
    res.status(500).send({
      error: err
    })
  })
}

>>>>>>> 98a2898e0d66cb6dee013aa6b6ab0d9f307e6faa
userById = (req, res) => {
  const {
    id
  } = req.params
  helper
    .getUsers(id)
    .then(row => {
      !row[0] ?
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
  helper.deleteUser(id).then(number => {
    !number ? res.status(404).json({
      message: 'user Not Found'
    }) : res.json({
      message: "Its gone!"
    })
  }).catch(err => {
    res.status(500).send({
      error: err
    })
  })
}