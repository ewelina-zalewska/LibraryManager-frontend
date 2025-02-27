import { FormEvent } from "react";
import { ModalBox } from "@/components/ModalBox";
import { TheButton } from "@/components/navigation/TheButton";
import { LinkToPage } from "@/components/navigation/LinkToPage";
import { ResponseMessage } from "@/types";

type TheConfirmationProps = {
	width: number;
	height: number;
	name: string;
	link: string;
	action: string;
	onClick: (e: FormEvent) => void;
	disabled?: boolean;
	showResponse?: boolean;
	response?: ResponseMessage | null;
};

export const TheConfirmation = ({
	width,
	height,
	name,
	link,
	action,
	onClick,
	disabled,
	showResponse,
	response,
}: TheConfirmationProps) => {
	return (
		<ModalBox width={width} height={height}>
			<p className="p-5 text-center">
				Are you sure you want to {action} the book <strong>{name}</strong>?
			</p>
			<TheButton
				btnLabel={action.toUpperCase()}
				disabled={disabled}
				onClick={onClick}
			/>
			{showResponse && (
				<p
					className={`${response?.status === "success" ? "text-green" : "text-error"}`}
				>
					{action === "return"
						? "The book has been returned successfully"
						: response?.message}
				</p>
			)}
			<LinkToPage link={link} title="Go Back" />
		</ModalBox>
	);
};
