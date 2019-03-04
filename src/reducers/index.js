import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; /* comment this, if you don't use redux-from */
import fileReducer from './reducer_file';

const rootReducer = combineReducers({
  form: formReducer, /* comment this, if you don't use redux-from */
  file: fileReducer
});

export default rootReducer;
