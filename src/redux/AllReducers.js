import { combineReducers } from "redux";
import productsReducer from "./prodcuts/reducer";
import authReducer from "./auth/reducer";
import cartReducer from "./cart/reducer";

const AllReducers = combineReducers({
  productsReducer,
  authReducer,
  cartReducer,
});

export default AllReducers;
