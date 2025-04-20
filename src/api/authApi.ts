import { UserType } from "@/types/user";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getCsrfToken = async () => {
	await axios.get(`${API_BASE_URL}/sanctum/csrf-cookie`, {
		withCredentials: true,
	});
};

export const loginApi = async (email: string, password: string) => {
	await getCsrfToken();
	try {
		const response = await axios.post(
			`${API_BASE_URL}/api/login`,
			{
				email,
				password,
			},
			{ withCredentials: true, withXSRFToken: true }
		);
		return response.data;
	} catch (error: unknown) {
		if (axios.isAxiosError(error)) {
			if (error.response?.status === 422) {
				throw error.response.data.errors;
			}
			if (error.response?.status === 401) {
				throw error.response.data.message;
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

export const logoutApi = async () => {
	await axios.post(`${API_BASE_URL}/api/logout`, {});
};

export const fetchUser = async (): Promise<UserType | null> => {
	try {
		const response = await axios.get<UserType>(`${API_BASE_URL}/api/user`, {
			withCredentials: true,
		});
		return response.data;
	} catch (error) {
		// console.error("ユーザー取得エラー：", error);
		return null;
	}
};
