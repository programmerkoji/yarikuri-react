import { TopResponseApi } from "@/types/top";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchTopMonthsApi = async (page: number): Promise<TopResponseApi> => {
	let url = `${API_BASE_URL}/top?page=${page}`;
	const response = await axios.get<TopResponseApi>(url, {
		withCredentials: true,
		withXSRFToken: true,
	});
	return response.data;
};
