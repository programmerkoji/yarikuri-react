import { fetchMonthsApi } from "@/api/monthApi";
import { MonthsResponseApi } from "@/types/month";
import { useEffect, useState } from "react";

export const useMonths = () => {
	const initialPage = Number(sessionStorage.getItem("currentPage")) || 1;
	const [months, setMonths] = useState<MonthsResponseApi>();
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(initialPage);

	const fetchMonths = async (page: number = 1) => {
		setLoading(true);
		try {
			const data = await fetchMonthsApi(page);
			setMonths(data);
			setCurrentPage(page);
			sessionStorage.setItem("currentPage", String(page));
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchMonths(initialPage);
	}, []);

	return { months, loading, currentPage, initialPage, fetchMonths };
};
