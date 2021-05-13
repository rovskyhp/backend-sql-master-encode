const { Empresa } = require('../models');

const create = (req, res) => {
    // const newEmpresa = req.body;
    const newEmpresa = {
        nombre: req.body.nombre,
        giro: req.body.giro,
        calle_numero: req.body.calle_numero,
        estado_provincia: req.body.estado_provincia,
        codigo_postal: req.body.codigo_postal,
        pais: req.body.pais
    }
  
    // utilizando knex, insertar el objeto en la base datos
    return Empresa
      .create(newEmpresa)
      .then((resDB) => {
        return res.status(200).json({
          message: 'empresa created',
          empresa: resDB,
        })
      })
      .catch((err) => {
        res.status(400).json({
          message: err,
        })
      })
  }
  
  const findAll = async (req, res) => {
    try {
      const response = await Empresa.findAll(); 
  
      return res.status(200).json({
        message: 'Successfully obtained list of empresas',
        response,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error obtaining list of empresas',
        error,
      });
    }
  }

  const findOneById = async (req, res) => {
    const { idEmpresa } = req.params;
  
    try {
      const response = await Empresa.findOneById(idEmpresa);
      if (response.length === 0) return res.status(404).json({ message: "provided company doesn't exist" });
      return res.status(200).json({
        message: 'Successfully obtained company by id',
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
    findAll,
    findOneById,
  }