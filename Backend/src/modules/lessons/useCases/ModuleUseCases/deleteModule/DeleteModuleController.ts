import { Request, Response } from "express";

import { DeleteModuleUseCase } from "./DeleteModuleUseCase";

class DeleteModuleController {
  constructor(private deleteModuleUseCase: DeleteModuleUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { module } = req;

    await this.deleteModuleUseCase.execute({ id: module.id });

    return res.status(204).send();
  }
}

export { DeleteModuleController };
