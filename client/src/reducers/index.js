import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as reduxForm } from 'redux-form';
import surveysReducer from './surveysReducer';

export default combineReducers({
	auth: authReducer, // data is stored in this "variable"
	form: reduxForm,
	surveys: surveysReducer
});
