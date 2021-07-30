import { isBefore, parseISO } from "date-fns";

import { AppError } from "../../../../../errors/AppError";
import { Lesson } from "../../../entities/Lesson";
import { LessonsRepository } from "../../../repositories/implementations/LessonsRepository";
import { ModulesRepository } from "../../../repositories/implementations/ModulesRepository";

interface IRequest {
  name: string;
  module_name: string;
  lesson_date: string;
}

class CreateLessonUseCase {
  constructor(
    private lessonsRepository: LessonsRepository,
    private modulesRepository: ModulesRepository
  ) {}

  async execute({ name, module_name, lesson_date }: IRequest): Promise<Lesson> {
    const lessonAlreadyExists = await this.lessonsRepository.findByName(name);

    if (lessonAlreadyExists) {
      throw new AppError("Já existe uma aula com este nome");
    }

    const module = await this.modulesRepository.findByName(module_name);

    if (!module) {
      throw new AppError("O módulo citado não existe");
    }

    const parsedDate = parseISO(lesson_date);

    if (isBefore(parsedDate, Date.now())) {
      throw new AppError(
        "Uma aula não pode ser criada em uma data que já passou!"
      );
    }

    const createdLesson = this.lessonsRepository.create({
      name,
      module_id: module.id,
      lesson_date: parsedDate,
    });

    const lesson = await this.lessonsRepository.save(createdLesson);

    return lesson;
  }
}

export { CreateLessonUseCase };
