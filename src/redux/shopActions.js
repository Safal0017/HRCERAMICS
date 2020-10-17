import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';



export const fetchShop = () => (dispatch) => {

    dispatch(catagoryLoading(true));

    return fetch(baseUrl + 'SHOPDATA')
    .then(response => {
        if(response.ok){
            return response;
        }
        else
        {
            var error  = new Error("Error " + response.status + ":" + response.statusText);
            error.response = response;
            throw error;
        }
    }, error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(SHOPDATA => dispatch(addCatagory(SHOPDATA)))
    .catch(error => dispatch(catagoryFailed(error.message)));
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