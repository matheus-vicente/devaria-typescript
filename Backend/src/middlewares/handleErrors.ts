import { Request, Response, NextFunction } from "express";

import { AppError } from "../errors/AppError";

export function handleErrors(
  err: Error,
  req: Request,
  res: Response,
  _: NextFunction
) {
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ status: "Error", message: err.message });
  }

  return res.status(500).json({
    status: "Error",
    message: `Internal server error - ${err.message}`,
  });
}
