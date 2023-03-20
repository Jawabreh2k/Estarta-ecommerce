import * as PRODUCTS_CONSTANTS from "./constants";

const initState = {
  products: [],
  loading: false,
  error: null,
};

function productsReducer(state = initState, action) {
  switch (action.type) {
    case PRODUCTS_CONSTANTS.PRODUCTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case PRODUCTS_CONSTANTS.PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case PRODUCTS_CONSTANTS.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    default:
      return state;
  }
}

export default productsReducer;
