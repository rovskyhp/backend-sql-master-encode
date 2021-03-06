const { Prospecto } = require('../models');


const create = (req, res) => {
    let [...habilidades] = req.body.habilidades;
    // const newProspectop = req.body;
    const newProspecto = {
        nombre: req.body.nombre,
        apellido_paterno: req.body.apellido_paterno,
        apellido_materno: req.body.apellido_materno,
        salario: req.body.salario,
        calle_numero: req.body.calle_numero,
        estado_provincia: req.body.estado_provincia,
        codigo_postal: req.body.codigo_postal,
        pais: req.body.pais
    }
  
    // utilizando knex, insertar el objeto en la base datos
    return Prospecto
      .createTrx(newProspecto, 'id_prospecto', 'habilidades_prospectos', habilidades, 'prospectos_id_habilidad')
      .then((resDB) => {
        return res.status(200).json({
          message: 'prospecto created',
          prospecto: resDB,
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
      const response = await Prospecto.findAll(); 
  
      return res.status(200).json({
        message: 'Successfully obtained list of prospectos',
        response,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error obtaining list of prospectos',
        error,
      });
    }
  }

  const findOneById = async (req, res) => {
    const { idProspecto } = req.params;
  
    try {
      const prospecto = await Prospecto.findOneByWithSkillsKnexNest(idProspecto);
      console.log("prospecto");
      console.log(prospecto);
      if (prospecto === null) return res.status(404).json({ message: "provided prospecto doesn't exist" });
      return res.status(200).json({
        message: 'Successfully obtained prospecto by id',
        prospecto, 
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