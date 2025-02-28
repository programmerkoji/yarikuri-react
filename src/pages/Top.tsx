import React from "react";
import { useAuth } from "../hooks/useAuth";

export const Top = () => {
	const { logout } = useAuth();
	return (
		<div>
			<button onClick={logout}>ログアウト</button>
		</div>
	);
};
