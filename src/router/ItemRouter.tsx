import { Create } from "@/pages/items/Create";
import { Item } from "@/pages/items/Item";
import { Route } from "react-router";

export const ItemRouter = (
	<>
		<Route index element={<Item />} />
		<Route path={"create"} element={<Create />} />
	</>
);
