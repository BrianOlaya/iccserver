const mongoose = require("mongoose");

const DevocionalSchema = mongoose.Schema({
  autorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
  },
  titulo: {
    type: String,
    required: true,
    trim: true,
  },
  cita: {
    type: String,
    required: true,
    trim: true,
  },
  contenido: {
    type: String,
    required: true,
    trim: true,
  },
  autor: {
    type: String,
    required: true,
    trim: true,
  },
  registro: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Devocional", DevocionalSchema);

//estadocivil barrio
