import Admin from "../models/modelAdmin.js";
import dataModel from "../models/model.js";
import serviceModel from "../models/modelService.js";
import bcrypt from 'bcrypt';

// Register User
export const registerUser = async(req,res)=>{
    try {
        const {name,mobile,email,password} = req.body 
        if (!name || !email || !mobile || !password){
            return res.status(400).json({msg:"all fields are required"})
        }

        // Check if user already exists
        const existingUser = await dataModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "User already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const addData= await dataModel.create({
            name,
            mobile,
            email,
            password: hashedPassword,
            role: 'user'
        })

        res.status(201).json({ msg: "User registered successfully", user: { id: addData._id, name: addData.name, email: addData.email, role: addData.role } });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error" });
    }
}

// Login User
export const loginUser = async(req,res)=>{
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ msg: "all fields are required" });
        }

        // 1. First check Admin collection
        const admin = await Admin.findOne({ email });
        if (admin) {
            const isMatch = await bcrypt.compare(password, admin.password);
            if (isMatch) {
                return res.status(200).json({ 
                    msg: "Admin Login successful", 
                    user: { id: admin._id, name: "Administrator", email: admin.email, role: "admin" } 
                });
            }
        }

        // 2. If not admin, check User collection
        const user = await dataModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        res.status(200).json({ 
            msg: "Login successful", 
            user: { id: user._id, name: user.name, email: user.email, role: user.role } 
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error" });
    }
}

// Submit Enquiry
export const submitEnquiry = async(req,res)=>{
    try {
        const {name,mobile,address,problem} = req.body 
        if (!name || !mobile  || !address || !problem){
            return res.status(400).json({msg:"all fields are required"})
        }

        const service = await serviceModel.create({name,mobile,address,problem})
        res.status(201).json({ msg: "Enquiry submitted successfully", service });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error" });
    }
}

// Admin: Get All Users
export const getAllUsers = async (req, res) => {
    try {
        const users = await dataModel.find().select('-password');
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error" });
    }
}

// Admin: Get All Enquiries
export const getAllEnquiries = async (req, res) => {
    try {
        const enquiries = await serviceModel.find();
        res.status(200).json(enquiries);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error" });
    }
}