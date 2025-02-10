export const PageNotFound = (title: string) => {
	return (
		<div className="absolute top-0 left-0 w-full h-screen bg-transparent">
			<p className="text-[30px] text-error text-center mt-[40vh]">
				Ups...{title} not found.
			</p>
		</div>
	);
};
