import { createFileRoute } from "@tanstack/react-router";
import { TheOutlet } from "@/components/auth/TheOutlet";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createFileRoute("/auth/_withAdminAuth/admin")({
	component: TheOutlet,
	notFoundComponent: () => PageNotFound("Page"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
