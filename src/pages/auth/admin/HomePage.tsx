import { useContext } from "react";
import { CollapsibleAccordion } from "@/components/auth/CollapsibleAccordion";
import { UserDataContext } from "@/context/UserDataContext";

export const HomePage = () => {
	const userData = useContext(UserDataContext);
	return (
		<CollapsibleAccordion user={userData}>
			<h2 className="text-center p-8 text-[20px]">
				{userData.name}, welcome to the admin panel
			</h2>
		</CollapsibleAccordion>
	);
};
