import _ from 'lodash';
import { 
        GET_FILES_OFA_MONTH,

    } from '../actions/types';


export default (state = { }, action) => {
    switch (action.type) {        
        case GET_FILES_OFA_MONTH: 
            return { ...state, outputFileText: action.payload.data }; 

        default:
            return state;
     }
};
