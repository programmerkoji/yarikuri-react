import { fetchUser } from "@/api/authApi";
import { UserType } from "@/types/user";
import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";

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

	useEffect(() => {
		const getUser = async () => {
			const fetchedUser = await fetchUser();
			setUser(fetchedUser);
		};
		getUser();
	}, []);

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
