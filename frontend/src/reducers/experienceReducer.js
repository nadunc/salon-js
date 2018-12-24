import {ExperienceTypes} from '../types/index';

let initialState = {
    experiences: []
}


export default function reducer(state = initialState, action) {

    switch (action.type) {
        case ExperienceTypes.EXPERIENCES_FETCH_SUCCESS: {
            return {
                ...state,
                experiences: action.payload
            };
            break;
        }

        case ExperienceTypes.EXPERIENCES_FETCH_FAILED: {
            return {
                ...state,
                experiences: []
            };
            break;
        }

        default:
    }

    return state;
}