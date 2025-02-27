import { FormEvent, useContext, useEffect, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { ResponseMessage } from "@/types";
import { TheConfirmation } from "@/components/TheConfirmation";
import { borrowedBoookQueryOptions } from "@/queries/borrowedBookQuery";
import { useUpdateBorrowedBookMutation } from "@/mutations/useUpdateBorrowedBookMuttion";
import { useCreateLogMutation } from "@/mutations/useCreateLogMutation";
import { getTime } from "@/utils/getTime";
import { UserDataContext } from "@/context/UserDataContext";

const bookRoute = getRouteApi("/auth/_withUserAuth/user/return/$bookId");
const currentDate = new Date().getTime();
export const ReturnBook = () => {
	const { bookId } = bookRoute.useParams();
	const userData = useContext(UserDataContext);
	const { data: book } = useSuspenseQuery(borrowedBoookQueryOptions(bookId));
	const {
		id,
		userId,
		title,
		author,
		releaseDate,
		borrowed_on,
		borrowed_at,
		deadline,
		notice,
	} = book;

	const goBackRoute = `/auth/user/dashboard/borrowedBooks/${bookId}`;

	const [response, setResponse] = useState<ResponseMessage | null>(null);
	const {
		mutate: UPDATE_BOOK,
		data,
		isPending,
	} = useUpdateBorrowedBookMutation(bookId);
	const { mutate: CREATE_LOG } = useCreateLogMutation();
	const [success, setSuccess] = useState<boolean>();

	const RETURN_BOOK = (e: FormEvent) => {
		e.preventDefault();
		UPDATE_BOOK({
			id,
			status: "Returned",
			userId,
			bookId,
			title,
			author,
			releaseDate,
			borrowed_on,
			borrowed_at,
			returned_on: new Date().toISOString().split("T")[0],
			returned_at: getTime(),
			deadline,
			deadlineExceeded: currentDate > new Date(book.deadline).getTime() && true,
			notice,
		});
	};

	const navigate = useNavigate();
	useEffect(() => {
		if (!data) return;
		setResponse(data);
		if (data.status === "success") {
			setSuccess(true);
			if (userData.login) {
				CREATE_LOG({
					action: "Returning the borrowed book",
					bookId: bookId,
					created_on: new Date().toISOString().split("T")[0],
					created_at: getTime(),
					userID: userData.login,
				});
			}
		} else setSuccess(false);
	}, [data]);

	useEffect(() => {
		if (success) {
			const timeout = setTimeout(() => {
				if (response && response.status === "success") {
					navigate({ to: goBackRoute });
					setSuccess(false);
				}
			}, 3000);
			console.log(success);
			return () => {
				clearTimeout(timeout);
			};
		}
	}, [success]);

	return (
		<TheConfirmation
			width={500}
			height={300}
			name={`'${book.title}' of ${book.author}`}
			link={goBackRoute}
			action="return"
			onClick={RETURN_BOOK}
			disabled={isPending || success}
			showResponse={success}
			response={response}
		/>
	);
};
