import { fetchTopItemsApi, updateItemCheckedApi } from "@/api/TopApi";
import { TopItemResponseApi } from "@/types/top";
import { useState } from "react";
import { useParams } from "react-router";

export const useTopItems = () => {
	const [topItems, setTopItems] = useState<TopItemResponseApi>({
		calculateTotalAmounts: 0,
		items: [],
	});
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	const fetchTopItems = async () => {
		setLoading(true);
		try {
			const data = await fetchTopItemsApi(Number(id));
			setTopItems(data);
		} finally {
			setLoading(false);
		}
	};

	const toggleCheck = async (itemId: number) => {
		setTopItems((prev) => {
			if (!prev) return prev;
			console.log(prev);

			return {
				...prev,
				items: prev.items.map((item) => {
					if (item.id === itemId) {
						const newCheckedValue = item.is_checked ? 0 : 1;
						return { ...item, is_checked: newCheckedValue };
					}
					return item;
				}),
			};
		});

		try {
			const item = topItems?.items.find((item) => item.id === itemId);
			if (!item) return;

			const newCheckedValue = item.is_checked ? 0 : 1;

			const data = {
				item_id: itemId,
				month_id: Number(id),
				is_checked: newCheckedValue,
			};
			await updateItemCheckedApi(data);
		} catch (error) {}
	};

	return { topItems, loading, fetchTopItems, toggleCheck };
};
