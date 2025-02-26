import { createLazyFileRoute } from "@tanstack/react-router";
import { BooksList } from "@/pages/auth/admin/books/BooksList";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createLazyFileRoute("/auth/_withAdminAuth/admin/books")({
	component: BooksList,
	notFoundComponent: () => PageNotFound("Books list"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
