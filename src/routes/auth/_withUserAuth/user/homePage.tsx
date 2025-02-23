import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/auth/user/HomePage";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createFileRoute("/auth/_withUserAuth/user/homePage")({
	component: HomePage,
	notFoundComponent: () => PageNotFound("Dashboard"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
