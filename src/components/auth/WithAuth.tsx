import { useEffect, FormEvent } from "react";
import { Outlet, useNavigate } from "@tanstack/react-router";
import { useCheckTokenQuery } from "@/hooks/useCheckTokenQuery";
import { useLogoutMutation } from "@/mutations/useLogoutMutation";
import { CollapsibleAccordion } from "@/components/CollapsibleAccordion";
import { LogoutUser } from "@/pages/auth/logout/LogoutUser";

export const WithAuth = (url: string) => {
	const { isAuthorized } = useCheckTokenQuery(url);
	const { mutate: LOGOUT_USER, data } = useLogoutMutation();

	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthorized === "reject") navigate({ to: "/login" });
		console.log(data);
	}, [isAuthorized]);

	const GO_TO_LOGOUT_USER = (e: FormEvent) => {
		e.preventDefault();
		LOGOUT_USER({ message: "Logout" });
	};

	return (
		<CollapsibleAccordion>
			<button
				type="submit"
				onClick={GO_TO_LOGOUT_USER}
				className="cursor-pointer border p-5"
			>
				Logout
			</button>
			<LogoutUser />
			<Outlet />
		</CollapsibleAccordion>
	);
};
