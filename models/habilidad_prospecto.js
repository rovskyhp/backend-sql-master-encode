const knex = require('../config');
const createKnexModel = require('../utils/createKnexModel');

const TABLE = 'habilidades_prospectos';

const TABLE_COLUMNS = [
    'habilidades_id_habilidad',
    'prospectos_id_habilidad',
    'calificacion'
];

const TABLE_COLUMNS_RELATED = [
  'h.id_habilidad',
  'h.nombre',
  'h.descripcion',
  'hp.calificacion',
  'hp.prospectos_id_habilidad'
];

const TABLE_ID = 'prospectos_id_habilidad';

const Habilidad_prospecto = createKnexModel(knex, TABLE, TABLE_COLUMNS, TABLE_ID);

Habilidad_prospecto.findAllForProspect = (idProspecto) => {
    return knex
      .select(TABLE_COLUMNS_RELATED)
      .from(`${TABLE} as hp`)
      .join('habilidades as h', 'h.id_habilidad', '=', 'hp.habilidades_id_habilidad')
      .where({ 'hp.prospectos_id_habilidad': idProspecto })
      .catch(function(error) {
        // If we get here, that means that neither the 'Old Books' catalogues insert,
        // nor any of the books inserts will have taken place.
        console.error(error);
      });
    }
module.exports = Habilidad_prospecto;