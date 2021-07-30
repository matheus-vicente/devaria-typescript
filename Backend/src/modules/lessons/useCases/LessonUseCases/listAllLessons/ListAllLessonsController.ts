import { Request, Response } from "express";

import { ListAllLessonsUseCase } from "./ListAllLessonsUseCase";

class ListAllLessonsController {
  constructor(private listAllLessonsUseCase: ListAllLessonsUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const lessons = await this.listAllLessonsUseCase.execute();

    return res.json(lessons);
  }
}

export { ListAllLessonsController };
