import {combineReducers} from 'redux';
import experiences from './experienceReducer';
import user from './userReducer';

export default combineReducers({
    experiences,
    user
});