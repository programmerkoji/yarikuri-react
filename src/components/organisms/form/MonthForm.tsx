import { useState } from "react";
import { Link } from "react-router";

type Props = {
	initialData: { id: number | null; year: string; month: string };
	onSubmit: (initialData: {
		id: number | null;
		year: string;
		month: string;
	}) => Promise<void>;
	errors: Record<string, string[]>;
	generalError: string | null;
	buttonText: string;
};

export const MonthForm = ({
	initialData,
	onSubmit,
	errors,
	generalError,
	buttonText,
}: Props) => {
	const [formData, setFormData] = useState(initialData);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev!,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await onSubmit(formData);
	};

	return (
		<form onSubmit={handleSubmit} className="lg:w-3/4 mx-auto devide devide-y">
			{generalError && <p className="block text-rose-700 mt-2">{generalError}</p>}
			{errors.unique_error && <p className="block text-rose-700 mt-2">{errors.unique_error}</p>}
			<div className="w-full">
				<label className="leading-7 text-sm text-gray-600">年（西暦）</label>
				<input
					type="text"
					name="year"
					value={formData?.year}
					className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					onChange={handleChange}
				/>
				{errors.year &&
					errors.year.map((msg, index) => (
						<span key={index} className="block text-rose-700 mt-2">
							{msg}
						</span>
					))}
			</div>
			<div className="w-full">
				<label className="leading-7 text-sm text-gray-600">月</label>
				<input
					type="text"
					name="month"
					value={formData?.month}
					className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					onChange={handleChange}
				/>
				{errors.month &&
					errors.month.map((msg, index) => (
						<span key={index} className="block text-rose-700 mt-2">
							{msg}
						</span>
					))}
			</div>
			<div className="flex gap-2 items-center flex-wrap">
				<button className="text-white bg-blue-500 border-0 mt-4 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
					{buttonText}
				</button>
				<Link
					to={"/month"}
					className="text-white bg-gray-500 border-0 mt-4 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"
				>
					戻る
				</Link>
			</div>
		</form>
	);
};
