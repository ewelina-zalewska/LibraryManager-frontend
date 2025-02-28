import { BorrowedBook } from "@/types";

export const filterBooks = (userBooks: BorrowedBook[]) => {
	const FIND_BOOK = (
		books: BorrowedBook[],
		status: "Borrowed" | "Returned" | "Not returned",
	) => books.filter((b) => b.status === status).length;

	const borrowed = FIND_BOOK(userBooks, "Borrowed");
	const notReturned = FIND_BOOK(userBooks, "Not returned");
	const returned = FIND_BOOK(userBooks, "Returned");

	return { borrowed, notReturned, returned };
};
