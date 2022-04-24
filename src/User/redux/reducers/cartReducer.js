import { REMOVE_ITEM, SET_QUANTITY } from "../constants/cartConstant"

const initState = [
    {
        id: 1,
        name: "639 Denim – Deep Blue SS2022",
        urlImage:
          "https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price: 500000,
        quantity: 1,
        size: 32,
    },
    {
        id: 2,
        name: "639 Denim – Smoked Grey SS2022",
        urlImage:
          "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price: 550000,
        quantity: 3,
        size: 30,
    },
    {
        id: 3,
        name: "639 Essential Denim – Dust Blue",
        urlImage:
          "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        price: 530000,
        quantity: 2,
        size: 28,
    },
]
    

const reducer = (state = initState, action) => {
    switch(action.type) {
        case SET_QUANTITY:
            let newCartList = [...state]
            newCartList = newCartList.map(item => {
                if(item.id === action.payload.id) {
                    item.quantity = action.payload.quantity
                }
                return item
            })

            return newCartList
        case REMOVE_ITEM:
            let newCart = [...state]
            newCart = newCart.filter(item => item.id !== action.payload)

            return newCart
        default:
            return state
    }
}

export default reducer