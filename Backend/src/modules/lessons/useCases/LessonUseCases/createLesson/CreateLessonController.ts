import { Request, Response } from "express";

import { CreateLessonUseCase } from "./CreateLessonUseCase";

class CreateLessonController {
  constructor(private createLessonUseCase: CreateLessonUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, module_name, lesson_date } = req.body;

    const lesson = await this.createLessonUseCase.execute({
      name,
      lesson_date,
      module_name,
    });

    return res.status(201).json(lesson);
  }
}

export { CreateLessonController };
