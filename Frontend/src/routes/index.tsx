import React from "react";
import { Switch } from "react-router-dom";

import { Route } from "./Route";

import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/entrar" component={SignIn} />
      <Route path="/cadastro" component={SignUp} />

      <Route path="/area-do-usuario" component={Dashboard} isPrivate />
    </Switch>
  );
};

export { Routes };
