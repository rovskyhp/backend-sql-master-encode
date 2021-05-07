
exports.up = (knex, Promise) => {
	return knex.schema.createTable('vacantes_habilidades', table => {
		table
		.integer('habilidades_id_habilidad')
		.references('id_habilidad')
		.inTable('habilidades')
		table
		.integer('vacantes_id_habilidad')
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
	.dropTableIfExists('vacantes_habilidades')
	.catch(err => {
	  console.error(err)
	  throw err
	})
};
