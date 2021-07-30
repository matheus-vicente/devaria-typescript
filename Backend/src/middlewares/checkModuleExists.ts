import { NextFunction, Request, Response } from "express";

import { AppError } from "../errors/AppError";
import { ModulesRepository } from "../modules/lessons/repositories/implementations/ModulesRepository";

export async function checkModuleExists(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  const modulesRepository = new ModulesRepository();

  const module = await modulesRepository.findById(id);

  if (!module) {
    throw new AppError("O módulo citado não existe");
  }

  req.module = {
    id: module.id,
  };

  next();
}
