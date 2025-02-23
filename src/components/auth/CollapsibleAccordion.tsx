import { ReactNode } from "react";
import { AdminNavBar } from "@/components/auth/navigation/AdminNavBar";
import { UserNavBar } from "@/components/auth/navigation/UserNavBar";

type CollapsibleAccordionProps = {
	role: "admin" | "user";
	children?: ReactNode;
};

export const CollapsibleAccordion = ({
	role,
	children,
}: CollapsibleAccordionProps) => {
	return (
		<>
			{role === "user" ? <UserNavBar /> : <AdminNavBar />}
			<main className="md:w-full w-screen overflow-y-auto overflow-x-hidden px-main-x py-main-y h-main-small md:h-main flex flex-col gap-main">
				{children}
			</main>
			<footer className="hidden md:block h-footer"></footer>
		</>
	);
};
