import { getRouteApi } from "@tanstack/react-router";

const booksRoute = getRouteApi("/auth/_withUserAuth/user/books");

export const getCurrentPageFromUser = () => {
	const { page: currentPage } = booksRoute.useSearch();
	return currentPage;
};
