﻿import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BookDto, ResponseMessage } from "@/types";
import { useApi } from "@/hooks/useApi";

export const useUpdateBookMutation = (bookId: string) => {
	const { API_PUT } = useApi();
	const queryClient = useQueryClient();

	const { mutate, data, error, isPending } = useMutation({
		mutationKey: ["books", bookId],
		mutationFn: async (payload: BookDto) => {
			return API_PUT<ResponseMessage, BookDto>(`books/${bookId}`, payload);
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
