import { createFileRoute } from "@tanstack/react-router";
import { TheOutlet } from "@/components/auth/TheOutlet";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createFileRoute("/auth/_withAdminAuth/admin/delete")({
	component: TheOutlet,
	notFoundComponent: () => PageNotFound("Book"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
