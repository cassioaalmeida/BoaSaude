
import express from "express";
const server = express()
import userRouter from "./routes/user-routes";
import testRouter from "./routes/test-routes";
import cors from "cors"

server.use(express.json());
server.use(cors())
    
server.use('/api/user', userRouter)
server.use('/api/teste', testRouter)

export default server
