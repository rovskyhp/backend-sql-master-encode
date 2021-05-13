const express = require('express');
const router = express.Router();

const { EmpresasController } = require('../controllers');

// Create
router.post('/empresas', EmpresasController.create);

// Read All
router.get('/empresas', EmpresasController.findAll);

// // Read One
router.get('/empresas/:idEmpresa', EmpresasController.findOneById);

// // Update One
// router.patch('/empresas/:idEmpresa', EmpresasController.updateOneById);

// // Delete One (borrado lógico)
// router.delete('/empresas/:idEmpresa', EmpresasController.deleteOneById);

// Destroy One (borrado físico)

module.exports = router;