import { createFileRoute } from "@tanstack/react-router";
import { userQueryOptions } from "@/queries/userQuery";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";

export const Route = createFileRoute(
	"/auth/_withUserAuth/user/dashboard/deleteAccount/$userId",
)({
	loader: ({ context, params }) => {
		const { queryClient } = context;
		const { userId } = params;
		return queryClient.ensureQueryData(userQueryOptions(userId));
	},
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
