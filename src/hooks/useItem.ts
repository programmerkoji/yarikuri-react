import { useEffect, useState } from "react";
import { Item } from "../types/item";
import { fetchItemApi } from "../api/itemApi";
import { useParams } from "react-router";

export const useItem = () => {
	const [item, setItem] = useState<Item>();
	const [loading, setLoading] = useState(true);
	const { id } = useParams<{ id: string }>();

	const fetchItem = async () => {
		setLoading(true);
		try {
			const data = await fetchItemApi(Number(id));
			setItem(data);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchItem();
	}, [id]);

	return { item, fetchItem, loading };
};
