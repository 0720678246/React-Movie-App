import {combineReducers} from "redux";
import SearchReducer from './SearchReducer'

export default combineReducers({
    movies:SearchReducer
})