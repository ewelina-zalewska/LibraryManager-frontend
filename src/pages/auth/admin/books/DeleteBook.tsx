import { FormEvent, useContext, useEffect, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { bookQueryOptions } from "@/queries/bookQuery";
import { ResponseMessage } from "@/types";
import { ModalBox } from "@/components/ModalBox";
import { TheButton } from "@/components/navigation/TheButton";
import { LinkToPage } from "@/components/navigation/LinkToPage";
import { useCreateLogMutation } from "@/mutations/useCreateLogMutation";
import { getTime } from "@/utils/getTime";
import { UserDataContext } from "@/context/UserDataContext";

const bookRoute = getRouteApi("/auth/_withAdminAuth/admin/delete/$bookId");

const API_BASE = import.meta.env.VITE_API_URL;

export const DeleteBook = () => {
	const { bookId } = bookRoute.useParams();
	const { data: book } = useSuspenseQuery(bookQueryOptions(bookId));
	const userData = useContext(UserDataContext);
	const goBackRoute = `/auth/admin/books/${bookId}`;

	const { mutate: CREATE_LOG } = useCreateLogMutation();
	const [response, setResponse] = useState<ResponseMessage | null>(null);
	const [copies, setCopies] = useState<number>();

	const FETCH_DELETE_BOOK = (url: string) => {
		fetch(`${API_BASE}${url}`, {
			method: "DELETE",
			credentials: "include",
		})
			.then((response) => {
				return response.json();
			})
			.then((data: ResponseMessage) => {
				if (data.status === "success") setResponse(data);
			})
			.catch((error) => Promise.reject(`Error: ${error}`));
	};

	const DELETE_BOOK = (e: FormEvent) => {
		e.preventDefault();
		if (copies) return;
		FETCH_DELETE_BOOK(`books/${bookId}`);
	};

	const navigate = useNavigate();
	useEffect(() => {
		if (!response) return;
		if (response.status === "success") {
			if (!response.action) return;
			CREATE_LOG({
				action: response.action,
				bookId: response.bookId || null,
				created_on: new Date().toISOString().split("T")[0],
				created_at: getTime(),
				userID: response.id || userData.login || "",
			});
			navigate({ to: "/auth/admin/delete/message" });
		}
	}, [response]);

	useEffect(() => {
		if (book) setCopies(book.numberOfborrowedBooks);
	}, [book]);

	return (
		<ModalBox width={500} height={300}>
			<p className="p-5 text-center">
				Are you sure you want to delete the book{" "}
				<strong>{`'${book.title}' of ${book.author}`}</strong>?
			</p>
			<TheButton btnLabel="delete" disabled={!!copies} onClick={DELETE_BOOK} />
			{!!copies && (
				<p className="text-error text-center p-3">
					You cannot delete items. All borrowed books must be returned first.
				</p>
			)}
			<LinkToPage link={goBackRoute} title="Go Back" />
		</ModalBox>
	);
};
