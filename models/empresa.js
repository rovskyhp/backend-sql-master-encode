const knex = require('../config');
const createKnexModel = require('../utils/createKnexModel');

const TABLE = 'empresas';

const TABLE_COLUMNS = [
    'id_empresa',
    'nombre',
    'giro',
    'calle_numero',
    'estado_provincia',
    'codigo_postal',
    'pais',
    'created_at'
];

const TABLE_ID = 'id_empresa';

const Empresa = createKnexModel(knex, TABLE, TABLE_COLUMNS, TABLE_ID);

module.exports = Empresa;