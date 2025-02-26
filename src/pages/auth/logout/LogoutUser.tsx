import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { CollapsibleAccordion } from "@/components/CollapsibleAccordion";
import { Route as LogoutImport } from "@/routes/logout";
import { Route as IndexImport } from "@/routes/index";

export const LogoutUser = () => {
	const time = 3000;
	const { status } = LogoutImport.useSearch();
	const homeLink = IndexImport.fullPath;

	const navigate = useNavigate();
	useEffect(() => {
		const timeout = setTimeout(() => {
			navigate({ to: homeLink });
		}, time);

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return (
		<CollapsibleAccordion>
			<h2 className="text-center p-8 text-[20px]">{status}</h2>
		</CollapsibleAccordion>
	);
};
