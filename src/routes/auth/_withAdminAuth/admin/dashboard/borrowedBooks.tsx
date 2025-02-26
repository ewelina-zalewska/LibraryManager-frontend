import { createFileRoute } from "@tanstack/react-router";
import { BorrowedBooks } from "@/pages/auth/admin/dashboard/BorrowedBooks";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createFileRoute(
	"/auth/_withAdminAuth/admin/dashboard/borrowedBooks",
)({
	component: BorrowedBooks,
	notFoundComponent: () => PageNotFound("Books list"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
