const Devocional = require("../models/Devocional");
const { validationResult } = require("express-validator");

exports.crearDevocional = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  try {
    //CREANDO UN NUEVO DEVOCIONAL
    const devocional = new Devocional(req.body);
    //GUARDANDO EL ID AUTOR DEL DEVOCIONAL
    devocional.autorId = req.usuario.id;
    //GUARDANDO EL  INTEGRANTE
    devocional.save();
    res.json(devocional);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

//OBTIENE LOS INTEGRANTES DEL USUARUIO ACTUAL

exports.obtenerDevocionales = async (req, res) => {
  try {
    const devocionales = await Devocional.find();
    res.json({ devocionales });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

//ACTUALIZAR INFORMACION DE  UN DEVOCIONAL
exports.actualizarDevocional = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
  //EXTRAYENDO LA INFORMACION DEL DEVOCIONAL A ACTUALIZAR
  const { titulo, cita, contenido, autor } = req.body;
  const devocionalActualizado = {};

  if (titulo) {
    devocionalActualizado.titulo = titulo;
  }
  if (cita) {
    devocionalActualizado.cita = cita;
  }
  if (contenido) {
    devocionalActualizado.contenido = contenido;
  }
  if (autor) {
    devocionalActualizado.autor = autor;
  }

  try {
    ///REVISANDO ID
    let devocional = await Devocional.findById(req.params.id);

    // SI EXISTE EL DEVOCIONAL
    if (!devocional) {
      return res.status(404).json({ msg: "Devocional no encontrado" });
    }
    // VERIFICAR EL AUTOR DEL INTEGRANTE
    if (devocional.autor.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No autorizado" });
    }

    //ACTUALIZAR
    devocional = await Devocional.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: devocionalActualizado },
      { new: true }
    );

    res.json({ devocional });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }
};
