import React, { Suspense } from "react";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";

const TanStackRouterDevtools = import.meta.env.DEV
	? React.lazy(() =>
			import("@tanstack/router-devtools").then((res) => ({
				default: res.TanStackRouterDevtools,
				defaultStaleTime: 5000,
			})),
		)
	: () => null;

const RootComponent = () => {
	return (
		<>
			<Outlet />
			<Suspense>
				<TanStackRouterDevtools />
			</Suspense>
		</>
	);
};

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
}>()({
	component: RootComponent,
});
