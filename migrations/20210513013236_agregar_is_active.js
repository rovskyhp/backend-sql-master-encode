
exports.up = function (knex, Promise) {
	return knex.schema
	.table('empresas', function (table) {
		table.boolean('is_active').notNullable().defaultTo(true);
	})
	.table('prospectos', function (table) {
		table.boolean('is_active').notNullable().defaultTo(true);
	})
	.table('vacantes', function (table) {
		table.boolean('is_active').notNullable().defaultTo(true);
	});
};

exports.down = function(knex) {
	
};
