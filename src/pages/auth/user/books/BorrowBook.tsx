import { FormEvent, useEffect, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getRouteApi } from "@tanstack/react-router";
import { useUpdateCopiesMutation } from "@/mutations/useUpdateCopiesMutation";
import { bookQueryOptions } from "@/queries/bookQuery";
import { ResponseMessage } from "@/types";
import { useSuccess } from "@/hooks/useSuccess";
import { useCreateBorrowedBookMutation } from "@/mutations/useCreateBorrowedBookMutation";
import { TheConfirmation } from "@/components/TheConfirmation";

const bookRoute = getRouteApi("/auth/_withUserAuth/user/borrow/$bookId");

export const BorrowBook = () => {
	const { bookId } = bookRoute.useParams();
	const { data: book } = useSuspenseQuery(bookQueryOptions(bookId));
	const { title, author, releaseDate } = book;

	const goBackRoute = `/auth/user/books/${bookId}`;

	const [response, setResponse] = useState<ResponseMessage | null>(null);
	const { mutate: EDIT_COPIES, data: CHANGE_COPIES_MESSAGE } =
		useUpdateCopiesMutation(bookId);

	const {
		mutate: ADD_BORROWED_BOOK,
		data: NEW_BORROWED_BOOK_MESSAGE,
		isPending,
	} = useCreateBorrowedBookMutation();
	const { success, setSuccess } = useSuccess(goBackRoute, response);

	const BORROW_BOOK = (e: FormEvent) => {
		e.preventDefault();
		if (!book.copies) return;
		ADD_BORROWED_BOOK({
			status: "Borrowed",
			bookId,
			title,
			author,
			releaseDate,
		});
	};

	useEffect(() => {
		if (!NEW_BORROWED_BOOK_MESSAGE) return;
		setResponse(NEW_BORROWED_BOOK_MESSAGE);
		if (NEW_BORROWED_BOOK_MESSAGE.status === "success") {
			EDIT_COPIES({
				copies: book.copies - 1,
				numberOfborrowedBooks: book.numberOfborrowedBooks + 1,
			});
			setSuccess(true);
		} else setSuccess(false);
		console.log(CHANGE_COPIES_MESSAGE?.status, CHANGE_COPIES_MESSAGE?.message);
	}, [NEW_BORROWED_BOOK_MESSAGE]);

	useEffect(() => {
		if (!CHANGE_COPIES_MESSAGE) return;
		console.log(CHANGE_COPIES_MESSAGE?.status, CHANGE_COPIES_MESSAGE?.message);
	}, [CHANGE_COPIES_MESSAGE]);

	return (
		<TheConfirmation
			width={500}
			height={300}
			name={`'${book.title}' of ${book.author}`}
			link={goBackRoute}
			action="borrow"
			onClick={BORROW_BOOK}
			disabled={isPending || success}
			showResponse={success}
			response={response}
		/>
	);
};
