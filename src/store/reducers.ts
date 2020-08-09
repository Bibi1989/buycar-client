import { combineReducers } from "redux";
import CarReducer from "../reducers/carRedcer/reducer";

export default combineReducers({ cars: CarReducer });
