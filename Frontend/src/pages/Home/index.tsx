import React from "react";
import moduleIconImg from "../../assets/img/module-icon.svg";

import { useModule } from "../../hooks/module";
import { useLesson } from "../../hooks/lesson";
import { Header } from "../../components/Header";
import { ButtonModule } from "../../components/ButtonModule";
import { CardClasses } from "../../components/CardClasses";

import { Content, Title, Section, ClassTitle, CardWrapper } from "./styles";

const Home: React.FC = () => {
  const { modules } = useModule();
  const { lessonsToBeShown } = useLesson();

  const modulesInAlphabeticalOrder = modules.sort((module, moduleToCompare) => {
    if (module.name < moduleToCompare.name) {
      return -1;
    }

    if (module.name > moduleToCompare.name) {
      return 1;
    }

    return 0;
  });

  const lessonInAlphabeticalOder = lessonsToBeShown.sort(
    (lesson, lessonToCompare) => {
      if (lesson.name < lessonToCompare.name) {
        return -1;
      }

      if (lesson.name > lessonToCompare.name) {
        return 1;
      }

      return 0;
    }
  );

  return (
    <>
      <Header />

      <Content>
        <Title>
          <h1>Módulo</h1>
          <p>Selecione o módulo para ver as aulas disponíveis:</p>
        </Title>

        <Section>
          {modulesInAlphabeticalOrder.length === 0 ? (
            <span className="empty-modules">
              Não existem módulos para serem exibidos!
            </span>
          ) : (
            modulesInAlphabeticalOrder.map((module) => (
              <ButtonModule key={module.id} module={module} />
            ))
          )}
        </Section>

        <ClassTitle>
          <img src={moduleIconImg} alt="module icon" />

          <div>
            <strong />
            <p>Todas as aulas disponíveis nesse módulo:</p>
          </div>
        </ClassTitle>

        <CardWrapper>
          {lessonInAlphabeticalOder &&
            lessonInAlphabeticalOder.map((lesson) => (
              <CardClasses key={lesson.id} lesson={lesson} />
            ))}
        </CardWrapper>
      </Content>
    </>
  );
};

export { Home };
