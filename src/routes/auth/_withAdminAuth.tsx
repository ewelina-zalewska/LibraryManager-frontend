import { createFileRoute } from "@tanstack/react-router";
import { WithAuth } from "@/components/auth/WithAuth";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createFileRoute("/auth/_withAdminAuth")({
	component: () => WithAuth("auth/admin"),
	notFoundComponent: () => PageNotFound("Page"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
