import axios from 'axios';
import { ROOT_URL } from './index';
import { GET_FILES_OFA_DAY, GET_FILES_OFA_MONTH, GET_SERVER_DATE } from './types';

export function getFilesOfAMonth(month, year) {
    const request = axios.get(`${ROOT_URL}api/getfilesofamonth?month=${month}&year=${year}`);
    return {
        type: GET_FILES_OFA_MONTH,
        payload: request
    };
}

export function getServerDate() {
    const request = axios.get(`${ROOT_URL}/api/getserverdate`);
    return {
        type: GET_SERVER_DATE,
        payload: request
    };
}


export function getFilesOfADay(day, month, year) {
    const request = axios.get(`${ROOT_URL}api/getfilesbyyearmonthday?day=${day}&month=${month}&year=${year}`);
    return {
        type: GET_FILES_OFA_DAY,
        payload: request
    };
}