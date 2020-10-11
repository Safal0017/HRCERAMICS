// import {CATAGORY2} from './product2Types';

// export const catagory2 = ()=>{
//     return{
//         type: CATAGORY2
//     }
// }

import {CATAGORY2} from './product2Types';
import * as ActionTypes from './ActionTypes';



export const fetchCatagory2 = () => (dispatch) => {

    dispatch(catagoryLoading(true));

    setTimeout(() => {
        dispatch(addCatagory(CATAGORY2));
    }, 1000);
}

export const catagoryLoading = () => ({
    type: ActionTypes.CATAGORY2_LOADING
});

export const catagoryFailed = (errmess) => ({
    type: ActionTypes.CATAGORY2_FAILED,
    payload: errmess
});

export const addCatagory = (catagory2) => ({
    type: ActionTypes.ADD_CATAGORY2,
    payload: catagory2
});
