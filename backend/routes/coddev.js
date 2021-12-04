import express from "express";
const router = express.Router();
// importar el modelo coddev
import coddev from "../models/coddev.js";

// Agregar una coddev

router.post("/nuevo-coddev", async (req, res) => {
  const body = req.body;

  try {
    const coddevDB = await coddev.create(body);
    res.status(200).json(coddevDB);
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
router.get("/coddev/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const coddevDB = await coddev.findOne({ _id });
    res.json(coddevDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Get con todos los documentos
router.get("/coddev", async (req, res) => {
  try {
    const coddevDb = await coddev.find();
    res.json(coddevDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Delete eliminar una coddev
router.delete("/coddev/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const coddevDb = await coddev.findByIdAndDelete({ _id });
    if (!coddevDb) {
      return res.status(400).json({
        mensaje: "No se encontró el id indicado",
        error,
      });
    }
    res.json(coddevDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Put actualizar una coddev
router.put("/coddev/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const coddevDb = await coddev.findByIdAndUpdate(_id, body, { new: true });
    res.json(coddevDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

export default router;
