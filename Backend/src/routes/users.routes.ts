import { Router } from "express";

import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import turnUserAdminController from "../modules/users/useCases/turnUserAdmin";

const usersRoutes = Router();

const createUser = new CreateUserController();

usersRoutes.post("/", createUser.handle);

usersRoutes.put("/admin/:id", (req, res) =>
  turnUserAdminController().handle(req, res)
);

export { usersRoutes };
