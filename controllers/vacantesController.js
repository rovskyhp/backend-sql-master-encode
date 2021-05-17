const { Vacante } = require('../models');

const create = (req, res) => {
    // const newVacante = req.body;
    const { idEmpresa } = req.params;

    let [...habilidades] = req.body.habilidades;
    const newVacante = {
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        salario: req.body.salario,
        tipo_de_trabajo: req.body.tipo_de_trabajo,
        estatus: req.body.estatus,
        id_empresa: idEmpresa,
    }
  
    // utilizando knex, insertar el objeto en la base datos
    return Vacante
    .createTrx(newVacante, 'id_vacante', 'vacantes_habilidades', habilidades, 'vacantes_id_habilidad')
    .then((resDB) => {
      return res.status(200).json({
        message: 'vacante created',
        prospecto: resDB,
      })
    })
    .catch((err) => {
      res.status(400).json({
        message: err,
      })
    })
  }
  
  const findAllByCompanyId = async (req, res) => {
    try {
        idEmpresa = req.body.idEmpresa;
      const response = await Vacante.find({idEmpresa:idEmpresa}); 
  
      return res.status(200).json({
        message: 'Successfully obtained list of vacantes',
        response,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error obtaining list of vacantes',
        error,
      });
    }
  }

  const findOneById = async (req, res) => {
    const { idVacante } = req.params;
  
    try {
      const response = await Vacante.findOneById(idVacante);
      if (response.length === 0) return res.status(404).json({ message: "provided vacante doesn't exist" });
      return res.status(200).json({
        message: 'Successfully obtained vacante by id',
        response,
      });
      
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        error,
      });
    }
  }

  module.exports = {
    create,
    findOneById,
    findAllByCompanyId,
  }