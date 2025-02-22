export const getTime = () => {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const getTime = (time: number) => (time < 10 ? `0${time}` : time);

	return `${getTime(hours)}:${getTime(minutes)}`;
};
