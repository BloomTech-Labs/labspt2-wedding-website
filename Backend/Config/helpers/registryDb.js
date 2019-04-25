const db = require('../dbConfig')

module.exports = {
  getRegistryByUserId: id => {
    return db('registry').where('userId', id)
  },

  addRegistry: registry => {
    return db('registry').insert(registry)
  },

  updateRegistry: (id, updated) => {
    return db('registry')
      .where('id', id)
      .update(updated)
  },

  deleteRegistry: id => {
    return db('registry')
      .where('id', id)
      .del()
  },
}
