const express = require('express');
const router = express.Router();

router.use(require('./empresasRouter'));
router.use(require('./prospectosRouter'));

module.exports = router;