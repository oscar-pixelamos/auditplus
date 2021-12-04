import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const rolSchema = new Schema({
    codrol: {type: String, required: [true, 'Código Rol']},
    nombrerol: String
});

const rol=mongoose.model('rol',rolSchema)
export default rol;