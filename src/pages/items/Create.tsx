import { storeItemApi } from "@/api/itemApi";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

export const Create = () => {
	const [formData, setFormData] = useState({ id: null, name: "", price: null });
	const [errors, setErrors] = useState<Record<string, string[]>>({});
	const [generalError, setGeneralError] = useState<string | null>(null);
	const navigate = useNavigate();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setErrors({});
		setGeneralError(null);

		if (!formData) {
			toast.error("Invalid item data.");
			return;
		}

		try {
			const response = await storeItemApi(formData);
			if (response) {
				navigate("/item", { state: response.data });
			}
		} catch (error) {
			if (typeof error === "object" && error !== null) {
				setErrors(error as Record<string, string[]>);
			} else if (error instanceof Error) {
				setGeneralError(error.message);
			}
		}
	};

	return (
		<main>
			<div className="py-12">
				<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
					{generalError && <p>{generalError}</p>}
					<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
						<div className="p-4 text-gray-900">
							<div className="p-4 text-gray-900">
								<form
									className="lg:w-3/4 mx-auto devide devide-y"
									onSubmit={handleSubmit}
								>
									<div className="flex flex-col lg:flex-row gap-4">
										<div className="w-full">
											<label className="leading-7 text-sm text-gray-600">
												項目名
											</label>
											<input
												type="name"
												name="name"
												value={formData.name}
												className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
												onChange={handleChange}
											/>
											{errors.name &&
												errors.name.map((msg, index) => (
													<span
														key={index}
														className="block text-rose-700 mt-2"
													>
														{msg}
													</span>
												))}
										</div>
										<div className="w-full">
											<label className="leading-7 text-sm text-gray-600">
												金額
											</label>
											<input
												type="price"
												name="price"
												value={formData.price ?? ""}
												className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
												onChange={handleChange}
											/>
											{errors.price &&
												errors.price.map((msg, index) => (
													<span
														key={index}
														className="block text-rose-700 mt-2"
													>
														{msg}
													</span>
												))}
										</div>
									</div>
									<div className="flex gap-2 items-center flex-wrap">
										<button className="text-white bg-blue-500 border-0 mt-4 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
											登録する
										</button>
										<Link
											to="/item"
											className="text-white bg-gray-500 border-0 mt-4 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"
										>
											戻る
										</Link>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};
