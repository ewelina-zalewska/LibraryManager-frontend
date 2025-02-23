import { createFileRoute } from "@tanstack/react-router";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";
import { LogoutUser } from "@/pages/auth/logout/LogoutUser";

type BooksSearch = {
	status: string;
};

export const Route = createFileRoute("/logout")({
	validateSearch: (search: Record<string, unknown>): BooksSearch => ({
		status: String(search?.status ?? "Something went wrong"),
	}),
	component: LogoutUser,
	notFoundComponent: () => PageNotFound("Login form"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
