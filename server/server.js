import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js';
import route from './route/route.js';
import seedAdmin from './config/adminInit.js';


dotenv.config()

connectDB()
seedAdmin()

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', route)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server connected successfully http://localhost:${PORT}`)
})

// http://localhost:5000/api/user/