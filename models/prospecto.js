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
    console.log(idProspecto);
    return knex
      .select(TABLE_COLUMNS_ALIAS.concat(["habilidades.nombre", "habilidades.descripcion"]))
      .from(`${TABLE} as p`)
      .join('habilidades_prospectos', 'habilidades_prospectos.prospectos_id_habilidad', '=', 'p.id_prospecto')
      .join('habilidades', 'habilidades.id_habilidad', '=', 'habilidades_prospectos.habilidades_id_habilidad')
      .where({ [TABLE_ID]: idProspecto })
      .catch(function(error) {
        // If we get here, that means that neither the 'Old Books' catalogues insert,
        // nor any of the books inserts will have taken place.
        console.error(error);
      });
}

module.exports = Prospecto;