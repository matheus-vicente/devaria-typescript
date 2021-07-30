import { useCallback } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";

import logoImg from "../../assets/img/logo.svg";

import { useAuth } from "../../hooks/auth";
import { ButtonLogin } from "./ButtonLogin";
import { Button } from "../Button";

import { Container, Content, MenuContainer } from "./styles";

function Header() {
  const history = useHistory();
  const { user, logout } = useAuth();

  const handleOnClickButtonLogin = useCallback(() => {
    history.push("/entrar");
  }, [history]);

  const handleOnClickButtonLogout = useCallback(() => {
    logout();

    history.push("/");
  }, [logout, history]);

  const handleOnClickButtonUser = useCallback(() => {
    history.push("/area-do-usuario");
  }, [history]);

  return (
    <Container>
      <Content>
        <button
          type="button"
          className="button-logo"
          onClick={() => history.push("/")}
        >
          <img src={logoImg} alt="logo" />
        </button>

        <MenuContainer>
          <Link to="/">Calendário de aulas</Link>

          {user ? (
            <>
              <ButtonLogin
                icon={FaUserCircle}
                onClick={handleOnClickButtonUser}
                isLogged
              >
                {user.name}
              </ButtonLogin>
              <Button
                className="button-logout"
                onClick={handleOnClickButtonLogout}
              >
                Sair
              </Button>
            </>
          ) : (
            <ButtonLogin onClick={handleOnClickButtonLogin}>Entrar</ButtonLogin>
          )}
        </MenuContainer>
      </Content>
    </Container>
  );
}

export { Header };
