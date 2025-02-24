import { createFileRoute } from "@tanstack/react-router";
import { TheDashboard } from "@/components/auth/TheDashboard";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createFileRoute("/auth/_withUserAuth/user/dashboard")({
	component: TheDashboard,
	notFoundComponent: () => PageNotFound("Dashboard"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
