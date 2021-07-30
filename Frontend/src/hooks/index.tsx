import React from "react";

import { ModuleProvider } from "./module";
import { LessonProvider } from "./lesson";
import { ToastProvider } from "./toast";
import { AuthProvider } from "./auth";

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ModuleProvider>
        <LessonProvider>
          <ToastProvider>{children}</ToastProvider>
        </LessonProvider>
      </ModuleProvider>
    </AuthProvider>
  );
};

export { AppProvider };
