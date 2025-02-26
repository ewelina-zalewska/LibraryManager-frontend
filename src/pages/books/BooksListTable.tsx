import { Link } from "@tanstack/react-router";
import { BookResponse } from "@/types";

type BooksListTableProps = {
	filteredBooks: BookResponse[];
	url:
		| "/books/$bookId"
		| "/auth/admin/books/$bookId"
		| "/auth/user/books/$bookId";
};

export const BooksListTable = ({ filteredBooks, url }: BooksListTableProps) => {
	const singleBookStyle = "px-5 py-3";
	return (
		<table className="w-full md:w-[95%] lg:w-[80%] mx-auto text-sm text-left text-text">
			<caption className="p-5 text-lg font-semibold text-left">
				Books list
				<p className="p-3 text-sm font-normal text-justify">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
					explicabo sequi modi quibusdam adipisci dolores magnam, tenetur ullam
					dolore reprehenderit dolorum omnis, voluptatum totam iusto, maiores
					aspernatur temporibus accusantium blanditiis?
				</p>
			</caption>
			<thead className="table-auto text-xs uppercase ">
				<tr>
					<th scope="col" className={singleBookStyle}>
						Title
					</th>
					<th scope="col" className={singleBookStyle}>
						Author
					</th>
					<th scope="col" className={`${singleBookStyle} hidden md:block`}>
						Available
					</th>
				</tr>
			</thead>
			<tbody>
				{filteredBooks.map((book) => (
					<tr
						key={book.id}
						className="border-b border-b-gray-800 hover:bg-gray-800"
					>
						<td className={singleBookStyle}>{book.title}</td>
						<td className={singleBookStyle}>{book.author}</td>
						<td className={`${singleBookStyle} hidden md:block`}>
							{book.copies}
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
