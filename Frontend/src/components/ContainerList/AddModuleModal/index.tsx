import React, { useCallback } from "react";
import Modal from "react-modal";
import { Form } from "@unform/web";
import { BiXCircle } from "react-icons/bi";

import { api } from "../../../services/api";
import { useAuth } from "../../../hooks/auth";
import { useToast } from "../../../hooks/toast";
import { useModule } from "../../../hooks/module";
import { Button } from "../../Button";
import { Input } from "../../Input";

import { Container } from "./styles";

interface AddModuleModalProps {
  isOpen: boolean;
  onRequestClose(): void;
}

const AddModuleModal: React.FC<AddModuleModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const { requestOptions } = useAuth();
  const { addToast } = useToast();
  const { modules, setModules } = useModule();

  const handleCreateModule = useCallback(
    async (data) => {
      try {
        const modulesState = modules;
        const response = await api.post("modules", data, requestOptions());

        modulesState.push(response.data);

        setModules(modulesState);
        onRequestClose();

        addToast({
          title: "Módulo criado",
          type: "success",
          description: `Módulo ${response.data.name} criado com sucesso.`,
        });
      } catch (error) {
        addToast({
          title: "Erro na criação de um novo módulo",
          type: "error",
          description: error.message,
        });
      }
    },
    [modules, setModules, addToast, requestOptions, onRequestClose]
  );

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
        <h1>Novo módulo</h1>

        <Form onSubmit={handleCreateModule}>
          <Input name="name" type="text" placeholder="Nome" />

          <Button type="submit">Adicionar</Button>
        </Form>
      </Container>
    </Modal>
  );
};

export { AddModuleModal };
