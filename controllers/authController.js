const Usuario = require("../models/Usuario");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");

exports.autenticarUsuario = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { nombre, contraseña } = req.body;
  try {
    let usuario = await Usuario.findOne({ nombre });
    if (!usuario) {
      return res.status(400).json({ msg: "el usuario no existe" });
    }
    const contraseñaCorrecta = await bcryptjs.compare(
      contraseña,
      usuario.contraseña
    );
    if (!contraseñaCorrecta) {
      return res.status(400).json({ msg: "contraseña incorrecta" });
    }

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
  }
};

//OBTIEN EL USUARIO AUTENTICADO

exports.usuarioAutenticado = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.usuario.id); //selected('-contraseña');
    res.json({ usuario });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hubo un error" });
  }
};
