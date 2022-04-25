import { REMOVE_ITEM, SET_QUANTITY } from "../constants/cartConstant"

export const setQuantity = payload => {
    return {
        type: SET_QUANTITY,
        payload
    }
}

export const removeItem = payload => {
    return {
        type: REMOVE_ITEM,
        payload
    }
}