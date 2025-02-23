﻿import { createFileRoute } from "@tanstack/react-router";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { booksQueryOptions } from "@/queries/booksQuery";

type BooksSearch = {
	page: number;
};

export const Route = createFileRoute("/auth/_withAdminAuth/admin/books")({
	validateSearch: (search: Record<string, unknown>): BooksSearch => ({
		page: Number(search?.page ?? 1),
	}),
	loader: ({ context }) => {
		const { queryClient } = context;
		return queryClient.ensureQueryData(booksQueryOptions);
	},
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
