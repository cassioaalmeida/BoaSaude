
import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";

import { User } from "../entity/User";

export const checkRole = (roles: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    //Get the user ID from previous midleware
    const id = res.locals.jwtPayload.id;

    //Get user role from the database
    const userRepository = getRepository(User);

    let user: User;
    try {
      user = await userRepository.findOneOrFail({
        where: {
          userLoginId: id,
          active: true
        }
      })
      res.locals.user = user;
    } catch (id) {
      return res.status(401).send();
    }

    const role = res.locals.jwtPayload.role;

    //Check if array of authorized roles includes the user's role
    if (roles.indexOf(role) > -1) next();
    else res.status(401).send();
  };
};