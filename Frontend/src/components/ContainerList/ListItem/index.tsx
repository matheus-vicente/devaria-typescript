import React, { useCallback } from "react";
import { BiPencil, BiTrash } from "react-icons/bi";
import { useAuth } from "../../../hooks/auth";

import { useLesson } from "../../../hooks/lesson";
import { useModule } from "../../../hooks/module";
import { useToast } from "../../../hooks/toast";
import { api } from "../../../services/api";

import { Container } from "./styles";

interface ListItemProps {
  name: string;
  isLesson?: boolean;
  openModal(value: boolean): void;
  setIsEditing(value: boolean): void;
}

const ListItem: React.FC<ListItemProps> = ({
  name,
  openModal,
  setIsEditing,
  isLesson = false,
}) => {
  const { requestOptions } = useAuth();
  const { addToast } = useToast();
  const { modules, setModules, setSelectedModuleByName } = useModule();
  const { lessons, setLessons, setSelectedLessonByName } = useLesson();

  const handleEdit = useCallback(() => {
    if (isLesson) {
      setSelectedLessonByName(name);
    } else {
      setSelectedModuleByName(name);
    }

    openModal(true);
    setIsEditing(true);
  }, [
    name,
    isLesson,
    openModal,
    setIsEditing,
    setSelectedLessonByName,
    setSelectedModuleByName,
  ]);

  const handleDelete = useCallback(async () => {
    if (isLesson) {
      try {
        const lessonsState = lessons;
        const lesson = lessonsState.find((item) => item.name === name);

        if (!lesson) {
          throw new Error("Não foi possível encontrar a aula informada!");
        }

        await api.delete(`lessons/${lesson.id}`, requestOptions());

        addToast({
          title: "Aula removida",
          type: "success",
        });
      } catch (error) {
        addToast({
          title: "Erro na deleção da aula",
          type: "error",
          description: error.message,
        });
      }
    } else {
      try {
        const modulesState = modules;
        const lessonsState = lessons;
        const module = modulesState.find((item) => item.name === name);

        if (!module) {
          throw new Error("Não foi possível encontrar o módulo informado!");
        }

        await api.delete(`modules/${module.id}`, requestOptions());

        const newLessonsState = lessonsState.filter(
          (item) => item.module_id !== module.id
        );

        setLessons(newLessonsState);

        const newModulesState = modulesState.filter(
          (item) => item.name !== name
        );

        setModules(newModulesState);

        addToast({
          title: "Módulo removido",
          type: "success",
        });
      } catch (error) {
        addToast({
          title: "Erro na deleção do módulo",
          type: "error",
          description: error.message,
        });
      }
    }
  }, [
    name,
    lessons,
    modules,
    addToast,
    isLesson,
    setModules,
    setLessons,
    requestOptions,
  ]);

  return (
    <Container>
      <div className="list-item-title">{name}</div>

      <div className="icons">
        <button type="button" onClick={handleEdit}>
          <BiPencil size={24} />
        </button>

        <button type="button">
          <BiTrash size={24} onClick={handleDelete} />
        </button>
      </div>
    </Container>
  );
};

export { ListItem };
