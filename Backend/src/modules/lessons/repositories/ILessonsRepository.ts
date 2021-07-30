import { Lesson } from "../entities/Lesson";

interface ICreateLessonDTO {
  name: string;
  module_id: string;
  lesson_date: Date;
}

interface ILessonsRepository {
  create(data: ICreateLessonDTO): Lesson;
  delete(lesson: Lesson): Promise<void>;
  findById(id: string): Promise<Lesson>;
  findByName(name: string): Promise<Lesson>;
  list(): Promise<Lesson[]>;
  save(lesson: Lesson): Promise<Lesson>;
}

export { ILessonsRepository, ICreateLessonDTO };
