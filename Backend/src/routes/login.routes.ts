import { Router } from "express";

import authenticateUser from "../modules/users/useCases/authenticateUser";

const loginRoute = Router();

loginRoute.post("/", (req, res) => authenticateUser().handle(req, res));

export { loginRoute };
