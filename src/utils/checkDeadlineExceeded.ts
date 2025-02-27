export const checkDeadlineExceeded = (deadline: string) => {
	const currentDate = new Date().getTime();
	const deadlineDate = new Date(deadline).getTime();

	const isExceeded = currentDate > deadlineDate;

	return isExceeded;
};
