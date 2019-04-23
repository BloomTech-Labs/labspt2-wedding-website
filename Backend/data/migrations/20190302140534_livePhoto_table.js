exports.up = function(knex, Promise) {
  return knex.schema.createTable('livePhotos', tbl => {
    tbl.increments()
    tbl
      .string('imgURL')
      .notNullable()
      .unique()
    tbl.string('name').notNullable()
    tbl.string('caption')
    tbl.integer('user_id').unsigned()
    tbl.foreign('user_id').references('users.id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('livePhotos')
}
