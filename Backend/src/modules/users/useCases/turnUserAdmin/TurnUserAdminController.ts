import { Request, Response } from "express";
import { container } from "tsyringe";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

interface IResponse {
  id: string;
  name: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date;
}

class TurnUserAdminController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const turnUserAdminUseCase = container.resolve(TurnUserAdminUseCase);

    const userBecameAdmin = await turnUserAdminUseCase.execute(id);

    const user: IResponse = {
      id: userBecameAdmin.id,
      name: userBecameAdmin.name,
      admin: userBecameAdmin.admin,
      created_at: userBecameAdmin.created_at,
      updated_at: userBecameAdmin.updated_at,
    };

    return res.json(user);
  }
}

export { TurnUserAdminController };
