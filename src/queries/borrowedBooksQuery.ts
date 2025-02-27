import { borrowedBookObjectResponse } from "@/types";
import { apiCall } from "@/utils/apiCall";
import { queryOptions } from "@tanstack/react-query";

export const borrowedBooksQueryOptions = queryOptions({
	queryKey: ["borrowedBooks"],
	queryFn: async () => {
		return apiCall<borrowedBookObjectResponse>("borrowedBooks");
	},
});
