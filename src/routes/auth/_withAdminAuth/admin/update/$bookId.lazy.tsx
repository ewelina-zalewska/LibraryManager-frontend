import { createLazyFileRoute } from "@tanstack/react-router";
import { UpdateBook } from "@/pages/auth/admin/books/UpdateBook";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createLazyFileRoute(
	"/auth/_withAdminAuth/admin/update/$bookId",
)({
	component: UpdateBook,
	notFoundComponent: () => PageNotFound("Book"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
