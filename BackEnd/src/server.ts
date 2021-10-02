

import 'reflect-metadata';
import express from "express"
import userRouter from "./routes/user-routes"
import cors from "cors"
import swaggerUi from 'swagger-ui-express';
import Container from 'typedi';
import { UserController } from './controllers/user-controller';
const swaggerDocument = require('./swagger/swagger.json');


const server = express()

server.use(express.json())
server.use(cors())

const userController = Container.get(UserController);
    
server.use('/api', userController.router)
server.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default server
