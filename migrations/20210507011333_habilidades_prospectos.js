
exports.up = (knex, Promise) => {
	return knex.schema.createTable('habilidades_prospectos', table => {
		table
		.integer('habilidades_id_habilidad')
		.references('id_habilidad')
		.inTable('habilidades')
		table
		.integer('prospectos_id_habilidad')
		.references('id_prospecto')
		.inTable('prospectos')
		table
		.integer('calificacion').notNullable()
	})
	.catch(err => {
		console.error(err)
		throw err
	});
};

exports.down = (knex, Promise) => {
	return knex.schema
	.dropTableIfExists('habilidades_prospectos')
	.catch(err => {
	  console.error(err)
	  throw err
	})
};
