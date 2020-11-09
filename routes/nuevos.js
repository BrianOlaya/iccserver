const express = require("express");
const router = express.Router();
const nuevoController = require("../controllers/nuevoController");

router.post(
  "/",

  nuevoController.crearNuevo
);

module.exports = router;
