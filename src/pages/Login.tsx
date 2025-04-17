import { FormEvent, useState } from "react";
import { loginApi } from "../api/authApi";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { toast } from "sonner";

export const Login = () => {
	const [mail, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState<Record<string, string[]>>({});
	const [authErrors, setAuthErrors] = useState("");
	const [generalError, setGeneralError] = useState<string | null>(null);
	const { login: setUser } = useAuth();
	const navigate = useNavigate();

	const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const userData = await loginApi(mail, password);
			const { id, name, email } = userData.user;
			setUser({ id, name, email });
			navigate("/top");
		} catch (error: any) {
			if (typeof error === "object" && error !== null) {
				setErrors(error as Record<string, string[]>);
			} else if (typeof error === "string" && error !== null) {
				setAuthErrors(error);
			} else if (error instanceof Error) {
				setGeneralError(error.message);
			}
			if (error.response) {
				if (error.response.status === 403) {
					toast(error.response.data.message);
					navigate("/top");
				}
			}
		}
	};

	return (
		<div className="font-sans text-gray-900 antialiased">
			<div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
				<div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
					<div className="p-4 bg-gray-100 mb-2">
						<p>●テストユーザー情報</p>
						<dl className="mt-2">
							<div className="flex">
								<dt>メールアドレス：</dt>
								<dd>test@test.com</dd>
							</div>
							<div className="flex">
								<dt>パスワード：</dt>
								<dd>password1234</dd>
							</div>
						</dl>
					</div>

					<form onSubmit={handleLogin}>
						{generalError && (
							<p className="block text-rose-700 mt-2">{generalError}</p>
						)}
						{authErrors && (
							<p className="block text-rose-700 mt-4 mb-4">{authErrors}</p>
						)}
						<div>
							<label className="block font-medium text-sm text-gray-700">
								メールアドレス
							</label>
							<input
								type="email"
								name="email"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required
								value={mail}
								onChange={(e) => setEmail(e.target.value)}
							/>
							{errors.email &&
								errors.email.map((msg, index) => (
									<span key={index} className="block text-rose-700 mt-2">
										{msg}
									</span>
								))}
						</div>
						<div className="mt-4">
							<label className="block font-medium text-sm text-gray-700">
								パスワード
							</label>
							<input
								type="password"
								name="password"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							{errors.password &&
								errors.password.map((msg, index) => (
									<span key={index} className="block text-rose-700 mt-2">
										{msg}
									</span>
								))}
						</div>
						<div className="flex items-center justify-end mt-6">
							<button
								type="submit"
								className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150 ml-3"
							>
								ログイン
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
