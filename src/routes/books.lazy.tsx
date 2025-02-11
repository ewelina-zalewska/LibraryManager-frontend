﻿import { createLazyFileRoute } from "@tanstack/react-router";
import { BooksList } from "@/pages/books/BooksList";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createLazyFileRoute("/books")({
	component: BooksList,
	notFoundComponent: () => PageNotFound("Books list"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
