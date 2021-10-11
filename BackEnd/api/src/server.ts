

import 'reflect-metadata';
import express from "express"
import cors from "cors"
import swaggerUi from 'swagger-ui-express';
import Container from 'typedi';
import { createConnection, useContainer } from 'typeorm';
import swaggerDocument from './swagger/swagger.json'
import {conf} from './config/ormconfig'
import { MenuController } from './controllers/menu-controller';
const server = express()
useContainer(Container);
createConnection(conf).catch(error => {
    console.error(`Couldn't connect to the database!`);
    console.error(error);
  })
  .then (connection => {
    
    
    server.use(express.json())
    server.use(cors())
    
    const menuController = Container.get(MenuController);
        
    server.use('/api', menuController.router)
    
  });
export default server
