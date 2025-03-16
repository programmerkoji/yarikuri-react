import axios from "axios";
import { Item, ItemResponseApi } from "../types/item";

const API_BASE_URL = "http://localhost";

export const fetchItemsApi = async (): Promise<ItemResponseApi> => {
	let url = `${API_BASE_URL}/api/items`;
	const response = await axios.get<ItemResponseApi>(url, {
		withCredentials: true,
		withXSRFToken: true,
	});
	return response.data;
};

export const fetchItemApi = async (): Promise<ItemResponseApi> => {
	let url = `${API_BASE_URL}/api/items`;
	const response = await axios.get<ItemResponseApi>(url, {
		withCredentials: true,
		withXSRFToken: true,
	});
	return response.data;
};

export const storeItemApi = async (data: Item) => {
	try {
		const response = await axios.post<Item>(
			`${API_BASE_URL}/api/items`,
			{ ...data },
			{ withCredentials: true, withXSRFToken: true }
		);
		return response;
	} catch (error) {
		console.log(error);
	}
};

export const deleteItemApi = async (id: number | null) => {
	try {
		const response = await axios.delete(`${API_BASE_URL}/api/items/${id}`, {
			withCredentials: true,
			withXSRFToken: true,
		});
		return response;
	} catch (error) {
		console.log(error);
	}
};
