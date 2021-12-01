
import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import * as jwt from "jsonwebtoken";
import config from "../config/config";

import { User } from "../entity/User";

const getUser = function () {
  return async function (req: Request, res: Response, next: NextFunction) {
    //Get the user ID from previous midleware
    const token = <string>req.headers["authorization"];
    if (!token){
      next();
      return
    }

    let jwtPayload;
    jwtPayload = <any>jwt.verify(token.substring(7), "TODO_SECRET");

    //Get user role from the database
    const userRepository = getRepository(User);

    let user: User;

    user = await userRepository.findOne({
      where: {
        userLoginId: jwtPayload.id,
        active: true
      }
    })
    res.locals.user = user;
    res.locals.jwtPayload = jwtPayload;
    next();
  };
};

export default getUser