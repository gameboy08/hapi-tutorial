
exports.up = function(knex) {
  return knex.schema.createTable('shops', (table) => {
      table.increments();
      table.string('name');
      table.text('thumb_url');
      table.datetime('created_at');
      table.datetime('updated_at');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('shops');
};
