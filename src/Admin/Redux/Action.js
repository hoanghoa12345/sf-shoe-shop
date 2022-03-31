export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER'
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE';

//User
export const add_user = (addUser) =>{
    return{
        type: ADD_USER,
        payload: addUser
    }
}
export const update_user = (updateUser) =>{
    return{
        type: UPDATE_USER,
        payload: updateUser
    }
}
export const delete_user = (deleteUser) =>{
    return{
        type: DELETE_USER,
        payload: deleteUser
    }
}
//Product
export const add_product = (addProduct) =>{
    return{
        type: ADD_PRODUCT,
        payload: addProduct
    }
}
export const update_product = (updateProduct) =>{
    return{
        type: UPDATE_PRODUCT,
        payload: updateProduct
    }
}
export const delete_product = (deleteProduct) =>{
    return{
        type: UPDATE_PRODUCT,
        payload: deleteProduct
    }
}