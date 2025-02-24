import { useSuspenseQuery } from "@tanstack/react-query";
import { Outlet, useNavigate } from "@tanstack/react-router";
import { bookQueryOptions } from "@/queries/bookQuery";
import { ModalBox } from "@/components/ModalBox";
import { LinkToPage } from "@/components/navigation/LinkToPage";
import { getRouteApi } from "@tanstack/react-router";
import { TheButton } from "@/components/navigation/TheButton";

const categoryRoute = getRouteApi("/books/$bookId");

export const SingleBook = () => {
	const { bookId } = categoryRoute.useParams();

	const { data: book, isPending } = useSuspenseQuery(bookQueryOptions(bookId));

	const navigate = useNavigate();

	const RENT_BOOK = () => navigate({ to: "/login" });

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
						btnLabel="Borrow"
						disabled={isPending}
						onClick={RENT_BOOK}
					/>
				</div>
				<LinkToPage link="/books" title="Go Back"></LinkToPage>
			</ModalBox>
			<Outlet />
		</>
	);
};
