import { combineReducers } from "redux";

import {
    contactReducer,
    contactProducts,
    authReducer
} from '../Admin/Redux/Reducer'
import { checkoutReducer } from "../User/reducers/checkoutReducers";
import cartReducer  from "../User/redux/reducers/cartReducer";

const rootReducer = combineReducers({
  contactReducer,
  contactProducts,
  checkouts: checkoutReducer,
  cart: cartReducer,
  authReducer
});

export default rootReducer;
