import { ReactNode } from "react";

type ModalBoxProps = {
	children: ReactNode;
	width: number;
	height: number;
};

export const ModalBox = ({ children, width, height }: ModalBoxProps) => {
	return (
		<>
			<div className="fixed left-0 right-0 top-0 bottom-0 bg-translucent flex justify-center items-center z-[100] min-h-[600px]">
				<div
					className="bg-body text-gr shadow-dark rounded-lg flex flex-col justify-evenly items-center text-[20px] overflow-y-auto"
					style={{
						width: `${width}px`,
						height: `${height}px`,
					}}
				>
					{children}
				</div>
			</div>
		</>
	);
};
