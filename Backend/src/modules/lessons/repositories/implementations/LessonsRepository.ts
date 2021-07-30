import { getRepository, Repository } from "typeorm";

import { Lesson } from "../../entities/Lesson";
import { ICreateLessonDTO, ILessonsRepository } from "../ILessonsRepository";

class LessonsRepository implements ILessonsRepository {
  private ormRepository: Repository<Lesson>;

  constructor() {
    this.ormRepository = getRepository(Lesson);
  }

  create({ name, module_id, lesson_date }: ICreateLessonDTO): Lesson {
    const lesson = this.ormRepository.create({
      name,
      lesson_date,
      module_id,
    });

    return lesson;
  }

  async delete(lesson: Lesson): Promise<void> {
    await this.ormRepository.remove(lesson);
  }

  async findById(id: string): Promise<Lesson> {
    const Lesson = await this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return Lesson;
  }

  async findByName(name: string): Promise<Lesson> {
    const lesson = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return lesson;
  }

  async list(): Promise<Lesson[]> {
    const lessons = await this.ormRepository.find();

    return lessons;
  }

  async save(lesson: Lesson): Promise<Lesson> {
    const savedLesson = await this.ormRepository.save(lesson);

    return savedLesson;
  }
}

export { LessonsRepository };
