import { useState } from "react";
import { Route as IndexImport } from "@/routes/index";
import { Route as BooksImport } from "@/routes/books";
import { Route as RegisterImport } from "@/routes/register";
import { Route as LoginImport } from "@/routes/login";
import { Link } from "@tanstack/react-router";

export const NavBar = () => {
	const title = "Library Manager";
	const homeLink = IndexImport.fullPath;
	const booksLink = BooksImport.fullPath;
	const loginLink = LoginImport.fullPath;
	const registerLink = RegisterImport.fullPath;

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
							<Link to={loginLink} className={`${MARK_ACTIVE_PATH(loginLink)}`}>
								Sign in
							</Link>
						</li>
						<li>
							<Link
								to={registerLink}
								className={`${MARK_ACTIVE_PATH(registerLink)}`}
							>
								Sign up
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};
