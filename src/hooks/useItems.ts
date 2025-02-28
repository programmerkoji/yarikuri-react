import { useEffect, useState } from "react";
import { ItemResponseApi } from "../types/item";
import { fetchItemApi } from "../api/itemApi";

export const useItems = () => {
	const [items, setItems] = useState<ItemResponseApi>();

	useEffect(() => {
		const fetchItems = async () => {
			const data = await fetchItemApi();
			setItems(data);
		};
		fetchItems();
	}, []);
	return { items };
};
