import { getRouteApi } from "@tanstack/react-router";

const booksRoute = getRouteApi("/auth/_withAdminAuth/admin/books");

export const getCurrentPageFromAdmin = () => {
	const { page: currentPage } = booksRoute.useSearch();
	return currentPage;
};
