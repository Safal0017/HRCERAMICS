import {CATAGORY1} from './product1Types';
import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
//import Ratings from './rating';
//import getRating from './rating'

// export const postRatings = (ratings) =>(dispatch,getState)=> {
//     const userRating = ratings;
//     console.log(userRating)
//     const words = ['one', 'two', 'three', 'four', 'five'];
//     const rate = words[userRating-1];
//     const newRatings = {
//         // one: getState.one,
//         // two: getState.two,
//         // three: getState.three,
//         // four: getState.four,
//         // five: getState.five
        
//         one:0,
//         two:0,
//         three: 0,
//         four: 0,
//         five: 0

//         // one: getRating.one,
//         // two: getRating.two,
//         // three: getRating.three,
//         // four: getRating.four,
//         // five:getRating.five
//     };

//     newRatings[rate] += 1;
// console.log(newRatings);
//     return fetch(baseUrl + 'rating', {
//         method: "POST",
//         body: JSON.stringify(newRatings),
//         headers: {
//           "Content-Type": "application/json"
//         },
//         credentials: "same-origin"
//     })
//     .then(response => {
//         if (response.ok) {
//           return response;
//         } else {
//           var error = new Error('Error ' + response.status + ': ' + response.statusText);
//           error.response = response;
//           throw error;
//         }
//       },
//       error => {
//             throw error;
//       })
//     .then(response => response.json())
//     .then(response => dispatch(addRating(response)))
//     .catch(error =>  { console.log('post rating', error.message); alert('Your rating could not be posted\nError: '+error.message); });
// };

//postRatings
export const postRatings = (rating) => (dispatch) => {

    var userRating = rating;
    console.log(userRating)
    var words = ['one', 'two', 'three', 'four', 'five'];
    var rate = words[userRating-1];
 
    return fetch(baseUrl + 'rating')
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
    .then(newRatings => {
        newRatings[rate] += 1;
        console.log(newRatings);
        fetch(baseUrl + 'rating', {
            method: 'POST',
            body: JSON.stringify(newRatings),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'same-origin'
        })
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
        .then(response => dispatch(addRatings(response)))
        .catch(error => dispatch(ratingsFailed(error.message)));
        })
    .catch(error => dispatch(ratingsFailed(error.message))); 

}
//fetchRatings
export const fetchRatings = () => (dispatch) => {

    return fetch(baseUrl + 'rating')
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
    .then(ratings => dispatch(showRatings(ratings)))
    .catch(error => dispatch(ratingsFailed(error.message)));

};


export const fetchCatagory1 = () => (dispatch) => {

    dispatch(catagoryLoading(true));

    
    return fetch(baseUrl + 'CATAGORY1')
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
    .then(CATAGORY1 => dispatch(addCatagory(CATAGORY1)))
    .catch(error => dispatch(catagoryFailed(error.message)));




    
    
    // setTimeout(() => {
    //     dispatch(addCatagory(CATAGORY1));
    // }, 1000);
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
export const addRatings = (ratings) => ({
    type: ActionTypes.ADD_RATINGS,
    payload: ratings
});

export const showRatings = (ratings) => ({
    type: ActionTypes.SHOW_RATINGS,
    payload: ratings
});

export const ratingsFailed = (errmess) => ({
    type: ActionTypes.RATINGS_FAILED,
    payload: errmess
});