const Nuevo = require("../models/Nuevo");
const { validationResult } = require("express-validator");
const { transporter, welcome } = require("../utils/correo");

exports.crearNuevo = async (req, res) => {
  // const errores = validationResult(req);
  // if (!errores.isEmpty()) {
  //     return res.status(400).json({ errores: errores.array() })
  // }

  try {
    //CREANDO UN NUEVO
    const nuevo = new Nuevo(req.body);
    //GUARDANDO EL  INTEGRANTE
    nuevo.save();
    res.json(nuevo);

    const correo = {
      from:
        '"ICC Renacer para las naciones" <iccrenacerparalasnaciones43@aol.com>',
      to: nuevo.correo,
      subject: "Bienvenido!",
      html: welcome(nuevo.nombre),
    };

    await transporter.sendMail(correo, (error) => {
      console.log(error);
    });
  } catch (error) {
     res.status(500).send("Hubo un error");
  }
};

//iccrenacerparalasnaciones43  ogziualtzanvjaxx
//Jesucristo123
