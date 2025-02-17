import { ResponseMessage } from "@/types";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const useSuccess = (page: string, response?: ResponseMessage) => {
	const [success, setSuccess] = useState<boolean>(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (!success) return;
		const timeout = setTimeout(() => {
			setSuccess(false);
			if (response?.status === "success") navigate({ to: page });
			console.log(response?.status);
		}, 3000);
		return () => {
			clearTimeout(timeout);
		};
	}, [success, response]);

	return { success, setSuccess };
};
