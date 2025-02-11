import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserDto, ResponseMessage } from "@/types";
import { useApi } from "@/hooks/useApi";

export const useCreateUserMutation = () => {
	const { API_POST } = useApi();
	const queryClient = useQueryClient();

	const { mutate, error, isPending, data } = useMutation({
		mutationKey: ["new-user"],
		mutationFn: async (body: UserDto) =>
			API_POST<ResponseMessage, UserDto>("register", body),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["users"],
			});
		},
	});
	return { mutate, error, isPending, data };
};
