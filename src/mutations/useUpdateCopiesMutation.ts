import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BookCopiesDto, ResponseMessage } from "@/types";
import { useApi } from "@/hooks/useApi";

export const useUpdateCopiesMutation = (id: string) => {
	const { API_PATCH } = useApi();
	const queryClient = useQueryClient();

	const { mutate, data, error, isPending } = useMutation({
		mutationKey: ["books", id],
		mutationFn: async (body: BookCopiesDto) => {
			return API_PATCH<ResponseMessage, BookCopiesDto>(`books/${id}`, body);
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
