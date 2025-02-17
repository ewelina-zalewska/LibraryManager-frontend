import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ResponseMessage } from "@/types";
import { useCreateLogMutation } from "@/mutations/useCreateLogMutation";

export const useSuccess = (page: string, response: ResponseMessage | null) => {
	const [success, setSuccess] = useState<boolean>(false);
	const navigate = useNavigate();
	const { mutate: CREATE_LOG } = useCreateLogMutation();

	useEffect(() => {
		if (!success) return;
		const timeout = setTimeout(() => {
			if (response && response.status === "success") {
				navigate({ to: page });
				const date = new Date();
				CREATE_LOG({
					action: response.action,
					created_on: date.toISOString().split("T")[0],
					created_at: `${date.getHours()}:${date.getMinutes()}`,
					userID: response.id || "",
				});
				setSuccess(false);
			}
		}, 3000);
		return () => {
			clearTimeout(timeout);
		};
	}, [success, response]);

	return { success, setSuccess };
};
