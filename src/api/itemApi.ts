import axios from "axios";
import { Item, ItemResponseApi, ItemsResponseApi } from "../types/item";

const API_BASE_URL = "http://localhost";

export const fetchItemsApi = async (): Promise<ItemsResponseApi> => {
	let url = `${API_BASE_URL}/api/items`;
	const response = await axios.get<ItemsResponseApi>(url, {
		withCredentials: true,
		withXSRFToken: true,
	});
	return response.data;
};

export const fetchItemApi = async (id: number): Promise<Item> => {
	let url = `${API_BASE_URL}/api/items/${id}`;
	const response = await axios.get<ItemResponseApi>(url, {
		withCredentials: true,
		withXSRFToken: true,
	});
	return response.data.item;
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

export const updateItemApi = async (id: number, data: Item) => {
	try {
		const response = await axios.put<Item>(
			`${API_BASE_URL}/api/items${id}`,
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
