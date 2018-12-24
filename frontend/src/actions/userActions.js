import axios from 'axios';
import {SERVER_ROUTES} from '../common/commonVarList';
import {AuthenticationTypes} from '../types/index';

// import {messages} from './messages';

export function login(data) {
    return function (dispatch) {
        axios.post(SERVER_ROUTES.LOGIN, data).then((res) => {
            dispatch({type: AuthenticationTypes.SIGIN_IN_SUCCESS, payload: res.data.data});
        }).catch((error)=>{
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