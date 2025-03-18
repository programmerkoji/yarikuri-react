import { UserType } from "@/types/user";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
const API_URL = "http://localhost";

export const getCsrfToken = async () => {
	await axios.get(`${API_URL}/sanctum/csrf-cookie`);
};

export const loginApi = async (email: string, password: string) => {
	await getCsrfToken();
	try {
		const response = await axios.post(`${API_URL}/api/login`, {
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
	await axios.post(`${API_URL}/api/logout`, {});
};

export const fetchUser = async (): Promise<UserType | null> => {
	try {
		const response = await axios.get<UserType>(`${API_URL}/api/user`, {
			withCredentials: true,
		});
		return response.data;
	} catch (error) {
		console.error('ユーザー取得エラー：', error)
		return null;
	}
};
