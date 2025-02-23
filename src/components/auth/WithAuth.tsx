import { useEffect } from "react";
import { Outlet, useNavigate } from "@tanstack/react-router";
import { useCheckTokenQuery } from "@/hooks/useCheckTokenQuery";

export const WithAuth = (url: string) => {
	const { isAuthorized } = useCheckTokenQuery(url);

	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthorized === "reject") navigate({ to: "/login" });
	}, [isAuthorized]);

	return <Outlet />;
};
