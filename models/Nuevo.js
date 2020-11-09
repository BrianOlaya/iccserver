const mongoose = require("mongoose");

const NuevoSchema = mongoose.Schema({
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
  ciudad: {
    type: String,
    trim: true,
  },
  barrio: {
    type: String,
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

module.exports = mongoose.model("Nuevo", NuevoSchema);
