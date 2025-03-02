import { ReactNode, createContext, useState } from "react";

type UserType = {
	email: string;
	id: number;
	name: string;
};

type AuthContextType = {
	user: UserType | null;
	login: (user: UserType) => void;
	logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<UserType | null>(null);
	const login = (user: UserType) => setUser(user);
	const logout = () => setUser(null);

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
