import { deleteMonthApi } from "@/api/monthApi";
import { Loading } from "@/components/atoms/Loading";
import { PaginationComponent } from "@/components/molecules/PaginationComponent";
import { useMonths } from "@/hooks/useMonths";
import { Link } from "react-router";
import { toast } from "sonner";

export const Month: React.FC = () => {
	const { months, loading, currentPage, initialPage, fetchMonths } =
		useMonths();
	const monthDatas = months?.months.data;
	const { last_page = 0, custom_links = [] } = months?.months || {};

	const handleDelete = async (
		e: React.MouseEvent<HTMLButtonElement>,
		id: number | null
	) => {
		e.preventDefault();
		const confirmed = window.confirm("本当に削除しますか？");
		if (!confirmed) return;
		try {
			const response = await deleteMonthApi(id);
			await fetchMonths(initialPage);
			toast.info(response?.data.message);
		} catch (error) {
			console.error(error);
		}
	};

	return loading ? (
		<Loading />
	) : (
		<div className="py-12">
			<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
					<div className="p-4 text-gray-900">
						<div className="py-4 flex justify-between items-center">
							<Link
								to={"create"}
								className="inline-flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded"
							>
								項目追加
							</Link>
						</div>
						<div className="relative overflow-x-auto">
							<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 min-w-max">
								<thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
									<tr>
										<th scope="col" className="px-6 py-4 text-center">
											年
										</th>
										<th scope="col" className="px-6 py-4 text-center">
											月
										</th>
										<th scope="col" className="px-6 py-4 text-center">
											&nbsp;
										</th>
									</tr>
								</thead>
								<tbody>
									{monthDatas?.map(({ id, year, month }) => (
										<tr
											className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
											key={id}
										>
											<td className="px-6 py-4">
												<div className="flex items-center justify-center">
													{year}年
												</div>
											</td>
											<td className="px-6 py-4">
												<div className="flex items-center justify-center">
													{month}月
												</div>
											</td>
											<td className="px-6 py-4">
												<div className="flex items-center justify-center gap-2">
													<Link
														to={`edit/${id}`}
														className="inline-flex text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded"
													>
														編集
													</Link>
													<form>
														<button
															onClick={(e) => handleDelete(e, id)}
															className="inline-flex text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded"
														>
															削除
														</button>
													</form>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<PaginationComponent
							currentPage={currentPage}
							custom_links={custom_links}
							last_page={last_page}
							onPageChange={fetchMonths}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
