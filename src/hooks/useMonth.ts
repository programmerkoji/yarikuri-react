import { fetchMonthApi } from "@/api/monthApi";
import { Month } from "@/types/month";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const useMonth = () => {
	const [loading, setLoading] = useState(true);
	const [month, setMonth] = useState<Month>();
	const { id } = useParams();

	const fetchMonth = async () => {
		setLoading(true);
		try {
			const data = await fetchMonthApi(Number(id));
			setMonth(data);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchMonth();
	}, [id]);

	return { loading, month };
};
