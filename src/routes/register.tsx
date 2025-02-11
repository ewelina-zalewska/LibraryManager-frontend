import { createFileRoute } from "@tanstack/react-router";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createFileRoute("/register")({
	notFoundComponent: () => PageNotFound("Register form"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
