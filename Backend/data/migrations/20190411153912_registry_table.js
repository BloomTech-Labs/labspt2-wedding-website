exports.up = function(knex, Promise) {
  return knex.schema.createTable('registry', tbl => {
    tbl.increments()
    tbl.string('registryName').notNullable()
    tbl.string('registryUrl').notNullable()
    tbl.integer('userId').unsigned()
    tbl.foreign('userId').references('users.id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('registry')
}
