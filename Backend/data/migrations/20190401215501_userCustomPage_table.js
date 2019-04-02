
exports.up = function(knex, Promise) {
  return knex.schema.createTable('userSite'), tbl => {
    tbl.increments()
    tbl.integer('guestId').unsigned()
    tbl.foreign('guestId').references('guestList.id')
    tbl.string('siteImg')
    tbl.string('coupleNameSite').notNullable()
    tbl.string('meetingStory')
    tbl.string('proposal')
  }
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('userSite')
};
