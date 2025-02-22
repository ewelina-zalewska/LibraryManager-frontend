import { useMutation } from "@tanstack/react-query";
import { LoginDto, ResponseMessage } from "@/types";
import { useApi } from "@/hooks/useApi";

export const useLogInMutation = () => {
	const { API_POST } = useApi();

	const { mutate, error, isPending, data } = useMutation({
		mutationKey: ["new-user"],
		mutationFn: async (body: LoginDto) =>
			API_POST<ResponseMessage, LoginDto>("login", body),
	});
	return { mutate, error, isPending, data };
};
