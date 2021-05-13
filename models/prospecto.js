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

const TABLE_ID = 'id_prospecto';

const Prospecto = createKnexModel(knex, TABLE, TABLE_COLUMNS, TABLE_ID);

module.exports = Prospecto;