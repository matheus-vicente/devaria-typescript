import React from "react";
import { format } from "date-fns";
import { FiVideo, FiClock } from "react-icons/fi";

import { useModule } from "../../hooks/module";
import { LessonData } from "../../hooks/lesson";

import { Container, Header, ContainerInfo, ButtonWatchClass } from "./styles";

interface CardClassesProps {
  lesson: LessonData;
}

const CardClasses: React.FC<CardClassesProps> = ({ lesson }) => {
  const { modules, selectedModuleByName } = useModule();

  const module = modules.find((item) => item.id === selectedModuleByName);

  const date = new Date(lesson.lesson_date);
  const formatedDate = format(date, "'Dia:' dd/MM/YYY");

  return (
    <Container>
      <Header>
        <div>{module ? module.name : "Módulo"}</div>

        <span>3/3</span>
      </Header>

      <strong>{lesson.name}</strong>

      <span className="class-date">{formatedDate}</span>

      <ContainerInfo>
        <div>
          <FiVideo />
          <span>3/3 aulas</span>
        </div>

        <div>
          <FiClock />
          <span>100/100 minutos</span>
        </div>
      </ContainerInfo>

      <ButtonWatchClass type="button">Assistir aula</ButtonWatchClass>
    </Container>
  );
};

export { CardClasses };
