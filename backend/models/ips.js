import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ipsSchema = new Schema({
  nitips: { type: String, required: [true, "Nit Ips Obligatorio"] },
  nombreips: String,
  direccionips: String,
  telips: String,
  webips: String,
  contacto: String,
  telcontacto: String,
});

const ips = mongoose.model("ips", ipsSchema);
export default ips;
