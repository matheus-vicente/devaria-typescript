import React, { useCallback } from "react";
import Modal from "react-modal";
import { Form } from "@unform/web";
import { BiXCircle } from "react-icons/bi";

import { Button } from "../../Button";
import { Input } from "../../Input";

import { Container } from "./styles";
import { api } from "../../../services/api";
import { useAuth } from "../../../hooks/auth";
import { useLesson } from "../../../hooks/lesson";
import { useToast } from "../../../hooks/toast";

interface AddLessonModal {
  isOpen: boolean;
  isEditing: boolean;
  onRequestClose(): void;
}

const AddLessonModal: React.FC<AddLessonModal> = ({
  isOpen,
  isEditing,
  onRequestClose,
}) => {
  const { addToast } = useToast();
  const { requestOptions } = useAuth();
  const { lessons, setLessons, selectedLessonByName } = useLesson();

  const handleCreateLesson = useCallback(
    async (data) => {
      try {
        const lessonsState = lessons;
        const request = {
          name: data.name,
          lesson_date: data.classDate,
          module_name: data.module,
        };

        const response = await api.post("lessons", request, requestOptions());

        lessonsState.push(response.data);

        onRequestClose();
        setLessons(lessonsState);

        addToast({
          title: "Aula criado",
          type: "success",
          description: `Aula de ${response.data.name} criada com sucesso.`,
        });
      } catch (error) {
        addToast({
          title: "Erro na criação da aula!",
          type: "error",
          description: error.message,
        });
      }
    },
    [addToast, requestOptions, lessons, onRequestClose, setLessons]
  );

  const handleEditLesson = useCallback(
    async (data) => {
      try {
        const lessonsState = lessons;
        const lesson = lessonsState.find(
          (item) => item.name === selectedLessonByName
        );

        if (!lesson) {
          throw new Error("Alua informada não encontrada");
        }

        const request = {
          name: data.name,
          lesson_date: data.classDate,
        };

        const response = await api.put(
          `lessons/${lesson.id}`,
          request,
          requestOptions()
        );

        lessonsState.push(response.data);
        const newState = lessonsState.filter(
          (item) => item.name !== selectedLessonByName
        );

        onRequestClose();
        setLessons(newState);

        addToast({
          title: "Aula editada",
          type: "success",
          description: `Aula editada com sucesso.`,
        });
      } catch (error) {
        addToast({
          title: "Erro na edição da aula!",
          type: "error",
          description: error.message,
        });
      }
    },
    [
      addToast,
      requestOptions,
      lessons,
      onRequestClose,
      setLessons,
      selectedLessonByName,
    ]
  );

  const handleSubmit = async (data: any) => {
    if (isEditing) {
      await handleEditLesson(data);
    } else {
      await handleCreateLesson(data);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      onRequestClose={onRequestClose}
      ariaHideApp={false}
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <BiXCircle size={24} />
      </button>
      <Container>
        <h1>Aulas</h1>

        <Form onSubmit={handleSubmit}>
          <Input name="name" type="text" placeholder="Nome" />

          <Input name="classDate" type="date" />

          <Input
            disabled={isEditing}
            name="module"
            type="text"
            placeholder="Módulo"
            className="module-input"
          />

          <Button type="submit">Adicionar</Button>
        </Form>
      </Container>
    </Modal>
  );
};

export { AddLessonModal };
