import { useEffect, useState } from "react";

export const useDisabled = () => {
	const [isDisabled, setDisabled] = useState<boolean>(false);
	useEffect(() => {
		if (!isDisabled) return;
		const timeout = setTimeout(() => {
			setDisabled(false);
		}, 3000);
		return () => {
			clearTimeout(timeout);
		};
	}, [isDisabled]);

	return { isDisabled, setDisabled };
};
