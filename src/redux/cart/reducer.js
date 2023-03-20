import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from "./constants";

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;

        return {
          ...state,
          items: updatedItems,
        };
      } else {
        const newItem = {
          ...action.payload,
          quantity: 1,
        };
        return {
          ...state,
          items: [...state.items, newItem],
        };
      }

    case REMOVE_FROM_CART:
      const newItems = state.items.filter((item) => item.id !== action.payload);
      return {
        ...state,
        items: newItems,
      };

    case UPDATE_QUANTITY:
      const updatedItems = state.items.map((item) => {
        if (item.id === action.payload.productId) {
          return {
            ...item,
            quantity: action.payload.quantity,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        items: updatedItems,
      };

    default:
      return state;
  }
};

export default cartReducer;
