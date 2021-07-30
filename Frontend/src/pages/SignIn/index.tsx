import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { Banner } from "../../components/Banner";
import { FormLogin } from "../../components/FormLogin";

import { Container, Content } from "./styles";

const SignIn: React.FC = () => {
  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (user) {
      history.push("/area-do-usuario");
    }
  }, [user, history]);

  return (
    <Container>
      <Content>
        <Banner subject="login" />

        <FormLogin />
      </Content>
    </Container>
  );
};

export { SignIn };
