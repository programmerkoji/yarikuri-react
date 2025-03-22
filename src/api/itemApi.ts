import axios from "axios";
import { Item, ItemResponseApi, ItemsResponseApi } from "../types/item";

const API_BASE_URL = "http://localhost";

export const fetchItemsApi = async (page: number = 1): Promise<ItemsResponseApi> => {
	let url = `${API_BASE_URL}/api/items?page=${page}`;
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
	} catch (error: unknown) {
		if (axios.isAxiosError(error)) {
			if (error.response?.status === 422) {
				// バリデーションエラーの場合はエラーオブジェクトを throw
				throw error.response.data.errors;
			}
			throw new Error(error.response?.data?.message || 'APIエラー')
		} else if (error instanceof Error) {
			console.error("General error:", error.message);
			throw new Error(error.message)
		} else {
			console.error("Unexpected error:", error);
			throw new Error("予期せぬエラーが起きました");
		}
	}
};

export const updateItemApi = async (
	id: number | null | undefined,
	data: Item | undefined
) => {
	if (!id || !data) {
		throw new Error("Invalid parameters: id and data are required.");
	}
	try {
		const response = await axios.put<Item>(
			`${API_BASE_URL}/api/items/${id}`,
			{ ...data },
			{ withCredentials: true, withXSRFToken: true }
		);
		return response;
	} catch (error: unknown) {
		if (axios.isAxiosError(error)) {
			if (error.response?.status === 422) {
				// バリデーションエラーの場合はエラーオブジェクトを throw
				throw error.response.data.errors;
			}
			throw new Error(error.response?.data?.message || 'APIエラー')
		} else if (error instanceof Error) {
			console.error("General error:", error.message);
			throw new Error(error.message)
		} else {
			console.error("Unexpected error:", error);
			throw new Error("予期せぬエラーが起きました");
		}
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
