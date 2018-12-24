import axios from 'axios';
import {SERVER_ROUTES} from '../commonVarList';
import { ExperienceTypes} from '../types/index';
// import {messages} from './messages';

export function getExperiences() {
    return function (dispatch) {
        axios.get(SERVER_ROUTES.GET_EXPERIENCES).then((res) => {
            dispatch({type: ExperienceTypes.EXPERIENCES_FETCH_SUCCESS, payload: res.data.data});
        }).catch((error)=>{
            // TODO
            // dispatch({type: ExperienceTypes.EXPERIENCES_FETCH_FAILED, payload: messages.COMMENT_ADD_ERROR});
            dispatch({type: ExperienceTypes.EXPERIENCES_FETCH_FAILED, payload: 'Error experiences....'});
        });
    }
}