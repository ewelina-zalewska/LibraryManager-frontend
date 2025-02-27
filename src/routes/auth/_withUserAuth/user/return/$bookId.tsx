import { createFileRoute } from "@tanstack/react-router";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { borrowedBoookQueryOptions } from "@/queries/borrowedBookQuery";

export const Route = createFileRoute("/auth/_withUserAuth/user/return/$bookId")(
	{
		loader: ({ context, params }) => {
			const { queryClient } = context;
			const { bookId } = params;
			return queryClient.ensureQueryData(borrowedBoookQueryOptions(bookId));
		},
		pendingComponent: DataLoading,
		errorComponent: TheError,
	},
);
