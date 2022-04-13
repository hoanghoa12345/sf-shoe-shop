import { combineReducers } from "redux";
import { contactReducer,contactProducts } from "./Reducer";

export const rootReducer = combineReducers({contactReducer,contactProducts})