import mongoose from 'mongoose'

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    address: { type: String, required: true },
    problem: { type: String, required: true }
},{timestamps:true})

const serviceModel = mongoose.model("servicedata",serviceSchema)

export default serviceModel;