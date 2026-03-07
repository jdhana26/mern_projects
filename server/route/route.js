import express from 'express';
import { userdata, servicedata } from '../controllers/controller.js';
 


const route =express.Router()


route.post("/data",userdata)

//service data
route.post("/service",servicedata)


export default route


// http://localhost:5000/api/user/data

// http://localhost:5000/api/user/service