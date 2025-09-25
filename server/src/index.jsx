import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes'
import connectBD from "../src/config/db"

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

const PORT = process.env.PORT

// Routes
app.use("/api/auth", authRoutes)

// Connect DB, and start server
connectBD();

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})