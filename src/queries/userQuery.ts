import { User } from "@/types";
import { apiCall } from "@/utils/apiCall";
import { queryOptions } from "@tanstack/react-query";

export type UserResponse = User;

export const userQueryOptions = (userId: string) =>
	queryOptions({
		queryKey: ["users", userId],
		queryFn: async () => {
			return apiCall<UserResponse>(`register/${userId}`);
		},
	});
