exports.up = function(knex, Promise) {
  return knex.schema.createTable('customSite', tbl => {
    tbl.increments()
    tbl.string('userUrl').notNullable()
    tbl.string('story')
    tbl.integer('siteDesign')
    tbl.string('proposalStory')
    tbl
      .integer('userId')
      .unsigned()
      .notNullable()
    tbl.foreign('userId').references('users.id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('customSite')
}
