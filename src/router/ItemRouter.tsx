import { Create } from "@/pages/items/Create";
import { Item } from "@/pages/items/Item";
import { Update } from "@/pages/items/Update";
import { Route } from "react-router";

export const ItemRouter = (
	<>
		<Route index element={<Item />} />
		<Route path="create" element={<Create />} />
		<Route path="edit/:id" element={<Update />} />
	</>
);
