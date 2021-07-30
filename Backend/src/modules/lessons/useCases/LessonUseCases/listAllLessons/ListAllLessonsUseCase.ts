import { Lesson } from "../../../entities/Lesson";
import { LessonsRepository } from "../../../repositories/implementations/LessonsRepository";

class ListAllLessonsUseCase {
  constructor(private lessonsRepository: LessonsRepository) {}

  async execute(): Promise<Lesson[]> {
    const Lessons = await this.lessonsRepository.list();

    return Lessons;
  }
}

export { ListAllLessonsUseCase };
