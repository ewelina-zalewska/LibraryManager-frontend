import { createFileRoute } from "@tanstack/react-router";
import { bookQueryOptions } from "@/queries/bookQuery";
import { TheError } from "@/components/handleData/TheError";
import { DataLoading } from "@/components/handleData/DataLoading";

export const Route = createFileRoute("/auth/_withUserAuth/user/books/$bookId")({
	loader: ({ context, params }) => {
		const { queryClient } = context;
		const { bookId } = params;
		return queryClient.ensureQueryData(bookQueryOptions(bookId));
	},
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
