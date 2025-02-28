import { useCheckDeleteAccount } from "@/hooks/useCheckDeleteAccount";

import { filterBooks } from "@/utils/filterBooks";
import { NumberOfBooksPerMonth } from "@/pages/auth/user/dashboard/NumberOfBooksPerMonth";

export const TheStatistics = () => {
	const userBooks = useCheckDeleteAccount();
	const { borrowed, notReturned, returned } = filterBooks(userBooks);

	const singleBookStyle = "px-5 py-3";
	return (
		<>
			<table className="w-full md:w-[95%] lg:w-[80%] mx-auto text-sm text-left text-text">
				<caption className="p-5 text-lg font-semibold text-left">
					Books:
				</caption>
				<thead className="table-auto text-xs uppercase ">
					<tr>
						<th scope="col" className={singleBookStyle}>
							Borrowed
						</th>
						<th scope="col" className={`${singleBookStyle} text-error`}>
							Not returned
						</th>
						<th scope="col" className={`${singleBookStyle}`}>
							Returned
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="border-b border-b-gray-800 hover:bg-gray-800">
						<td className={singleBookStyle}>{borrowed}</td>
						<td className={`${singleBookStyle} text-error`}>{notReturned}</td>
						<td className={`${singleBookStyle}`}>{returned}</td>
						<td className={singleBookStyle}></td>
					</tr>
				</tbody>
			</table>
			<NumberOfBooksPerMonth />
		</>
	);
};
