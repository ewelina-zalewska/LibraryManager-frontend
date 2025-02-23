import { createLazyFileRoute } from "@tanstack/react-router";
import { SingleBook } from "@/components/auth/SingleBook";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createLazyFileRoute(
	"/auth/_withUserAuth/user/books/$bookId",
)({
	component: () => SingleBook("user"),
	notFoundComponent: () => PageNotFound("Book"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
