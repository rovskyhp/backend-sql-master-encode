const knex = require('../config');
var NestHydrationJS = require('nesthydrationjs')();
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

const TABLE_COLUMNS_RELATED_HABILITIES = [
    'p.id_prospecto as _idprospecto',
    'p.nombre as _nombre',
    'p.apellido_paterno as _apellidopaterno',
    'p.apellido_materno as _apellidomaterno',
    'p.salario as _salario',
    'p.calle_numero as _callenumero',
    'p.estado_provincia as _estadoprovincia',
    'p.codigo_postal as _codigopostal',
    'p.pais as _pais',
    'p.is_active as _isactive',
    'p.created_at as _createdat',
    'h.nombre as _habilidades__nombre',
    'h.descripcion as _habilidades__descripcion',
    'hp.calificacion as _habilidades__calificacion'
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

Prospecto.findOneByWithSkillsKnexNest = (idProspecto) => {
    console.log("findOneByWithSkillsKnexNest");
    
    try {
        var sql = knex
    .select(
        TABLE_COLUMNS_RELATED_HABILITIES
    )
    .from('prospectos as p')
    .leftJoin('habilidades_prospectos as hp', 'hp.prospectos_id_habilidad', 'p.id_prospecto')
    .leftJoin('habilidades as h', 'h.id_habilidad', 'hp.habilidades_id_habilidad')
    .where({ [TABLE_ID]: idProspecto })
    .then(NestHydrationJS.nest)
    .catch(function(error) {
      // If we get here, that means that neither the 'Old Books' catalogues insert,
      // nor any of the books inserts will have taken place.
      console.error(error);
    });

    return sql;
    } catch (error) {
        console.error(error);

    }
}

module.exports = Prospecto;