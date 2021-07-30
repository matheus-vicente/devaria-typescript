import { Router } from "express";

import { apiRoutes } from "./api.routes";
import { lessonsRoutes } from "./lessons.routes";
import { loginRoute } from "./login.routes";
import { modulesRoutes } from "./modules.routes";
import { usersRoutes } from "./users.routes";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/modules", modulesRoutes);
routes.use("/lessons", lessonsRoutes);
routes.use("/login", loginRoute);
routes.use("/api", apiRoutes);

export { routes };
