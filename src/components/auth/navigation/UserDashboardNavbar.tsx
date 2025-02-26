import { Link, useLocation } from "@tanstack/react-router";
import { Route as statistics } from "@/routes/auth/_withUserAuth/user/dashboard/statistics";
import { Route as borrowedBooks } from "@/routes/auth/_withUserAuth/user/dashboard/borrowedBooks";
import { Route as deleteAccount } from "@/routes/auth/_withUserAuth/user/dashboard/deleteAccount";

export const UserDashBoardNavbar = () => {
	const location = useLocation();

	const statisticsLink = statistics.fullPath;
	const borrowedBooksLink = borrowedBooks.fullPath;
	const deleteAccountLink = deleteAccount.fullPath;

	const MARK_ACTIVE_PATH = (path: string) =>
		location.pathname === path ? "text-orange-400" : null;

	return (
		<div className="text-center w-full text-[20px] md:flex justify-center mb-5">
			<nav>
				<ul className="md:flex">
					<li className="mb-2 md:mr-8">
						<Link
							to={statisticsLink}
							className={`${MARK_ACTIVE_PATH(statisticsLink)}`}
						>
							Statistics
						</Link>
					</li>
					<li className="mb-2 md:mr-8">
						<Link
							to={borrowedBooksLink}
							className={`${MARK_ACTIVE_PATH(borrowedBooksLink)}`}
						>
							Borrowed books
						</Link>
					</li>
					<li>
						<Link
							to={deleteAccountLink}
							className={`${MARK_ACTIVE_PATH(deleteAccountLink)}`}
						>
							Delete Account
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};
