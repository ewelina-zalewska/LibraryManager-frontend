import { createFileRoute } from "@tanstack/react-router";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { booksQueryOptions } from "@/queries/booksQuery";

export const Route = createFileRoute(
	"/auth/_withAdminAuth/admin/update/$bookId",
)({
	loader: ({ context }) => {
		const { queryClient } = context;
		return queryClient.ensureQueryData(booksQueryOptions);
	},
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
