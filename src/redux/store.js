import {createStore} from 'redux';
import { productReducer } from './productReducer'


export const store = createStore(productReducer)

