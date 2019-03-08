const helper = require('../helpers/guestDb')

module.exports = server => {
  server.get('/guest', allGuest)
  server.get('/guest/:id', guestById)
  server.post('/guest', addGuest)
  server.put('/guest/:id', editGuest)
  server.delete('/guest/:id', removeGuest)
}
allGuest = (req, res) => {
  helper
    .getGuest()
    .then(guest => {
      res.json(guest)
    })
    .catch(err => {
      res.status(500).json({ error: `error message: ${err}` })
    })
}

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
  if( !body.firstName || !body.lastName || !body.email) {
    res.status(404).json({ err: "First name, last name and email are required"})
  } else {
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

editGuest = (req, res) => {
  const { id } = req.params;
  const guest = req.body;
  helper.updateGuest(id, guest).then(number => {
    res.json(number)
  }) .catch(err => {
    res.status(500).json({
      message: 'Failed to edit guest'
    })
  })
}

removeGuest = (req, res) => {
  const { id } = req.params;
  console.log(id);
  helper.deleteGuest(id).then(number => {
    console.log(number);
    if (number)  {
      res.json({message: "Guest successfully removed"})
    } else {
      res.status(404).json({message: 'No guest with this id exists'})
    }
  }).catch(err => {
    res.status(500).json({ message: "Failed to delete guest"})
  })
}

