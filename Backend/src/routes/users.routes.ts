import { Router } from "express";

import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { TurnUserAdminController } from "../modules/users/useCases/turnUserAdmin/TurnUserAdminController";

const usersRoutes = Router();

const createUser = new CreateUserController();
const turnUserAdmin = new TurnUserAdminController();

usersRoutes.post("/", createUser.handle);

usersRoutes.put("/admin/:id", turnUserAdmin.handle);

export { usersRoutes };
