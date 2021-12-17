import { Router } from "express";
import UserController from "../controllers/user.controller";

const router = Router();

router.get(
  "/",
  UserController.getUsers
);

router.get(
  "/:uuid",
  UserController.getUserByUuid
);

export default router;
