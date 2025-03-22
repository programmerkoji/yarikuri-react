import { useEffect, useState } from "react";
import { ItemsResponseApi } from "../types/item";
import { fetchItemsApi } from "../api/itemApi";

export const useItems = () => {
	const initialPage = Number(sessionStorage.getItem("currentPage")) || 1;
	const [items, setItems] = useState<ItemsResponseApi>();
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState<number>(initialPage);

	const fetchItems = async (page: number = 1) => {
		setLoading(true);
		try {
			const data = await fetchItemsApi(page);
			setItems(data);
			setCurrentPage(page);
			sessionStorage.setItem("currentPage", String(page));
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchItems(initialPage);
	}, []);

	return { items, fetchItems, loading, currentPage, initialPage };
};
