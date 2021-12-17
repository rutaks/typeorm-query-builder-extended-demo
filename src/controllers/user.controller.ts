import { GenericResponse } from "../models/GenericResponse";
import { NextFunction, Response } from "express";
import { Request } from "express";
import UserService from "../services/user.service";

/**
 * Class representing the user operation controller
 * @since version 1.0
 */
class UserController {
  static async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await UserService.getUsers(req);
      res.send(new GenericResponse(200, "User(s) retreived successfully", result));
    } catch (error) {
      next(error);
    }
  }

  static async getUserByUuid(req: Request, res: Response, next: NextFunction) {
    try {
      const { memberId } = req.params;
      const member = await UserService.getUserById(memberId);
      res.send(new GenericResponse(200, "User retreived successfully", { member }));
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
