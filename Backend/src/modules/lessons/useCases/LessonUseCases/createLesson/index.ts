import { LessonsRepository } from "../../../repositories/implementations/LessonsRepository";
import { ModulesRepository } from "../../../repositories/implementations/ModulesRepository";
import { CreateLessonController } from "./CreateLessonController";
import { CreateLessonUseCase } from "./CreateLessonUseCase";

export default (): CreateLessonController => {
  const lessonsRepository = new LessonsRepository();
  const modulesRepository = new ModulesRepository();

  const createModuleUseCase = new CreateLessonUseCase(
    lessonsRepository,
    modulesRepository
  );

  const createModuleController = new CreateLessonController(
    createModuleUseCase
  );

  return createModuleController;
};
