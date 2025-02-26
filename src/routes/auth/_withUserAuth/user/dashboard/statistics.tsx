import { createFileRoute } from "@tanstack/react-router";
import { TheStatistics } from "@/pages/auth/user/dashboard/TheStatistics";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createFileRoute(
	"/auth/_withUserAuth/user/dashboard/statistics",
)({
	component: TheStatistics,
	notFoundComponent: () => PageNotFound("Statistics"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
