﻿import { createFileRoute } from "@tanstack/react-router";
import { DataLoading } from "@/components/handleData/DataLoading";
import { TheError } from "@/components/handleData/TheError";
import { PageNotFound } from "@/components/handleData/PageNotFound";
import { RegisterUser } from "@/pages/auth/user/register/RegisterUser";

export const Route = createFileRoute("/register")({
	component: RegisterUser,
	notFoundComponent: () => PageNotFound("Register form"),
	pendingComponent: DataLoading,
	errorComponent: TheError,
});
