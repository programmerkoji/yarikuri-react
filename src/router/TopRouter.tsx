import { Top } from "@/pages/tops/Top";
import { Route } from "react-router";
import { Detail } from "@/pages/tops/Detail";

export const TopRouter = (
	<>
		<Route index element={<Top />} />
		<Route path="detail/:id" element={<Detail />} />
	</>
);
