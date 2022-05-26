import * as actionTypes from "./type";

export const addToCart = (product) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            ...product
        }
    }
}
export const increase = (itemID) => {
    return {
        type: actionTypes.INCREASE,
        payload: {
            id: itemID
        }
    }
}
export const decrease = (itemID) => {
    return {
        type: actionTypes.DECREASE,
        payload: {
            id: itemID
        }
    }
}
export const DELETE_FROM_CART = (itemID) => {
    return {
        type: actionTypes.DELETE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}