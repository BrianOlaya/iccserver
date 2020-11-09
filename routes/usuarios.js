//RUTAS PARA CREAR USUARIOS

const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");
const { check } = require("express-validator");

router.post(
  "/",
  [
    check("nombre", "el nombre es obligatorio").not().isEmpty(),
    check("contraseña", "la contraseña es obligatoria").not().isEmpty(),
  ],
  usuarioController.crearUsuario
);

module.exports = router;
