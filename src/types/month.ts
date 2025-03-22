export type Month = {
	id: number | null;
	year: string;
	month: string;
};

export type MonthsResponseApi = {
	calculateTotalAmounts: number;
	months: {
		current_page: number;
		data: Month [];
		path: string;
		last_page: number;
		per_page: number;
		total: number;
		custom_links: PaginationLinks[];
	};
};

export type MonthResponseApi = {
	month: Month;
};

export type PaginationLinks = {
	url: string;
	label: string;
	active: boolean;
};
