exports.up = function(knex, Promise) {
  return knex.schema.createTable('guestAddress', tbl => {
    tbl.increments()
    tbl.integer('guestId').unsigned()
    tbl.foreign('guestId').references('guestList.id')
    tbl.string('address').notNullable()
    tbl.string('zipCode').notNullable()
    tbl.string('city').notNullable()
    tbl.string('state').notNullable()
    tbl.string('country').notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('guestAddress')
}
