import { createFileRoute } from "@tanstack/react-router";
import { bookQueryOptions } from "@/queries/bookQuery";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";

export const Route = createFileRoute("/auth/_withUserAuth/user/borrow/$bookId")(
	{
		loader: ({ context, params }) => {
			const { queryClient } = context;
			const { bookId } = params;
			return queryClient.ensureQueryData(bookQueryOptions(bookId));
		},
		pendingComponent: DataLoading,
		errorComponent: TheError,
	},
);
