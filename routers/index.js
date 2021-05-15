const express = require('express');
const router = express.Router();

router.use(require('./empresasRouter'));
router.use(require('./prospectosRouter'));
router.use(require('./habilidadesRouter'));

module.exports = router;