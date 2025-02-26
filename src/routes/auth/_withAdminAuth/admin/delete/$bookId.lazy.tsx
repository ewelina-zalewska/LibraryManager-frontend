import { createLazyFileRoute } from "@tanstack/react-router";
import { DeleteBook } from "@/pages/auth/admin/books/DeleteBook";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createLazyFileRoute(
	"/auth/_withAdminAuth/admin/delete/$bookId",
)({
	component: DeleteBook,
	notFoundComponent: () => PageNotFound("Book"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
