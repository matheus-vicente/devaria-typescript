import { Request, Response } from "express";

import { CreateModuleUseCase } from "./CreateModuleUseCase";

class CreateModuleController {
  constructor(private createModuleUseCase: CreateModuleUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;

    const module = await this.createModuleUseCase.execute({
      name,
    });

    return res.status(201).json(module);
  }
}

export { CreateModuleController };
