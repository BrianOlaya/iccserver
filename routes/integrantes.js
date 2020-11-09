const express = require("express");
const router = express.Router();
const integranteController = require("../controllers/integranteController");
const auth = require("../middleware/auth");
const { check } = require("express-validator"); //VALIDACION, LA FUNCION CHECK RECIBE: 1. EL CAMPO VALIDAR, 2 . EL MENSAJE DE VALIDACION , 3. LAS REGLAS DE VALIDACION

router.post(
  "/",

  auth,
  [
    check("nombre", "El nombre del integrante es obligatorio").not().isEmpty(),
    check("apellido", "El apellido del integrante es obligatorio")
      .not()
      .isEmpty(),
    check("telefono", "El telefono del integrante es obligatorio")
      .not()
      .isEmpty(),
  ],
  integranteController.crearIntegrante
);
//OBTENER INTEGRANTES
router.get(
  "/",

  auth,
  integranteController.obtenerIntegrantes
);

//ACTUALIZAR INFO INTEGRANTES VIA ID
router.put(
  "/:id",
  auth,
  [
    check("nombre", "El nombre del integrante es obligatorio").not().isEmpty(),
    check("apellido", "El apellido del integrante es obligatorio")
      .not()
      .isEmpty(),
    check("telefono", "El telefono del integrante es obligatorio")
      .not()
      .isEmpty(),
  ],
  integranteController.actualizarIntegrante
);

module.exports = router;
