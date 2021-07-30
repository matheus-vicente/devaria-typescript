import { Request, Response } from "express";

import { UpdateModuleUseCase } from "./UpdateModuleUseCase";

class UpdateModuleController {
  constructor(private updateModuleUseCase: UpdateModuleUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;
    const { module } = req;

    const updatedModule = await this.updateModuleUseCase.execute({
      name,
      id: module.id,
    });

    return res.json(updatedModule);
  }
}

export { UpdateModuleController };
