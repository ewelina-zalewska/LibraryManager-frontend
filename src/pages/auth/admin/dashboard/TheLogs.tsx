import { useState, useEffect } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getRouteApi, Outlet } from "@tanstack/react-router";
import { logsQueryOptions } from "@/queries/logsQuery";
import { FormChangeEvent, Log } from "@/types";
import { TheLogsListPage } from "@/pages/auth/admin/dashboard/TheLogsListPage";
import { TheInput } from "@/components/TheInput";
import { TheLogsListTable } from "@/pages/auth/admin/dashboard/TheLogsListTable";

const logsRoute = getRouteApi("/auth/_withAdminAuth/admin/dashboard/logs");

export const TheLogs = () => {
	const logsPerPage = 8;
	const { page: currentPage } = logsRoute.useSearch();

	const { data } = useSuspenseQuery(logsQueryOptions);
	const { logs } = data;

	const [filteredLogs, setFilteredLogs] = useState<Log[]>(logs);
	const [LOGS_DATA, setLOGS_DATA] = useState<Log[]>(logs);

	const [formState, setFormState] = useState<string>("");
	const HANDLE_CHANGE = (e: FormChangeEvent) => setFormState(e.target.value);

	useEffect(() => {
		const filterArray = logs.filter(
			(logs) =>
				logs.action.toLowerCase().includes(formState.toLowerCase()) ||
				logs.userID.toLowerCase().includes(formState.toLowerCase()),
		);
		setFilteredLogs(filterArray);
		console.log(filteredLogs);
	}, [formState]);

	useEffect(() => {
		const filteredData = () => {
			const filteredLogsPerPage = filteredLogs.slice(
				(currentPage - 1) * logsPerPage,
				(currentPage - 1) * logsPerPage + logsPerPage,
			);
			return filteredLogsPerPage;
		};

		setLOGS_DATA(filteredData);
	}, [filteredLogs, currentPage]);

	return (
		<>
			<div className="w-[80%] mx-auto flex md:justify-end justify-center my-5 md:my-1">
				<TheInput
					type="text"
					name="search"
					placeholder="search userId or action"
					onChange={HANDLE_CHANGE}
					value={formState}
					width={400}
				/>
			</div>
			{!filteredLogs.length ? (
				<div className="p-10 text-center md:text-left text-lg text-error">
					<p>No results</p>
				</div>
			) : (
				<TheLogsListTable filteredLogs={LOGS_DATA} />
			)}
			<TheLogsListPage
				filteredLogs={filteredLogs}
				logsPerPage={logsPerPage}
				currentPage={currentPage}
			/>
			<Outlet />
		</>
	);
};
