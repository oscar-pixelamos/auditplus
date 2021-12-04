import express from "express";
const router = express.Router();
// importar el modelo ips
import ips from "../models/ips.js";

// Agregar una ips

router.post("/nueva-ips", async (req, res) => {
  const body = req.body;

  try {
    const ipsDB = await ips.create(body);
    res.status(200).json(ipsDB);
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
router.get("/ips/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const ipsDB = await ips.findOne({ _id });
    res.json(ipsDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Get con todos los documentos
router.get("/ips", async (req, res) => {
  try {
    const ipsDb = await ips.find();
    res.json(ipsDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Delete eliminar una ips
router.delete("/ips/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const ipsDb = await ips.findByIdAndDelete({ _id });
    if (!ipsDb) {
      return res.status(400).json({
        mensaje: "No se encontró el id indicado",
        error,
      });
    }
    res.json(ipsDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Put actualizar una ips
router.put("/ips/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const ipsDb = await ips.findByIdAndUpdate(_id, body, { new: true });
    res.json(ipsDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

export default router;
