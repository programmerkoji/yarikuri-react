import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { PaginationLinks } from "@/types/item";

type Props = {
	currentPage: number;
	custom_links: PaginationLinks[];
	last_page: number;
	onPageChange: (page: number) => void;
};

export const PaginationComponent = ({
	currentPage,
	custom_links,
	last_page,
	onPageChange
}: Props) => {

	return (
		<div className="mt-4">
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious
							href="#"
							onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
							className={
								currentPage === 1 ? "opacity-50 pointer-events-none" : ""
							}
						/>
					</PaginationItem>
					{currentPage - 3 >= 1 && (
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
					)}
					{custom_links.map((link, index) => (
						<PaginationItem key={index}>
							<PaginationLink
								href="#"
								onClick={() => onPageChange(Number(link.label))}
								className={link.active ? "bg-gray-700 text-white" : ""}
							>
								{link.label}
							</PaginationLink>
						</PaginationItem>
					))}
					{currentPage + 3 <= last_page && (
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
					)}
					<PaginationItem>
						<PaginationNext
							href="#"
							onClick={() =>
								currentPage !== last_page && onPageChange(currentPage + 1)
							}
							className={
								currentPage === last_page
									? "opacity-50 pointer-events-none"
									: ""
							}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
};
