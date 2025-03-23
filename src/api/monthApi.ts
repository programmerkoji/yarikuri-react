import { Month, MonthResponseApi, MonthsResponseApi } from "@/types/month";
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

export const fetchMonthApi = async (id: number): Promise<Month> => {
	const response = await axios.get<MonthResponseApi>(
		`${API_BASE_URL}/months/${id}`,
		{
			withCredentials: true,
			withXSRFToken: true,
		}
	);
	return response.data.month;
};

export const storeMonthApi = async (data: Month) => {
	try {
		const response = await axios.post<Month>(
			`${API_BASE_URL}/months`,
			{ ...data },
			{ withCredentials: true, withXSRFToken: true }
		);
		return response;
	} catch (error: unknown) {
		if (axios.isAxiosError(error)) {
			if (error.response?.status === 422) {
				if (error.response.data.unique_error)
					throw error.response.data;
				// バリデーションエラーの場合はエラーオブジェクトを throw
				throw error.response.data.errors;
			}
			throw new Error(error.response?.data?.message || "APIエラー");
		} else if (error instanceof Error) {
			console.error("General error:", error.message);
			throw new Error(error.message);
		} else {
			console.error("Unexpected error:", error);
			throw new Error("予期せぬエラーが起きました");
		}
	}
};

export const updateMonthApi = async (id: number, data: Month) => {
	try {
		const response = await axios.put<Month>(
			`${API_BASE_URL}/months/${id}`,
			{ ...data },
			{ withCredentials: true, withXSRFToken: true }
		);
		return response;
	} catch (error: unknown) {
		if (axios.isAxiosError(error)) {
			if (error.response?.status === 422) {
				if (error.response.data.unique_error)
					throw error.response.data;
				// バリデーションエラーの場合はエラーオブジェクトを throw
				throw error.response.data.errors;
			}
			throw new Error(error.response?.data?.message || "APIエラー");
		} else if (error instanceof Error) {
			console.error("General error:", error.message);
			throw new Error(error.message);
		} else {
			console.error("Unexpected error:", error);
			throw new Error("予期せぬエラーが起きました");
		}
	}
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
