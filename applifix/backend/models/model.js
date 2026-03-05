import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  
    name:String,
    mobile:Number,
    email:String,
    password:String


},{timestamps:true})

const dataModel = mongoose.model("userdata",dataSchema)

export default dataModel;

 
