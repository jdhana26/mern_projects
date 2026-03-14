import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' }
},{timestamps:true})

const dataModel = mongoose.model("userdata",dataSchema)

export default dataModel;
