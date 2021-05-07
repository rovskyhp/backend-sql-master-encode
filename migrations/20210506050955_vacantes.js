
exports.up = function(knex) {
    return knex.schema.createTable('vacantes', (table) => {
        table.increments('id_vacante').primary();
        table.string('titulo', 255).notNullable();
        table.text('descripcion').notNullable();
        table.decimal('salario',14,2);
        table.string('tipo_de_trabajo', 255).notNullable();
        table.boolean('estatus').notNullable().defaultTo(true);
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
  
};
