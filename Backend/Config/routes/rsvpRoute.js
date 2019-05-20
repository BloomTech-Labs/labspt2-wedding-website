const helper = require('../helpers/rsvpDb')

module.exports = server => {
  server.put('/rsvp/:id', addRsvp)
}
addRsvp = (req, res) => {
  const { id } = req.params
  const body = req.body

  if (body.rsvp || body.rsvpMaybe) {
    helper
      .rsvpInfo(id, body)
      .then(rsvp => {
        res.status(201).json(rsvp)
      })
      .catch(() => {
        res
          .status(500)
          .json({ message: 'Failed to update guestlist w/ rsvpInfo' })
      })
  } else {
    res.status(400).json({ message: 'Missing rsvp or rsvpMaybe' })
  }
}

addAddress = (req, res) => {
  const body = req.body
  if (body.guestId && body.address && body.zipcode) {
    helper
      .rsvpAddress(address)
      .then(newAddress => {
        res.status(201).json(newAddress)
      })
      .catch(() => {
        res.status(500).json({ message: 'Failed to add address' })
      })
  }
}
