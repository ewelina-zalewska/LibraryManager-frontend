import { useEffect } from "react";
import { Outlet, useNavigate } from "@tanstack/react-router";

export const WrongPlace = (path: string) => {
	const time: number = 3000;

	const navigate = useNavigate();

	useEffect(() => {
		const timeout = setTimeout(() => {
			navigate({ to: path });
		}, time);

		return () => {
			clearTimeout(timeout);
		};
	}, [navigate]);

	return (
		<div className="absolute top-0 left-0 w-full h-screen bg-theme-translucent-color">
			<h3 className="text-[30px] text-theme-error-color text-center mt-[40vh]">
				This is a wrong place. Go back to Home Page.
			</h3>
			<Outlet />
		</div>
	);
};
