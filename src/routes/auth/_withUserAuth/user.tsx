import { createFileRoute } from "@tanstack/react-router";
import { VisitingCard } from "@/components/auth/VisitingCard";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createFileRoute("/auth/_withUserAuth/user")({
	component: VisitingCard,
	notFoundComponent: () => PageNotFound("Page"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
