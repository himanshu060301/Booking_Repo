import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';
import cookieParser from 'cookie-parser';

const PORT=process.env.PORT || 8800;

const app=express();
dotenv.config();

const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected");
})

//middlewares
app.use(cookieParser());
app.use(express.json()); 

app.use("/server/auth", authRoute);
app.use("/server/users", usersRoute);
app.use("/server/hotels", hotelsRoute);
app.use("/server/rooms", roomsRoute);

app.use((err,req,res,next)=>{
    const errorStatus=err.status || 500;
    const errorMessage=err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    });
})

app.listen(PORT,()=>{
    connect()
    console.log("Connected to port 8800");
});