import * as Yup from "yup";
import { Form } from "@unform/web";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";

import { Button } from "../Button";
import { Input } from "../Input";

import { Container } from "./styles";
import { useToast } from "../../hooks/toast";
import { useAuth } from "../../hooks/auth";

const FormLogin: React.FC = () => {
  const { login } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string().required("O campo e-mail é obrigatório").email(),
          password: Yup.string().required("O campo senha é obrigatório"),
        });

        await schema.validate(data, {
          abortEarly: true,
        });

        await login(data);

        history.push("/area-do-usuario");
      } catch (error) {
        addToast({
          type: "error",
          title: "Erro na autenticação",
          description: error.message,
        });
      }
    },
    [addToast, history, login]
  );

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit" className="button-login">
          Entrar
        </Button>
        <Button type="button" onClick={() => history.push("/cadastro")}>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
};

export { FormLogin };
