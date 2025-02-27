import { createLazyFileRoute } from "@tanstack/react-router";
import { ReturnBook } from "@/pages/auth/user/books/ReturnBook";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createLazyFileRoute(
	"/auth/_withUserAuth/user/return/$bookId",
)({
	component: ReturnBook,
	notFoundComponent: () => PageNotFound("Book"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
