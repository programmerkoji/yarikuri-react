import { TopItemResponseApi, TopMonthResponseApi } from "@/types/top";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchTopMonthsApi = async (
	page: number
): Promise<TopMonthResponseApi> => {
	let url = `${API_BASE_URL}/api/top-month?page=${page}`;
	const response = await axios.get<TopMonthResponseApi>(url, {
		withCredentials: true,
		withXSRFToken: true,
	});
	return response.data;
};

export const fetchTopItemsApi = async (
	monthId: number
): Promise<TopItemResponseApi> => {
	let url = `${API_BASE_URL}/api/top-item/${monthId}`;
	const response = await axios.get<TopItemResponseApi>(url, {
		withCredentials: true,
		withXSRFToken: true,
	});
	return response.data;
};

export const updateItemCheckedApi = async (data: {
	item_id: number;
	month_id: number;
	is_checked: number;
}) => {
	const response = await axios.post(
		`${API_BASE_URL}/api/top-item`,
		{ ...data },
		{ withCredentials: true, withXSRFToken: true }
	);
	console.log(response);
};
