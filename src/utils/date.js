import dayjs from 'dayjs';

export const DATE_FORMATS = {
	BR_DATE: 'DD/MM/YYYY',
	ISO_DATE: 'YYYY-MM-DD',
};

export function currentDateBRFormat() {
	return dayjs().format(DATE_FORMATS.BR_DATE);
}

export function formatISODate(date) {
	return dayjs(date).format(DATE_FORMATS.ISO_DATE);
}

export function formateBRDate(date) {
	return dayjs(date).format(DATE_FORMATS.BR_DATE);
}

export function isDateSameOrBefore(base, compared) {
	const baseConverted = dayjs(base);
	const comparedConverted = dayjs(compared);

	return baseConverted.isSameOrBefore(comparedConverted, 'day');
}

export function isDateSameOrAfter(base, compared) {
	const baseConverted = dayjs(base);
	const comparedConverted = dayjs(compared);

	return baseConverted.isSameOrAfter(comparedConverted, 'day');
}

export function pastYears(date) {
	const baseYear = dayjs(date);
	const currentDate = dayjs();

	return currentDate.diff(baseYear, 'year');
}

export function dateIntervalInMonthOrDays(initial, final) {
	const init = dayjs(initial);
	const fin = dayjs(final);

	let difference = fin.diff(init, 'month');

	if (difference === 0) {
		difference = fin.diff(init, 'day');
		return `${difference} dias`;
	}

	return `${difference} meses`;
}

export function dateIntervalInDays(initial, final) {
	const init = dayjs(initial);
	const fin = dayjs(final);

	const difference = fin.diff(init, 'day');

	return `${difference} dias`;
}
