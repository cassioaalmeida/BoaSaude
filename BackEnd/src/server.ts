
import express from "express";
const server = express()
import userRouter from "./routes/user-routes";
import testRouter from "./routes/test-routes";

server.use(express.json());
    
server.use('/api/user', userRouter)
server.use('/api/teste', testRouter)

export default server
