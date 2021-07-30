import { LessonsRepository } from "../../../repositories/implementations/LessonsRepository";
import { DeleteLessonController } from "./DeleteLessonController";
import { DeleteLessonUseCase } from "./DeleteLessonUseCase";

export default (): DeleteLessonController => {
  const lessonsRepository = new LessonsRepository();

  const deleteLessonUseCase = new DeleteLessonUseCase(lessonsRepository);

  const deleteLessonController = new DeleteLessonController(
    deleteLessonUseCase
  );

  return deleteLessonController;
};
