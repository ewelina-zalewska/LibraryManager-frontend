import { useState } from "react";
import { Route as AuthWithUserAuthUserHomePageImport } from "@/routes/auth/_withUserAuth/user/homePage";
import { Route as AuthWithUserAuthUserBooksImport } from "@/routes/auth/_withUserAuth/user/books";
import { Route as AuthWithUserAuthUserDashboardImport } from "@/routes/auth/_withUserAuth/user/dashboard";
import { Route as LogoutImport } from "@/routes/logout";
import { Link } from "@tanstack/react-router";

export const UserNavBar = () => {
	const title = "Library Manager";
	const homeLink = AuthWithUserAuthUserHomePageImport.fullPath;
	const booksLink = AuthWithUserAuthUserBooksImport.fullPath;
	const dashboardLink = AuthWithUserAuthUserDashboardImport.fullPath;
	const LogoutLink = LogoutImport.fullPath;

	const [open, setOpen] = useState<boolean>(false);

	const TOGGLE_MENU = () => setOpen((prevOpen) => (prevOpen = !prevOpen));

	const MARK_ACTIVE_PATH = (path: string) =>
		location.pathname === path ? "text-orange-400" : null;

	return (
		<>
			<div
				onClick={TOGGLE_MENU}
				className="md:hidden z-10 absolute translate-x-[50%] translate-y-[-50%] top-0 right-0 w-[120px] h-[120px] 
          rounded-full bg-text text-body text-[45px] transition duration-300 linear font-bold cursor-pointer shadow-light"
			>
				<div
					className={`mt-[45px] h-[55%] flex justify-center rounded-full  ${open ? "rotate-[405deg] w-[65%]" : "rotate-0 w-[55%]"}`}
				>
					+
				</div>
			</div>
			<header
				className={`absolute top-[-300px] md:top-0 bg-body rounded-b-lg md:static h-[300px] md:h-auto w-full flex md:flex-row flex-col justify-between items-center px-nav-x py-nav-y text-nav shadow-light md:shadow-none ${open ? "translate-y-[100%] md:translate-y-0" : null} transition duration-500 linear`}
			>
				<h1 className="font-normal text-title bg-radial-[at_1%_95%] from-orange-500 to-bold-900 to-65% p-title rounded-lg">
					{title}
				</h1>
				<nav>
					<ul className="flex md:flex-row flex-col pt-1 md:gap-[5vw] gap-4">
						<li>
							<Link to={homeLink} className={`${MARK_ACTIVE_PATH(homeLink)}`}>
								Home
							</Link>
						</li>
						<li>
							<Link
								to={booksLink}
								search={{ page: 1 }}
								className={`${MARK_ACTIVE_PATH(booksLink)}`}
							>
								Books
							</Link>
						</li>
						<li>
							<Link
								to={dashboardLink}
								className={`${MARK_ACTIVE_PATH(dashboardLink)}`}
							>
								Dashboard
							</Link>
						</li>
						<li>
							<Link
								to={LogoutLink}
								className={`${MARK_ACTIVE_PATH(LogoutLink)}`}
							>
								Logout
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};
