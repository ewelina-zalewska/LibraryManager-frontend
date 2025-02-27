import { FormEvent, useEffect, useRef, useState } from "react";
import { bookQueryOptions } from "@/queries/bookQuery";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { ResponseMessage, UpdateBookForm, UpdateBookFormErrors } from "@/types";
import { ModalBox } from "@/components/ModalBox";
import { TheButton } from "@/components/navigation/TheButton";
import { useForm } from "@/hooks/useForm";
import { validateBook } from "@/utils/validateBook";

import { BookFormFieldset } from "@/pages/auth/admin/books/BookFormFieldset";
import { useUpdateBookMutation } from "@/mutations/useUpdateBookMutation";
import { useSuccess } from "@/hooks/useSuccess";

const bookRoute = getRouteApi("/auth/_withAdminAuth/admin/update/$bookId");

export const UpdateBook = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const { bookId } = bookRoute.useParams();
	const {
		mutate: UPDATE_BOOK,
		isPending,
		data,
	} = useUpdateBookMutation(bookId);

	const { data: book } = useSuspenseQuery(bookQueryOptions(bookId));
	const {
		title,
		author,
		copies,
		description,
		releaseDate,
		numberOfborrowedBooks,
	} = book;

	const [submitClicked, setSubmitClicked] = useState<boolean>(false);
	const [response, setResponse] = useState<ResponseMessage | null>(null);
	const { success, setSuccess } = useSuccess("/auth/admin/books", response);

	const [formState, setFormState, HANDLE_CHANGE] = useForm<UpdateBookForm>({
		title,
		author,
		copies,
		description,
		releaseDate,
	});

	const [errors, setErrors] = useState<UpdateBookFormErrors>({
		title: [],
		author: [],
		copies: [],
		description: [],
		releaseDate: [],
	});

	const HANDLE_SUBMIT = (e: FormEvent) => {
		e.preventDefault();
		const { newErrors, isSuccess } = validateBook(formState);
		setErrors(newErrors);
		setSuccess(isSuccess);
		if (!isSuccess) {
			setSubmitClicked(true);
		} else if (isSuccess) {
			UPDATE_BOOK({
				title: formState.title,
				author: formState.author,
				copies: formState.copies,
				description: formState.description,
				releaseDate: formState.releaseDate,
				numberOfborrowedBooks,
			});
			setFormState({
				title,
				author,
				copies,
				description,
				releaseDate,
			});
			setSubmitClicked(false);
		}
	};

	const SEND_FORM = () => formRef.current?.requestSubmit();

	const navigate = useNavigate();
	const GO_BACK = () => navigate({ to: `/auth/admin/books/${bookId}` });

	useEffect(() => {
		if (submitClicked) {
			const { newErrors } = validateBook(formState);
			setErrors(newErrors);
		}
	}, [formState, submitClicked]);

	useEffect(() => {
		if (!data) return;
		setResponse(data);
		console.log(data);
	}, [data]);

	return (
		<ModalBox width={600} height={700}>
			<form
				ref={formRef}
				onSubmit={HANDLE_SUBMIT}
				className="mt-[50px] flex flex-col md:w-[400px] mx-auto"
			>
				<legend className="font-normal text-[30px] text-center pb-5">
					Edit book
				</legend>
				<BookFormFieldset
					onChange={HANDLE_CHANGE}
					formState={formState}
					errors={errors}
					borrowedbooks={book.numberOfborrowedBooks}
				/>
				<div className="mx-auto p-5">
					<TheButton
						onClick={SEND_FORM}
						disabled={isPending}
						btnLabel="Edit book"
						type="submit"
					></TheButton>
				</div>
			</form>
			{success && (
				<div className="w-[100%] text-center text-[20px]">
					<p
						className={`py-5 ${response?.status === "success" ? "text-green" : "text-error"}`}
					>
						{response ? response.message : ""}
					</p>
				</div>
			)}
			<TheButton btnLabel="Go Back" onClick={GO_BACK}></TheButton>
		</ModalBox>
	);
};
