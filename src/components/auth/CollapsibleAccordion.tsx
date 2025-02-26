import { ReactNode } from "react";
import { AdminNavBar } from "@/components/auth/navigation/AdminNavBar";
import { UserNavBar } from "@/components/auth/navigation/UserNavBar";
import { UserDataContextType } from "@/context/ConfigUserDataContext";

type CollapsibleAccordionProps = {
	user: UserDataContextType;
	children?: ReactNode;
};

export const CollapsibleAccordion = ({
	user,
	children,
}: CollapsibleAccordionProps) => {
	const { role, name, login } = user;
	return (
		<>
			{role === "user" ? <UserNavBar /> : <AdminNavBar />}
			<header className="md:text-right text-[16px] p-2">
				<p>
					{role} : {name}
				</p>
				<p>Library card: {login}</p>
			</header>
			<main className="md:w-full w-screen overflow-y-auto overflow-x-hidden px-main-x py-main-y h-main-small md:h-main flex flex-col gap-main">
				{children}
			</main>
			<footer className="hidden md:block h-footer"></footer>
		</>
	);
};
