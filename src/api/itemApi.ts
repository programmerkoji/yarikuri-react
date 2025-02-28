import axios from "axios";
import { ItemResponseApi } from "../types/item";

const API_BASE_URL = 'http://localhost';

export const fetchItemApi = async (): Promise<ItemResponseApi> => {
		let url = `${API_BASE_URL}/api/items`;
		const response = await axios.get<ItemResponseApi>(url, {
			withCredentials: true,
			withXSRFToken: true,
		});
		return response.data;
};
