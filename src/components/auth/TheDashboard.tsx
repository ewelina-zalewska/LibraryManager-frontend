import { useContext } from "react";
import { CollapsibleAccordion } from "@/components/auth/CollapsibleAccordion";
import { UserDataContext } from "@/context/UserDataContext";
import { Outlet } from "@tanstack/react-router";
import { UserDashBoardNavbar } from "@/components/auth/navigation/UserDashboardNavbar";
import { AdminDashBoardNavbar } from "@/components/auth/navigation/AdminDashboardNavbar";

export const TheDashboard = () => {
	const userData = useContext(UserDataContext);
	const { role } = userData;
	return (
		<CollapsibleAccordion user={userData}>
			{role ? <AdminDashBoardNavbar /> : <UserDashBoardNavbar />}
			<Outlet />
		</CollapsibleAccordion>
	);
};
