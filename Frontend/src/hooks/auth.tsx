import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

import { api } from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthState {
  user: {
    id: string;
    name: string;
    admin: boolean;
  };
  token: string;
}

interface UserData {
  id: string;
  name: string;
  admin: boolean;
}

interface AuthContextData {
  user: UserData;
  token: string;
  setUser(data: UserData): void;
  login(data: LoginCredentials): Promise<void>;
  logout(): void;
  requestOptions(): object;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState(() => {
    const user = localStorage.getItem("@DevariaTypescript:user");
    const token = localStorage.getItem("@DevariaTypescript:token");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const setUser = useCallback((user: UserData) => {
    localStorage.setItem("@DevariaTypescript:user", JSON.stringify(user));

    setData((state) => ({
      token: state.token,
      user,
    }));
  }, []);

  const login = useCallback(async (request) => {
    const response = await api.post("login", request);

    const { token, user } = response.data;

    localStorage.setItem("@DevariaTypescript:token", token);
    localStorage.setItem("@DevariaTypescript:user", JSON.stringify(user));

    setData({ token, user });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("@DevariaTypescript:user");
    localStorage.removeItem("@DevariaTypescript:token");

    setData({} as AuthState);
  }, []);

  const requestOptions = () => {
    const options = {
      headers: {
        authorization: `Bearer ${data.token}`,
      },
    };

    return options;
  };

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        token: data.token,
        setUser,
        login,
        logout,
        requestOptions,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "O método useAuth deve ser chamado dentro de um AuthProvider"
    );
  }

  return context;
}

export { AuthProvider, useAuth };
