import { LessonsRepository } from "../../../repositories/implementations/LessonsRepository";
import { UpdateLessonController } from "./UpdateLessonController";
import { UpdateLessonUseCase } from "./UpdateLessonUseCase";

export default (): UpdateLessonController => {
  const lessonsRepository = new LessonsRepository();

  const updateLessonUseCase = new UpdateLessonUseCase(lessonsRepository);

  const updateLessonController = new UpdateLessonController(
    updateLessonUseCase
  );

  return updateLessonController;
};
