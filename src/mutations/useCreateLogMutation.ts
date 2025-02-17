import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LogDto, ResponseMessage } from "@/types";
import { useApi } from "@/hooks/useApi";

export const useCreateLogMutation = () => {
	const { API_POST } = useApi();
	const queryClient = useQueryClient();

	const { mutate, error, isPending, data } = useMutation({
		mutationKey: ["new-log"],
		mutationFn: async (body: LogDto) =>
			API_POST<ResponseMessage, LogDto>("logs", body),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["logs"],
			});
		},
	});
	return { mutate, error, isPending, data };
};
