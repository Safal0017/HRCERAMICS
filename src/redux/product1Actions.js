import {CATAGORY1} from './product1Types';
import * as ActionTypes from './ActionTypes';
/* export const catagory1 = ()=>{
    return{
        type: CATAGORY1
    }
} */


export const fetchCatagory1 = () => (dispatch) => {

    dispatch(catagoryLoading(true));

    setTimeout(() => {
        dispatch(addCatagory(CATAGORY1));
    }, 1000);
}

export const catagoryLoading = () => ({
    type: ActionTypes.CATAGORY1_LOADING
});

export const catagoryFailed = (errmess) => ({
    type: ActionTypes.CATAGORY1_FAILED,
    payload: errmess
});

export const addCatagory = (catagory1) => ({
    type: ActionTypes.ADD_CATAGORY1,
    payload: catagory1
});
