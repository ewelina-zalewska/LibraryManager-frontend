import { createLazyFileRoute } from "@tanstack/react-router";
import { SingleBook } from "@/pages/books/SingleBook";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createLazyFileRoute(
	"/auth/_withAdminAuth/admin/books/$bookId",
)({
	component: () => SingleBook("/auth//user/books"),
	notFoundComponent: () => PageNotFound("Book"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
