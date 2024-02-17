import dayjs from 'dayjs';

export const DATE_FORMATS = {
    BR_DATE: "DD/MM/YYYY",
    ISO_DATE: "YYYY-MM-DD"
}

export function formatISODate(date){
    return dayjs(date).format(DATE_FORMATS.ISO_DATE)
}

export function formateBRDate(date){
    return dayjs(date).format(DATE_FORMATS.BR_DATE)
}

export function isDateSameOrBefore(base, compared){
    const baseConverted = dayjs(base)
    const comparedConverted = dayjs(compared, DATE_FORMATS.BR_DATE)

    return baseConverted.isSameOrBefore(comparedConverted, 'day')
}

export function isDateSameOrAfter(base, compared){
    const baseConverted = dayjs(base)
    const comparedConverted = dayjs(compared, DATE_FORMATS.BR_DATE)

    return baseConverted.isSameOrAfter(comparedConverted, 'day')
}

export function pastYears(date){
    const baseYear = dayjs(date);
    const currentDate = dayjs();

    return currentDate.diff(baseYear, 'year');
}