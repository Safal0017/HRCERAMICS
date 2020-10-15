  
/* import { RATINGS } from "../shared/ratings";

export const initialStateRating = {
    ratings: RATINGS
};

export const Ratings = (state = initialStateRating, action) =>
{
    return state;
} */
import { RATINGS } from "./ratingType";
import * as ActionTypes from './ActionTypes';

/* export const initialStateRating = {
    ratings: RATINGS
};

export const Ratings = (state = initialStateRating, action) =>
{
    switch(action.type)
    {
        case ActionTypes.POST_RATINGS:
            // var userRating = action.payload;
            // var words = ['one', 'two', 'three', 'four', 'five'];
            // var rate = words[userRating-1];
            // var newRatings = {
            //     one: state.ratings.one,
            //     two: state.ratings.two,
            //     three: state.ratings.three,
            //     four: state.ratings.four,
            //     five: state.ratings.five
            // };
            // newRatings[rate] += 1;
        
            return {...state, ratings: action.payload};
        
        default:
            return state;
    }
} */

export const Ratings = (state = {
    ratings: {},
    errmess: null
}, action) =>
{
    switch(action.type)
    {
        
        case ActionTypes.ADD_RATINGS:
        
            return {...state, ratings: action.payload};
        
        case ActionTypes.SHOW_RATINGS:
        
            return {...state, ratings: action.payload};
        
        case ActionTypes.RATINGS_FAILED:
    
            return {...state, errmess: action.payload};
        
        default:
            return state;
    }
}