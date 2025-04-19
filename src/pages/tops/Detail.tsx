import { Loading } from "@/components/atoms/Loading";
import { useTopItems } from "@/hooks/useTopItems";
import { useEffect } from "react";

export const Detail = () => {
	const { topItems, loading, toggleCheck, fetchTopItems } = useTopItems();
	const itemData = topItems?.items;
	const calculateTotalAmounts = topItems?.calculateTotalAmounts;

	useEffect(() => {
		fetchTopItems();
	}, []);


	return loading ? (
		<Loading />
	) : (
		<div className="py-12">
			<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg flex-wrap">
						<div className="p-4 pb-0 text-gray-900 flex items-center justify-end">
							<div className="font-bold text-lg text-gray-700"><span>合計: </span>{Number(calculateTotalAmounts).toLocaleString()}円</div>
						</div>
						<div className="p-4 text-gray-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{itemData?.map(({ id, name, price, is_checked }) => (
							<div
								className="max-w-sm rounded border border-gray-300 text-right"
								key={id}
							>
								<div className="text-gray-700 text-sm px-2 lg:px-4 py-2 flex gap-2">
									<div className="flex items-center justify-center w-[24px]">
										<input
											type="checkbox"
											name="is_checked"
											id={`check-${id}`}
											checked={is_checked === 1}
											onChange={() => toggleCheck(Number(id))}
										/>
									</div>
									<label htmlFor={`check-${id}`} className="flex-1 cursor-pointer">
										<p className="pb-2 font-bold">{name}</p>
										<p>{Number(price).toLocaleString()}円</p>
									</label>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
