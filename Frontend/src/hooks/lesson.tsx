import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export type LessonData = {
  id: string;
  name: string;
  module_id: string;
  lesson_date: string;
};

interface LessonContextData {
  lessons: LessonData[];
  setLessons(data: LessonData[]): void;
  lessonsToBeShown: LessonData[];
  setLessonsToBeShown(data: LessonData[]): void;
}

const LessonContext = createContext({} as LessonContextData);

const LessonProvider: React.FC = ({ children }) => {
  const [lessons, setLessons] = useState([] as LessonData[]);
  const [lessonsToBeShown, setLessonsToBeShown] = useState([] as LessonData[]);

  useEffect(() => {
    async function loadLessons() {
      const response = await api.get("lessons");

      setLessons(response.data);
    }

    loadLessons();
  }, []);

  return (
    <LessonContext.Provider
      value={{ lessons, setLessons, lessonsToBeShown, setLessonsToBeShown }}
    >
      {children}
    </LessonContext.Provider>
  );
};

const useLesson = () => {
  const context = useContext(LessonContext);

  if (!context) {
    throw new Error(
      "O método useLesson deve ser usado dentro de um LessonProvider!"
    );
  }

  return context;
};

export { LessonProvider, useLesson };
