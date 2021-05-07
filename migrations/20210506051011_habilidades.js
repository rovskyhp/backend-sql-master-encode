
exports.up = (knex, Promise) => {
    return knex.schema.createTable('habilidades', (table) => {
        table.increments('id_habilidad').primary();
        table.string('nombre', 255).notNullable();
        table.text('descripcion').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('habilidades');
};
