import { createLazyFileRoute } from "@tanstack/react-router";
import { BorrowBook } from "@/pages/auth/user/books/BorrowBook";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createLazyFileRoute(
	"/auth/_withUserAuth/user/borrow/$bookId",
)({
	component: BorrowBook,
	notFoundComponent: () => PageNotFound("Book"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
