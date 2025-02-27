import { createFileRoute } from "@tanstack/react-router";
import { TheLogs } from "@/pages/auth/admin/dashboard/TheLogs";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

type BooksSearch = {
	page: number;
};

export const Route = createFileRoute(
	"/auth/_withAdminAuth/admin/dashboard/logs",
)({
	validateSearch: (search: Record<string, unknown>): BooksSearch => ({
		page: Number(search?.page ?? 1),
	}),
	component: TheLogs,
	notFoundComponent: () => PageNotFound("Books list"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
