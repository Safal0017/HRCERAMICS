
import * as ActionTypes from './ActionTypes';

export const Catagory1 = (state = {
    isLoading: true,
    errMess: null,
    catagory1:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CATAGORY1:
            return {...state, isLoading: false, errMess: null, catagory1: action.payload};

        case ActionTypes.CATAGORY1_LOADING:
            return {...state, isLoading: true, errMess: null, catagory1: []}

        case ActionTypes.CATAGORY1_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};