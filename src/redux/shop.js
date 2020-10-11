import * as ActionTypes from './ActionTypes';

export const ShopDetails = (state = {
    isLoading: true,
    errMess: null,
    shop:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CATAGORY3:
            return {...state, isLoading: false, errMess: null, shop: action.payload};

        case ActionTypes.CATAGORY3_LOADING:
            return {...state, isLoading: true, errMess: null, shop: []}

        case ActionTypes.CATAGORY3_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};