import { useMutation } from "@tanstack/react-query";
import { ResponseMessage } from "@/types";
import { useApi } from "@/hooks/useApi";

type LogoutDto = { message: "Logout" };

export const useLogoutMutation = () => {
	const { API_POST } = useApi();

	const { mutate, error, isPending, data } = useMutation({
		mutationKey: ["logout"],
		mutationFn: async (body: LogoutDto) =>
			API_POST<ResponseMessage, LogoutDto>("logout", body),
	});
	return { mutate, error, isPending, data };
};
