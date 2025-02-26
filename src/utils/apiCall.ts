type ApiConfig<P = void> = {
	id?: string;
	method?: "GET" | "POST" | "DELETE" | "PATCH" | "PUT";
	body?: P;
};

export const apiCall = async <R, P = void>(
	url: string,
	config?: ApiConfig<P>,
) => {
	const API_BASE = import.meta.env.VITE_API_URL;

	const response = await fetch(`${API_BASE}${url}`, {
		method: config?.method || "GET",
		credentials: "include",
		body: config?.body ? JSON.stringify(config.body) : undefined,
	});
	const data = await response.json();
	return data as Promise<R>;
};
