import {AuthenticationTypes} from '../types/index';

let initialState = {
    user: null,
    message: '',
    isAuth: false,
    // userType: '',
    action: ''
}


export default function reducer(state = initialState, action) {

    switch (action.type) {
        case AuthenticationTypes.SIGIN_IN_SUCCESS: {

            return {
                ...state,
                user: action.payload.data,
                message: action.payload.message,
                isAuth: true,
                action: AuthenticationTypes.SIGIN_IN_SUCCESS
            };
            break;
        }

        case AuthenticationTypes.SIGIN_IN_FAILED: {
            return {
                ...state,
                user: null,
                message: action.payload.message,
                isAuth: false,
                // userType: '',
                action: AuthenticationTypes.SIGIN_IN_FAILED
            };
            break;
        }

        case AuthenticationTypes.GET_AUTH_FROM_LOCAL_STORAGE_SUCCESS: {
            return {
                ...state,
                user: action.payload.user,
                message: '',
                isAuth: action.payload.isAuth,
                // userType: ,
                action: AuthenticationTypes.GET_AUTH_FROM_LOCAL_STORAGE_SUCCESS
            };
            break;
        }

        case AuthenticationTypes.GET_AUTH_FROM_LOCAL_STORAGE_FAILED: {
            return {
                ...state,
                user: null,
                message: '',
                isAuth: false,
                // userType: ,
                action: AuthenticationTypes.GET_AUTH_FROM_LOCAL_STORAGE_FAILED
            };
            break;
        }

        case AuthenticationTypes.CLEAR_AUTH_FROM_LOCAL_STORAGE_SUCCESS: {
            return {
                ...state,
                user: null,
                message: '',
                isAuth: false,
                // userType: ,
                action: AuthenticationTypes.CLEAR_AUTH_FROM_LOCAL_STORAGE_SUCCESS
            };
            break;
        }

        default:
    }

    return state;
}