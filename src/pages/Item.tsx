import { useItems } from "../hooks/useItems";

export const Item: React.FC = () => {
	const { items } = useItems();
	const itemDatas = items?.items.data;
	return (
		<div className="py-12">
			<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
					<div className="p-4 text-gray-900">
						<div className="py-4 flex justify-between items-center">
							<a
								href="{{route('items.create')}}"
								className="inline-flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded"
							>
								項目追加
							</a>
							<dl className="flex gap-2 justify-end">
								<dt>合計金額</dt>
								<dd>{items?.calculateTotalAmounts}円</dd>
							</dl>
						</div>
						<div className="relative overflow-x-auto">
							<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 min-w-max">
								<thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
									<tr>
										<th scope="col" className="px-6 py-4">
											No
										</th>
										<th scope="col" className="px-6 py-4">
											項目名
										</th>
										<th scope="col" className="px-6 py-4 text-center">
											金額
										</th>
										<th scope="col" className="px-6 py-4 text-center">
											&nbsp;
										</th>
									</tr>
								</thead>
								<tbody>
									{itemDatas?.map(({ id, name, price }) => (
										<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"key={id}>
											<td className="px-6 py-4">
												<div className="flex items-center">{ id }</div>
											</td>
											<td className="px-6 py-4">
												<div className="flex items-center">{ name }</div>
											</td>
											<td className="px-6 py-4">
												<div className="flex items-center justify-end">{ price }</div>
											</td>
											<td className="px-6 py-4">
												<div className="flex items-center justify-center gap-2">
													<a
														href="{{route('items.edit', ['item' => $item->id])}}"
														className="inline-flex text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded"
													>
														編集
													</a>
													<form
														id="delete_{{$item->id}}"
														action="{{route('items.destroy', ['item' => $item->id])}}"
														method="post"
													>
														<a
															href="#"
															className="inline-flex text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded"
														>
															削除
														</a>
													</form>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className="mt-4"></div>
					</div>
				</div>
			</div>
		</div>
	);
};
