

import 'reflect-metadata';
import express from "express"
import cors from "cors"

import { connectToDatabase } from "./config/mongo"
import { attendanceRouter } from "./routes/attendance.router";
const server = express()
connectToDatabase()
    .then(() => {
        server.use("/attendance", attendanceRouter);
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
export default server
