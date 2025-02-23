import { CollapsibleAccordion } from "@/components/auth/CollapsibleAccordion";

export const HomePage = () => {
	return (
		<CollapsibleAccordion role="admin">
			<h2 className="text-center p-8 text-[20px]">
				Welcome to the admin panel
			</h2>
		</CollapsibleAccordion>
	);
};
