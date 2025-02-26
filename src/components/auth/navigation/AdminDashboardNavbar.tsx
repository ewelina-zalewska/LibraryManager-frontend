import { Link, useLocation } from "@tanstack/react-router";
import { Route as addBooks } from "@/routes/auth/_withAdminAuth/admin/dashboard/addBooks";
import { Route as borrowedBooks } from "@/routes/auth/_withAdminAuth/admin/dashboard/borrowedBooks";
import { Route as logs } from "@/routes/auth/_withAdminAuth/admin/dashboard/logs";

export const AdminDashBoardNavbar = () => {
	const location = useLocation();

	const addBooksLink = addBooks.fullPath;
	const borrowedBooksLink = borrowedBooks.fullPath;
	const logsLink = logs.fullPath;

	const MARK_ACTIVE_PATH = (path: string) =>
		location.pathname === path ? "text-orange-400" : null;

	return (
		<div className="text-center w-full text-[20px] md:flex justify-center mb-5">
			<nav>
				<ul className="md:flex">
					<li className="mb-2 md:mr-8">
						<Link
							to={addBooksLink}
							className={`${MARK_ACTIVE_PATH(addBooksLink)}`}
						>
							Add Books
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
						<Link to={logsLink} className={`${MARK_ACTIVE_PATH(logsLink)}`}>
							Logs
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};
