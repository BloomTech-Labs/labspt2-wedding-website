const helper = require('../helpers/guestDb')
const { sendGuestEmail } = require('../helpers/email')

module.exports = server => {
  server.get('/guest', allGuest)
  server.get('/guest/:id', guestById)
  server.get('/user/guests/:id', guestByUserId)
  server.get('/guest/auth/:code', guestByCode)
  server.post('/guest', addGuest)
  server.put('/guest/:id', editGuest)
  server.delete('/guest/:id', removeGuest)
  server.post('/guest/:userId/email', emailGuests)
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

guestByUserId = (req, res) => {
  const { id } = req.params
  helper
    .guestsByUserId(id)
    .then(guests => {
      if (guests) {
        res.status(200).json(guests)
      } else {
        res.status(404).json({ message: 'No guest under that user id' })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Failed to get guests' })
    })
}

guestByCode = (req, res) => {
  const { code } = req.params
  console.log('route', code)
  helper
    .getByCode(code)
    .then(guest => {
      if (guest) {
        res.status(200).json(guest)
      } else {
        res.status(404).json({ message: 'No guest created with that code' })
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to get guests' })
    })
}

addGuest = (req, res) => {
  const body = req.body
  console.log(body)
  if (!body.firstName || !body.lastName || !body.email) {
    res
      .status(404)
      .json({ err: 'First name, last name and email are required' })
  } else {
    helper
      .addGuest(body)
      .then(newGuest => {
        res.status(201).json(newGuest)
      })
      .catch(err => {
        console.log('add guest err', err)
        res.status(500).json({ message: 'Failed to add guest' })
      })
  }
}

editGuest = (req, res) => {
  const { id } = req.params
  const guest = req.body
  helper
    .updateGuest(id, guest)
    .then(number => {
      res.json(number)
    })
    .catch(err => {
      res.status(500).json({
        message: 'Failed to edit guest',
      })
    })
}

removeGuest = (req, res) => {
  const { id } = req.params
  console.log('remove route id', id)
  helper
    .deleteGuest(id)
    .then(number => {
      console.log(number)
      if (number) {
        res.json({ message: 'Guest successfully removed' })
      } else {
        res.status(404).json({ message: 'No guest with this id exists' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete guest' })
    })
}

emailGuests = (req, res) => {
  const { userId } = req.params
  const { userUrl } = req.body
  helper.guestsByUserId(userId).then(guests => {
    guests.map(guest => {
      sendGuestEmail(guest.email, guest.code, userUrl)
    })
  })
}
