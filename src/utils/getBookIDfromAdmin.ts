import { getRouteApi } from "@tanstack/react-router";

const booksRoute = getRouteApi("/auth/_withAdminAuth/admin/books/$bookId");

export const getBookIDFromAdmin = () => {
	const { bookId } = booksRoute.useParams();
	return bookId;
};
