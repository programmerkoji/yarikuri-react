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
		const response = await axios.post(`${API_BASE_URL}/api/login`, {
			email,
			password,
		});
		return response.data;
	} catch (error: any) {
		console.log(error);
		throw error;
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
		console.error("ユーザー取得エラー：", error);
		return null;
	}
};
