import { combineReducers } from "redux";

import { contactReducer, contactProducts } from "../Admin/Redux/Reducer";
import { checkoutReducer } from "../User/reducers/checkoutReducers";

const rootReducer = combineReducers({
  contactReducer,
  contactProducts,
  checkouts: checkoutReducer,
});

export default rootReducer;
