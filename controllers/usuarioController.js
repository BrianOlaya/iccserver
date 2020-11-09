const Usuario = require("../models/Usuario");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");

exports.crearUsuario = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { nombre, contraseña } = req.body;

  try {
    let usuario = await Usuario.findOne({ nombre });
    if (usuario) {
      return res.status(400).json({ msg: "El usuario ya existe" });
    }
    usuario = new Usuario(req.body);

    // CODIGO PARA HASHEAR CONTRASEÑA 
    const salt = await bcryptjs.genSalt(10);
    usuario.contraseña = await bcryptjs.hash(contraseña, salt);

    await usuario.save();

    res.send("usuario creado");
    //CREANDO EL JWT
    const payload = {
      usuario: {
        id: usuario.id,
      },
    };

    jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: 10800,
      },
      (error, token) => {
        if (error) throw error;

        res.json({ token: token });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};
