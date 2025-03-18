import { Loading } from "@/components/atoms/Loading";
import { useAuth } from "@/hooks/useAuth";
import { FC, ReactNode } from "react";
import { Navigate } from "react-router";

type Props = {
	children: ReactNode;
};

export const ProtectedRouter: FC<Props> = ({ children }) => {
	const { user, loading } = useAuth();

	if (loading) {
		return (
			<Loading />
		);
	}

	return user ? <>{children}</> : <Navigate to="/login" replace />;
};
