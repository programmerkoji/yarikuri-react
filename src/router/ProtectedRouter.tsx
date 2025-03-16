import { fetchUser } from "@/api/authApi";
import { useAuth } from "@/hooks/useAuth";
import { FC, ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router";

type Props = {
	children: ReactNode;
};

export const ProtectedRouter: FC<Props> = ({ children }) => {
	const { user } = useAuth();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const checkUser = async () => {
			setLoading(true);
			await fetchUser();
			setLoading(false);
		};
		checkUser();
	}, []);

	if (loading) return <div>loading...</div>;

	return user ? <>{children}</> : <Navigate to="/login" replace />;
};
