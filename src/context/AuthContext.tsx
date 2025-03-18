import { fetchUser } from "@/api/authApi";
import { UserType } from "@/types/user";
import { ReactNode, createContext, useEffect, useState } from "react";

type AuthContextType = {
	user: UserType | null;
	login: (user: UserType) => void;
	logout: () => void;
	loading: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<UserType | null>(null);
	const [loading, setLoading] = useState(true);
	const login = (user: UserType) => setUser(user);
	const logout = () => setUser(null);

	useEffect(() => {
		const getUser = async () => {
			try {
				const fetchedUser = await fetchUser();
				setUser(fetchedUser);
			} catch (error) {
				setUser(null);
			} finally {
				setLoading(false);
			}
		};
		getUser();
	}, []);

	return (
		<AuthContext.Provider value={{ user, login, logout, loading }}>
			{children}
		</AuthContext.Provider>
	);
};
