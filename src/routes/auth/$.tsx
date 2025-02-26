import { useEffect } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useLogoutMutation } from "@/mutations/useLogoutMutation";

const WrongPlace = () => {
	const { mutate: LOGOUT_USER, data } = useLogoutMutation();
	const navigate = useNavigate();
	useEffect(() => {
		LOGOUT_USER({ message: "Logout" });
		navigate({ to: "/" });
		console.log(data);
	});
};

export const Route = createFileRoute("/auth/$")({
	component: WrongPlace,
});
