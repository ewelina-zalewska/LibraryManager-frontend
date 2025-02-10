import { Link } from "@tanstack/react-router";
import leftArrow from "@/assets/images/light_left_arrow_btn.png";

type LinkToPageProps = {
	title: string;
	link: string;
};

export const LinkToPage = ({ title, link }: LinkToPageProps) => {
	return (
		<Link
			to={link}
			className=" w-fit p-2 mx-auto lg:mx-1 hover:font-bold flex gap-2 self-end place-self-end"
		>
			<img
				src={leftArrow}
				className="w-[30px] h-5 self-center "
				alt="left arrow"
			/>
			<p>{title}</p>
		</Link>
	);
};
