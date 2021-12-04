import express from "express";
const router = express.Router();
// importar el modelo cliente
import cliente from "../models/cliente.js";

// Agregar una cliente

router.post("/nuevo-cliente", async (req, res) => {
  const body = req.body;

  try {
    const clienteDB = await cliente.create(body);
    res.status(200).json(clienteDB);
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
router.get("/cliente/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const clienteDB = await cliente.findOne({ _id });
    res.json(clienteDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Get con todos los documentos
router.get("/cliente", async (req, res) => {
  try {
    const clienteDb = await cliente.find();
    res.json(clienteDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Delete eliminar una cliente
router.delete("/cliente/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const clienteDb = await cliente.findByIdAndDelete({ _id });
    if (!clienteDb) {
      return res.status(400).json({
        mensaje: "No se encontró el id indicado",
        error,
      });
    }
    res.json(clienteDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Put actualizar una cliente
router.put("/cliente/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const clienteDb = await cliente.findByIdAndUpdate(_id, body, { new: true });
    res.json(clienteDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

export default router;
