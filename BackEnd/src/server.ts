
import express from "express";
const server = express()
import router from "./routes/routes";

server.use(express.json());
    
server.use('/api', router)

export default server
