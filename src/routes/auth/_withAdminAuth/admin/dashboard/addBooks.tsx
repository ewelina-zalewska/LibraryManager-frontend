import { createFileRoute } from "@tanstack/react-router";
import { AddBooks } from "@/pages/auth/admin/dashboard/AddBooks";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createFileRoute(
	"/auth/_withAdminAuth/admin/dashboard/addBooks",
)({
	component: AddBooks,
	notFoundComponent: () => PageNotFound("Books list"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
