
exports.up = function(knex, Promise) {
    return knex.schema.createTable('guestList', tbl=> {
        tbl.increments(),
        tbl.string('firstName').notNullable(),
        tbl.string('lastName').notNullable(),
        tbl.boolean('rsvp').defaultTo(false),
        tbl.boolean('rsvpMaybe').defaultTo(true),
        tbl.string('email').notNullable().unique(),
        tbl.string('userId').unsigned(),
        tbl.foreign('userId').references('users.id')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('guestList')
};
