import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/auth/admin/HomePage";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createFileRoute("/auth/_withAdminAuth/admin")({
	component: HomePage,
	notFoundComponent: () => PageNotFound("Page"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
