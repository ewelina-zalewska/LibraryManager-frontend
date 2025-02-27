import { BorrowedBook } from "@/types";
import { apiCall } from "@/utils/apiCall";
import { queryOptions } from "@tanstack/react-query";

export const borrowedBoookQueryOptions = (bookId: string) =>
	queryOptions({
		queryKey: ["borrowedBook", bookId],
		queryFn: async () => {
			return apiCall<BorrowedBook>(`borrowedBooks/${bookId}`);
		},
	});
