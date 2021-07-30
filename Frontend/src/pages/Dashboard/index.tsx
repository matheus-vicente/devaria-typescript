import React, { useEffect } from "react";
import { isBefore } from "date-fns";
import { decode } from "jsonwebtoken";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Header } from "../../components/Header";
import { CardUser } from "../../components/CardUser";
import { ContainerList } from "../../components/ContainerList";

import { Container, Content } from "./styles";

interface TokenData {
  exp: number;
}

const Dashboard: React.FC = () => {
  const history = useHistory();
  const { user, token } = useAuth();

  useEffect(() => {
    const { exp } = decode(token) as TokenData;
    const expiresIn = new Date(exp * 1000);

    if (isBefore(expiresIn, Date.now())) {
      localStorage.clear();
      history.push("/entrar");
    }
  }, [token, history]);

  return (
    <>
      <Header />

      <Container>
        <h1>
          Bem vindo, <strong>{user.name}</strong>
        </h1>

        <Content>
          <div className="card-user">
            <CardUser />
          </div>

          <section>
            <ContainerList title="Módulos:" />

            <ContainerList title="Aulas:" isLesson />
          </section>
        </Content>
      </Container>
    </>
  );
};

export { Dashboard };
