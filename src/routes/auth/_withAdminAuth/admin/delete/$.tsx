import { WrongPlace } from "@/components/WrongPlace";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/_withAdminAuth/admin/delete/$")({
	component: () => WrongPlace("/auth/admin/homePage"),
});
