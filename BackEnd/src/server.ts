
import express from "express"
const server = express()
import userRouter from "./routes/user-routes"
import cors from "cors"
import swaggerUi from 'swagger-ui-express';
const swaggerDocument = require('./swagger/swagger.json');

server.use(express.json())
server.use(cors())
    
server.use('/api/user', userRouter)
server.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default server
