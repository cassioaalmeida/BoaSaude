

import 'reflect-metadata';
import express from "express"
import cors from "cors"
import swaggerUi from 'swagger-ui-express';
import Container from 'typedi';
import { createConnection, useContainer, MigrationExecutor } from 'typeorm';
import swaggerDocument from './swagger/swagger.json'
import {conf} from './config/ormconfig'
import { MenuController } from './controllers/menu-controller';
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import { UserController } from './controllers/user-controller';
import { InsuranceController } from './controllers/insurance-controller';
import { UserInsuranceController } from './controllers/user-insurance-controller';
import { PartnerController } from './controllers/partner-controller';
const server = express()
useContainer(Container);
createConnection(conf).catch(error => {
    console.error(`Couldn't connect to the database!`);
    console.error(error);
  })
  .then (connection => {
    server.use(express.json())
    server.use(cors({
      exposedHeaders: [
        "*"
      ]
    }))
    
    const menuController = Container.get(MenuController);
    const userController = Container.get(UserController);
    const insuranceController = Container.get(InsuranceController);
    const userInsuranceController = Container.get(UserInsuranceController);
    const partnerController = Container.get(PartnerController);
        
    server.use('/api', menuController.router)
    server.use('/api', userController.router)
    server.use('/api', insuranceController.router)
    server.use('/api', userInsuranceController.router)
    server.use('/api', partnerController.router)
    
  });
export default server
