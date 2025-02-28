import { BorrowedBook } from "@/types";
import { useCheckDeleteAccount } from "@/hooks/useCheckDeleteAccount";

export const NumberOfBooksPerMonth = () => {
	const userBooks = useCheckDeleteAccount();

	const HANDLE_DATA = (books: BorrowedBook[]) => {
		const dates: { [date: string]: number } = {};

		books.map((book) => {
			const borrowDate = new Date(book.borrowed_on);
			const date = `${("0" + (borrowDate.getMonth() + 1)).slice(-2)}.${borrowDate.getFullYear()}`;
			dates[date] = (dates[date] || 0) + 1;
		});

		const data = Object.keys(dates)
			.map((date) => ({
				date,
				count: dates[date],
			}))
			.sort((a, b) => (a.date > b.date ? 1 : -1));
		return data;
	};

	const numberOfBooks = HANDLE_DATA(userBooks || []);

	return (
		<div className="flex flex-col items-center mt-5">
			<h3>Number of borrowed books per month</h3>
			<ul className="list-none p-5">
				{numberOfBooks.map((book) => (
					<li className="p-3" key={book.date}>
						<p>
							{book.date} – {book.count} {book.count === 1 ? "book" : "books"}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};
