const express = require('express');
const router = express.Router();

const { ProspectosController } = require('../controllers');

// Create
router.post('/prospectos', ProspectosController.create);

// Read All
router.get('/prospectos', ProspectosController.findAll);

// // Read One
// router.get('/prospectos/:idProspecto', ProspectosController.findOneById);

// // Update One
// router.patch('/prospectos/:idProspecto', ProspectosController.updateOneById);

// // Delete One (borrado lógico)
// router.delete('/prospectos/:idProspecto', ProspectosController.deleteOneById);

// Destroy One (borrado físico)

module.exports = router;