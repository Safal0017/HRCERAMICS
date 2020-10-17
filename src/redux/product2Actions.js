import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';



export const fetchCatagory2 = () => (dispatch) => {

    dispatch(catagoryLoading(true));

    return fetch(baseUrl + 'CATAGORY2')
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
    .then(CATAGORY2 => dispatch(addCatagory(CATAGORY2)))
    .catch(error => dispatch(catagoryFailed(error.message)));
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
