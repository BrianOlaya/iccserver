const express = require("express");
const router = express.Router();
const devocionalController = require("../controllers/devocionalController");
const auth = require("../middleware/auth");
const { check } = require("express-validator"); //VALIDACION, LA FUNCION CHECK RECIBE: 1. EL CAMPO VALIDAR, 2 . EL MENSAJE DE VALIDACION , 3. LAS REGLAS DE VALIDACION

router.post(
  "/",

  auth,
  [
    check("titulo", "El titulo es obligatorio").not().isEmpty(),
    check("cita", "La cita es obligatorio").not().isEmpty(),
    check("contenido", "El contenido  es obligatorio").not().isEmpty(),
    check("autor", "El autor  es obligatorio").not().isEmpty(),
  ],
  devocionalController.crearDevocional
);
//OBTENER DEVOCIONALES
router.get(
  "/",

  devocionalController.obtenerDevocionales
);

//OBTENER DEVOCIONAL SELECT
router.get(
  "/:id",

  devocionalController.obtenerDevocionalSelect
);

//ACTUALIZAR INFO DEVOCIONAL VIA ID
router.put(
  "/:id",
  auth,
  [
    check("titulo", "El titulo es obligatorio").not().isEmpty(),
    check("cita", "La cita es obligatorio").not().isEmpty(),
    check("contenido", "El contenido  es obligatorio").not().isEmpty(),
    check("autor", "El autor  es obligatorio").not().isEmpty(),
  ],
  devocionalController.actualizarDevocional
);
module.exports = router;
