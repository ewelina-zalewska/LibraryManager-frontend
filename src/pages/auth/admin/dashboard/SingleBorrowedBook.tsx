import { useSuspenseQuery } from "@tanstack/react-query";
import { Outlet } from "@tanstack/react-router";
import { borrowedBoookQueryOptions } from "@/queries/borrowedBookQuery";
import { ModalBox } from "@/components/ModalBox";
import { LinkToPage } from "@/components/navigation/LinkToPage";
import { getRouteApi } from "@tanstack/react-router";
import { TheButton } from "@/components/navigation/TheButton";
import { FormEvent, useEffect, useState } from "react";
import { checkDeadlineExceeded } from "@/utils/checkDeadlineExceeded";
import { useUpdateBookNoticeMutation } from "@/mutations/useUpdateBookNoticeMutation";
import { useUpdateBorrowedBookMutation } from "@/mutations/useUpdateBorrowedBookMuttion";

const booksRoute = getRouteApi(
	"/auth/_withAdminAuth/admin/dashboard/borrowedBooks/$bookId",
);

export const SingleBorrowedBook = () => {
	const { bookId } = booksRoute.useParams();
	const { data: book } = useSuspenseQuery(borrowedBoookQueryOptions(bookId));
	const {
		id,
		status,
		userId,
		title,
		author,
		releaseDate,
		borrowed_on,
		borrowed_at,
		returned_on,
		returned_at,
		deadline,
		notice,
	} = book;
	const { mutate: UPDATE_STATUS } = useUpdateBorrowedBookMutation(bookId);
	const {
		mutate: CHANGE_NOTICE,
		data,
		isPending,
	} = useUpdateBookNoticeMutation(bookId);
	const isExceeded = checkDeadlineExceeded(deadline);
	const [isNotice, setNotice] = useState<boolean>(false);

	useEffect(() => {
		if (isExceeded) {
			UPDATE_STATUS({
				id,
				status: "Not returned",
				userId,
				bookId,
				title,
				author,
				releaseDate,
				borrowed_on,
				borrowed_at,
				returned_on,
				returned_at,
				deadline,
				deadlineExceeded: true,
				notice,
			});
		}
	}, [isExceeded]);

	const SEND_NOTICE = (e: FormEvent) => {
		e.preventDefault();
		CHANGE_NOTICE({
			notice: true,
		});
	};

	const descriptionContainerStyle =
		"flex w-full hover:text-orange-400 cursor-pointer";
	const titleStyle = "min-w-[150px]";
	const descriptionStyle = "flex-grow text-center";

	useEffect(() => {
		if (!data) return;
		if (data.status === "success") setNotice(true);
	}, [data]);

	const hideButton = notice || isNotice;
	return (
		<>
			<ModalBox width={500} height={600}>
				<div className="flex flex-col w-full h-full overflow-y-auto justify-evenly items-center p-5">
					<div className={descriptionContainerStyle}>
						<p className={titleStyle}>Status</p>
						<p
							className={`${descriptionStyle} ${isExceeded ? "text-error" : null} font-medium`}
						>
							{isExceeded ? "Not returned" : status}
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
						<p className={titleStyle}>Borrowed by:</p>
						<p className={descriptionStyle}>{userId}</p>
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
							{isNotice || notice ? "Please return the book" : null}
						</p>
					</div>
					{isExceeded && (
						<TheButton
							btnLabel="Send notice"
							disabled={isPending || hideButton}
							onClick={SEND_NOTICE}
						/>
					)}
				</div>
				{isNotice && <p className="text-green">"The notice has been added."</p>}
				<LinkToPage
					link="/auth/admin/dashboard/borrowedBooks"
					title="Go Back"
				></LinkToPage>
			</ModalBox>
			<Outlet />
		</>
	);
};
