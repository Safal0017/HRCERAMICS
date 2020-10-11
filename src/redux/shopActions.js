//import Shop from '../components/shopComponent';
import { SHOPDATA } from './shopTypes';
import * as ActionTypes from './ActionTypes';
/* 
export const shopDetails = ()=>{
    return{
        type: SHOPDATA
    }
} */


export const fetchShop = () => (dispatch) => {

    dispatch(catagoryLoading(true));

    setTimeout(() => {
        dispatch(addCatagory(SHOPDATA));
    }, 1000);
}

export const catagoryLoading = () => ({
    type: ActionTypes.CATAGORY3_LOADING
});

export const catagoryFailed = (errmess) => ({
    type: ActionTypes.CATAGORY3_FAILED,
    payload: errmess
});

export const addCatagory = (shop) => ({
    type: ActionTypes.ADD_CATAGORY3,
    payload: shop
});