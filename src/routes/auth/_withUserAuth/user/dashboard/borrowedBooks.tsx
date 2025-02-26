import { createFileRoute } from "@tanstack/react-router";
import { BorrowedBooks } from "@/pages/auth/user/dashboard/BorrowedBooks";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createFileRoute(
	"/auth/_withUserAuth/user/dashboard/borrowedBooks",
)({
	component: BorrowedBooks,
	notFoundComponent: () => PageNotFound("Books"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
