import { FieldErrorsProps } from "@/types";

export const FieldErrors = ({ errors }: FieldErrorsProps) => {
	if (!errors.length) return null;
	return (
		<ul className="text-error text-center">
			{errors.map((error, index) => (
				<li key={index}>{error}</li>
			))}
		</ul>
	);
};
