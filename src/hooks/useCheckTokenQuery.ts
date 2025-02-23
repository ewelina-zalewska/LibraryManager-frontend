import { useState } from "react";
import { ResponseMessage } from "@/types";

const API_BASE = import.meta.env.VITE_API_URL;

export const useCheckTokenQuery = (url: string) => {
	const [isAuthorized, setAuthorized] = useState<"access" | "reject" | null>(
		null,
	);
	const [login, setLogin] = useState<string | null>(null);
	const [role, setRole] = useState<string | null>(null);

	fetch(`${API_BASE}${url}`, {
		credentials: "include",
	})
		.then((response) => {
			return response.json();
		})
		.then((data: ResponseMessage) => {
			if (data.status === "success") {
				if (data.id) setLogin(data.id);
				if (data.role) setRole(data.role);

				setAuthorized("access");
			} else setAuthorized("reject");
		})
		.catch((error) => Promise.reject(`Error: ${error}`));

	return { isAuthorized, login, role };
};
