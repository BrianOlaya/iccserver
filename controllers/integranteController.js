const Integrante = require("../models/Integrante");
const { validationResult } = require("express-validator");

exports.crearIntegrante = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  try {
    //CREANDO UN NUEVO INTEGRANTE
    const integrante = new Integrante(req.body);
    //GUARDANDO EL LIDER DEL INTEGRANTE
    integrante.lider = req.usuario.id;
    //GUARDANDO EL  INTEGRANTE
    integrante.save();
    res.json(integrante);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

//OBTIENE LOS INTEGRANTES DEL USUARUIO ACTUAL

exports.obtenerIntegrantes = async (req, res) => {
  try {
    const integrantes = await Integrante.find({ lider: req.usuario.id });
    res.json({ integrantes });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

//ACTUALIZAR INFORMACION DE  UN INTEGRANTE
exports.actualizarIntegrante = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
  //EXTRAYENDO LA INFORMACION DEL INTEGRANTE A ACTUALIZAR
  const { nombre, apellido, cedula, telefono, correo } = req.body;
  const integranteActualizado = {};

  if (nombre) {
    integranteActualizado.nombre = nombre;
  }
  if (apellido) {
    integranteActualizado.apellido = apellido;
  }
  if (cedula) {
    integranteActualizado.cedula = cedula;
  }
  if (telefono) {
    integranteActualizado.telefono = telefono;
  }
  if (correo) {
    integranteActualizado.correo = correo;
  }

  try {
    //REVISANDO ID
    let integrante = await Integrante.findById(req.params.id);

    // SI EXISTE EL INTEGRANTE
    if (!integrante) {
      return res.status(404).json({ msg: "Integrante no encontrado" });
    }
    // VERIFICAR EL LIDER DEL INTEGRANTE
    if (integrante.lider.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No autorizado" });
    }

    //ACTUALIZAR
    integrante = await Integrante.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: integranteActualizado },
      { new: true }
    );

    res.json({ integrante });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }
};
