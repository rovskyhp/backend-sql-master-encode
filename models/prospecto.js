const knex = require('../config');
const createKnexModel = require('../utils/createKnexModel');
const TABLE = 'prospectos';

const TABLE_COLUMNS = [
    'id_prospecto',
    'nombre',
    'apellido_paterno',
    'apellido_materno',
    'salario',
    'calle_numero',
    'estado_provincia',
    'codigo_postal',
    'pais',
    'is_active',
    'created_at'
];

const TABLE_COLUMNS_ALIAS = [
    'p.id_prospecto',
    'p.nombre',
    'p.apellido_paterno',
    'p.apellido_materno',
    'p.salario',
    'p.calle_numero',
    'p.estado_provincia',
    'p.codigo_postal',
    'p.pais',
    'p.is_active',
    'p.created_at'
];

const TABLE_ID = 'id_prospecto';

const Prospecto = createKnexModel(knex, TABLE, TABLE_COLUMNS, TABLE_ID);


Prospecto.findOneByWithSkills = (idProspecto) => {
    console.log("findOneByWithSkills");
    
    let prospecto = knex
    .select(TABLE_COLUMNS_ALIAS)
    .from(`${TABLE} as p`)
    .where({ [TABLE_ID]: idProspecto })
    .catch(function(error) {
      // If we get here, that means that neither the 'Old Books' catalogues insert,
      // nor any of the books inserts will have taken place.
      console.error(error);
    });

    

    return prospecto;
}

module.exports = Prospecto;