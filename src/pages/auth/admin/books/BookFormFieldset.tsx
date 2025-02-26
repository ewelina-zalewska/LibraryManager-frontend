import { UserBookFormFieldsetProps } from "@/types";
import { TheInput } from "@/components/TheInput";
import { FieldErrors } from "@/components/handleData/FieldErrors";

export const BookFormFieldset = ({
	onChange,
	formState,
	errors,
	borrowedbooks,
}: UserBookFormFieldsetProps) => {
	const { title, author, copies, description, releaseDate } = formState;
	const currentDay = new Date().toISOString().split("T")[0];
	return (
		<div className="border border-neutral-900 overflow-y-scroll h-[300px]">
			<TheInput
				label="Title"
				type="text"
				name="title"
				placeholder="title"
				value={title}
				onChange={onChange}
			/>
			<FieldErrors errors={errors.title} />
			<TheInput
				label="Author"
				type="text"
				name="author"
				placeholder="author"
				value={author}
				onChange={onChange}
			/>
			<FieldErrors errors={errors.author} />
			<TheInput
				label="Copies"
				type="number"
				name="copies"
				placeholder="copies"
				value={copies}
				onChange={onChange}
			/>
			<FieldErrors errors={errors.copies} />
			<TheInput
				label="Description"
				type="text"
				name="description"
				placeholder="description"
				value={description}
				onChange={onChange}
			/>
			<FieldErrors errors={errors.description} />
			<TheInput
				label="ReleaseDate"
				type="date"
				name="releaseDate"
				placeholder="release date"
				value={releaseDate}
				onChange={onChange}
				maxDate={currentDay}
			/>
			<FieldErrors errors={errors.releaseDate} />
			<TheInput
				name="numberOfborrowedBooks"
				type="numberOfborrowedBooks"
				label="Number of borrowed books"
				placeholder="releaseDate"
				value={borrowedbooks}
				onChange={onChange}
			/>
		</div>
	);
};
