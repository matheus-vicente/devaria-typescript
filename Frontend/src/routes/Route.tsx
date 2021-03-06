import React from "react";
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMProps,
  Redirect,
} from "react-router-dom";

import { useAuth } from "../hooks/auth";

interface RouteProps extends ReactDOMProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        if (isPrivate && !user) {
          return <Redirect to={{ pathname: "/entrar", state: { location } }} />;
        }

        return <Component />;
      }}
    />
  );
};

export { Route };
