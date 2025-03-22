export type Item = {
	id: number | null;
	name: string;
	price: string;
};

export type ItemsResponseApi = {
	calculateTotalAmounts: number;
	items: {
		current_page: number;
		data: Item[];
		path: string;
		last_page: number;
		per_page: number;
		total: number;
		custom_links: PaginationLinks[];
	};
};

export type ItemResponseApi = {
	item: Item;
};

export type PaginationLinks = {
	url: string;
	label: string;
	active: boolean;
};
