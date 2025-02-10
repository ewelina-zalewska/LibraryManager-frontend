import { ReactNode } from "react";
import { NavBar } from "@/components/navigation/Navbar";
import { LinkToPage } from "@/components/navigation/LinkToPage";

type CollapsibleAccordionProps = {
	children?: ReactNode;
};

export const CollapsibleAccordion = ({
	children,
}: CollapsibleAccordionProps) => {
	return (
		<>
			<NavBar />
			<main className="md:w-full w-screen overflow-y-auto overflow-x-hidden px-main-x py-main-y h-main-small md:h-main flex flex-col gap-main">
				<section className="flex-grow">{children}</section>
				<LinkToPage link="/" title="Go Back" />
			</main>
			<footer className="hidden md:block h-footer"></footer>
		</>
	);
};
