import { storeMonthApi } from "@/api/monthApi";
import { MonthForm } from "@/components/organisms/form/MonthForm";
import { useState } from "react";
import { useNavigate } from "react-router";

export const Create = () => {
  const navigate = useNavigate();
	const [errors, setErrors] = useState<Record<string, string[]>>({});
	const [generalError, setGeneralError] = useState<string | null>(null);
	const handleCreate = async (formData: {
		id: number | null;
		year: string;
		month: string;
	}) => {
		setErrors({});
    setGeneralError(null);
    try {
      const response = await storeMonthApi(formData);
      if (response) {
        navigate("/month", {state: response.data})
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
					<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
						<div className="p-4 text-gray-900">
							<div className="p-4 text-gray-900">
								<MonthForm
									initialData={{ id: null, year: "", month: "" }}
									onSubmit={handleCreate}
									errors={errors}
									generalError={generalError}
									buttonText="登録する"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};
