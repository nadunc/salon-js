import {combineReducers} from 'redux';
import experiences from './experienceReducer';
import auth from './authReducer';

export default combineReducers({
    experiences,
    auth
});