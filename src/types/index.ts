﻿import { ChangeEvent } from "react";

//User
export type User = {
	id: string;
	username: string;
	email: string;
	password: string;
	role: "user" | "admin";
	bookId: string[];
};

export type UserDto = {
	username: string;
	email: string;
	password: string;
	accessCode: string;
};

export type RegisterForm = {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
	accessCode: string;
};

export type RegisterFormErrors = {
	username: string[];
	email: string[];
	password: string[];
	confirmPassword: string[];
};

export type RegisterUserFormFieldsetProps = {
	onChange: (e: FormChangeEvent) => void;
	formState: RegisterForm;
	errors: RegisterFormErrors;
};

//Book

export type UpdateBookForm = {
	title: string;
	author: string;
	copies: number;
	description: string;
	releaseDate: string;
};
export type UpdateBookFormErrors = {
	title: string[];
	author: string[];
	copies: string[];
	description: string[];
	releaseDate: string[];
};

export type UserBookFormFieldsetProps = {
	onChange: (e: FormChangeEvent) => void;
	formState: UpdateBookForm;
	errors: UpdateBookFormErrors;
	borrowedbooks: number;
};
export type Book = {
	id: string;
	title: string;
	author: string;
	copies: number;
	description: string;
	releaseDate: string;
	numberOfborrowedBooks: number;
};

export type BookResponse = {
	id: string;
	title: string;
	author: string;
	copies: number;
	description: string;
	releaseDate: string;
	numberOfborrowedBooks: number;
};

export type BookDto = Omit<BookResponse, "id">;

export type BookCopiesDto = {
	copies: number;
	numberOfborrowedBooks: number;
};

export type BookObjectResponse = {
	books: Book[];
};

export type BorrowedBook = {
	id: string;
	status: "Borrowed" | "Returned" | "Not returned";
	userId: string;
	bookId: string;
	title: string;
	author: string;
	releaseDate: string;
	borrowed_on: string;
	borrowed_at: string;
	returned_on: string | null;
	returned_at: string | null;
	deadline: string;
	deadlineExceeded: boolean;
	notice: boolean;
};
export type BorrowedBookDataDto = BorrowedBook;
export type BorrowedBookDto = {
	status: "Borrowed";
	bookId: string;
	title: string;
	author: string;
	releaseDate: string;
};

export type borrowedBookObjectResponse = {
	borrowedBooks: BorrowedBook[];
};

export type PaginatedBooks = {
	first: number;
	prev: number | null;
	next: number | null;
	last: number;
	pages: number;
	items: number;
	data: BookResponse[];
};

//Log

export type Log = {
	action:
		| "Registration"
		| "Account deletion"
		| "Login"
		| "Logout"
		| "Borrowing a book"
		| "Returning the borrowed book"
		| "Delete Book"
		| "Update Book"
		| "Adding a book";
	bookId: string | null;
	created_on: string;
	created_at: string;
	userID: string;
};
export type LogDto = {
	action:
		| "Registration"
		| "Account deletion"
		| "Login"
		| "Logout"
		| "Borrowing a book"
		| "Returning the borrowed book"
		| "Delete Book"
		| "Update Book"
		| "Adding a book";
	bookId: string | null;
	created_on: string;
	created_at: string;
	userID: string;
};

export type LogResponse = {
	logs: Log[];
};

//
export type FormChangeEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement>;

export type FieldErrorsProps = {
	errors: string[];
};

export type ResponseMessage = {
	status: "fail" | "success";
	message: string;
	action?:
		| "Registration"
		| "Account deletion"
		| "Login"
		| "Logout"
		| "Borrowing a book"
		| "Returning the borrowed book";
	bookId?: string | null;
	id?: string;
	role?: "user" | "admin";
	name?: string;
	data?: BookResponse[];
};

//Login
export type LoginForm = {
	login: string;
	password: string;
};

export type LoginDto = LoginForm;

export type LoginFormErrors = {
	login: string[];
	password: string[];
};

export type LoginUserFormFieldsetProps = {
	onChange: (e: FormChangeEvent) => void;
	formState: LoginForm;
	errors: LoginFormErrors;
};
