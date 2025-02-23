import { createLazyFileRoute } from "@tanstack/react-router";
import { BooksList } from "@/components/auth/BooksList";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createLazyFileRoute("/auth/_withAdminAuth/admin/books")({
	component: () => BooksList("admin"),
	notFoundComponent: () => PageNotFound("Books list"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
