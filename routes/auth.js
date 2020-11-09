//RUTAS PARA AUTENTICAR USUARIOS
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

router.post(
  "/",

  authController.autenticarUsuario
);

router.get("/", auth, authController.usuarioAutenticado);

module.exports = router;
