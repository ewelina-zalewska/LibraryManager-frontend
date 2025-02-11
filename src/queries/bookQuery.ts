import { BookResponse } from "@/types";
import { apiCall } from "@/utils/apiCall";
import { queryOptions } from "@tanstack/react-query";

export const bookQueryOptions = (bookId: string) =>
	queryOptions({
		queryKey: ["books", bookId],
		queryFn: async () => {
			return apiCall<BookResponse>(`books/${bookId}`);
		},
	});
