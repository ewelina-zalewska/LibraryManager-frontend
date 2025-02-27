import { useSuspenseQuery } from "@tanstack/react-query";
import { Link, Outlet } from "@tanstack/react-router";
import { borrowedBoookQueryOptions } from "@/queries/borrowedBookQuery";
import { ModalBox } from "@/components/ModalBox";
import { LinkToPage } from "@/components/navigation/LinkToPage";
import { getRouteApi } from "@tanstack/react-router";
import { checkDeadlineExceeded } from "@/utils/checkDeadlineExceeded";

const booksRoute = getRouteApi(
	"/auth/_withUserAuth/user/dashboard/borrowedBooks/$bookId",
);

export const SingleBorrowedBook = () => {
	const { bookId } = booksRoute.useParams();
	const { data: book } = useSuspenseQuery(borrowedBoookQueryOptions(bookId));
	const {
		id,
		status,
		title,
		author,
		borrowed_on,
		borrowed_at,
		deadline,
		notice,
	} = book;

	const isExceeded = checkDeadlineExceeded(deadline);

	const descriptionContainerStyle =
		"flex w-full hover:text-orange-400 cursor-pointer";
	const titleStyle = "min-w-[150px]";
	const descriptionStyle = "flex-grow text-center";

	return (
		<>
			<ModalBox width={500} height={600}>
				<div className="flex flex-col w-full h-full overflow-y-auto justify-evenly items-center p-5">
					<div className={descriptionContainerStyle}>
						<p className={titleStyle}>Status</p>
						<p
							className={`${descriptionStyle} ${isExceeded ? "text-error" : null} font-medium`}
						>
							{isExceeded && book.status !== "Returned"
								? "Not returned"
								: status}
						</p>
					</div>
					<div className={descriptionContainerStyle}>
						<p className={titleStyle}>Title:</p>
						<p className={`${descriptionStyle} font-medium`}>{title}</p>
					</div>
					<div className={descriptionContainerStyle}>
						<p className={titleStyle}>Author:</p>
						<p className={descriptionStyle}>{author}</p>
					</div>
					<div className={descriptionContainerStyle}>
						<p className={titleStyle}>Borrowed on:</p>
						<p className={descriptionStyle}>
							{borrowed_on} at {borrowed_at}
						</p>
					</div>
					<div className={descriptionContainerStyle}>
						<p className={titleStyle}>Deadline:</p>
						<p
							className={`${descriptionStyle} ${isExceeded ? "text-error" : null}`}
						>
							{deadline}
						</p>
					</div>
					<div className={descriptionContainerStyle}>
						<p className={titleStyle}>Returned on:</p>
						<p className={descriptionStyle}>{book.returned_on}</p>
					</div>
					<div className={descriptionContainerStyle}>
						<p className={titleStyle}>Notice</p>
						<p className={descriptionStyle}>
							{notice ? "Please return the book" : null}
						</p>
					</div>
					{book.status !== "Returned" && (
						<Link
							to="/auth/user/return/$bookId"
							params={{ bookId: id }}
							className="bg-radial-[at_1%_95%] from-orange-500 to-bold-900 to-65% shadow-lightBorder py-2 px-4 rounded-xl hover:font-bold"
						>
							Return
						</Link>
					)}
				</div>

				<LinkToPage
					link="/auth/user/dashboard/borrowedBooks"
					title="Go Back"
				></LinkToPage>
			</ModalBox>
			<Outlet />
		</>
	);
};
