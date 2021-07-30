import React, { ButtonHTMLAttributes, ComponentType, ReactNode } from "react";
import { IconBaseProps } from "react-icons";

import { Container } from "./styles";

interface ButtonLoginProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ComponentType<IconBaseProps>;
  children: ReactNode;
  isLogged?: boolean;
}

const ButtonLogin: React.FC<ButtonLoginProps> = ({
  icon: Icon,
  children,
  isLogged = false,
  ...rest
}) => {
  return (
    <Container isLogged={isLogged} {...rest}>
      {Icon && <Icon size={32} />}
      {children}
    </Container>
  );
};

export { ButtonLogin };
