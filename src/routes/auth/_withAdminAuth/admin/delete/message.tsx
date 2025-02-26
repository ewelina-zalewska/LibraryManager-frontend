import { createFileRoute } from "@tanstack/react-router";
import { DeleteBookMessage } from "@/pages/auth/admin/books/DeleteBookMessage";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";

export const Route = createFileRoute(
	"/auth/_withAdminAuth/admin/delete/message",
)({
	component: DeleteBookMessage,
	notFoundComponent: () => PageNotFound("Book"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
