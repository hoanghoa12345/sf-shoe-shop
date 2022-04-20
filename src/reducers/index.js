import { combineReducers } from "redux";

import { contactReducer, contactProducts } from "../Admin/Redux/Reducer";

const rootReducer = combineReducers({
  contactReducer,
  contactProducts,
});

export default rootReducer;
