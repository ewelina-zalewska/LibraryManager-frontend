import { useContext, useEffect, useState } from "react";
import { BorrowedBook } from "@/types";
import { UserDataContext } from "@/context/UserDataContext";
const API_BASE = import.meta.env.VITE_API_URL;

type JSONdata = {
	borrowedBooks: BorrowedBook[];
};

export const useCheckDeleteAccount = () => {
	const userData = useContext(UserDataContext);
	const { login } = userData;
	const [userBooks, setUserBooks] = useState<BorrowedBook[]>([]);

	useEffect(() => {
		fetch(`${API_BASE}borrowedBooks`, {
			credentials: "include",
		})
			.then((response) => {
				return response.json();
			})
			.then((data: JSONdata) => {
				const { borrowedBooks }: JSONdata = data;
				const userBooks = borrowedBooks.filter((book) => book.userId === login);
				setUserBooks(userBooks);
			})
			.catch((error) => Promise.reject(`Error: ${error}`));
	}, []);

	return userBooks;
};
