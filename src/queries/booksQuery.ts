import { BookResponse } from "@/types";
import { apiCall } from "@/utils/apiCall";
import { queryOptions } from "@tanstack/react-query";

export const booksQueryOptions = queryOptions({
	queryKey: ["books"],
	queryFn: async () => {
		return apiCall<BookResponse[]>("books");
	},
});
