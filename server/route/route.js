import express from 'express';
import { registerUser, loginUser, submitEnquiry, getAllUsers, getAllEnquiries } from '../controllers/controller.js';

const route = express.Router()

// Auth
route.post("/auth/register", registerUser)
route.post("/auth/login", loginUser)

// Enquiry
route.post("/enquiry", submitEnquiry)

// Admin
route.get("/admin/users", getAllUsers)
route.get("/admin/enquiries", getAllEnquiries)

export default route