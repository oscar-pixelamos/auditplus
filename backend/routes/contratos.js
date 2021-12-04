import express from "express";
const router = express.Router();
// importar el modelo contrato
import contrato from "../models/contrato.js";

// Agregar una contrato

router.post("/nuevo-contrato", async (req, res) => {
  const body = req.body;

  try {
    const contratoDB = await contrato.create(body);
    res.status(200).json(contratoDB);
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
router.get("/contrato/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const contratoDB = await contrato.findOne({ _id });
    res.json(contratoDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Get con todos los documentos
router.get("/contrato", async (req, res) => {
  try {
    const contratoDb = await contrato.find();
    res.json(contratoDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Delete eliminar una contrato
router.delete("/contrato/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const contratoDb = await contrato.findByIdAndDelete({ _id });
    if (!contratoDb) {
      return res.status(400).json({
        mensaje: "No se encontró el id indicado",
        error,
      });
    }
    res.json(contratoDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Put actualizar una contrato
router.put("/contrato/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const contratoDb = await contrato.findByIdAndUpdate(_id, body, { new: true });
    res.json(contratoDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

export default router;
