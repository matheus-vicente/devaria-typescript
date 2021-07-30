import React, { useCallback } from "react";
import { FaUserCircle } from "react-icons/fa";

import { Button } from "../Button";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";

import { Container } from "./styles";

const CardUser: React.FC = () => {
  const { user, setUser } = useAuth();
  const { addToast } = useToast();

  const handleTurnAdmin = useCallback(async () => {
    try {
      await api.put(`users/admin/${user.id}`);

      const newUserState = {
        ...user,
        admin: true,
      };

      setUser(newUserState);

      addToast({
        type: "info",
        title: "Você se tornou um usuário administrador!",
      });
    } catch (error) {
      addToast({
        type: "error",
        title: "Houve um erro ao tentar se tornar administrador",
        description: error.message,
      });
    }
  }, [user, setUser, addToast]);

  return (
    <Container>
      <FaUserCircle size={60} />

      <strong>{user.name}</strong>

      {user.admin ? (
        <span>Admin</span>
      ) : (
        <Button type="button" onClick={handleTurnAdmin}>
          Tornar-se admin
        </Button>
      )}
    </Container>
  );
};

export { CardUser };
