const { Prospecto,Habilidad_prospecto } = require('../models');


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
      const prospectoResultset = await Prospecto.findOneByWithSkills(idProspecto);
      console.log("prospectoResultset");
      console.log(prospectoResultset);
      const prospecto = {};
      prospectoResultset.forEach(row => {
          if ( !(row.id_prospecto in prospecto) ) {
              prospecto[row.id_prospecto] = {
                  id_prospecto: row.id_prospecto,
                  nombre: row.nombre,
                  apellido_paterno: row.apellido_paterno,
                  apellido_materno: row.apellido_materno,
                  salario: row.salario,
                  calle_numero: row.calle_numero,
                  estado_provincia: row.estado_provincia,
                  codigo_postal: row.codigo_postal,
                  pais: row.pais,
                  is_active: row.is_active,
                  created_at: row.created_at,
                  habilidades: []
              }
          }
      });
      const habilidades = await Habilidad_prospecto.findAllForProspect(idProspecto);
      habilidades.forEach(row => {
        console.log("row");
        console.log(row);
        prospecto[row.prospectos_id_habilidad].habilidades.push({
          id_habilidad: row.id_habilidad,
          nombre: row.nombre,
          descripcion: row.descripcion,
          calificacion: row.calificacion
        });
      });
      console.log("prospecto");
      console.log(prospecto);
      if (prospectoResultset.length === 0) return res.status(404).json({ message: "provided prospecto doesn't exist" });
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