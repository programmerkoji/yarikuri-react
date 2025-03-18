import { useEffect, useState } from "react";
import { ItemsResponseApi } from "../types/item";
import { fetchItemsApi } from "../api/itemApi";

export const useItems = () => {
	const [items, setItems] = useState<ItemsResponseApi>();
	const [loading, setLoading] = useState(true);

	const fetchItems = async () => {
		setLoading(true);
		try {
			const data = await fetchItemsApi();
			setItems(data);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchItems();
	}, []);

	return { items, fetchItems, loading };
};
