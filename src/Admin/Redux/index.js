import { combineReducers } from "redux";
import { contactReducer,contactProducts,selectProducts } from "./Reducer";

export const rootReducer = combineReducers({contactReducer,contactProducts,selectProducts})