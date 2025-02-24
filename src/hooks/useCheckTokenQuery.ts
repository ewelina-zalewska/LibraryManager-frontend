import { useEffect, useState } from "react";
import { ResponseMessage } from "@/types";
import { UserDataContextType } from "@/context/ConfigUserDataContext";

const API_BASE = import.meta.env.VITE_API_URL;

export const useCheckTokenQuery = (url: string) => {
	const [isAuthorized, setAuthorized] = useState<"access" | "reject" | null>(
		null,
	);

	const [userData, setUserData] = useState<UserDataContextType>({
		login: null,
		role: null,
		name: null,
	});

	useEffect(() => {
		fetch(`${API_BASE}${url}`, {
			credentials: "include",
		})
			.then((response) => {
				return response.json();
			})
			.then((data: ResponseMessage) => {
				if (data.status === "success") {
					if (data.id && data.role && data.name)
						setUserData({
							login: data.id,
							role: data.role,
							name: data.name,
						});

					setAuthorized("access");
				} else setAuthorized("reject");
			})
			.catch((error) => Promise.reject(`Error: ${error}`));
	}, []);

	return { isAuthorized, userData };
};
