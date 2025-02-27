import { LogResponse } from "@/types";
import { apiCall } from "@/utils/apiCall";
import { queryOptions } from "@tanstack/react-query";

export const logsQueryOptions = queryOptions({
	queryKey: ["logs"],
	queryFn: async () => {
		return apiCall<LogResponse>("logs");
	},
});
