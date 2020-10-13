  
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

export const initialStateRating = {
    ratings: RATINGS
};

export const Ratings = (state = initialStateRating, action) =>
{
    switch(action.type)
    {
        case ActionTypes.POST_RATINGS:
            var userRating = action.payload;
            var words = ['one', 'two', 'three', 'four', 'five'];
            var rate = words[userRating-1];
            var newRatings = {
                one: state.ratings.one,
                two: state.ratings.two,
                three: state.ratings.three,
                four: state.ratings.four,
                five: state.ratings.five
            };

            newRatings[rate] += 1;
        
            return {...state, ratings: newRatings};
        
        default:
            return state;
    }
}