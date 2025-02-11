import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/HomePage";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createFileRoute("/")({
	component: HomePage,
	notFoundComponent: () => PageNotFound("Page"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
