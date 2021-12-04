import express from "express";
const router = express.Router();
// importar el modelo tipocontrato
import tipocontrato from "../models/tipocontrato.js";

// Agregar una tipocontrato

router.post("/nuevo-tipocontrato", async (req, res) => {
  const body = req.body;

  try {
    const tipocontratoDB = await tipocontrato.create(body);
    res.status(200).json(tipocontratoDB);
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
router.get("/tipocontrato/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const tipocontratoDB = await tipocontrato.findOne({ _id });
    res.json(tipocontratoDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Get con todos los documentos
router.get("/tipocontrato", async (req, res) => {
  try {
    const tipocontratoDb = await tipocontrato.find();
    res.json(tipocontratoDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Delete eliminar una tipocontrato
router.delete("/tipocontrato/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const tipocontratoDb = await tipocontrato.findByIdAndDelete({ _id });
    if (!tipocontratoDb) {
      return res.status(400).json({
        mensaje: "No se encontró el id indicado",
        error,
      });
    }
    res.json(tipocontratoDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Put actualizar una tipocontrato
router.put("/tipocontrato/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const tipocontratoDb = await tipocontrato.findByIdAndUpdate(_id, body, { new: true });
    res.json(tipocontratoDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

export default router;
