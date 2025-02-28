import { createLazyFileRoute } from "@tanstack/react-router";
import { DeleteAccount } from "@/pages/auth/user/dashboard/DeleteAccount";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createLazyFileRoute(
	"/auth/_withUserAuth/user/dashboard/deleteAccount/$userId",
)({
	component: DeleteAccount,
	notFoundComponent: () => PageNotFound("Book"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
