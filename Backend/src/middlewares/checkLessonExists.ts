import { NextFunction, Request, Response } from "express";

import { AppError } from "../errors/AppError";
import { LessonsRepository } from "../modules/lessons/repositories/implementations/LessonsRepository";

export async function checkLessonExists(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  const lessonsRepository = new LessonsRepository();

  const lesson = await lessonsRepository.findById(id);

  if (!lesson) {
    throw new AppError("Não é possível atualizar um módulo inexistente");
  }

  req.lesson = {
    id: lesson.id,
  };

  next();
}
