import * as ActionTypes from './ActionTypes';



export const Ratings = (state = {
    ratings: {},
    errmess: null
}, action) =>
{
    switch(action.type)
    {
        case ActionTypes.ADD_RATINGS:
        
            return {...state,  ratings: action.payload};
        
        case ActionTypes.SHOW_RATINGS:
        
            return {...state,   ratings: action.payload};
        
        case ActionTypes.RATINGS_FAILED:
    
            return {...state,  errmess: action.payload};
        
        default:
            return state;
    }
}