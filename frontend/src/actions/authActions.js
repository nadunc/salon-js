import axios from 'axios';
import {SERVER_ROUTES} from '../common/commonVarList';
import {AuthenticationTypes} from '../types/index';

// import {messages} from './messages';

export function login(data) {
    return function (dispatch) {
        axios.post(SERVER_ROUTES.LOGIN, data).then((res) => {
            if (res.data.success) {
                dispatch({type: AuthenticationTypes.SIGIN_IN_SUCCESS, payload: res.data});
            } else {
                dispatch({type: AuthenticationTypes.SIGIN_IN_FAILED, payload: res.data});
            }
        }).catch((error) => {
            // TODO
            // dispatch({type: ExperienceTypes.EXPERIENCES_FETCH_FAILED, payload: messages.COMMENT_ADD_ERROR});
            dispatch({type: AuthenticationTypes.SIGIN_IN_FAILED, payload: 'Error sign in....'});
        });


        // let user = {
        //     id: 1,
        //     email: 'abc@abc.com',
        //     user_role: {id: 1, name: 'Stylist'},
        //
        //     stylist: {
        //         firstname: 'Test',
        //         lastname: 'Stylist',
        //         image: ''
        //     },
        //     salon: {},
        //     admin: {}
        // }
        //
        // dispatch({type: AuthenticationTypes.SIGIN_IN_SUCCESS, payload: user});


    }
}


export function getAuthFromLocalStorage() {
    return function (dispatch) {

        if (localStorage.getItem('auth')) {
            let auth = JSON.parse(localStorage.getItem('auth'));
            dispatch({type: AuthenticationTypes.GET_AUTH_FROM_LOCAL_STORAGE_SUCCESS, payload: auth});
        } else {
            dispatch({type: AuthenticationTypes.GET_AUTH_FROM_LOCAL_STORAGE_FAILED, payload: 'Auth not available in local storage'});
        }

    }
}

export function clearAuthFromLocalStorage() {
    return function (dispatch) {

        if (localStorage.getItem('auth')) {
            localStorage.removeItem('auth')
            dispatch({type: AuthenticationTypes.CLEAR_AUTH_FROM_LOCAL_STORAGE_SUCCESS, payload: 'Successfully removed auth from local storage.'});
        } else {
            dispatch({type: AuthenticationTypes.GET_AUTH_FROM_LOCAL_STORAGE_FAILED, payload: 'Auth not available in local storage'});
        }

    }
}