import { Router } from "express";

import { checkLessonExists } from "../middlewares/checkLessonExists";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import createLesson from "../modules/lessons/useCases/LessonUseCases/createLesson";
import deleteLesson from "../modules/lessons/useCases/LessonUseCases/deleteLesson";
import listAllLessons from "../modules/lessons/useCases/LessonUseCases/listAllLessons";
import updateLesson from "../modules/lessons/useCases/LessonUseCases/updateLesson";

const lessonsRoutes = Router();

lessonsRoutes.get("/", (req, res) => listAllLessons().handle(req, res));

// Private routes
lessonsRoutes.post(
  "/",
  (req, res, next) => ensureAuthenticated(req, res, next),
  (req, res) => createLesson().handle(req, res)
);

lessonsRoutes.put(
  "/:id",
  (req, res, next) => ensureAuthenticated(req, res, next),
  (req, res, next) => checkLessonExists(req, res, next),
  (req, res) => updateLesson().handle(req, res)
);

lessonsRoutes.delete(
  "/:id",
  (req, res, next) => ensureAuthenticated(req, res, next),
  (req, res) => deleteLesson().handle(req, res)
);

export { lessonsRoutes };
