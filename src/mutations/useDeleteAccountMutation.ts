import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "@/hooks/useApi";
import { User } from "@/types";

export const useDeleteAccountMutation = () => {
	const queryClient = useQueryClient();
	const { API_DELETE } = useApi();

	const { mutate, error, isPending, data } = useMutation({
		mutationKey: ["delete-user"],
		mutationFn: async (id: string) => API_DELETE<User>(`register/${id}`),
		onSuccess: (deletedUser: User) => {
			queryClient.setQueryData<User[]>(["register"], (oldUsersResponse) => {
				return oldUsersResponse?.filter((user) => user.id !== deletedUser.id);
			});
		},
	});
	return { mutate, error, isPending, data };
};
