
exports.up = function(knex) {
    return knex.schema.createTable('habilidades', (table) => {
        table.increments('id_habilidad').primary();
        table.string('nombre', 255).notNullable();
        table.text('descripcion').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('habilidades');
};
