import { useEffect } from "react";
import { Outlet, useNavigate } from "@tanstack/react-router";
import { UserDataContext } from "@/context/UserDataContext";

import { useCheckTokenQuery } from "@/hooks/useCheckTokenQuery";
import { Route as LoginImport } from "@/routes/login";

export const WithAuth = (url: "auth/user" | "auth/admin") => {
	const { isAuthorized, userData } = useCheckTokenQuery(url);

	const LoginRoute = LoginImport.fullPath;

	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthorized === "reject") navigate({ to: LoginRoute });
	}, [isAuthorized]);

	return (
		<UserDataContext.Provider value={userData}>
			<Outlet />
		</UserDataContext.Provider>
	);
};
