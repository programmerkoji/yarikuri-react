import { MonthsResponseApi } from "@/types/month";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchMonthsApi = async (
	page: number = 1
): Promise<MonthsResponseApi> => {
	let url = `${API_BASE_URL}/months?page=${page}`;
	const response = await axios.get<MonthsResponseApi>(url, {
		withCredentials: true,
		withXSRFToken: true,
	});
	return response.data;
};

export const deleteMonthApi = async (id: number | null) => {
	try {
		const response = await axios.delete(`${API_BASE_URL}/months/${id}`, {
			withCredentials: true,
			withXSRFToken: true,
		});
		return response;
	} catch (error) {
		console.error(error);
	}
};
