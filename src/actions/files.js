import axios from 'axios';
import { ROOT_URL } from './index';
import { GET_FILES_OFA_MONTH } from './types';

export function getFilesOfAMonth(month, year) {
    const request = axios.get(`${ROOT_URL}api/getfilesofamonth?month=${month}&year=${year}`);
    return {
        type: GET_FILES_OFA_MONTH,
        payload: request
    };
}

