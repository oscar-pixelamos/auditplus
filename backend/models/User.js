import mongoose from "mongoose";

const Schema = mongoose.Schema;
// Create Schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    dropDups: true,
  },
  type_id: {
    type: String,
    required: true,
  },
  id_number: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("user", userSchema);
