
exports.up = function(knex) {
    return knex.schema.createTable('empresas', (table) => {
        table.increments('id_empresa').primary();
        table.string('nombre', 255).notNullable();
        table.string('giro', 255).notNullable();
        table.string('calle_numero', 255).notNullable();
        table.string('estado_provincia', 255).notNullable();
        table.string('codigo_postal', 255).notNullable();
        table.string('pais', 255).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('empresas');
};
