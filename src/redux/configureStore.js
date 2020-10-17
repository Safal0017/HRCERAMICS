// import {createStore} from 'redux';
import { createForms } from 'react-redux-form';
 import { Catagory1 } from './Catagory1'
import {Catagory2} from './Catagory2';
import { ShopDetails } from './shop';
// export const store = createStore(productReducer)
import { InitialFeedback, InitialRating } from './forms';
import { Ratings } from './rating';

import {createStore, combineReducers, applyMiddleware } from 'redux';


import thunk from 'redux-thunk';
import logger from 'redux-logger';
 

export const ConfigureStore = ()=>{
  const store =  createStore(
    // Catagory1,
    combineReducers({
        catagory1 : Catagory1,
        catagory2 : Catagory2,
        shopDetails: ShopDetails,
        ratings: Ratings,
        //initialStateRating: initialStateRating,
        ...createForms({
          feedback: InitialFeedback,
          rating: InitialRating
          })
    }),
    applyMiddleware(thunk, logger)
  )
  return store;
   
  
}
        
