import * as Yup from "yup";
import { Form } from "@unform/web";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

import { Input } from "../Input";
import { Button } from "../Button";
import { api } from "../../services/api";
import { useToast } from "../../hooks/toast";

import { Container } from "./styles";

const FormSignUp: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required("O campo nome é obrigatório"),
          email: Yup.string().required("O campo e-mail é obrigatório").email(),
          password: Yup.string().min(
            8,
            "A senha deve ter no mínimo 8 caracteres"
          ),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "As senhas devem ser idênticas"
          ),
        });

        await schema.validate(data, {
          abortEarly: true,
        });

        await api.post("users", data);

        history.push("/entrar");

        addToast({
          type: "success",
          title: "Cadastro realizado",
          description: "Cadastro realizado. Faça seu login",
        });
      } catch (error) {
        addToast({
          type: "error",
          title: "Erro ao cadastrar",
          description: error.message,
        });
      }
    },
    [addToast, history]
  );

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="name" icon={FiUser} type="text" placeholder="Nome" />

        <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Input
          name="password_confirmation"
          icon={FiLock}
          type="password"
          placeholder="Confirmar senha"
        />

        <Button type="submit" className="button-sign-up">
          Cadastar
        </Button>
      </Form>
    </Container>
  );
};

export { FormSignUp };
