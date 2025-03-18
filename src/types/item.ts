export type Item = {
	id: number | null;
	name: string;
	price: number | null;
};

export type ItemsResponseApi = {
	calculateTotalAmounts: number;
	items: {
		current_page: number;
		data: Item[];
		path: string;
		per_page: number;
		total: number;
	}
};

export type ItemResponseApi = {
	item: Item;
};
