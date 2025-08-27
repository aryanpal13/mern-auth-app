import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./Routes/authRoutes.js";
import userRouter from "./Routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 8080;
connectDB();


app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'https://mern-auth-app-teal.vercel.app',
  credentials: true,
}));

// API Endpoints
app.get('/', (req, res) => {
    res.send("Working");
});

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);


app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
});