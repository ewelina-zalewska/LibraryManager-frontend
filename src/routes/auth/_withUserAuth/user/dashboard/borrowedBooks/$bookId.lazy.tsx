import { createLazyFileRoute } from "@tanstack/react-router";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";
import { SingleBorrowedBook } from "@/pages/auth/user/dashboard/SingleBorrowedBook";

export const Route = createLazyFileRoute(
	"/auth/_withUserAuth/user/dashboard/borrowedBooks/$bookId",
)({
	component: SingleBorrowedBook,
	notFoundComponent: () => PageNotFound("Book"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
