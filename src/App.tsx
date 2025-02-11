import { routeTree } from "@/routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";

const router = createRouter({
	routeTree,
	defaultNotFoundComponent: () => <p>Page not found</p>,
	context: {
		queryClient: undefined!,
	},
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const queryClient = new QueryClient();

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} context={{ queryClient }} />
		</QueryClientProvider>
	);
};
