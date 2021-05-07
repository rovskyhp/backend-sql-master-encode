
exports.up = (knex, Promise) => {
	return knex.schema.createTable('postulaciones', (table) => {
		table.increments('postulaciones_id_postulacion').primary()
		table
		.integer('id_prospecto')
		.references('id_prospecto')
		.inTable('prospectos')
		table
		.integer('id_vacante')
		.references('id_vacante')
		.inTable('vacantes')
		table.unique(['id_prospecto','id_vacante' ]);
	});
};

exports.down = (knex, Promise) => {
	return knex.schema
	.dropTableIfExists('postulaciones_vacantes')
	.dropTableIfExists('postulaciones')
	.catch(err => {
	  console.error(err)
	  throw err
	})
};
