const knex = require('../config');
const createKnexModel = require('../utils/createKnexModel');

const TABLE = 'vacantes';

const TABLE_COLUMNS = [
    'id_vacante',
    'titulo',
    'descripcion',
    'salario',
    'tipo_de_trabajo',
    'estatus',
    'created_at'
];

const TABLE_ID = 'id_vacante';

const Vacante = createKnexModel(knex, TABLE, TABLE_COLUMNS, TABLE_ID);

module.exports = Vacante;