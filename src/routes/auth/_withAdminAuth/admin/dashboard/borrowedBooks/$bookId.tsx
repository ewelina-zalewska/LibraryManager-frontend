import { createFileRoute } from "@tanstack/react-router";
import { TheError } from "@/components/handleData/TheError";
import { DataLoading } from "@/components/handleData/DataLoading";
import { borrowedBoookQueryOptions } from "@/queries/borrowedBookQuery";

export const Route = createFileRoute(
	"/auth/_withAdminAuth/admin/dashboard/borrowedBooks/$bookId",
)({
	loader: ({ context, params }) => {
		const { queryClient } = context;
		const { bookId } = params;
		return queryClient.ensureQueryData(borrowedBoookQueryOptions(bookId));
	},
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
