import { useMutation } from "@tanstack/react-query";
import { useApi } from "@/hooks/useApi";
import { ResponseMessage } from "@/types";

type DeleteAccountDto = {
	password: string;
};

export const useConfirmDeleteAccountMutation = () => {
	const { API_POST } = useApi();

	const { mutate, error, isPending, data } = useMutation({
		mutationKey: ["deleteAccount"],
		mutationFn: async (body: DeleteAccountDto) =>
			API_POST<ResponseMessage, DeleteAccountDto>("deleteAccount", body),
	});
	return { mutate, error, isPending, data };
};
