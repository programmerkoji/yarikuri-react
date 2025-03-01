import { Item } from "@/pages/Item";
import { Login } from "@/pages/Login";
import { Month } from "@/pages/Month";
import { Top } from "@/pages/Top";
import { HeaderLayout } from "@/template/HeaderLayout";
import { FC, memo } from "react";
import { Outlet, Route, Routes } from "react-router";

export const Router: FC = memo(() => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route
				element={
					<HeaderLayout>
						<Outlet />
					</HeaderLayout>
				}
			>
				<Route path="/top" element={<Top />} />
				<Route path="/item" element={<Item />} />
				<Route path="/month" element={<Month />} />
			</Route>
		</Routes>
	);
});
