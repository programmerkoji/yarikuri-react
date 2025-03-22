import { storeItemApi } from "@/api/itemApi";
import { ItemForm } from "@/components/organisms/form/ItemForm";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const Create = () => {
	const [errors, setErrors] = useState<Record<string, string[]>>({});
	const [generalError, setGeneralError] = useState<string | null>(null);
	const navigate = useNavigate();

	const handleCreate = async (formData: {
		id: number | null;
		name: string;
		price: string;
	}) => {
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
								<ItemForm
									initialData={{ id: null, name: "", price: "" }}
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
