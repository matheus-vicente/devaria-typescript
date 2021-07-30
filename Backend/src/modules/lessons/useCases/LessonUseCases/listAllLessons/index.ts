import { LessonsRepository } from "../../../repositories/implementations/LessonsRepository";
import { ListAllLessonsController } from "./ListAllLessonsController";
import { ListAllLessonsUseCase } from "./ListAllLessonsUseCase";

export default (): ListAllLessonsController => {
  const lessonsRepository = new LessonsRepository();

  const listAllLessonsUseCase = new ListAllLessonsUseCase(lessonsRepository);

  const listAllLessonsController = new ListAllLessonsController(
    listAllLessonsUseCase
  );

  return listAllLessonsController;
};
