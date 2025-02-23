import { MouseEventHandler } from "react";

type ButtonProps = {
	type?: "submit" | "reset" | "button";
	disabled?: boolean;
	btnLabel: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
};

export const TheButton = ({
	type,
	disabled,
	btnLabel,
	onClick,
}: ButtonProps) => {
	const backgroundColor = disabled
		? "bg-light-gray"
		: "bg-radial-[at_1%_95%] from-orange-500 to-bold-900 to-65%";
	const textColor = disabled ? "text-dark-gray" : "text-light";
	const shadowColor = disabled
		? "shadow-disabledElement"
		: "shadow-lightBorder";

	return (
		<button
			color="transparent"
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={`py-2 px-4 rounded-xl hover:font-bold ${backgroundColor} ${textColor} ${shadowColor} cursor-pointer`}
		>
			{btnLabel}
		</button>
	);
};
