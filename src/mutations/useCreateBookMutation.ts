import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BookDto, ResponseMessage } from "@/types";
import { useApi } from "@/hooks/useApi";

export const useCreateBookMutation = () => {
	const { API_POST } = useApi();
	const queryClient = useQueryClient();

	const { mutate, error, isPending, data } = useMutation({
		mutationKey: ["new-book"],
		mutationFn: async (body: BookDto) =>
			API_POST<ResponseMessage, BookDto>("books", body),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["books"],
			});
			queryClient.refetchQueries({
				queryKey: ["books"],
			});
		},
	});
	return { mutate, error, isPending, data };
};
