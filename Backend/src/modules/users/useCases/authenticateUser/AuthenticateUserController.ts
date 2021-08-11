import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

interface IUserResponse {
  id: string;
  name: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date;
}

class AuthenticateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    const { user, token } = await authenticateUserUseCase.execute({
      email,
      password,
    });

    const userResponse: IUserResponse = {
      id: user.id,
      name: user.name,
      admin: user.admin,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };

    return res.json({
      user: userResponse,
      token,
    });
  }
}

export { AuthenticateUserController };
