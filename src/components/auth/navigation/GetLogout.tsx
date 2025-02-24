import { FormEvent, useEffect } from "react";
import { useLogoutMutation } from "@/mutations/useLogoutMutation";
import { useCreateLogMutation } from "@/mutations/useCreateLogMutation";
import { getTime } from "@/utils/getTime";
import { useNavigate } from "@tanstack/react-router";

type LogoutProps = {
	logoutLink: string;
	selected: () => "text-orange-400" | null;
};

export const GetLogout = ({ logoutLink, selected }: LogoutProps) => {
	const { mutate: LOGOUT_USER, data } = useLogoutMutation();
	const { mutate: CREATE_LOG } = useCreateLogMutation();

	const GO_TO_LOGOUT_USER = (e: FormEvent) => {
		e.preventDefault();
		LOGOUT_USER({ message: "Logout" });
	};

	const navigate = useNavigate();

	useEffect(() => {
		if (data && data.status === "success") {
			if (!data.action || !data.id) return;
			CREATE_LOG({
				action: data.action,
				bookId: null,
				created_on: new Date().toISOString().split("T")[0],
				created_at: getTime(),
				userID: data.id,
			});
			navigate({ to: logoutLink, search: { status: data.message } });
		}
	}, [data]);

	return (
		<li>
			<button
				type="submit"
				onClick={GO_TO_LOGOUT_USER}
				className={`${selected} cursor-pointer border-none `}
			>
				Logout
			</button>
		</li>
	);
};
