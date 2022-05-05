import { ADD_TO_CART, REMOVE_ITEM, SET_QUANTITY } from "../constants/cartConstant"
   
const initState = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []

const reducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const product = state.find(item => item.id === action.payload.id && item.size === action.payload.size)
            
            if(product) {
                return state.map(item => {
                    if(item.id === product.id && item.size === product.size) {
                        item.quantity = parseInt(item.quantity) + 1
                    }
                    return item
                })
            }
            else {
                return [...state, action.payload]
            }
        case SET_QUANTITY:
            return state.map(item => {
                if(item.id === action.payload.id && item.size === action.payload.size) {
                    item.quantity = action.payload.newQuantity
                }
                return item
            })
        case REMOVE_ITEM:
            state.splice(action.payload, 1)
            return state
        default:
            return state
    }
}

export default reducer

//////
// const product = state.cartList.find(item => item.id === action.payload.id && item.size === action.payload.size)
// if(product) {
//     state.cartList.map(item => {
//         if(item.id === product.id && item.size == product.size) {
//             item.quantily = parseInt(item.quantily) + parseInt(action.payload.quantily)
//         }
//         return item
//     })
// }
// else {
//     state.cartList.push(action.payload)
// }

// removeFromCart(state, action) {
//     state.cartList = state.cartList.filter(item => {
//         return (item.id === action.payload.id && item.size !== action.payload.size) || item.id !== action.payload.id
//     })
// }
// changeQuantily(state, action) {
//     state.cartList = state.cartList.map(item => {
//         if(item.id === action.payload.id && item.size === action.payload.size) {
//             item.quantily = action.payload.newQuantily
//         }
//         return item
//     })  
// }