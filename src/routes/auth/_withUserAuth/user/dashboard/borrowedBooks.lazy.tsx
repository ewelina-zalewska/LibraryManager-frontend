﻿import { createLazyFileRoute } from "@tanstack/react-router";
import { BorrowedBooks } from "@/pages/auth/user/dashboard/BorrowedBooks";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createLazyFileRoute(
	"/auth/_withUserAuth/user/dashboard/borrowedBooks",
)({
	component: BorrowedBooks,
	notFoundComponent: () => PageNotFound("Books list"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
