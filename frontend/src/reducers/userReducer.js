import {AuthenticationTypes} from '../types/index';

let initialState = {
    user: {},
    isAuth: false,
    userType: ''
}


export default function reducer(state = initialState, action) {

    switch (action.type) {
        case AuthenticationTypes.SIGIN_IN_SUCCESS: {
            localStorage.setItem('state', JSON.stringify({
                user: action.payload,
                isAuth: true,
                userType: action.payload.user_role.name
            }));

            return {
                ...state,
                user: action.payload,
                isAuth: true,
                userType: action.payload.user_role.name
            };
            break;
        }

        case AuthenticationTypes.SIGIN_IN_FAILED: {
            return {
                ...state,
                user: {},
                isAuth: false,
                userType: ''

            };
            break;
        }

        default:
    }

    return state;
}