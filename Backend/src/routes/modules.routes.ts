import { Router } from "express";

import { checkModuleExists } from "../middlewares/checkModuleExists";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureUserIsAdmin } from "../middlewares/ensureUserIsAdmin";
import createModule from "../modules/lessons/useCases/ModuleUseCases/createModule";
import deleteModule from "../modules/lessons/useCases/ModuleUseCases/deleteModule";
import listAllModules from "../modules/lessons/useCases/ModuleUseCases/listAllModules";
import updateModule from "../modules/lessons/useCases/ModuleUseCases/updateModule";

const modulesRoutes = Router();

modulesRoutes.get("/", (req, res) => listAllModules().handle(req, res));

// Private routes
modulesRoutes.post(
  "/",
  (req, res, next) => ensureAuthenticated(req, res, next),
  (req, res, next) => ensureUserIsAdmin(req, res, next),
  (req, res) => createModule().handle(req, res)
);

modulesRoutes.put(
  "/:id",
  (req, res, next) => ensureAuthenticated(req, res, next),
  (req, res, next) => checkModuleExists(req, res, next),
  (req, res) => updateModule().handle(req, res)
);

modulesRoutes.delete(
  "/:id",
  (req, res, next) => ensureAuthenticated(req, res, next),
  (req, res, next) => checkModuleExists(req, res, next),
  (req, res) => deleteModule().handle(req, res)
);

export { modulesRoutes };
