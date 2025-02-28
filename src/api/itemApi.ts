import axios from "axios";
import { item } from "../types/item";

const API_BASE_URL = 'http://localhost';

export const fetchItemApi = async (): Promise<item[]> => {
		let url = `${API_BASE_URL}/api/items`;
		const response = await axios.get<item[]>(url, {
			withCredentials: true,
			withXSRFToken: true,
		});
		return response.data;
};
