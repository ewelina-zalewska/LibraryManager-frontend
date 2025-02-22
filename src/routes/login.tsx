import { createFileRoute } from "@tanstack/react-router";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";
import { LoginUser } from "@/pages/auth/login/LoginUser";

export const Route = createFileRoute("/login")({
	component: LoginUser,
	notFoundComponent: () => PageNotFound("Login form"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
