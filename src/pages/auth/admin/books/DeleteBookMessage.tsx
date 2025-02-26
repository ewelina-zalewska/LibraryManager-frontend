import { Link } from "@tanstack/react-router";
import { CollapsibleAccordion } from "@/components/CollapsibleAccordion";

export const DeleteBookMessage = () => {
	return (
		<CollapsibleAccordion>
			<h2 className="text-center p-8 text-[20px]">
				Item has been removed successfully
			</h2>
			<div className="w-full flex justify-center">
				<Link
					to="/auth/admin/books"
					search={{ page: 1 }}
					className="bg-radial-[at_1%_95%] from-orange-500 to-bold-900 to-65% shadow-lightBorder py-2 px-4 rounded-xl hover:font-bold"
				>
					Go Back
				</Link>
			</div>
		</CollapsibleAccordion>
	);
};
