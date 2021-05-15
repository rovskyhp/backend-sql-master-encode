const express = require('express');
const router = express.Router();

const { HabilidadesController } = require('../controllers');

// Create
router.post('/habilidades', HabilidadesController.create);

// Read All
router.get('/habilidades', HabilidadesController.findAll);

// // Read One
router.get('/habilidades/:idHabilidad', HabilidadesController.findOneById);

// // Update One
// router.patch('/habilidades/:idEmpresa', HabilidadesController.updateOneById);

// // Delete One (borrado lógico)
// router.delete('/habilidades/:idEmpresa', HabilidadesController.deleteOneById);

// Destroy One (borrado físico)

module.exports = router;