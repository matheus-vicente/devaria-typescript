import { Request, Response } from "express";

import { ListAllModulesUseCase } from "./ListAllModulesUseCase";

class ListAllModulesController {
  constructor(private listAllModulesUseCase: ListAllModulesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const modules = await this.listAllModulesUseCase.execute();

    return res.json(modules);
  }
}

export { ListAllModulesController };
