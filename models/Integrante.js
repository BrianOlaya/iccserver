const mongoose = require("mongoose");

const IntegranteSchema = mongoose.Schema({
  lider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
  },
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  apellido: {
    type: String,
    required: true,
    trim: true,
  },
  telefono: {
    type: Number,
    required: true,
    trim: true,
  },
  barrio: {
    type: String,
    trim: true,
  },
  estadocivil: {
    type: String,
    trim: true,
  },
  cedula: {
    type: Number,
    trim: true,
  },
  correo: {
    type: String,
    trim: true,
  },
  nacimiento: {
    type: Date,
    default: "",
  },
  registro: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Integrante", IntegranteSchema);

//estadocivil barrio
