import express from 'express';
import { registerUser, loginUser, submitEnquiry, getAllUsers, getAllEnquiries } from '../controllers/controller.js';
import { authMiddleware, adminMiddleware } from '../middleware/authMiddleware.js';

const route = express.Router()

// Auth
route.post("/auth/register", registerUser)
route.post("/auth/login", loginUser)

// Enquiry
route.post("/enquiry", submitEnquiry)

// Admin (Protected)
route.get("/admin/users", authMiddleware, adminMiddleware, getAllUsers)
route.get("/admin/enquiries", authMiddleware, adminMiddleware, getAllEnquiries)


export default route