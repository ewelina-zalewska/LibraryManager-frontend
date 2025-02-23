import { CollapsibleAccordion } from "@/components/auth/CollapsibleAccordion";

export const HomePage = () => {
	return (
		<CollapsibleAccordion role="user">
			<h2 className="text-center p-8 text-[20px]">
				Welcome to the logged in user page
			</h2>
		</CollapsibleAccordion>
	);
};
