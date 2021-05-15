const knex = require('../config');
const createKnexModel = require('../utils/createKnexModel');

const TABLE = 'habilidades';

const TABLE_COLUMNS = [
    'id_habilidad',
    'nombre',
    'descripcion',
    'created_at'
];

const TABLE_ID = 'id_habilidad';

const Habilidad = createKnexModel(knex, TABLE, TABLE_COLUMNS, TABLE_ID);

module.exports = Habilidad;