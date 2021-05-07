
exports.up = (knex, Promise) => {
    return knex.schema.createTable('prospectos', (table) => {
        table.increments('id_prospecto').primary();
        table.string('nombre', 255).notNullable();
        table.string('apellido_paterno', 255).notNullable();
        table.string('apellido_materno', 255).notNullable();
        table.decimal('salario',14,2);
        table.string('calle_numero', 255).notNullable();
        table.string('estado_provincia', 255).notNullable();
        table.string('codigo_postal', 255).notNullable();
        table.string('pais', 255).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTableIfExists('prospectos');
};
