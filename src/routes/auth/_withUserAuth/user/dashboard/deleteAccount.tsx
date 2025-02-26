import { createFileRoute } from "@tanstack/react-router";
import { DeleteAccount } from "@/pages/auth/user/dashboard/DeleteAccount";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createFileRoute(
	"/auth/_withUserAuth/user/dashboard/deleteAccount",
)({
	component: DeleteAccount,
	notFoundComponent: () => PageNotFound("Books"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
