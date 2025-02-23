import { getRouteApi } from "@tanstack/react-router";

const booksRoute = getRouteApi("/auth/_withUserAuth/user/books/$bookId");

export const getBookIDFromUser = () => {
	const { bookId } = booksRoute.useParams();
	return bookId;
};
