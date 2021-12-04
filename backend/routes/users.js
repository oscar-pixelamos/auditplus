import express from "express";
const router = express.Router();

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Importamos los Models de Mongoose que vamos a usar
import User from "../models/User.js";

// Importamos los archivos para las validaciones de datos.
import { registerSchema, loginSchema } from "../validation/users.validation.js";

import secret_key from "../config/keys.js";

// POST Request - Registro de Usuarios
router.post("/register", async (req, res) => {
  try {
    const user_data = await registerSchema.validateAsync(req.body);
    let userExists = await User.findOne({ email: user_data.email });
    if (userExists) {
      return res.status(422).json({
        message: "Otro usuario con el mismo correo ha sido registrado previamente.",
      });
    }
    let newUser = new User(user_data);
    newUser.password = bcrypt.hashSync(user_data.password, 10);
    newUser.save((error, user) => {
      if (error) {
        return res.status(400).json({
          error: error,
        });
      }
      res.status(200).json({
        user: user,
        message: "Usuario registrado exitosamente.",
      });
    });
  } catch (error) {
    if (error.isJoi === true) {
      res.status(422).send({
        message: error.message,
      });
    } else {
      res.status(500).send({
        message: error.message,
      });
    }
  }
});

// POST Request - Inicio de Sesión de Usuarios
router.post("/login", async (req, res) => {
  // Form validation
  try {
    const user_data = await loginSchema.validateAsync(req.body);

    console.log(user_data);
    //Find user by email
    let user = await User.findOne({ email: user_data.email });
    if (user) {
      bcrypt.compare(user_data.password, user.password).then((isMatch) => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user._id,
            name: user.name,
          };
          // Sign token
          jwt.sign(
            payload,
            secret_key,
            {
              expiresIn: 31556926, // 1 year in seconds
            },
            (error, token) => {
              res.status(200).json({
                success: true,
                token: "Bearer " + token,
                user: user,
              });
            }
          );
        } else {
          return res.status(422).json({
            message: "Usuario o contraseña incorrectos.",
          });
        }
      });
    } else {
      return res.status(422).json({
        message: "Usuario o contraseña incorrectos.",
      });
    }
  } catch (error) {
    if (error.isJoi === true) {
      res.status(422).send({
        message: error.message,
      });
    } else {
      res.status(500).send({
        message: error.message,
      });
    }
  }
});
export default router;
