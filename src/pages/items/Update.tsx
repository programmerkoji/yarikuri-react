import { updateItemApi } from "@/api/itemApi";
import { Loading } from "@/components/atoms/Loading";
import { ItemForm } from "@/components/organisms/form/ItemForm";
import { useItem } from "@/hooks/useItem";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const Update = () => {
	const { item, loading } = useItem();
	const [errors, setErrors] = useState<Record<string, string[]>>({});
	const [generalError, setGeneralError] = useState<string | null>(null);
	const navigate = useNavigate();

	const handleUpdate = async (formData: {
		id: number | null;
		name: string;
		price: string;
	}) => {
		setErrors({});
		setGeneralError(null);

		if (!item?.id || !formData) {
			toast.error("Invalid item data.");
			return;
		}
		try {
			const response = await updateItemApi(item?.id, formData);
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
	return loading ? (
		<Loading />
	) : (
		<main>
			<div className="py-12">
				<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
					<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
						<div className="p-4 text-gray-900">
							<ItemForm
								initialData={item ?? { id: null, name: "", price: "" }}
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
