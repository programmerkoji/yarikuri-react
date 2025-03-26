import { fetchTopMonthsApi } from "@/api/TopApi";
import { MonthsResponseApi } from "@/types/month";
import { useEffect, useState } from "react";

export const useTopMonths = () => {
	const initialPage = Number(sessionStorage.getItem("currentPage")) || 1;
	const [topMonths, setTopMonths] = useState<MonthsResponseApi>();
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(initialPage);

	const fetchTopMonths = async (page: number = 1) => {
		setLoading(true);
		try {
			const data = await fetchTopMonthsApi(page);
			setTopMonths(data);
			setCurrentPage(page);
			sessionStorage.setItem("currentPage", String(page));
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchTopMonths(initialPage);
	}, []);

	return { topMonths, loading, currentPage, initialPage, fetchTopMonths };
};
