import { useContext } from "react";
import { CollapsibleAccordion } from "@/components/auth/CollapsibleAccordion";
import { UserDataContext } from "@/context/UserDataContext";

export const TheDashboard = () => {
	const userData = useContext(UserDataContext);

	return (
		<CollapsibleAccordion user={userData}>
			<h1>Hallo from dashboard</h1>
		</CollapsibleAccordion>
	);
};
