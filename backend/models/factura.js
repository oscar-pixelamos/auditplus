import mongoose from "mongoose";

const Schema = mongoose.Schema;
const facturaSchema = new Schema({
  noradicacion: { type: String, required: [true, "Número de Radicación Obligatorio"] },
  nit: String,
  prefijo: String,
  nofactura: String,
  fechafactura: { type: Date, default: Date.now },
  valorfactura: Number,
  nivel: String,
  tipoid: String,
  idpaciente: String,
  nombrepaciente: String,
  estado: { type: String, default: "R" },
});

export default mongoose.model("factura", facturaSchema);
