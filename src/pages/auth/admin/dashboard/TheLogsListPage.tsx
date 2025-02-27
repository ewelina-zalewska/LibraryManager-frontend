import { getRouteApi } from "@tanstack/react-router";
import { Log } from "@/types";
import { ChangePageButton } from "@/components/navigation/ChangePageButton";

const logsRoute = getRouteApi("/auth/_withAdminAuth/admin/dashboard/logs");

type LogsProps = {
	filteredLogs: Log[];
	logsPerPage: number;
	currentPage: number;
};

export const TheLogsListPage = ({
	filteredLogs,
	logsPerPage,
	currentPage,
}: LogsProps) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(filteredLogs.length / logsPerPage); i++) {
		pageNumbers.push(i);
	}

	const navigate = logsRoute.useNavigate();
	const CHANGE_PAGE = (page: number) => navigate({ search: { page } });

	const TO_PREVIOUS_PAGE = (page: number) => {
		const previousPage = page - 1;
		navigate({ search: { page: previousPage } });
	};

	const TO_NEXT_PAGE = (page: number) => {
		const nextPage = page + 1;
		navigate({ search: { page: nextPage } });
	};

	return (
		<nav className="flex justify-center md:justify-end items-center gap-1 w-[80%] mx-auto py-4 ">
			{currentPage !== 1 && (
				<ChangePageButton
					btnLabel="Previous"
					onClick={() => TO_PREVIOUS_PAGE(currentPage)}
				/>
			)}
			<ul className="flex gap-1 flex-wrap justify-center">
				{pageNumbers.map((number) => (
					<li key={number}>
						<ChangePageButton
							btnLabel={number}
							onClick={() => CHANGE_PAGE(number)}
							disabled={currentPage === number}
						/>
					</li>
				))}
			</ul>
			{currentPage !== pageNumbers.length && (
				<ChangePageButton
					btnLabel="Next"
					onClick={() => TO_NEXT_PAGE(currentPage)}
				/>
			)}
		</nav>
	);
};
