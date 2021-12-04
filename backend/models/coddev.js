import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const coddevSchema = new Schema({
    coddevolucion: {type: String, required: [true, 'Código Devolución obligatorio']},
    nombredevolucion: String
});

const coddev=mongoose.model('coddev',coddevSchema)
export default coddev;