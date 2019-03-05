import _ from 'lodash';
import { 
        GET_FILES_OFA_MONTH, GET_SERVER_DATE, GET_FILES_OFA_DAY

    } from '../actions/types';


export default (state = { }, action) => {
    switch (action.type) {        
        case GET_SERVER_DATE: 
        return { ...state, server_date: action.payload.data }; 

        case GET_FILES_OFA_DAY: 
            return { ...state, outputFileText: action.payload.data }; 

        case GET_FILES_OFA_MONTH: 
            return { ...state, outputFileText: action.payload.data }; 

        default:
            return state;
     }
};
