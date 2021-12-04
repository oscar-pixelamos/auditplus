import mongoose from "mongoose";
const Schema = mongoose.Schema;
const contratoSchema = new Schema({
  nrocontrato: { type: String, required: [true, "Número Contrato Obligatorio"] },
  fechainicio: { type: Date, default: Date.now },
  fechafinal: { type: Date, default: Date.now },
  nivel: String,
  valorcontrato: Number,
  nitips: String,
  tipocontrato: String,
});

const contrato = mongoose.model("contrato", contratoSchema);
export default contrato;
