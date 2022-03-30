import { ADD_USER,UPDATE_USER,DELETE_USER } from './Action';
import { ADD_PRODUCT,UPDATE_PRODUCT,DELETE_PRODUCT } from './Action';
 
const initialState =[
    {
        name:'a'
    }
]

export const contactReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_USER:
            return[...state,action.payload]
        default:
            return state
    }
}