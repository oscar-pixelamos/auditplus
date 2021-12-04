import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const clienteSchema = new Schema({
    nitcliente: {type: String, required: [true, 'Nit cliente obligatorio']},
    nombrecliente: String,
    direccion: String,
    telefono: String,
    email: String,
    web: String
});

const cliente=mongoose.model('cliente',clienteSchema)
export default cliente;