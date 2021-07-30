import { NextFunction, Request, Response } from "express";

import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/users/repositories/implementations/UsersRepository";

export async function ensureUserIsAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { user } = req;

  const usersRepository = new UsersRepository();

  const { admin } = await usersRepository.findById(user.id);

  if (!admin) {
    throw new AppError(
      "O usuário não tem permissão para realizar esta função",
      401
    );
  }

  next();
}
