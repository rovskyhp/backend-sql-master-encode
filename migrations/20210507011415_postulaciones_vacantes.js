
exports.up = (knex, Promise) => {
	return knex.schema.createTable('postulaciones_vacantes', table => {
		table
		.integer('id_postulacion')
		.references('postulaciones_id_postulacion')
		.inTable('postulaciones')
		table
		.integer('vacantes_id_postulacion')
		.references('id_vacante')
		.inTable('vacantes')
	})
	.catch(err => {
		console.error(err)
		throw err
	});
};

exports.down = (knex, Promise) => {
	return knex.schema
	.dropTableIfExists('postulaciones_vacantes')
	.catch(err => {
	  console.error(err)
	  throw err
	})
};
