import { ReactNode, createContext, useState } from "react";
import { logoutApi } from "../api/authApi";
import { useNavigate } from "react-router";

type AuthContextType = {
	user: string | null;
	login: (user: string) => void;
	logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<string | null>(null);
	const login = (user: string) => setUser(user);
  const navigate = useNavigate();

  const logout = async () => {
    logoutApi();
    setUser(null);
    navigate('/login');
  }
	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
