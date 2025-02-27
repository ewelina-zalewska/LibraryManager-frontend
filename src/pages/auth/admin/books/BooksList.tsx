import { useState, useContext, useEffect } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getRouteApi, Outlet } from "@tanstack/react-router";
import { booksQueryOptions } from "@/queries/booksQuery";
import { BookResponse, FormChangeEvent } from "@/types";
import { BooksListTable } from "@/pages/books/BooksListTable";
import { BooksListPage } from "@/pages/books/BooksListPage";
import { CollapsibleAccordion } from "@/components/auth/CollapsibleAccordion";
import { TheInput } from "@/components/TheInput";
import { UserDataContext } from "@/context/UserDataContext";

const booksRoute = getRouteApi("/auth/_withAdminAuth/admin/books");

export const BooksList = () => {
	const userData = useContext(UserDataContext);
	const booksPerPage = 8;
	const { page: currentPage } = booksRoute.useSearch();

	const { data } = useSuspenseQuery(booksQueryOptions);
	const { books } = data;
	const [filteredBooks, setFilteredBooks] = useState<BookResponse[]>(books);
	const [BOOKS_DATA, setBOOKS_DATA] = useState<BookResponse[]>(books);

	const [formState, setFormState] = useState<string>("");
	const HANDLE_CHANGE = (e: FormChangeEvent) => setFormState(e.target.value);

	useEffect(() => {
		const filterArray = books.filter(
			(book) =>
				book.author.toLowerCase().includes(formState.toLowerCase()) ||
				book.title.toLowerCase().includes(formState.toLowerCase()),
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
		<CollapsibleAccordion user={userData}>
			<div className="w-[80%] mx-auto flex md:justify-end justify-center my-5 md:my-1">
				<TheInput
					type="text"
					name="search"
					placeholder="search title or author"
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
				<BooksListTable
					filteredBooks={BOOKS_DATA}
					url="/auth/admin/books/$bookId"
				/>
			)}
			<BooksListPage
				filteredBooks={filteredBooks}
				booksPerPage={booksPerPage}
				currentPage={currentPage}
			/>
			<Outlet />
		</CollapsibleAccordion>
	);
};
