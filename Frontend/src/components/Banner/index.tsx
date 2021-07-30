import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import logoImg from "../../assets/img/logo.svg";

import { Container } from "./styles";

interface BannerProps {
  subject: "login" | "cadastro";
}

const Banner: React.FC<BannerProps> = ({ subject }) => {
  const history = useHistory();

  const handleClickLogo = useCallback(() => {
    history.push("/");
  }, [history]);

  return (
    <Container onClick={handleClickLogo}>
      <img src={logoImg} alt="logo" />

      <h1>Fazer {subject}</h1>
    </Container>
  );
};

export { Banner };
