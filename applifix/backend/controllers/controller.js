import dataModel from "../models/model.js"
import serviceModel from "../models/modelService.js"

export const userdata = async(req,res)=>{

  
try {

    const {name,mobile,email,password} = req.body 
    if (!name || !email || !mobile || !password){


    return res.status(400).json({msg:"all fields are required"})
}


    const addData= await dataModel.create({name,mobile,email,password})



} catch (error) {

    console.log(error);
    
    
}
}

 

export const servicedata = async(req,res)=>{

  
try {

    const {name,mobile,address,problem} = req.body 
    if (!name || !mobile  || !address || !problem){


    return res.status(400).json({msg:"all fields are required"})
}


    const service = await serviceModel.create({name,mobile,address,problem})



} catch (error) {

    console.log(error);
    
    
}




    
    

}