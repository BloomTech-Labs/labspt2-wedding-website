exports.up = function(knex, Promise) {
  return knex.schema.createTable('usersPhotos', tbl => {
    tbl.increments()
    tbl.string('imgUrl').notNullable()
    tbl.integer('userId').unsigned()
    tbl.foreign('userId').references('users.id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('userPhotos')
}
