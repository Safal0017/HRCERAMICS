import {CATAGORY1} from './product1Types'
import {CATAGORY2} from './product2Types'

export const initialState = {
    //setting the data
    catagory1 :CATAGORY1,
    catagory2: CATAGORY2
}

export const productReducer = (state= initialState, action)=>{
    switch(action.type){
        case CATAGORY1: return{
            ...state,
            //change
        }
        case CATAGORY2: return{
            ...state,
            //change
        }
        default: return state
    }
}

