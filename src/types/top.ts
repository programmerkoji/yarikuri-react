import { Month } from "./month";

export type TopMonthResponseApi = {
	months: {
		current_page: number;
		data: Month[];
		path: string;
		last_page: number;
		per_page: number;
		total: number;
		custom_links: PaginationLinks[];
	};
};

export type TopItem = {
	id: number | null;
	name: string;
	price: string;
	is_checked: number | null;
};

export type TopItemResponseApi = {
	calculateTotalAmounts: number;
	items: TopItem[];
};

export type PaginationLinks = {
	url: string;
	label: string;
	active: boolean;
};
