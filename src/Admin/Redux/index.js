import { combineReducers } from "redux";
import { contactReducer } from "./Reducer";

export const rootReducer = combineReducers({contactReducer},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())