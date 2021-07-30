import { Request, Response } from "express";

import { UpdateLessonUseCase } from "./UpdateLessonUseCase";

class UpdateLessonController {
  constructor(private updateLessonUseCase: UpdateLessonUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, lesson_date } = req.body;
    const { lesson } = req;

    const { id } = lesson;

    const updatedLesson = await this.updateLessonUseCase.execute({
      name,
      lesson_date,
      id,
    });

    return res.json(updatedLesson);
  }
}

export { UpdateLessonController };
