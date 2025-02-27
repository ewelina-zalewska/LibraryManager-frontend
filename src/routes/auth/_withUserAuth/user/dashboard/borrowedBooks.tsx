import { createFileRoute } from "@tanstack/react-router";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { borrowedBooksQueryOptions } from "@/queries/borrowedBooksQuery";

type BooksSearch = {
	page: number;
};

export const Route = createFileRoute(
	"/auth/_withUserAuth/user/dashboard/borrowedBooks",
)({
	validateSearch: (search: Record<string, unknown>): BooksSearch => ({
		page: Number(search?.page ?? 1),
	}),
	loader: ({ context }) => {
		const { queryClient } = context;
		return queryClient.ensureQueryData(borrowedBooksQueryOptions);
	},
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
