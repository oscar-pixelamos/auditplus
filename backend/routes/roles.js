import express from "express";
const router = express.Router();
// importar el modelo rol
import rol from "../models/rol.js";

// Agregar una rol

router.post("/nuevo-rol", async (req, res) => {
  const body = req.body;

  try {
    const rolDB = await rol.create(body);
    res.status(200).json(rolDB);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});
// Exportamos la configuración de express app

// Get con parámetros
router.get("/rol/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const rolDB = await rol.findOne({ _id });
    res.json(rolDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Get con todos los documentos
router.get("/rol", async (req, res) => {
  try {
    const rolDb = await rol.find();
    res.json(rolDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Delete eliminar una rol
router.delete("/rol/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const rolDb = await rol.findByIdAndDelete({ _id });
    if (!rolDb) {
      return res.status(400).json({
        mensaje: "No se encontró el id indicado",
        error,
      });
    }
    res.json(rolDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Put actualizar una rol
router.put("/rol/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const rolDb = await rol.findByIdAndUpdate(_id, body, { new: true });
    res.json(rolDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

export default router;
