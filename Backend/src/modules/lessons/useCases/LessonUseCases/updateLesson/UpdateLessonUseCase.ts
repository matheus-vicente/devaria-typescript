import { isBefore, parseISO } from "date-fns";

import { AppError } from "../../../../../errors/AppError";
import { Lesson } from "../../../entities/Lesson";
import { LessonsRepository } from "../../../repositories/implementations/LessonsRepository";

interface IRequest {
  id: string;
  name: string;
  lesson_date: string;
}

class UpdateLessonUseCase {
  constructor(private lessonsRepository: LessonsRepository) {}

  async execute({ name, lesson_date, id }: IRequest): Promise<Lesson> {
    const lessonNameAlreadyExists = await this.lessonsRepository.findByName(
      name
    );

    if (lessonNameAlreadyExists) {
      throw new AppError("Já existe uma aula com este nome");
    }

    const lesson = await this.lessonsRepository.findById(id);

    if (name) {
      lesson.name = name;
    }

    if (lesson_date) {
      const parsedDate = parseISO(lesson_date);

      if (isBefore(parsedDate, Date.now())) {
        throw new AppError(
          "Uma aula não pode ser criada em uma data que já passou!"
        );
      }

      lesson.lesson_date = parsedDate;
    }

    const updatedLesson = await this.lessonsRepository.save(lesson);

    return updatedLesson;
  }
}

export { UpdateLessonUseCase };
