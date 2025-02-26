import { createFileRoute } from "@tanstack/react-router";
import { bookQueryOptions } from "@/queries/bookQuery";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";

type BookSearch = {
	status: string;
};

export const Route = createFileRoute(
	"/auth/_withAdminAuth/admin/delete/$bookId",
)({
	validateSearch: (search: Record<string, unknown>): BookSearch => ({
		status: String(search?.status ?? "Something went wrong"),
	}),
	loader: ({ context, params }) => {
		const { queryClient } = context;
		const { bookId } = params;
		return queryClient.ensureQueryData(bookQueryOptions(bookId));
	},
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
