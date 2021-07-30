import { LessonsRepository } from "../../../repositories/implementations/LessonsRepository";

interface IRequest {
  id: string;
}

class DeleteLessonUseCase {
  constructor(private lessonsRepository: LessonsRepository) {}

  async execute({ id }: IRequest): Promise<void> {
    const lesson = await this.lessonsRepository.findById(id);

    await this.lessonsRepository.delete(lesson);
  }
}

export { DeleteLessonUseCase };
