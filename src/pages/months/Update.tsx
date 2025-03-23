import { updateMonthApi } from "@/api/monthApi";
import { Loading } from "@/components/atoms/Loading";
import { MonthForm } from "@/components/organisms/form/MonthForm";
import { useMonth } from "@/hooks/useMonth";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const Update = () => {
	const { loading, month } = useMonth();
	const [errors, setErrors] = useState<Record<string, string[]>>({});
	const [generalError, setGeneralError] = useState("");
	const navigate = useNavigate();

	const handleUpdate = async (formData: {
		id: number | null;
		year: string;
		month: string;
	}) => {
		setErrors({});
		setGeneralError("");

		if (!month?.id || !formData) {
			toast.error("Invalid item data.");
			return;
		}

		try {
			const response = await updateMonthApi(month?.id, formData);
			if (response) {
				navigate("/month", { state: response.data });
			}
		} catch (error) {
			if (typeof error === "object" && error !== null) {
				setErrors(error as Record<string, string[]>);
			} else if (error instanceof Error) {
				setGeneralError(error.message);
			}
		}
	};
	return loading ? (
		<Loading />
	) : (
		<main>
			<div className="py-12">
				<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
					<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
						<div className="p-4 text-gray-900">
							<MonthForm
								initialData={month ?? { id: null, year: "", month: "" }}
								onSubmit={handleUpdate}
								errors={errors}
								generalError={generalError}
								buttonText="更新する"
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};
