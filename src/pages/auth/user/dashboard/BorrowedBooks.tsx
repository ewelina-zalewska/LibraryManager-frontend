import { useContext, useEffect, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getRouteApi, Outlet } from "@tanstack/react-router";
import { BorrowedBook, FormChangeEvent } from "@/types";
import { TheInput } from "@/components/TheInput";
import { borrowedBooksQueryOptions } from "@/queries/borrowedBooksQuery";
import { BorrowedBooksListTable } from "@/components/auth/BorrowedBooksListTable";
import { BorrowedBooksListPage } from "@/pages/auth/admin/dashboard/BorrowedBooksListPage";
import { UserDataContext } from "@/context/UserDataContext";

const booksRoute = getRouteApi(
	"/auth/_withUserAuth/user/dashboard/borrowedBooks",
);

export const BorrowedBooks = () => {
	const userData = useContext(UserDataContext);
	const { login } = userData;
	const booksPerPage = 8;
	const { page: currentPage } = booksRoute.useSearch();

	const { data } = useSuspenseQuery(borrowedBooksQueryOptions);
	const { borrowedBooks } = data;
	const userBooks = borrowedBooks.filter((book) => book.userId === login);

	const [filteredBooks, setFilteredBooks] = useState<BorrowedBook[]>(userBooks);

	const [BOOKS_DATA, setBOOKS_DATA] = useState<BorrowedBook[]>(userBooks);

	const [formState, setFormState] = useState<string>("");
	const HANDLE_CHANGE = (e: FormChangeEvent) => setFormState(e.target.value);

	useEffect(() => {
		const filterArray = userBooks.filter(
			(book) =>
				book.title.toLowerCase().includes(formState.toLowerCase()) ||
				book.status.toLowerCase().includes(formState.toLowerCase()),
		);
		setFilteredBooks(filterArray);
	}, [formState]);

	useEffect(() => {
		const filteredData = () => {
			const filteredBooksPerPage = filteredBooks.slice(
				(currentPage - 1) * booksPerPage,
				(currentPage - 1) * booksPerPage + booksPerPage,
			);
			return filteredBooksPerPage;
		};
		setBOOKS_DATA(filteredData);
	}, [filteredBooks, currentPage]);

	return (
		<>
			<div className="w-[80%] mx-auto flex md:justify-end justify-center my-5 md:my-1">
				<TheInput
					type="text"
					name="search"
					placeholder="search title or status"
					onChange={HANDLE_CHANGE}
					value={formState}
					width={400}
				/>
			</div>
			{!filteredBooks.length ? (
				<div className="p-10 text-center md:text-left text-lg text-error">
					<p>No results</p>
				</div>
			) : (
				<BorrowedBooksListTable
					filteredBooks={BOOKS_DATA}
					url="/auth/user/dashboard/borrowedBooks/$bookId"
				/>
			)}
			<BorrowedBooksListPage
				filteredBooks={filteredBooks}
				booksPerPage={booksPerPage}
				currentPage={currentPage}
			/>
			<Outlet />
		</>
	);
};
