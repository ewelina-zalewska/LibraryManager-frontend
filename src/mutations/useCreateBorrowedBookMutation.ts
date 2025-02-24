import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BorrowedBookDto, ResponseMessage } from "@/types";
import { useApi } from "@/hooks/useApi";

export const useCreateBorrowedBookMutation = () => {
	const { API_POST } = useApi();
	const queryClient = useQueryClient();

	const { mutate, error, isPending, data } = useMutation({
		mutationKey: ["new-borrowedBook"],
		mutationFn: async (body: BorrowedBookDto) =>
			API_POST<ResponseMessage, BorrowedBookDto>("borrowedBooks", body),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["borrowedBooks"],
			});
		},
	});
	return { mutate, error, isPending, data };
};
