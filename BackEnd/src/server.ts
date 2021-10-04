

import 'reflect-metadata';
import express from "express"
import cors from "cors"
import swaggerUi from 'swagger-ui-express';
import Container from 'typedi';
import { UserController } from './controllers/user-controller';
import { LoginController } from './controllers/login-controller';
import { createConnection, useContainer } from 'typeorm';
const swaggerDocument = require('./swagger/swagger.json');
const server = express()
useContainer(Container);
createConnection().catch(error => {
    console.error(`Couldn't connect to the database!`);
    console.error(error);
  })
  .then (connection => {
    
    
    server.use(express.json())
    server.use(cors())
    
    const userController = Container.get(UserController);
    const loginController = Container.get(LoginController);
        
    server.use('/api', userController.router)
    server.use('/api', loginController.router)
    server.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    
  });
export default server
