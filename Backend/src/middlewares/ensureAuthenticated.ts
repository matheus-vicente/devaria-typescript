import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { jwt } from "../config/authConfig";
import { AppError } from "../errors/AppError";

interface IDecodedToken {
  iat: number;
  exp: number;
  sub: string;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("JTW não existe", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = verify(token, jwt.secret);

    const { sub } = decoded as IDecodedToken;

    req.user = {
      id: sub,
    };

    next();
  } catch {
    throw new AppError("JWT inválido!");
  }
}
