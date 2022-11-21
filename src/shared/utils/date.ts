import { intlFormat } from 'date-fns';

export const getDateString = (date: Date = new Date()): string => {
    try {
        return intlFormat(date, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }, {
            locale: 'ru-RU',
        });
    }
    catch (errorData: unknown) {
        return '';
    }
};
