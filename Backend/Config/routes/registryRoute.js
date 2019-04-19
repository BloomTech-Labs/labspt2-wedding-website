const helper = require('../helpers/registryDb')
const db = require('../dbConfig')

module.exports = server => {
  server.get('/registry/:id', getUserRegistry)
  server.post('/registry/:user', addNewRegistry)
  server.put('/registry/:userId/:registryId', editRegistry)
  server.delete('/registry/:id', removeRegistry)
}

getUserRegistry = (req, res) => {
  const { id } = req.params
  helper
    .getRegistryByUserId(id)
    .then(registry => {
      res.json(registry)
    })
    .catch(() => {
      res.status(500).json({ message: 'getting registry failed' })
    })
}

addNewRegistry = (req, res) => {
  const newR = req.body
  console.log('newreg', newR)
  const { user } = req.params
  console.log(user)
  newR.userId = user
  console.log('newr new', newR)
  helper
    .addRegistry(newR)
    .then(id => {
      res.status(201).json({ message: 'Registry added' })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Adding registry failed' })
    })
}

editRegistry = (req, res) => {
  const registry = req.body
  const { userId, registryId } = req.params
  registry.userId = userId

  helper
    .updateRegistry(registryId, registry)
    .then(() => {
      res.status(202).json({ message: 'Registry updated' })
    })
    .catch(() => {
      res.status(500).json({ message: 'Updating registry failed' })
    })
}

removeRegistry = (req, res) => {
  const { id } = req.params
  helper
    .deleteRegistry(id)
    .then(() => {
      res.json({ message: 'Its gone!' })
    })
    .catch(() => {
      res.status(500).json({ message: 'deleting registry failed' })
    })
}
