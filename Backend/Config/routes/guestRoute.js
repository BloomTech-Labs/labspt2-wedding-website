const helper = require('../helpers/guestDb')

module.exports = server => {
  server.get('/users', allUsers)
}
allGuest = (req, res) => {
  helper
    .getGuest()
    .then(users => {
      res.json({ message: 'success' })
    })
    .catch(err => {
      res.status(500).json({ error: `error message: ${err}` })
    })

  // guestById = (req, res) => {
  //   const {id} = req.params
  //   helper.getGuest()
  // }

  guestById = (req, res) => {
    const { id } = req.params
    helper
      .getGuest(id)
      .then(guest => {
        if (guest) {
          res.status(200).json(guest)
        } else {
          res.status(404).json({ message: 'No guest under that id' })
        }
      })
      .catch(() => {
        res.status(500).json({ message: 'Failed to get guest' })
      })
  }

  addGuest = (req, res) => {
    const body = req.body
    //Need to add: first/last name and email required if statement
    helper
      .addGuest(body)
      .then(newGuest => {
        res.status(201).json(newGuest)
      })
      .catch(() => {
        res.status(500).json({ message: 'Failed to add guest' })
      })
  }
}
