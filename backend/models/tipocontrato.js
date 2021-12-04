import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const tipocontratoSchema = new Schema({
    codtipocontrato: {type: String, required: [true, 'Código Tipo Contrato']},
    nombretipocontrato: String
});

const tipocontrato=mongoose.model('tipocontrato',tipocontratoSchema)
export default tipocontrato;