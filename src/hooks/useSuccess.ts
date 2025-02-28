import { useEffect, useState, useContext } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ResponseMessage } from "@/types";
import { UserDataContext } from "@/context/UserDataContext";
import { useCreateLogMutation } from "@/mutations/useCreateLogMutation";
import { getTime } from "@/utils/getTime";

export const useSuccess = (page: string, response: ResponseMessage | null) => {
	const time = 2000;
	const userData = useContext(UserDataContext);
	const [success, setSuccess] = useState<boolean>(false);
	const navigate = useNavigate();
	const { mutate: CREATE_LOG } = useCreateLogMutation();
	const { login } = userData;
	useEffect(() => {
		if (!success) return;
		const timeout = setTimeout(() => {
			if (response && response.status === "success") {
				navigate({ to: page });

				if (!response.action) return;
				CREATE_LOG({
					action: response.action,
					bookId: response.bookId || null,
					created_on: new Date().toISOString().split("T")[0],
					created_at: getTime(),
					userID: response.id || login,
				});
				setSuccess(false);
			}
		}, time);
		return () => {
			clearTimeout(timeout);
		};
	}, [success, response]);

	return { success, setSuccess };
};
