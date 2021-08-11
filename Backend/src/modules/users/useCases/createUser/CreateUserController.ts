import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

interface IResponse {
  id: string;
  name: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date;
}

class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const userCreated = await createUserUseCase.execute({
      name,
      email,
      password,
    });

    const user: IResponse = {
      id: userCreated.id,
      name: userCreated.name,
      admin: userCreated.admin,
      created_at: userCreated.created_at,
      updated_at: userCreated.updated_at,
    };

    return res.status(201).json(user);
  }
}

export { CreateUserController };
