import { FormChangeEvent } from "@/types";

type TheInputProps = {
	label?: string;
	type: string;
	name: string;
	placeholder: string;
	value?: string | number;
	onChange?: (e: FormChangeEvent) => void;
	disabled?: boolean;
	width?: number;
};

export const TheInput = ({
	label,
	type,
	name,
	placeholder,
	value,
	onChange,
	disabled,
	width,
}: TheInputProps) => {
	const backgroundColor = disabled ? "bg-light-gray" : "bg-text";
	const textColor = disabled ? "text-dark-gray" : "text-body";

	return (
		<div className=" flex flex-col items-center ">
			<label className="pt-3">{label}</label>
			<input
				disabled={disabled}
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className={`border-[4px] rounded-xl text-center focus:outline-none focus:ring-0 focus:border-orange-500 p-[5px] w-[${width}px] ${backgroundColor} ${textColor}`}
			/>
		</div>
	);
};
