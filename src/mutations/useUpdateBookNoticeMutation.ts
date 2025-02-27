import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ResponseMessage } from "@/types";
import { useApi } from "@/hooks/useApi";

type NoticeDto = {
	notice: boolean;
};

export const useUpdateBookNoticeMutation = (id: string) => {
	const { API_PATCH } = useApi();
	const queryClient = useQueryClient();

	const { mutate, data, error, isPending } = useMutation({
		mutationKey: ["borrowedBooks", id],
		mutationFn: async (body: NoticeDto) => {
			return API_PATCH<ResponseMessage, NoticeDto>(`borrowedBooks/${id}`, body);
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
