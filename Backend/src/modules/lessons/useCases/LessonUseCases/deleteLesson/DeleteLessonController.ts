import { Request, Response } from "express";

import { DeleteLessonUseCase } from "./DeleteLessonUseCase";

class DeleteLessonController {
  constructor(private deleteLessonUseCase: DeleteLessonUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    await this.deleteLessonUseCase.execute({ id });

    return res.status(204).send();
  }
}

export { DeleteLessonController };
