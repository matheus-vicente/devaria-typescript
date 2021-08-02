import React, { useCallback, useState } from "react";

import { ListItem } from "./ListItem";
import { AddModuleModal } from "./AddModuleModal";
import { AddLessonModal } from "./AddLessonModal";

import { useAuth } from "../../hooks/auth";
import { useModule } from "../../hooks/module";
import { useLesson } from "../../hooks/lesson";

import { Container } from "./styles";

interface ListItems {
  title: string;
  isLesson?: boolean;
}

const ContainerList: React.FC<ListItems> = ({ title, isLesson }) => {
  const { user } = useAuth();
  const { modules } = useModule();
  const { lessons } = useLesson();

  const [isModuleModalOpen, setIsModuleModalOpen] = useState(false);
  const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleOpenModal = useCallback(() => {
    if (isLesson) {
      setIsLessonModalOpen(true);
    } else {
      setIsModuleModalOpen(true);
    }
  }, [isLesson]);

  const handleCloseModal = useCallback(() => {
    setIsEditing(false);
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
              <ListItem
                isLesson
                key={lesson.id}
                name={lesson.name}
                setIsEditing={setIsEditing}
                openModal={setIsLessonModalOpen}
              />
            ))
          : modules && // Verificando se há modules
            modules.map((module) => (
              <ListItem
                key={module.id}
                name={module.name}
                setIsEditing={setIsEditing}
                openModal={setIsModuleModalOpen}
              />
            ))}
      </ul>

      <button
        className="container-modules-button"
        type="button"
        onClick={handleOpenModal}
        disabled={!user.admin}
      >
        Adicionar
      </button>

      <AddModuleModal
        isEditing={isEditing}
        isOpen={isModuleModalOpen}
        onRequestClose={handleCloseModal}
      />
      <AddLessonModal
        isEditing={isEditing}
        isOpen={isLessonModalOpen}
        onRequestClose={handleCloseModal}
      />
    </Container>
  );
};

export { ContainerList };
