import { CollapsibleAccordion } from "@/components/auth/CollapsibleAccordion";

export const TheDashboard = (role: "admin" | "user") => {
	return (
		<CollapsibleAccordion role={role}>
			<h1>Hallo from dashboard</h1>
		</CollapsibleAccordion>
	);
};
