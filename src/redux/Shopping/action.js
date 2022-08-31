import * as actionTypes from "./type";
import { fetchAllProduct } from "../../service/productService";

export const PRODUCT_REQUEST = () => {
  return {
    type: actionTypes.PRODUCT_REQUEST,
  };
};
export const PRODUCT_SUCCESS = (product) => {
  return {
    type: actionTypes.PRODUCT_SUCCESS,
    payload: product,
  };
};
export const PRODUCT_ERROR = () => {
  return {
    type: actionTypes.PRODUCT_ERROR,
  };
};

export const FETCH_DATA_REQUEST = () => {
  return {
    type: actionTypes.FETCH_DATA_REQUEST,
  };
};
export const FETCH_DATA_SUCCESS = (listProducts) => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload: listProducts,
  };
};
export const addToCart = (product, quantity) => {
  return {
    type: actionTypes.ADD_TO_CART,

    payload: {
      ...product,
      quantity: quantity,
    },
  };
};
export const increase = (itemID) => {
  return {
    type: actionTypes.INCREASE,
    payload: {
      id: itemID,
    },
  };
};
export const decrease = (itemID) => {
  return {
    type: actionTypes.DECREASE,
    payload: {
      id: itemID,
    },
  };
};
export const DELETE_FROM_CART = (itemID) => {
  return {
    type: actionTypes.DELETE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};
export const USER_LOGIN = (data) => {
  return {
    type: actionTypes.USER_LOGIN,
    payload: data,
  };
};

export const USER_LOGOUT = () => {
  return {
    type: actionTypes.USER_LOGOUT,
  };
};

export const handleFetchAllProduct = () => {
  return async (dispatch, getState) => {
    // dispatch: thao tác giua redux va react; getstate: lay state hien tai cua redux
    dispatch(FETCH_DATA_REQUEST());

    try {
      const response = await fetchAllProduct();

      dispatch(FETCH_DATA_SUCCESS(response));
    } catch (error) {
      console.error("error", error);
    }
  };
};

export const SAVE_SHIPPING_ADDRESS = (data) => {
  return {
    type: actionTypes.SAVE_SHIPPING_ADDRESS,
    payload: data,
  };
};
