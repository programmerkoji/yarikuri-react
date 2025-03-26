export const Detail = () => {
	return (
		<div className="py-12">
			<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg flex-wrap">
					<div className="p-4 text-gray-900 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						<div className="max-w-sm rounded border border-gray-300">
							<div className="text-gray-700 text-base block px-6 py-4">
								<p>家賃</p>
								<input type="checkbox" name="" id="" />
							</div>
						</div>
						<div className="max-w-sm rounded border border-gray-300">
							<div className="text-gray-700 text-base block px-6 py-4">
								<p>光熱費</p>
								<input type="checkbox" name="" id="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
