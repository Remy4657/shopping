import * as actionTypes from "./type";

const INITIAL_STATE = {
  inforUser: localStorage.getItem("inforUser")
    ? JSON.parse(localStorage.getItem("inforUser"))
    : null,
  listProducts: [],
  product: "",
  shippingAddress: localStorage.getItem("shippingAddress")
    ? JSON.parse(localStorage.getItem("shippingAddress"))
    : {},
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  isLoading: false,
  isError: false,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_REQUEST:
      return {
        ...state,
      };
    case actionTypes.PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
      };
    case actionTypes.PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.FETCH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        listProducts: action.payload,
        isLoading: false,
        isError: false,
      };
    case actionTypes.ADD_TO_CART:
      // const exist = state.cart.find((x) => x.id === action.payload.id);

      // return {
      //   ...state,
      //   cart: exist
      //     ? state.cart.map((item) => (item.id === exist.id ? newItem : item))
      //     : [...state.cart, newItem],
      // };

      const newItem = action.payload;
      const existItem = state.cart.find((item) => item.id === newItem.id);
      const cartItems = existItem
        ? state.cart.map((item) => (item.id === existItem.id ? newItem : item))
        : [...state.cart, newItem];
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: cartItems };

    case actionTypes.INCREASE:
      //const productRemove = state.cart.find((x) => x.id === action.payload.id)
      return {
        ...state,
        cart: state.cart.map((x) =>
          x.id === action.payload.id ? { ...x, quantity: x.quantity + 1 } : x
        ),
      };
    case actionTypes.DECREASE:
      const productRemove = state.cart.find((x) => x.id === action.payload.id);
      return {
        ...state,
        cart:
          productRemove.quantity > 1
            ? state.cart.map((x) =>
                x.id === action.payload.id
                  ? { ...x, quantity: x.quantity - 1 }
                  : x
              )
            : state.cart.filter((x) => x.id !== productRemove.id),
      };
    case actionTypes.DELETE_FROM_CART:
      localStorage.removeItem("cartItems");
      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== action.payload.id),
      };

    case actionTypes.USER_LOGIN:
      return {
        ...state,
        inforUser: action.payload,
      };

    case actionTypes.USER_LOGOUT:
      return {
        ...state,
        inforUser: null,
        shippingAddress: {},
        cart: [],
      };

    case actionTypes.SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
