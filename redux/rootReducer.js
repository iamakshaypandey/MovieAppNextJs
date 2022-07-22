import { combineReducers } from "redux";
import reducer from "./content/contentReducer";
const rootReducer = combineReducers({
    movieData: reducer
})

export default rootReducer