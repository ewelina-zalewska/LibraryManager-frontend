import { UpdateBookForm, UpdateBookFormErrors } from "@/types";

export const validateBook = (UpdateBookForm: UpdateBookForm) => {
	const { title, author, copies, description, releaseDate } = UpdateBookForm;

	let isSuccess = true;
	const newErrors: UpdateBookFormErrors = {
		title: [],
		author: [],
		copies: [],
		description: [],
		releaseDate: [],
	};

	if (!title.trim() || title.length < 3) {
		newErrors.title.push("Title is required (min 3 characters");
	}
	if (!author.trim() || author.length < 3) {
		newErrors.author.push("Author is required (min 3 characters");
	}
	if (copies < 0) {
		newErrors.copies.push("Copies must be greater than or equal 0.");
	}
	if (!description.trim() || description.length < 20) {
		newErrors.description.push("Description is required (min 20 characters");
	}
	if (
		!title.trim() ||
		title.length < 3 ||
		!author.trim() ||
		author.length < 3 ||
		copies < 0 ||
		!description.trim() ||
		description.length < 20 ||
		!releaseDate
	) {
		isSuccess = false;
	}
	return { newErrors, isSuccess };
};
