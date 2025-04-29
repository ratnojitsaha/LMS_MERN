import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
import courseRoute from "./routes/course.route.js";
import mediaRoute from "./routes/media.route.js";
import purchaseRoute from "./routes/purchaseCourse.route.js";
import courseProgressRoute from "./routes/courseProgress.route.js";
const serverless = require('serverless-http');

dotenv.config({});

// call database connection here
connectDB();
const app = express();

const PORT = process.env.PORT || 8080;

const FRONT_URL = process.env.FRONTEND_URL || "http://localhost:5173";

// default middleware
app.use(express.json());
app.use(cookieParser());

// app.use(cors({
//     origin:"http://localhost:5173",
//     credentials:true
// }));
app.use(cors({
     origin: FRONT_URL,
    // origin : "*",
    credentials:true
}));


// const corsOptions = {
//     origin: 'https://lms-mern-k94l.vercel.app',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials : true
//   };
  
// app.use(cors(corsOptions));
 
// apis
app.use("/api/v1/media", mediaRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/purchase", purchaseRoute);
app.use("/api/v1/progress", courseProgressRoute);
 
 
// app.listen(PORT, () => {
//     console.log(`Server listen at port ${PORT}`);
// })
export const handler = serverless(app);


