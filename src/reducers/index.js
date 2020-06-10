import { combineReducers } from 'redux';
//the 'as formReducer' part is an optional rename as the name reducer is a bit inconvenient
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer
});