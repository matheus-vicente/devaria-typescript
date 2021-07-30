import React, { useCallback } from "react";

import { useModule } from "../../hooks/module";
import moduleIconImg from "../../assets/img/module-icon.svg";

import { Container, ModuleDescription } from "./styles";
import { useLesson } from "../../hooks/lesson";

interface ButtonModuleProps {
  module: {
    id: string;
    name: string;
  };
}

const ButtonModule: React.FC<ButtonModuleProps> = ({ module }) => {
  const { setSelectedModule } = useModule();
  const { lessons, setLessonsToBeShown } = useLesson();

  const allLessonsForThisModule = lessons.filter(
    (lesson) => lesson.module_id === module.id
  );

  const handleSetModuleButton = useCallback(() => {
    const lessonsToBeShow = lessons.filter(
      (lesson) => lesson.module_id === module.id
    );

    setSelectedModule(module.id);
    setLessonsToBeShown(lessonsToBeShow);
  }, [lessons, module.id, setSelectedModule, setLessonsToBeShown]);

  return (
    <Container onClick={handleSetModuleButton}>
      <img src={moduleIconImg} alt="module icon" />

      <ModuleDescription>
        <strong>{module.name}</strong>
        <span>{allLessonsForThisModule.length} aulas</span>
      </ModuleDescription>
    </Container>
  );
};

export { ButtonModule };
