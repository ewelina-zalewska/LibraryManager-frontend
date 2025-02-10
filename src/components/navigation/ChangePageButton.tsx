import { MouseEventHandler } from "react";

type ChangePageButton = {
	disabled?: boolean;
	btnLabel: string | number;
	onClick: MouseEventHandler<HTMLButtonElement>;
};

export const ChangePageButton = ({
	disabled,
	btnLabel,
	onClick,
}: ChangePageButton) => {
	const backgroundColor = !disabled
		? "bg-theme-light-gray-color"
		: "bg-radial-[at_1%_95%] from-orange-500 to-bold-900 to-65%";
	const textColor = !disabled
		? "text-theme-dark-gray-color"
		: "text-theme-dark-color";

	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={`py-2 px-4 rounded-lg hover:font-bold ${backgroundColor} ${textColor} cursor-pointer  `}
		>
			{btnLabel}
		</button>
	);
};
