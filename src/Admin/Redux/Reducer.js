import {SET_USER,SELECT_USER, ADD_USER, UPDATE_USER, DELETE_USER } from './Action';
import { SET_PRODUCT, SELECT_PRODUCT, REMOVE_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './Action';


const initialStateUser = {
    users: []
}

export const selectUser = (state = {}, { type, payload }) => {
    switch (type) {
        case SELECT_USER:
            return {...state, ...payload}
        default:
            return state;
    }
}


export const contactReducer = (state = initialStateUser, action) => {
    switch (action.type) {
        case SET_USER:
            return{ ...state, users: action.payload}
        case ADD_USER:
            const users = state.users.concat(action.payload)
            return {...state, users};
        case UPDATE_USER:
            return state.map((contact) => contact.id === action.payload.id ? action.payload : contact)
        case DELETE_USER:
             const deleteuser =state.filter((contact) => contact.id !== action.payload && contact)
            return {deleteuser}
        default:
            return state
    }


}
const initialStateProduct = {
    products: []
}
export const contactProducts = (state = initialStateProduct, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return { ...state, products: action.payload }
        case ADD_PRODUCT:
            const products = state.products.concat(action.payload);
            return { ...state, products }
        case UPDATE_PRODUCT:
            return state.map((contact) => contact.id === action.payload.id ? action.payload : contact);
        case DELETE_PRODUCT:
            const deleteProducts = state.filter((contact) => contact.id !== action.payload && contact)
            return { deleteProducts }
        default:
            return state;
    }
}
export const selectProducts = (state = {}, { type, payload }) => {
    switch (type) {
        case SELECT_PRODUCT:
            return { ...state, ...payload };
        case REMOVE_PRODUCT:
            return {}
        default:
            return state
    }
}