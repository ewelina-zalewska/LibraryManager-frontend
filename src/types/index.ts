import { ChangeEvent } from "react";

export type RegisterForm = {
	username: string;
	email: string;
	password: string;
};

export type RegisterFormErrors = {
	username: string[];
	email: string[];
	password: string[];
};

export type RegisterUserFormFieldsetProps = {
	onChange: (e: FormChangeEvent) => void;
	formState: RegisterForm;
	errors: RegisterFormErrors;
};

export type BookResponse = {
	id: string;
	title: string;
	author: string;
	copies: number;
	description: string;
	releaseDate: string;
	userId: string[];
};

export type BookDto = {
	copies: number;
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
export type FormChangeEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement>;

export type FieldErrorsProps = {
	errors: string[];
};
