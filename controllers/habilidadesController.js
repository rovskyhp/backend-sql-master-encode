const { Habilidad } = require('../models');

const create = (req, res) => {
    // const newHabilidad = req.body;
    const newHabilidad = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    }
  
    // utilizando knex, insertar el objeto en la base datos
    return Habilidad
      .create(newHabilidad)
      .then((resDB) => {
        return res.status(200).json({
          message: 'habilidad created',
          habilidad: resDB,
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
      const response = await Habilidad.findAll(); 
  
      return res.status(200).json({
        message: 'Successfully obtained list of habilidades',
        response,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error obtaining list of habilidades',
        error,
      });
    }
  }

  const findOneById = async (req, res) => {
    const { idHabilidad } = req.params;
  
    try {
      const response = await Habilidad.findOneById(idHabilidad);
      if (response.length === 0) return res.status(404).json({ message: "provided habilities doesn't exist" });
      return res.status(200).json({
        message: 'Successfully obtained habilities by id',
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