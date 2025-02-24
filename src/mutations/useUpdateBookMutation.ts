import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BookDto, ResponseMessage } from "@/types";
import { useApi } from "@/hooks/useApi";

export const useUpdateBookMutation = (id: string) => {
	const { API_PATCH } = useApi();
	const queryClient = useQueryClient();

	const { mutate, data, error, isPending } = useMutation({
		mutationKey: ["books", id],
		mutationFn: async (body: BookDto) => {
			return API_PATCH<ResponseMessage, BookDto>(`books/${id}`, body);
		},

		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["books"],
			});
			queryClient.refetchQueries({
				queryKey: ["books"],
			});
		},
	});

	return { mutate, error, data, isPending };
};
