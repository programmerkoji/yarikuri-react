export type Top = {
	id: number | null;
	year: string;
	month: string;
};

export type TopResponseApi = {
	months: {
		current_page: number;
		data: Top[];
		path: string;
		last_page: number;
		per_page: number;
		total: number;
		custom_links: PaginationLinks[];
	};
};

export type MonthResponseApi = {
	month: Top;
};

export type PaginationLinks = {
	url: string;
	label: string;
	active: boolean;
};
