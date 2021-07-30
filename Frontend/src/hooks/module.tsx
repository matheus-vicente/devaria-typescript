import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { api } from "../services/api";

interface ModuleProviderProps {
  children: ReactNode;
}

export type ModuleData = {
  id: string;
  name: string;
};

interface ModuleContextData {
  modules: ModuleData[];
  setModules(data: ModuleData[]): void;
  selectedModule: string;
  setSelectedModule(id: string): void;
}

const ModuleContext = createContext<ModuleContextData>({} as ModuleContextData);

function ModuleProvider({ children }: ModuleProviderProps) {
  const [modules, setModules] = useState([] as ModuleData[]);
  const [selectedModule, setSelectedModule] = useState("");

  useEffect(() => {
    async function loadModules() {
      const response = await api.get("modules");

      setModules(response.data);
    }

    loadModules();
  }, []);

  return (
    <ModuleContext.Provider
      value={{
        modules,
        setModules,
        selectedModule,
        setSelectedModule,
      }}
    >
      {children}
    </ModuleContext.Provider>
  );
}

function useModule(): ModuleContextData {
  const context = useContext(ModuleContext);

  if (!context) {
    throw new Error(
      "O método useModule deve ser usado dentro de um ModuleProvider!"
    );
  }

  return context;
}

export { ModuleProvider, useModule };
