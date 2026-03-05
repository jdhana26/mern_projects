import mongoose from 'mongoose'
    const serviceSchema = new mongoose.Schema({
  
    name:String,
    mobile:Number,
    address:String,
    problem:String


 },{timestamps:true})

const serviceModel = mongoose.model("servicedata",serviceSchema)


export default serviceModel;