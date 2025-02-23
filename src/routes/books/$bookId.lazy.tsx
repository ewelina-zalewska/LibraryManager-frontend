import { createLazyFileRoute } from "@tanstack/react-router";
import { SingleBook } from "@/pages/books/SingleBook";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createLazyFileRoute("/books/$bookId")({
	component: SingleBook,
	notFoundComponent: () => PageNotFound("Book"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
