import React, { useCallback, useState } from "react";

import { ListItem } from "./ListItem";
import { AddModuleModal } from "./AddModuleModal";
import { AddLessonModal } from "./AddLessonModal";

import { Container } from "./styles";
import { useModule } from "../../hooks/module";
import { useLesson } from "../../hooks/lesson";

interface ListItems {
  title: string;
  isLesson?: boolean;
}

const ContainerList: React.FC<ListItems> = ({ title, isLesson }) => {
  const { modules } = useModule();
  const { lessons } = useLesson();

  const [isModuleModalOpen, setIsModuleModalOpen] = useState(false);
  const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);
  const [isEditingModule, setIsEditingModule] = useState(false);
  const [isEditingLesson, setIsEditingLesson] = useState(false);

  const handleOpenModal = useCallback(() => {
    if (isLesson) {
      setIsLessonModalOpen(true);
    } else {
      setIsModuleModalOpen(true);
    }
  }, [isLesson]);

  const handleCloseModal = useCallback(() => {
    setIsEditingLesson(false);
    setIsEditingModule(false);
    setIsModuleModalOpen(false);
    setIsLessonModalOpen(false);
  }, []);

  return (
    <Container>
      <div className="container-modules-title">{title}</div>

      <ul>
        {isLesson
          ? lessons && // Verificando se há lessons
            lessons.map((lesson) => (
              <ListItem key={lesson.id} name={lesson.name} />
            ))
          : modules && // Verificando se há modules
            modules.map((module) => (
              <ListItem key={module.id} name={module.name} />
            ))}
      </ul>

      <button
        className="container-modules-button"
        type="button"
        onClick={handleOpenModal}
      >
        Adicionar
      </button>

      <AddModuleModal
        isOpen={isModuleModalOpen}
        onRequestClose={handleCloseModal}
      />
      <AddLessonModal
        isEditing={isEditingLesson}
        isOpen={isLessonModalOpen}
        onRequestClose={handleCloseModal}
      />
    </Container>
  );
};

export { ContainerList };
