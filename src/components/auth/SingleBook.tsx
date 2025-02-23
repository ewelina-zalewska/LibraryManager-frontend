import { useSuspenseQuery } from "@tanstack/react-query";
import { Outlet } from "@tanstack/react-router";
import { bookQueryOptions } from "@/queries/bookQuery";
import { ModalBox } from "@/components/ModalBox";
import { LinkToPage } from "@/components/navigation/LinkToPage";
import { TheButton } from "@/components/navigation/TheButton";
import { useUpdateBookMutation } from "@/mutations/useUpdateBookMutation";
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

	const { data: book, isPending } = useSuspenseQuery(bookQueryOptions(bookId));

	const { mutate: EDIT_COPIES } = useUpdateBookMutation(bookId);

	const RENT_BOOK = () => {
		EDIT_COPIES({
			copies: book.copies - 1,
		});
	};

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
					<TheButton
						btnLabel="Rent"
						disabled={isPending || role === "admin"}
						onClick={RENT_BOOK}
					/>
				</div>
				<LinkToPage
					link={role === "admin" ? "/auth/admin/books" : "/auth/user/books"}
					title="Go Back"
				></LinkToPage>
			</ModalBox>
			<Outlet />
		</>
	);
};
