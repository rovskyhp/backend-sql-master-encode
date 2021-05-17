
exports.up = (knex, Promise) => {
	return knex.schema
	.table('vacantes', function (table) {
        table.integer('id_empresa').notNullable();
        table.dropForeign('id_vacante');
        table.foreign('id_empresa')
		.references('id_empresa')
		.inTable('empresas');	})
};
exports.down = function(knex) {
};
