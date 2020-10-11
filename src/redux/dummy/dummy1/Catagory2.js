
import * as ActionTypes from './ActionTypes';

export const Catagory2 = (state = {
    isLoading: true,
    errMess: null,
    catagory2:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CATAGORY2:
            return {...state, isLoading: false, errMess: null, catagory2: action.payload};

        case ActionTypes.CATAGORY2_LOADING:
            return {...state, isLoading: true, errMess: null, catagory2: []}

        case ActionTypes.CATAGORY2_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};