import { Login } from "@/pages/Login";
import { Top } from "@/pages/Top";
import { HeaderLayout } from "@/template/HeaderLayout";
import { FC, memo } from "react";
import { Outlet, Route, Routes } from "react-router";
import { ItemRouter } from "./ItemRouter";
import { ProtectedRouter } from "./ProtectedRouter";
import { MonthRouter } from "./MonthRouter";

export const Router: FC = memo(() => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route
				element={
					<ProtectedRouter>
						<HeaderLayout>
							<Outlet />
						</HeaderLayout>
					</ProtectedRouter>
				}
			>
				<Route path="/top" element={<Top />} />
				<Route path="/item">{ItemRouter}</Route>
				<Route path="/month">{MonthRouter}</Route>
			</Route>
		</Routes>
	);
});
