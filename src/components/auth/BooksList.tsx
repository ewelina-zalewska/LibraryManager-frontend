import { useMemo, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Outlet } from "@tanstack/react-router";
import { booksQueryOptions } from "@/queries/booksQuery";
import { BookResponse, FormChangeEvent } from "@/types";
import { BooksListTable } from "@/pages/books/BooksListTable";
import { BooksListPage } from "@/pages/books/BooksListPage";
import { CollapsibleAccordion } from "@/components/auth/CollapsibleAccordion";
import { TheInput } from "@/components/TheInput";
import { getCurrentPageFromUser } from "@/utils/getCurrentPageFromUser";
import { getCurrentPageFromAdmin } from "@/utils/getCurrentPageFromAdmin";

export const BooksList = (role: "admin" | "user") => {
	const booksPerPage = 8;
	let currentPage: number = 1;

	if (role === "user") {
		currentPage = getCurrentPageFromUser();
	} else if (role === "admin") {
		currentPage = getCurrentPageFromAdmin();
	}

	const { data: allBooks } = useSuspenseQuery(booksQueryOptions);
	const [filteredBooks, setFilteredBooks] = useState<BookResponse[]>(allBooks);

	const GET_FILTERED_BOOKS = (filterText: string) =>
		allBooks.filter(
			(book) =>
				book.author.toLowerCase().includes(filterText.toLowerCase()) ||
				book.title.toLowerCase().includes(filterText.toLowerCase()),
		);

	const FILTER_BOOKS = (e: FormChangeEvent) => {
		const filterText = e.currentTarget.value;
		const filteredBooks = GET_FILTERED_BOOKS(filterText);
		setFilteredBooks(filteredBooks);
	};

	const BOOKS_DATA = useMemo(() => {
		const filteredBooksPerPage = filteredBooks.slice(
			(currentPage - 1) * booksPerPage,
			(currentPage - 1) * booksPerPage + booksPerPage,
		);
		return filteredBooksPerPage;
	}, [currentPage, filteredBooks]);

	return (
		<CollapsibleAccordion role={role}>
			<div className="w-[80%] mx-auto flex md:justify-end justify-center my-5 md:my-1">
				<TheInput
					type="text"
					name="search"
					placeholder="search title or author"
					onChange={FILTER_BOOKS}
					width={400}
				/>
			</div>
			{!filteredBooks.length ? (
				<div className="p-10 text-center md:text-left text-lg text-error">
					<p>No results</p>
				</div>
			) : (
				<BooksListTable filteredBooks={BOOKS_DATA} />
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
