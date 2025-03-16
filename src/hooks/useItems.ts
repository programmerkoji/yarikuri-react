import { useEffect, useState } from "react";
import { ItemResponseApi } from "../types/item";
import { fetchItemsApi } from "../api/itemApi";

export const useItems = () => {
	const [items, setItems] = useState<ItemResponseApi>();

	const fetchItems = async () => {
		const data = await fetchItemsApi();
		setItems(data);
	};

	useEffect(() => {
		fetchItems();
	}, []);
	return { items, fetchItems };
};
