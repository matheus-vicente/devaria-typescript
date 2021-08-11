import { Router } from "express";

import { AuthenticateUserController } from "../modules/users/useCases/authenticateUser/AuthenticateUserController";

const authenticateUser = new AuthenticateUserController();

const loginRoute = Router();

loginRoute.post("/", authenticateUser.handle);

export { loginRoute };
