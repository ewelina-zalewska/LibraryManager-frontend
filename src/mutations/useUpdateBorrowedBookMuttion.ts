import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BorrowedBookDataDto, ResponseMessage } from "@/types";
import { useApi } from "@/hooks/useApi";

export const useUpdateBorrowedBookMutation = (bookId: string) => {
	const { API_PUT } = useApi();
	const queryClient = useQueryClient();

	const { mutate, data, error, isPending } = useMutation({
		mutationKey: ["borrowedBooks", bookId],
		mutationFn: async (payload: BorrowedBookDataDto) => {
			return API_PUT<ResponseMessage, BorrowedBookDataDto>(
				`borrowedBooks/${bookId}`,
				payload,
			);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["borrowedBooks"],
			});
			queryClient.refetchQueries({
				queryKey: ["borrowedBooks"],
			});
		},
	});

	return { mutate, error, data, isPending };
};
