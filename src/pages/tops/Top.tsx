import { Loading } from "@/components/atoms/Loading";
import { PaginationComponent } from "@/components/molecules/PaginationComponent";
import { useTopMonths } from "@/hooks/useTopMonths";
import { Link } from "react-router";

export const Top = () => {
	const { topMonths, loading, currentPage, initialPage, fetchTopMonths } =
		useTopMonths();
	const monthDatas = topMonths?.months.data;
	const { last_page = 0, custom_links = [] } = topMonths?.months || {};

	return loading ? (
		<Loading />
	) : (
		<div className="py-12">
			<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg flex-wrap">
					<div className="p-4 text-gray-900 grid grid-cols-2 lg:grid-cols-4 gap-4">
						{monthDatas?.map(({ id, year, month }) => (
							<div className="max-w-sm rounded border border-gray-300" key={id}>
								<Link
									to={`detail/${id}`}
									className="text-gray-700 text-sm block px-6 py-4"
								>
									{year}年{month}月
								</Link>
							</div>
						))}
					</div>
					<div className="pb-4">
						<PaginationComponent
							currentPage={currentPage}
							custom_links={custom_links}
							last_page={last_page}
							onPageChange={fetchTopMonths}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
