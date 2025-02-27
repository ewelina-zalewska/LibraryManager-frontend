import { Link } from "@tanstack/react-router";
import { BorrowedBook } from "@/types";

type BooksListTableProps = {
	filteredBooks: BorrowedBook[];
	url: string;
};

export const BorrowedBooksListTable = ({
	filteredBooks,
	url,
}: BooksListTableProps) => {
	const currentDate = new Date().getTime();

	const singleBookStyle = "px-5 py-3";
	return (
		<table className="w-full md:w-[95%] lg:w-[80%] mx-auto text-sm text-left text-text">
			<caption className="p-5 text-lg font-semibold text-left">
				Borrowed books
			</caption>
			<thead className="table-auto text-xs uppercase ">
				<tr>
					<th scope="col" className={singleBookStyle}>
						Status
					</th>
					<th scope="col" className={singleBookStyle}>
						Title
					</th>
					<th scope="col" className={`${singleBookStyle} hidden md:block`}>
						Author
					</th>
				</tr>
			</thead>
			<tbody>
				{filteredBooks.map((book) => (
					<tr
						key={book.id}
						className="border-b border-b-gray-800 hover:bg-gray-800"
					>
						<td
							className={`${singleBookStyle} ${currentDate > new Date(book.deadline).getTime() ? "text-error" : null}`}
						>
							{currentDate > new Date(book.deadline).getTime()
								? "Not returned"
								: book.status}
						</td>
						<td className={singleBookStyle}>{book.title}</td>
						<td className={`${singleBookStyle} hidden md:block`}>
							{book.author}
						</td>
						<td className={singleBookStyle}>
							<Link
								to={url}
								params={{ bookId: book.id }}
								search={{ page: 1 }}
								className="font-medium hover:text-orange-400 "
							>
								Details
							</Link>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
