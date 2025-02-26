import { useSuspenseQuery } from "@tanstack/react-query";
import { Link, Outlet } from "@tanstack/react-router";
import { bookQueryOptions } from "@/queries/bookQuery";
import { ModalBox } from "@/components/ModalBox";
import { LinkToPage } from "@/components/navigation/LinkToPage";
import { getBookIDFromUser } from "@/utils/getBookIDfromUser";
import { getBookIDFromAdmin } from "@/utils/getBookIDfromAdmin";

export const SingleBook = (role: "admin" | "user") => {
	const admin = role === "admin";
	const user = role === "user";
	let bookId: string = "";

	if (user) {
		bookId = getBookIDFromUser();
	} else if (admin) {
		bookId = getBookIDFromAdmin();
	}

	const { data: book } = useSuspenseQuery(bookQueryOptions(bookId));

	const descriptionContainerStyle =
		"flex w-full hover:text-orange-400 cursor-pointer";
	const titleStyle = "min-w-[150px]";
	const descriptionStyle = "flex-grow text-center";
	return (
		<>
			<ModalBox width={500} height={600}>
				<div className="flex flex-col w-full h-full overflow-y-auto justify-evenly items-center p-5">
					<div className={descriptionContainerStyle}>
						<p className={titleStyle}>Title:</p>
						<p className={`${descriptionStyle} font-medium`}>{book.title}</p>
					</div>
					<div className={descriptionContainerStyle}>
						<p className={titleStyle}>Author:</p>
						<p className={descriptionStyle}>{book.author}</p>
					</div>
					<div className={descriptionContainerStyle}>
						<p className={titleStyle}>Available copies:</p>
						<p className={descriptionStyle}>{book.copies}</p>
					</div>
					<div className={descriptionContainerStyle}>
						<p className={titleStyle}>Description:</p>
						<p
							className={`${descriptionStyle} overflow-y-auto h-[100px] shadow-lightBorder rounded-lg p-3`}
						>
							{book.description}
						</p>
					</div>
					<div className={descriptionContainerStyle}>
						<p className={titleStyle}>Release date:</p>
						<p className={descriptionStyle}>{book.releaseDate}</p>
					</div>
					{user ? (
						<Link
							to="/auth/user/borrow/$bookId"
							params={{ bookId: book.id }}
							className="bg-radial-[at_1%_95%] from-orange-500 to-bold-900 to-65% shadow-lightBorder py-2 px-4 rounded-xl hover:font-bold"
						>
							Borrow
						</Link>
					) : null}
					{admin ? (
						<Link
							to="/auth/admin/delete/$bookId"
							params={{ bookId: book.id }}
							search={{ status: `confirm you want to delete item ${book.id}` }}
							className="bg-radial-[at_1%_95%] from-orange-500 to-bold-900 to-65% shadow-lightBorder py-2 px-4 rounded-xl hover:font-bold"
						>
							Delete
						</Link>
					) : null}
					{admin ? (
						<Link
							to="/auth/admin/update/$bookId"
							params={{ bookId: book.id }}
							className="bg-radial-[at_1%_95%] from-orange-500 to-bold-900 to-65% shadow-lightBorder py-2 px-4 rounded-xl hover:font-bold"
						>
							Update
						</Link>
					) : null}
				</div>
				<LinkToPage link="../" title="Go Back"></LinkToPage>
			</ModalBox>
			<Outlet />
		</>
	);
};
