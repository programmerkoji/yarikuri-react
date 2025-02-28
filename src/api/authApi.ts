import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
const API_URL = "http://localhost";

export const getCsrfToken = async () => {
	await axios.get(`${API_URL}/sanctum/csrf-cookie`);
};

export const loginApi = async (email: string, password: string) => {
	await getCsrfToken();
	const response = await axios.post(
		`${API_URL}/api/login`,
		{
			email,
			password,
		}
	);
	return response.data;
};

export const logoutApi = async () => {
  await axios.post(`${API_URL}/api/logout`, {});
};
