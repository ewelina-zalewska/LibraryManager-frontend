import { Log } from "@/types";

type LogsProps = {
	filteredLogs: Log[];
};

export const TheLogsListTable = ({ filteredLogs }: LogsProps) => {
	const singleLogsStyle = "px-5 py-3";
	return (
		<table className="w-full md:w-[95%] lg:w-[80%] mx-auto text-sm text-left text-text">
			<caption className="p-5 text-lg font-semibold text-left">
				Logs list
			</caption>
			<thead className="table-auto text-xs uppercase ">
				<tr>
					<th scope="col" className={singleLogsStyle}>
						UserID
					</th>
					<th scope="col" className={singleLogsStyle}>
						Action
					</th>
					<th scope="col" className={singleLogsStyle}>
						Created
					</th>
				</tr>
			</thead>
			<tbody>
				{filteredLogs.map((log) => (
					<tr
						key={Math.round(Math.random() * 100000)}
						className="border-b border-b-gray-800 hover:bg-gray-800"
					>
						<td className={singleLogsStyle}>{log.userID}</td>
						<td className={singleLogsStyle}>{log.action}</td>
						<td className={singleLogsStyle}>{log.created_on}</td>
						<td className={singleLogsStyle}></td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
